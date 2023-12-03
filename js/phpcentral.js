import store from './utils/store.js'

var $ = (_el) => document.querySelector(_el);
var $all = (_el) => document.querySelectorAll(_el);


$('#menu_button').addEventListener('click', () => {
    $('#menu_container').classList.toggle('show_menu')
    let icon = $('#menu_button').childNodes[1]
    icon.classList.toggle('mdi-menu')
    icon.classList.toggle('mdi-close')
}
)
let switchTheme = $('#switch_theme')
let switchThemeIcon = $('#switch_theme_icon')
let switchThemeLabel = $('#switch_theme_label')

switchTheme.addEventListener('click', () => {
    let bodyClass = document.body.classList
    bodyClass.toggle('dark')

    if (bodyClass.contains('dark')) {
        console.log('el tema es oscuro')
        switchThemeIcon.classList = ['mdi mdi-24px mdi-white-balance-sunny']
        switchThemeLabel.innerHTML = 'CAMBIAR A CLARO'
    } else {
        console.log('el tema es claro')
        switchThemeIcon.classList = ['mdi mdi-24px mdi-weather-night']
        switchThemeLabel.innerHTML = 'CAMBIAR A OSCURO'
    }

})

window.addEventListener('load', () => {
    console.log(store.get('edwin'))
})