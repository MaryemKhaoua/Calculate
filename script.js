const inputt =document.getElementById('display');
var operation;
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
