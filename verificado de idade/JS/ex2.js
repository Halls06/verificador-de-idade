function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO!] Verifica os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <3){
                //bebes
                img.setAttribute('src', 'bebes.png')
            } else if (idade < 10) {
                //criança
                img.setAttribute('src', 'criança.png')
                
            }
             else if(idade <21) {
                //jovem
                img.setAttribute('src', 'jove.png')
                
            } else if (idade < 40) {
                img.setAttribute('src', 'adulto.png')
            }
            
            else if(idade < 55) {
                //Adulto
                img.setAttribute('src', 'rapazde40.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 3){
                //bebes
                img.setAttribute('src', 'bebes.png')
            } else if (idade < 10) {
                //mocinha
                img.setAttribute('src', 'mocinha.png')

            }
            
            else if(idade <= 21) {
                //jovem
                img.setAttribute('src', 'moça.png')
            } else if(idade < 40) {
                //Adulto
                img.setAttribute('src', 'adulta.png')

            } else {
                //idoso
                img.setAttribute('src', 'senhora.png')

            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}