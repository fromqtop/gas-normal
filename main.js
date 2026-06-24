function myFunction() {
  const SSID = PropertiesService.getScriptProperties().getProperty('SSID');
  const ss = SpreadsheetApp.openById(SSID);
  const sheet = ss.getSheetByName('data');
  const value = sheet.getRange('A1').getValue();
  console.log(value);
}
