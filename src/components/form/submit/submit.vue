<template lang='pug'>
button.button.is-primary(type='submit', @click.prevent='submit', v-bind:class='cClasses', v-bind:style='cStyles')
  slot
</template>

<script>
export default {
  name: 'bsubmit',
  props: {
    text: {
      default: 'ok',
      type: String
    },
    spread: {
      default: false
    },
    classes: {
      default () { return []; },
      type: Array
    },
    width: {
      default: 'auto'
    }
  },
  methods: {
    submit () {
      this.$parent.$emit('reset_validation');
      this.$parent.$emit('validate_input');
    }
  },
  computed: {
    cStyles () {
      var temp = {};
      if (!this.spread) {
        temp.width = this.width;
      }
      return temp;
    },
    cClasses () {
      var temp = {};

      this.classes.forEach(obj => {
        temp[obj] = true;
      });

      temp['is-fullwidth'] = this.spread;
      return temp;
    }
  }
};
</script>
