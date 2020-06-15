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
requirejs(['controllers/Options','js/nav'],
function   (executeSelectedOption) {
    /*Escutando o clicknos botões da calculadora*/
    var fieldsCalculator = document.querySelectorAll('.calculator .grid .field');
    for(const fieldCalculator of fieldsCalculator ){
        fieldCalculator.onclick = (event) =>{   
            const SelectedOption = event.target.textContent;
            handleChosenOption(SelectedOption);
        }
    }

    function handleChosenOption(SelectedOption){
        if(executeSelectedOption[SelectedOption])executeOption[SelectedOption].index();
        return;
    }  
    
});










