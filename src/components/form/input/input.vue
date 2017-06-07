<template lang='pug'>
- var types = [ "email", "hidden", "number", "password", "tel", "text", "url"]
- var unusedTypes = ["button", "checkbox", "color", "date", "datetime-local", "image", "radio", "range", "reset", "search", "submit", "time", "week", "month"]

.field(:class='{"is-horizontal": horizontal}')
  div(:class='{"field-label is-normal":horizontal, "field": !horizontal}')
    label.label
      slot
  div(:class='{"field-body is-normal":horizontal, "field": !horizontal}')
    each type in types
      input.input(
        v-if="type === '" + type + "'"
        :placeholder='placeholder'
        v-model='value'
        :class='{ "is-danger": invalid }'
        type=type
        ref='inputToVerify')
  p.help.is-danger(v-if='invalid') Please fill this field
  p.help.control(v-if='!invalid')

</template>

<script>
export default {
  name: 'binput',
  data () {
    return {
      value: '',
      invalid: false
    };
  },
  props: {
    horizontal: {
      default: false,
      type: Boolean
    },
    type: {
      required: true
    },
    placeholder: {
      default: ''
    },
    name: {
      required: true
    }
  },
  mounted () {
    this.$parent.$on('validate_input', () => {
      this.$parent.$emit('register', this.name);
      if (this.value.length === 0 || !this.$refs['inputToVerify'].checkValidity()) this.invalid = true;
      else {
        this.invalid = false;
        this.$parent.$emit('valid', {name: this.name, value: this.value});
      }
    });
  }
};
</script>
