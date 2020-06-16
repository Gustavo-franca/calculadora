
define(['./Display','../lib/keymap'],(display,keymap) =>{
      console.log(keymap);
       
    
        return (  () =>{
            var options = {}
            /*numeros de 0 a 9 */
            for(let i = 0 ; i < 10; i++){
               options[i] = {
                    index: ()=>{ 
                        display.insert(i);
                    }
                }
            }
            /* backspace */ 
                options[`${keymap['Backspace']}`] = {
                    index: ()=>{
                        display.remove();
                    }
                }

                return options;
            })();
    });


