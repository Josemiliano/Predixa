function doPost(e) {
  try {
    var params = (e && e.parameter) || {};

    // Campo invisible: los bots suelen llenarlo. Fingimos éxito para no ayudarlos.
    if (params.company) return response_({ ok: true });

    var email = String(params.email || '').trim().toLowerCase();
    if (!isEmail_(email)) {
      return response_({ ok: false, message: 'Escribe un correo válido.' });
    }

    saveSubscriber_(email);

    return response_({ ok: true });
  } catch (error) {
    console.error(error);
    return response_({
      ok: false,
      message: 'No pudimos registrarte. Intenta de nuevo.'
    });
  }
}

function saveSubscriber_(email) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    var properties = PropertiesService.getScriptProperties();
    var spreadsheetId = properties.getProperty('WAITLIST_SPREADSHEET_ID');
    var spreadsheet;

    if (spreadsheetId) {
      spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    } else {
      spreadsheet = SpreadsheetApp.create('Predixa - Lista de espera');
      properties.setProperty('WAITLIST_SPREADSHEET_ID', spreadsheet.getId());
      spreadsheet.getSheets()[0].appendRow(['Fecha', 'Correo']);
    }

    var sheet = spreadsheet.getSheets()[0];
    var lastRow = sheet.getLastRow();
    var alreadyExists = lastRow > 1 && sheet
      .getRange(2, 2, lastRow - 1, 1)
      .createTextFinder(email)
      .matchEntireCell(true)
      .findNext();

    if (!alreadyExists) sheet.appendRow([new Date(), email]);
  } finally {
    lock.releaseLock();
  }
}

function isEmail_(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function response_(result) {
  var payload = JSON.stringify({
    type: 'predixa-waitlist',
    ok: Boolean(result.ok),
    message: result.message || ''
  }).replace(/</g, '\\u003c');

  return HtmlService.createHtmlOutput(
    '<!doctype html><meta charset="utf-8"><script>' +
    'window.top.postMessage(' + payload + ', "*");' +
    '</script>'
  );
}
