import { $ } from './selector';
import { applyTheme } from './functions';
import store from './store';

$('#menu_button').addEventListener('click', () => {
    $('#menu_container').classList.toggle('show_menu');
    let icon = $('#menu_button').childNodes[1];
    icon.classList.toggle('mdi-menu');
    icon.classList.toggle('mdi-close');
});

let sT = $('#switch_theme');
sT.addEventListener('click', async () => {
    let newIcon, newLabel, newTheme;

    if (document.body.classList.contains('dark')) {
        newTheme = 'light';
        newIcon = 'mdi-weather-night';
        newLabel = 'NOCHE';
    } else {
        newTheme = 'dark';
        newIcon = 'mdi-white-balance-sunny';
        newLabel = 'DIA';
    }

    store.setMassive({
        theme: newTheme,
        icon: newIcon,
        label: newLabel
    })

    await applyTheme(newTheme, newIcon, newLabel)
});
