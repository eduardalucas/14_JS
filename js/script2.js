function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0||fano.value > ano){
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else if(fano.value <0){
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade<0){
                window.alert ('[ERRO] Verifique os dados e tente novamente!')
            } if (idade>= 0 && idade <= 10){
                img.setAttribute ('src', 'images/lboy.png')
            } else if ( idade< 20){
                img.setAttribute ('src', 'images/boy.png')
            } else if(idade<50){
                img.setAttribute ('src', 'images/man.png')
            } else {
                img.setAttribute ('src', 'images/grampa.png')
            }
        }  

        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade>= 0 && idade <= 10){
                img.setAttribute ('src', 'images/lgirl.png')
            } else if ( idade< 20){
                img.setAttribute ('src', 'images/girl.png')
            } else if(idade<50){
                img.setAttribute ('src', 'images/woman.png')
            } else {
                img.setAttribute ('src', 'images/gramma.png')
            }
        }

        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img)
    }
}
