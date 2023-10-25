//seleção de elementos
const display=document.querySelector("#displayInput");
const botaoIgual=document.querySelector(".igual");
const botaoPonto=document.querySelector(".ponto");
const botoesNumeros=document.querySelectorAll(".num");
const botoesOperadores=document.querySelectorAll(".operador");

//variáveis globais (estados na calculadora)
let operacaoAtual="";
let operador=null;
let valorAnterior="";
let calculando=false;

//Funções
function atualizaDisplay(){
    display.value=operacaoAtual;
}
function insereNumero(evento){
    if(calculando){
        operacaoAtual=evento.target.textContent;
        calculando=false;
    }else{
        operacaoAtual+=evento.target.textContent;
    }
    atualizaDisplay();
}
const inserePonto = ()=>{
    if(operacaoAtual.indexOf(".")===-1){
        operacaoAtual+=".";
        atualizaDisplay();
    }
}
const insereOperador=(evento)=>{
    if(operacaoAtual!==""){
        if(calculando){
            if(operador!==null){
                calcula()
            }
            valorAnterior=operacaoAtual;
            operacaoAtual="";
        }
        operador=evento.target.textContent;
    }
}
function calcula(){
    console.log(valorAnterior,operacaoAtual,operador);
}
//eventos
botaoPonto.addEventListener("click",inserePonto);
botoesNumeros.forEach((botao)=>botao.addEventListener("click",insereNumero));
botoesOperadores.forEach((botao)=>
botao.addEventListener("click",insereOperador)
);
botaoIgual.addEventListener("click",calcula);