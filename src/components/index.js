import centerBox from './center-box/center-box';
import form from './form/form';
import submit from './form/submit/submit';
import input from './form/input/input';
import select from './form/select/select';
import edgeBar from './edgebar/edgebar';

function register (i) {
  i.component('bcenter-box', centerBox);
  i.component('bform', form);
  i.component('bsubmit', submit);
  i.component('binput', input);
  i.component('bselect', select);
  i.component('bedgebar', edgeBar);
}

export default {
  register
};
