function carregar() {
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var msg2 = document.getElementById('msg2')
    var data = new Date
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto}`
    if (hora >= 0 && hora <= 6) {
        foto.src = './img/madrugada.png'
        document.body.style.background = '#143033'
    } else if (hora > 6 && hora < 12) {
        foto.src = './img/fotomanha.png'
        document.body.style.background = '#c9bfc7'
        msg2.innerHTML = 'BOM DIA!'
    } else if (hora >= 12 && hora < 18) {
        foto.src = './img/fototarde.png'
        document.body.style.background = '#bed6eb'
        msg2.innerHTML = 'BOA TARDE!'
    } else {
        foto.src = './img/fotonoite.png'
        document.body.style.background = '#091b1f'
        msg2.innerHTML = 'BOA NOITE!'
    }
}
