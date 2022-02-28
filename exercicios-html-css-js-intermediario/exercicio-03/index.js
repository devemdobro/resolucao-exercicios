const inputs = document.getElementsByClassName("input")
let = cont = 0

const obg = document.getElementsByClassName("campo-obg")
document.getElementById('button').addEventListener('click', function() {
    enviar();
});
console.log(inputs)

function enviar(){

    if (nome.value === ""){
        obg[0].classList.add('active')
        obg[0].classList.remove('inactive')
        inputs[0].classList.add('input-error')
        inputs[0].classList.remove('input-normal')

    }
    else{
        inputs[0].classList.add('input-correct')
        inputs[0].classList.remove('input-normal')
        inputs[0].classList.remove('input-error')
        obg[0].classList.add('inactive')
        obg[0].classList.remove('active')

    }

    if (email.value === ""){
        obg[1].classList.add('active')
        obg[1].classList.remove('inactive')
        inputs[1].classList.add('input-error')
        inputs[1].classList.remove('input-normal')

    }
    else{
        inputs[1].classList.add('input-correct')
        inputs[1].classList.remove('input-normal')
        inputs[1].classList.remove('input-error')
        obg[1].classList.add('inactive')
        obg[1].classList.remove('active')

    }

    if (telefone.value === ""){
        obg[2].classList.add('active')
        obg[2].classList.remove('inactive')
        inputs[2].classList.add('input-error')
        inputs[2].classList.remove('input-normal')

    }
    else{
        inputs[2].classList.add('input-correct')
        inputs[2].classList.remove('input-normal')
        inputs[2].classList.remove('input-error')
        obg[2].classList.add('inactive')
        obg[2].classList.remove('active')

    }

    if (mensagem.value === ""){
        obg[3].classList.add('active')
        obg[3].classList.remove('inactive')
        inputs[3].classList.add('input-error')
        inputs[3].classList.remove('input-normal')

    }
    else{
        inputs[3].classList.add('input-correct')
        inputs[3].classList.remove('input-normal')
        inputs[3].classList.remove('input-error')     
        obg[3].classList.add('inactive')
        obg[3].classList.remove('active')

    }
}

