function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manhã.jpg'
        document.body.style.backgroundImage = "url('fundomanha.jpg')";
        document.body.style.backgroundSize = "cover";
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.jpg'
        document.body.style.backgroundImage = "url('fundotarde.jpg')";
        document.body.style.backgroundSize = "cover";
    } else {
       img.src = 'noite.jpg'
       document.body.style.backgroundImage = "url('fundonoite.jpg')";
       document.body.style.backgroundSize = "cover";
    }
}
