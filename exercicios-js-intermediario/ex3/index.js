/* addClass e removeClass */
/* Task: Ao clicar no quadrado verificar se o quadrado tem a classe azul se tiver remove, se não adicona */

const quadrado = document.querySelector(".quadrado");

quadrado.addEventListener('click', () => {
    const classeAzulExiste = quadrado.classList.contains('azul')
    if (classeAzulExiste) {
        quadrado.classList.remove("azul");
    } else {
        quadrado.classList.add("azul");
    }
});