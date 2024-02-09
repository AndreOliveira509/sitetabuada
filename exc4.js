function tabuada() {
    var num = document.getElementById('tab')
    var tab = document.getElementById('seltab')
    
    if (num.value.length == 0){
        alert('Insira um numero!')
    } else{
        var b = Number(num.value)
        var c = 0
        tab.innerHTML = ''
    for(var a = 1; a <= 10; a++){
        c = a * b
        var item = document.createElement('option')
        item.text = `${b} x ${a} = ${c}`
        tab.appendChild(item)   
    }
    }
}