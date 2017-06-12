<template lang='pug'>
- var types = [ "email", "hidden", "number", "password", "tel", "text", "url"]
- var unusedTypes = ["button", "checkbox", "color", "date", "datetime-local", "image", "radio", "range", "reset", "search", "submit", "time", "week", "month"]

.field(:class='{"is-horizontal": horizontal}')
  div(:class='{"field-label is-normal":horizontal, "field": !horizontal}')
    label.label
      slot
  div(:class='{"field-body is-normal":horizontal, "field": !horizontal}')
    each type in types
      p.control(v-if="type === '" + type + "'", :class='{"has-icons-left": icon}')
        input.input(
          :placeholder='placeholder'
          v-model='value'
          :class='{ "is-danger": invalid }'
          type=type
          ref='inputToVerify')
        span.icon.is-small.is-left(v-if='icon')
          i.fa(:class='faIcon')
  p.help.is-danger(v-if='invalid') Please fill this field
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
    },
    icon: {}
  },
  computed: {
    faIcon () {
      return `fa-${this.icon}`;
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
