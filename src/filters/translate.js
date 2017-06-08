import de from '../../lang/de.json';
import en from '../../lang/en.json';

var langs = {};
window.localStorage.setItem('lang_arr', '[]');

[de, en].forEach(l => {
  let langArr = JSON.parse(window.localStorage.getItem('lang_arr'));
  langArr.push(l.lang);
  window.localStorage.setItem('lang_arr', JSON.stringify(langArr));
  langs[l.lang.code] = l.translation;
});

export default value => {
  try {
    const path = value.split('.');
    let temp = langs[window.localStorage.getItem('lang')];
    path.forEach(part => {
      temp = temp[part];
    });
    return temp;
  } catch (e) {
    window.alert('Language not supported. Using Fallback language');
    langs[window.localStorage.setItem('lang', 'de')];
  }
};
