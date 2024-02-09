function carregar() {
    var agr = new Date()
    var hora = agr.getHours()
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("img")
    msg.innerHTML = `agora são ${hora} horas`
    if (hora >=0 && hora <= 12)
    {
        img.src = 'img/manhã.jpg'
        document.body.style.background = 'rgb(182, 224, 96)'
    }else if(hora>= 12  && hora <=18)
    {
        img.src = 'img/tarde.jpg'
        document.body.style.background = 'rgb(135, 96, 38)'
    }else{
        img.src = 'img/noite.jpg'
        document.body.style.background = 'rgb(14, 26, 46)'
    }
      
}