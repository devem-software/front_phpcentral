var $ = (_el) => document.querySelector(_el);
var $all = (_el) => document.querySelectorAll(_el);

const store = {
    get: (key) => {
        return localStorage.getItem('key')
    },
    set: (key, value) => {
        localStorage.setItem(key, value)
    },
    update: (key, value) => {
        if (store.get(key) !== undefined) store.set(key, value)
    },
    validate: (key) => {
        if (store.get(key) === null || store.get(key) === undefined) {
            return false
        }
        else {
            return true
        }
    },
    setMasive: (obj) => {
        let keys = Object.keys(obj)
        let values = Object.values(obj)

        keys.forEach((k, i) => {
            store.set(k, values[i])
        })
    }
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