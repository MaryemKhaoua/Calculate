const inputt =document.getElementById('display');
var operation;

function afficher(n){
   inputt.innerHTML+=n;
   if(n=='+' || n=='-' || n=='' || n=='/' ){
    operation=n;
   }

}

function delet(){
    inputt.innerHTML='';
}

function calcule(){
    switch(operation){
        case '+':
            var table = inputt.innerText.split('+');
            var sum =0;
            for(let i =0 ; i <table.length;i++){
                sum += Number(table[i]);
            }
            inputt.innerHTML= sum;
            break;
        }
    }