const inputt =document.getElementById('display');
var operation;

function afficher(n){
   inputt.innerHTML+=n;
   if(n=='+' || n=='-' ||n=='*' || n=='/' ){
    operation=n;
   }
  
}

function delet(){
    inputt.innerHTML='';
}
function calcule()
{
    switch(operation)
    {
        case '-':
            var table = inputt.innerText.split('-');
            var diff =table[0];
            for(let i =1 ; i <table.length;i++){
                diff -= Number(table[i]) ;
            }
            inputt.innerHTML= diff;
        break;
    }
    }
