function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML=`Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'images/manhã.png'
        document.body.style.background = '#ffe4d9'
    } else if (hora >= 12 && hora< 18){
        img.src = 'images/tarde.png'
        document.body.style.background = '#d9f5ff'
    } else{
        img.src = 'images/noite.png'
        document.body.style.background = ' #8d7bab'
    }
    }
