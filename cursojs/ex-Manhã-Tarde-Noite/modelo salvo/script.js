var agr = newdate()
var hora = agr.gethours()
var fundo = window.document.getElementById("fundo")
hora = 6
if (hora>=6)
{
    fundo.style.background = "black"
    area.innerText = `Esta de manhã e são ${hora} horas`
}else if(hora>=13){
    fundo.style.background = "black"
}else{
    fundo.style.background = "black"
}
