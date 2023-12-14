import { $ } from "./selector";
import { applyTheme } from './functions';
import store from "./store";

var bodyClassList = document.body.classList
var sTIcon = $('#switch_theme_icon')
var sTLabel = $('#switch_theme_label')

window.addEventListener('load', async () => {

    let newIcon, newLabel, newTheme;
    console.log(store.validate('theme'))
    if (!store.validate('theme')) {
        await store.setMassive({
            theme: 'light',
            icon: 'mdi-weather-night',
            label: 'NOCHE'
        })


    }
    newTheme = await store.get('theme');
    newIcon = await store.get('icon');
    newLabel = await store.get('label');
    await applyTheme(newTheme, newIcon, newLabel)

})