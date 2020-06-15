define(['../lib/format'],(Format) =>{

    var fieldValue = document.querySelector('.display input[name=numberValue]');
    var fieldDisplay = document.querySelector('.display input[type=text]');

    function show(value){
        fieldDisplay.value = Format.number(value);
    }
    
       return {
            insert : (i) =>{
                if(fieldValue.value.length < 13){
                    fieldValue.value += i;
                }
                show(fieldValue.value);     
            },
            remove : () =>{
                var str = String(fieldValue.value);
                fieldValue.value = str.substring(0, str.length - 1);
                show(fieldValue.value);
            }
    }

});