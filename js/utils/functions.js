import store from "./store";
import { $ } from "./selector";

export const applyTheme = (theme, icon, label) => {

    document.body.classList = [];
    store.set('theme', theme);
    document.body.classList = [store.get('theme')];

    $('#switch_theme_icon').classList = [`mdi mdi-24px ${icon}`];
    $('#switch_theme_label').innerHTML = `CAMBIAR A ${label}`;

}