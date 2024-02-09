

let inpu = window.document.getElementById('inpu')
let bottom = window.document.getElementById('butao')
let sel = window.document.getElementById('sel')
let guardar  = []
let divres = window.document.getElementById('res')

function énum(n)
{
    if(Number(n) >= 1 && Number(n) <= 100)
    {
        return true
    }else{
        return false
    }
}

function nalista(n, l)
{
    if(l.indexOf(Number(n)) != -1)
    {
        return true
    }
    else{
        return false
    }
}


function umcem(){

    if(  énum(inpu.value) && !nalista(inpu.value, guardar))
    {
        guardar.push(Number(inpu.value))
        let input = Number(inpu.value)
        let item = document.createElement('option')
        item.text = `${input}`
        sel.appendChild(item)
    }else{         
        window.alert("numero invalido")
   
    }
   
}
function fim()
{
   
    let maior = guardar[0]
    let menor = guardar[0]
    let soma = 0
    let média = 0
    for(let pos in guardar)
    {
        soma += guardar[pos]
        média = soma/guardar.length
        if(guardar[pos] > maior)
        {
            maior = guardar[pos]
        }if(guardar[pos] < menor)
        {
            menor = guardar[pos]
        }
    }
    divres.innerHTML = ''
    divres.innerHTML += `<p>foram adicionado ${guardar.length}</p>`
    divres.innerHTML += `<p>Menor valor é ${menor}</p>`
    divres.innerHTML += `<p>Maior valor é ${maior}</p>`
    divres.innerHTML += `<p>A soma de todos é ${soma}</p>`
    divres.innerHTML += `<p>A sua média é ${média}</p>`

}


