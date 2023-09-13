var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json') 
.then(resposta => resposta.json()) //metodo then quando a promise foi resolvida - acessa o valor retornado do fetch
.then(r => {
    if (r.erro) {
        throw Error('Esse CEP não existe!')
    } else {
        console.log(r)
    }  
    
    })
.catch(erro => console.log(erro)) //metodo catch quando a promise foi rejeitada
.finally(mensagem => console.log('Processamento concluído!')); //metodo finally é exibido independente se foi resolvido ou rejeitado

//quando tem varios metodos then é chamado de callback hell-não é bom

console.log(consultaCEP);

