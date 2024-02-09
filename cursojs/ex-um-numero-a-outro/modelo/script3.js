 
function conta(){
    var inicio = window.document.getElementById("Inicio")
    var fim = window.document.getElementById("Fim")
    var passo = window.document.getElementById("Passo")
    var divres = window.document.getElementById("resp")
    var resp = window.document.getElementById("textresp")
  
    if(inicio.value.length == 0  || fim.value.length == 0 )
    {
        resp.innerHTML = `este numero pode não`
    }else{  
        divres.innerHTML = 'contando: '
            var passo1 = Number(passo.value)
            var fim1 = Number(fim.value)
            var inicio1 = Number(inicio.value)
            if(passo1 <= 0)
            {
                window.alert('irei considerar o passo = 1 pois voce não colocou nd')
                passo1 = 1
            }
        if(inicio1 < fim1)

        {
            for(let i = inicio1; i<=fim1; i += passo1  )
            {
                
                divres.innerHTML += ` ${i} \u{1F449}`
                
            }
        }
            else {
                for(let i = inicio1; i>=fim1; i -= passo1  )
            {
                
                divres.innerHTML += ` ${i} \u{1F449}`
                
            }
            }
       
        divres.innerHTML += ` \u{1F3C1}`
    }
    
}