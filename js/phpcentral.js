var $ = (_el) => document.querySelector(_el);
var $all = (_el) => document.querySelectorAll(_el);

console.log($("header"));

const store = {
  get: (key) => {
    return localStorage.getItem('key')
  },
    set: (key, value) => {
    localStorage.setItem(key, value)
  },
    findReplace: (key, value) => {
    if (this.get(key) !== undefined) this.set(key, value)
  }
}

$("#menu_wrapper").addEventListener("click", () => {
    $("#menu_container").classList.toggle("show_menu")
    let icon = $("#menu_wrapper").childNodes[1]
    icon.classList.toggle('mdi-menu')
    icon.classList.toggle('mdi-close')
  }
  )

$("#switch_theme").addEventListener("click", () => {
  document.body.classList.toggle("dark")
})
