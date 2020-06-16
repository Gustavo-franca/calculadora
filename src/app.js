requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'src',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});

// Start the main app logic.
requirejs(['controllers/Options','lib/keymap','js/nav'],
function   (executeSelectedOption,keymap) {
    /*Escutando o clicknos botões da calculadora*/
    var fieldsCalculator = document.querySelectorAll('.calculator .grid .field');


    for(const fieldCalculator of fieldsCalculator ){
        fieldCalculator.onclick = (event) =>{   
            const SelectedOption = event.target.textContent;
            handleChosenOption(SelectedOption);
        }
    }
    /*escutando os teclas do teclado */
    document.body.onkeydown = handlekeydown;
    /*tratando as teclas do teclado*/
    function handlekeydown(event){
        event = event || window.event;
        var key = event.key;
        if (event.key != null && event.key === 'Unidentified') {
        handleChosenOption(key);
        }
    }
    /*chamada de função principal*/
    function handleChosenOption(SelectedOption){
        if(executeSelectedOption[`${keymap[SelectedOption]}`] != null)executeSelectedOption[`${keymap[SelectedOption]}`] .index();
        return;
    }  

});










