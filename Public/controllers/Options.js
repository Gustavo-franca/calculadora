
define(['./Display','../lib/keymap'],(display,keymap) =>{
       console.log(display);
        return (  () =>{
            var options = {}
            /*numeros de 0 a 9 */
            for(let i = 0 ; i < 10; i++){
               options[i] = {
                    index: ()=>{ 
                        display.insertNumber(i);
                    }
                }
            }
            /* backspace */ 
                options[`${keymap['Backspace']}`] = {
                    index: ()=>{
                        display.remove();
                    }
                }
            /*numeros decimais*/
                options[keymap[',']] = {
                    index: () =>{
                        display.insertComma(',');
                    }
                }

                return options;
            })();
    });


