document
    .getElementById("menu_wrapper")
    .addEventListener("click", (e) => {
        document.getElementById("menu_container").classList.toggle("show_menu")
        let icon = document.getElementById("menu_wrapper").childNodes[1].childNodes[1]
        icon.classList.toggle('mdi-menu')
        icon.classList.toggle('mdi-close')
    }
    )

document.getElementById("switch_theme").addEventListener("click", () => {
    document.body.classList.toggle("dark")
})
