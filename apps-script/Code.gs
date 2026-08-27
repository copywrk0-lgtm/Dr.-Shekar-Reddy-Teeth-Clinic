/**
 * Appointment lead receiver for Dr. Shekar Reddy Teeth Clinic.
 * Deploy as Web app: Execute as Me, access Anyone.
 * Set SHEET_ID and optional NOTIFY_EMAIL in Config.gs.
 */
function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents || '{}');
    var sheet = getLeadSheet_();
    sheet.appendRow([
      new Date(), body.name || '', body.phone || '', body.reason || '',
      body.date || '', body.time || '', body.note || '', body.source || 'website',
      body.page || '/', 'New'
    ]);
    notify_(body);
    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json_({ ok: true, service: 'dental-clinic-lead-capture' });
}

function getLeadSheet_() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp','Name','Phone','Reason','Preferred date','Preferred time','Note','Source','Page','Status']);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function notify_(lead) {
  if (!NOTIFY_EMAIL) return;
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: 'New dental appointment enquiry — ' + (lead.name || 'Website lead'),
    body: 'Name: ' + (lead.name || '') + '\nPhone: ' + (lead.phone || '') + '\nReason: ' + (lead.reason || '') + '\nPreferred date: ' + (lead.date || '') + '\nPreferred time: ' + (lead.time || '') + '\nNote: ' + (lead.note || '')
  });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
