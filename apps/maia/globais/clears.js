const clearData = (sh) => {
    const lastRow = sh.getLastRow();
    const dataRange = sh.getDataRange();
    const dataValues = dataRange.getValues();
  
    const columnsWithData = dataValues[0].filter(cell => cell !== "").length;
  
    sh.getRange("A7:G7").clearContent();

    const rangeToClear = sh.getRange(11, 1, lastRow - 10, lastColl(sheet));
    rangeToClear.clearContent();
    sheet.getRange("A11").setValue("-")

  }
  
 const clearD = () => {
    clearData(sheet)
 }




