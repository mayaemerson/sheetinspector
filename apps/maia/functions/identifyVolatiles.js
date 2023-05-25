function identifyVolatiles(sheet) {
   
    const r = sheet.getLastRow()
    const c = sheet.getLastColumn()
    const data_counter = r * c
  
    let nowCounter = 0
    let todayCounter = 0
    let randCounter = 0
    let randbetweenCounter = 0
    let randarrayCounter = 0
    let offSetCounter = 0
    let indirectCounter = 0
    let sumifCounter = 0
    let cellCounter = 0
    let arrayformCounter = 0
    let lambdaCounterCounter = 0
    let blankCounterCounter = 0
    let imprange = 0
    let imprhtml = 0
    let imprxml = 0
    let impordata = 0
    let imporfeed = 0
    let emptyCellCounter = 0;

    const reNow = /.*NOW.*/
    const reToday = /.*TODAY.*/
    const reRand = /.*RAND.*/
    const reRandbetween = /.*RANDBETWEEN.*/
    const randarray  = /.*RANDARRAY.*/
    const offset  = /.*OFFSET.*/
    const indirect = /.*INDIRECT.*/
    const sumif = /.*SUMIF.*/
    const ceLl = /.*CELL.*/
    const arrayform = /.*ARRAYFORM.*/
    const lambda = /.*LAMBDA.*/
    const blank = /.*BLANK.*/
    const importrange = /.*IMPORTRANGE.*/
    const importhtml = /.*IMPORTHTML.*/
    const importxml = /.*IMPORTXML.*/
    const importdata = /.*IMPORTDATA.*/
    const importfeed = /.*IMPORTFEED.*/
    

   
    if (data_counter !== 0) {
        loadBarr(35)
        formatText("A2").formPorcentagem
      const dataRange = sheet.getRange(1, 1, r, c)
      const formulaCells = dataRange.getFormulas()

      formulaCells.forEach(function (row) {
        if (row.join("") === "") {
        
          blankCounterCounter++;
         
        } else {
         
          row.forEach(function (cell) {
            if (cell.toUpperCase().match(reNow)) {
              nowCounter++;
            }
            if (cell.toUpperCase().match(reToday)) {
              todayCounter++;
            }
            if (cell.toUpperCase().match(reRand) && !cell.toUpperCase().match(reRandbetween)) {
              randCounter++;
            }
            if (cell.toUpperCase().match(reRandbetween)) {
              randbetweenCounter++;
            }
            if (cell.toUpperCase().match(randarray)) {
              randarrayCounter++;
            }
            if (cell.toUpperCase().match(offset)) {
              offSetCounter++;
            }
            if (cell.toUpperCase().match(indirect)) {
              indirectCounter++;
            }
            if (cell.toUpperCase().match(sumif)) {
              sumifCounter++;
            }
            if (cell.toUpperCase().match(ceLl)) {
              cellCounter++;
            }
            if (cell.toUpperCase().match(arrayform)) {
              arrayformCounter++;
            }
            if (cell.toUpperCase().match(lambda)) {
              lambdaCounterCounter++;
           
            }
            if (cell.toUpperCase().match(blank)) {

              blankCounterCounter++;
            
            }
            if (cell.toUpperCase().match(importrange)) {
                imprange++;
               
              }
              if (cell.toUpperCase().match(importhtml)) {
                imprhtml++;
               
              }
              if (cell.toUpperCase().match(importxml)) {
                imprxml++;
               
              }
              if (cell.toUpperCase().match(importdata)) {
                impordata++;
               
              }
              if (cell.toUpperCase().match(importfeed)) {
                imporfeed++;
               
              }
  
          });
        }
      });
    }
  
    return [

        emptyCellCounter,
        blankCounterCounter,
        nowCounter, 
        todayCounter, 
        randCounter, 
        randbetweenCounter,
        randarrayCounter,
        offSetCounter,
        indirectCounter,
        sumifCounter,
        cellCounter, 
        arrayformCounter,
        lambdaCounterCounter,
        imprange,
        imprhtml,
        imprxml,
        impordata,
        imporfeed,
    ]
  }
