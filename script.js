const para = document.querySelector('p');
const button = document.querySelector('button');
let hidden = true;

function isHidden(){
    if(hidden==true){
        para.textContent="";
        button.textContent="Afficher le message";
    }else{
        para.textContent="Dark Vador est le père de Luke Skywalker";
        button.textContent="Cacher";
    }
}

button.addEventListener('click', e=>{
    if(hidden==true){
        hidden=false;
        isHidden();   
    }else{
        hidden=true;
        isHidden();
    }
})