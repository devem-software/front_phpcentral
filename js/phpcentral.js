var $ = (_el) => document.querySelector(_el);
var $all = (_el) => document.querySelectorAll(_el);

console.log($('#menu_button'));

const store = {
    get: (key) => {
        return localStorage.getItem('key')
    },
    set: (key, value) => {
        localStorage.setItem(key, value)
    },
    update: (key, value) => {
        if (this.get(key) !== undefined) this.set(key, value)
    },
    validate: (key) => (this.get(key) === undefined) ? false : true,
}

$('#menu_button').addEventListener('click', () => {
    $('#menu_container').classList.toggle('show_menu')
    let icon = $('#menu_button').childNodes[1]
    icon.classList.toggle('mdi-menu')
    icon.classList.toggle('mdi-close')
}
)

$('#switch_theme').addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

window.addEventListener('load', () => {
    document.body.classList.toggle('dark');
})