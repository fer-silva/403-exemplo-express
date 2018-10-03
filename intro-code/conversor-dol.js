let dinheiro = process.argv[2];
let taxaConversao = 0.25;

if(!dinheiro){
    console.log('Informe um valor para a conversão')
} else{
    dinheiro = dinheiro.replace(',','.');

    let resultado = dinheiro*taxaConversao;
    
    if(isNaN(resultado)){
        console.log(`Informe um valor numérico para a conversão`);
    }else{
        console.log(`O resultado convertido é US$${resultado}.`);
    }
}