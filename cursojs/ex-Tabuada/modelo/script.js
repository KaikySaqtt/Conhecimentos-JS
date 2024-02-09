function tabuada()
{
    let bot = window.document.getElementById("botao")
    let inpu = window.document.getElementById("vel")
    let divres = window.document.getElementById("resp")
    let sel = window.document.getElementById("sel")

    if(inpu.value.length == 0){
        window.alert("numero seu é invalidido")
    }else{
        var n = Number(inpu.value) 
        sel.innerHTML = ''
        for (let i = 1;i <=10 ; i++)
        {   
            
            let item = document.createElement('option')   
            item.text = `${i} X ${n} = ${n*i}`
            sel.appendChild(item)

        }
    }
}