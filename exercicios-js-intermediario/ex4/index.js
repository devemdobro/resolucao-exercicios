/* onChange */
/* Task: verificar se o campo de um input está preenchido, se tiver adiciona a classe campo-preenchido, caso não esteja preenchido e tenha a classe tem que remover  */

const inputText = document.querySelectorAll(".input-text");

inputText.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value !== "") {
            input.classList.add("campo-preenchido")
        } else {
            input.classList.remove("campo-preenchido")
        }
    });
});