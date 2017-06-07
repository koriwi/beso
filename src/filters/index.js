import translate from './translate';

function register (i) {
  i.filter('translate', translate);
}

export default {
  register
};
