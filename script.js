var aborhBtn = document.getElementById("aborhBtn")
var aborhText = document.getElementById("aborhTable")

aborhBtn.addEventListener("mouseover", function () {
    aborhText.style.display = "block"
})

aborhBtn.addEventListener("mouseout", function () {
    aborhText.style.display = "none"
})

function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    // busca tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if (html.classList.contains("light")) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/avatar-light.png")
    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/avatar.png")
    }
}
