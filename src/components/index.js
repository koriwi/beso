// import all components and sub-components
import centerBox from './center-box/center-box';
import form from './form/form';
import submit from './form/submit/submit';
import input from './form/input/input';
import select from './form/select/select';
import edgeBar from './edgebar/edgebar';

// register every single component with i.component(component-name-string, component);
function register (i) { // i is the passed vue instance
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
