const $ = (_el) => document.querySelector(_el)
const $all = (_el) => document.querySelectorAll(_el)

// const store = () => {
//     function get (key) {
//         return localStorage.getItem('key')
//     }
//     function set (key, value) {
//         localStorage.setItem(key, value)
//     }
//     function findReplace (key, value) {
//         if (this.get(key) !== undefined) this.set(key, value)
//     }
// }

$("#menu_wrapper")
    .addEventListener("click", (e) => {
        $("#menu_container").classList.toggle("show_menu")
        let icon = $("#menu_wrapper").childNodes[1].childNodes[1]
        icon.classList.toggle('mdi-menu')
        icon.classList.toggle('mdi-close')
    }
    )

$("#switch_theme").addEventListener("click", () => {
    document.body.classList.toggle("dark")
})
