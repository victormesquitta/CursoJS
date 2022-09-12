function contar(){
    let inicio = document.getElementById("inicio").value
    let fim = document.getElementById("fim").value
    let passo = document.getElementById("passo").value
    let res = document.getElementById("res")
    
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0){
        res.innerHTML = '<br>Impossível contar !!!</br>'
    }
    else{
        res.innerHTML = '<br>Contagem</br>'
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        // Contagem Crescente
        if (inicio < fim){
            for (let c = i; c <= f; c += p){
                res.innerHTML += c + " 👉 "
            }
        }
        // Contagem Decrescente
        else {
            for (let c = i; c >= f; c -= p){
                res.innerHTML += c + " 👉 "
            }
        }
        res.innerHTML += "🏁"
    }
    
    
}