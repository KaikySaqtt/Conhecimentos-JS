var agora = new Date() 
var hora = agora.getHours()
 console.log('são exatamente ' + hora + ' Horas')
if (hora >= 6 && hora <= 12){
    console.log('está de manhã')
}else if (hora <=18){
    console.log('está a tarde')
}else{
    console.log('está a noite')
}