var fieldsCalculator = document.querySelectorAll('.calculator .grid .field');
var fieldDisplay = document.querySelector('.display input[type=text]');
var fieldDisplayValue = document.querySelector('.display input[name=numberValue]');

for(const fieldCalculator of fieldsCalculator ){
    fieldCalculator.onclick = handleClick;
}
function handleClick(event){
    handleChosenOption(event.target.textContent);
}

function handleChosenOption(option){
    if(executeOption[option])executeOption[option].index();
}  

var executeOption = (() =>{
    var options = {}
    /*numeros de 0 a 9 */
    for(let i = 0 ; i < 10; i++){
       options[i] = {
            index: ()=>{
                insertValue(i);
            }
        }
    }
    /* backspace */ 
        options["<<"] = {
            index: ()=>{
                removeLastNumber();
            }
        }

   

    return options;
})();

function handleDisplayvalue(fieldDisplayValue){
    console.log(fieldDisplayValue.value);
    fieldDisplay.value = formatMoney( fieldDisplayValue.value)
}

function  insertValue(i){
   if(fieldDisplayValue.value.length < 13){
        fieldDisplayValue.value += i;
       handleDisplayvalue(fieldDisplayValue);
        
    }
}
function removeLastNumber(){
    var str = String(fieldDisplayValue.value);

    fieldDisplayValue.value = str.substring(0, str.length - 1);;
    console.log(fieldDisplayValue.value);
    handleDisplayvalue(fieldDisplayValue);

}   





function formatMoney(amount, decimalCount = 0, decimal = ",", thousands = ".") {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
  
      const negativeSign = amount < 0 ? "-" : "";
  
      let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
      let j = (i.length > 3) ? i.length % 3 : 0;
  
      return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
      console.log(e)
    }
  };


