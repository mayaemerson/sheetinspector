
const mensAuditor = (mens) => {
    var ui = SpreadsheetApp.getUi()
     message = "A URL \n(" + mens + ") \nNão é válida ou você não tem permissão para acessar o Google Sheets.\nPor favor, verifique a URL ou suas permissões."
    ui.alert(`Erro, URL inválida`, message, ui.ButtonSet.OK)
  }
  const mensCreateTable = (mens) => {
    var ui = SpreadsheetApp.getUi()
    message = "\n" + mens + "\n.";
    ui.alert(`Criação de aba,  aba memory criada com sucesso`, message, ui.ButtonSet.OK);
  }
  const progressMens = (mens) => {
    message = `Pesquisando"${mens}\n`
    SpreadsheetApp.getActiveSpreadsheet().toast(message, "🔥 Loading...")
  }

  const input = (mens) => {

    const ui = SpreadsheetApp.getUi()
   

  while (userInput === '') {
    const result = ui.prompt(mens);
    userInput = result.getResponseText()
  }

  return userInput

  }

  

  
  