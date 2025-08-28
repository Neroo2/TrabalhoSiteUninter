
// Verifica quando o site estiver carregado
document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("mudarTema")
  const body = document.body
  const sections = document.querySelectorAll("main section")
  const linksMenu = document.querySelectorAll(".menu a")


 // Verifica quando o botão é clicado
  themeBtn.addEventListener("click", () =>{
    body.classList.toggle("dark-theme")

    if (body.classList.contains("dark-theme")) {
      themeBtn.textContent = "☀️ Mudar Tema"
    }
    else {
      themeBtn.textContent = "🌙 Mudar Tema"
    }
  })
  

//Garante que so seja vista a seção que o usuário clique

function hideSections() {
  sections.forEach(section => {
    section.style.display = "none"
  })
}

function viewSection(id){
  hideSections()
  const section = document.querySelector(id)
  if (section) section.style.display = "block"
}

hideSections()
viewSection("#sobre")

linksMenu.forEach(link => {
  link.addEventListener("click", event => {
    const href = link.getAttribute("href") // Verifica para onde o link leva
    viewSection(href)
  })
})

})