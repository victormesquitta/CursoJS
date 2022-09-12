function tabuada(){
    let numero = document.getElementById("num").value
    let tab = document.getElementById("seltab")
    if (numero.length == 0){
        alert("Por favor digite um número!!!")
    }
    else {
        let n = Number(numero)
        tab.innerHTML = ''
        for (let c = 0; c < 10; c ++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            tab.appendChild(item)
        }
    }
    
}