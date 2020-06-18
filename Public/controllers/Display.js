define(['../lib/format'],(Format) =>{

    var fieldValue = document.querySelector('.display input[name=numberValue]');
    var fieldDisplay = document.querySelector('.display input[type=text]');



    function decimalcount(value){
        const number = Number(value);
        let [truncatedNumber,numberAfterComma] = number.toString().split('.')
        
        return numberAfterComma?numberAfterComma.length:0;
    }
    function show(value){
        console.log(value)
        
        fieldDisplay.value = Format.number(Number(value),decimalcount(value));
    }
    function showComma(comma){
        fieldDisplay.value = Format.number(Number(fieldValue.value)) + comma;
    }
 
    function hasCommon(string){
        let lastCharacter = string[string.length - 1]
        console.log(lastCharacter);
        if(lastCharacter != null & lastCharacter === ','){
            return true;
        }
        return false;
    }
    
       return {
            insertNumber : (i) =>{
                let value = fieldValue.value;
                 if(value.length < 13){
                    if(hasCommon(fieldDisplay.value)){
                        value = value +'.'+ i;
                    }else{
                        value += i;
                    }
                 } 
                fieldValue.value = Number(value);
                show(value);     
            },
            remove : () =>{
                var str = String(fieldValue.value);
                if(!hasCommon(fieldDisplay.value)){//verificar se ratá na ultima posição
                   str = str.substring(0, str.length - 1);
                }
                fieldDisplay.value = String(fieldDisplay.value).substring(0, fieldDisplay.value.length - 1);
                fieldValue.value = Number(str);
                if(hasCommon(fieldDisplay.value)){
                    show(fieldValue.value);
                    showComma(',');
                }else{
                    show(fieldValue.value);
                }
             
            },
            insertComma : (comma = ',') =>{
                showComma(comma);
            },
    }

});