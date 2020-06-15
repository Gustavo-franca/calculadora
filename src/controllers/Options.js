
define(['./Display'],(display) =>{
    console.log(display);
      
       
    
        return (  () =>{
            var options = {}
            /*numeros de 0 a 9 */
            for(let i = 0 ; i < 10; i++){
                console.log(i)
               options[i] = {
                    index: ()=>{ 
                        display.insert(i);
                    }
                }
            }
            /* backspace */ 
                options["<<"] = {
                    index: ()=>{
                        display.remove();
                    }
                }

                return options;
            })();
    });


