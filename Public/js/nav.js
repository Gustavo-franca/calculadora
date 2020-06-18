document.querySelector('.nav-icon').addEventListener('click',handleClickNavIcon);


function  handleClickNavIcon(event){
    navAsside = document.querySelector('.nav-toggle')

    if(navAsside.style.display == 'none'){
        navAsside.style.display = 'flex';
    }else{
        navAsside.style.display = 'none';
    }
}