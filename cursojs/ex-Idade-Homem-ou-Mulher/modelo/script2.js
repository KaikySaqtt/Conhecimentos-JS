
function idade(){
    var data = new Date()
    var anoa = data.getFullYear()        
    var ano = window.document.getElementById('data')
    var res = document.getElementById('res')
    var texto = document.getElementById("texto")


    if (ano.value.length == 0 || Number(ano.value) > anoa) 
    {
        window.alert("[ERRO] Verifique dnv esses dados ")
    }else{
        var idade= anoa - Number(ano.value)
        var genero = ""
        var fsex = document.getElementsByName("radsex")
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[1].checked)
        {
            genero = 'mulher'
   
                     if(idade >=0 &&  idade <= 13) {
                        texto.innerHTML = `Você é uma ${genero} de ${idade} anos e é criança` 
                        img.setAttribute('src', 'mcriança.jpg')
                            }else if (idade >= 14 && idade <=25) {
                                texto.innerHTML = `Você é uma ${genero} de ${idade} anos  e é jovem` 
                                img.setAttribute('src', 'mjovem.png')
                                }else if (idade >=26 && idade <=50) {
                                    texto.innerHTML = `Você é uma ${genero} de ${idade} anos  e é um adulto` 
                                    img.setAttribute('src', 'madulto.jpg')
                                    }else  {
                                        texto.innerHTML = `A senhora é uma ${genero} de ${idade} anos  e é idosa` 
                                        img.setAttribute('src', 'midosa.jpg')
                                    }
            
        }
        else if(fsex[0].checked)
        {
            genero = 'Homem'
            if (idade >=0 && idade <= 13) {
                texto.innerHTML = `Você é um ${genero} de ${idade} anos e é criança`
                img.setAttribute('src', 'hcriança.jpg') 
                }else if (idade >=14 && idade <=25) {
                    texto.innerHTML = `Você é um ${genero} de ${anoa - ano.value} anos  e é jovem` 
                    img.setAttribute('src', 'hjovem.jpg')
                    }else if (idade >=25 && idade <=50) {
                        texto.innerHTML = `Você é um ${genero} de ${anoa - ano.value} anos  e é um adulto` 
                        img.setAttribute('src', 'hadulto.jpg')
                        }else{
                            texto.innerHTML = ` o senhor é um ${genero} de ${idade} anos  e é idoso` 
                            img.setAttribute('src', 'hidoso.jpg')
                        }
        }
       
                res.appendChild(img)
                res.style.textAlign = 'center'

        }
 
}



