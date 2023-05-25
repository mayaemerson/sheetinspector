function menu() {

    const ui = SpreadsheetApp.getUi()
   
    ui.createMenu('Sheet Size Auditor')
      .addItem('Audit Sheet', 'sheetAuditor')
      .addItem('Clear Data', 'clearD')
      .addToUi();
  }
  