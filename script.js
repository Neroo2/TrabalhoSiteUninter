
// Verifica quando o site estiver carregado, e gera o botao que permite mudar o tema do site
document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("mudarTema")
  const body = document.body

  themeBtn.addEventListener("click", () =>{
    body.classList.toggle("dark-theme")

    if (body.classList.contains("dark-theme")) {
      themeBtn.textContent = "☀️ Mudar Tema"
    }
    else {
      themeBtn.textContent = "🌙 Mudar Tema"
    }
  })
  


})