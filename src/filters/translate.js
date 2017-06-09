// import all translation files
import de from '../../lang/de.json';
import en from '../../lang/en.json';

var langs = {}; // define the translation object which will contain all languages
// looks like this when filled [{ "code": "de", "description": "Deutsch" }, ...]
window.localStorage.setItem('lang_arr', '[]');

// fill the lang_arr in local storage
// and fill the langs object which will look like this
// { de: { hello: 'Hallo'}, en: { hello: 'Hello'} }
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
    console.log('Language not supported. Using Fallback language');
    langs[window.localStorage.setItem('lang', 'en')];
    return 'check your language file';
  }
};
