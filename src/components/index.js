import centerBox from './center-box/center-box';
import form from './form/form';
import submit from './form/submit/submit';
import input from './form/input/input';

function register (i) {
  i.component('bcenter-box', centerBox);
  i.component('bform', form);
  i.component('bsubmit', submit);
  i.component('binput', input);
}

export default {
  register
};
