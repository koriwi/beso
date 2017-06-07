<template lang='pug'>
form.bform
  slot
</template>

<script>
export default {
  name: 'bform',
  props: {
    horizontal: {
      default: false
    }
  },
  data () {
    return {
      valid_forms: {},
      validation_array: [],
      value: {}
    };
  },
  watch: {
    valid_forms () {
      const condition = this.validation_array.every((el) => {
        return Object.keys(this.valid_forms).includes(el);
      });

      if (condition) {
        this.$emit('success', this.valid_forms);
      }
    }
  },
  methods: {
    test () {
      console.log('this is working too');
    }
  },
  mounted () {
    this.$on('reset_validation', (data) => {
      this.validation_array = [];
      this.valid_forms = {};
    });
    this.$on('register', (name) => {
      // console.log(data);
      this.validation_array.push(name);
    });
    this.$on('valid', (data) => {
      this.valid_forms[data.name] = data.value;
    });
  }
};
</script>
