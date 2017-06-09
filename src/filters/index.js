// import all filters
import translate from './translate';

// register all filter with i.filter(name-as-string-here, module-here);
function register (i) { // i is the passed vue instance
  i.filter('translate', translate);
}

export default {
  register
};
