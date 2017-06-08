<template lang='pug'>
.field(:class='{"is-horizontal": horizontal}')
  div(:class='{"field-label is-normal":horizontal, "field": !horizontal}', v-if='label')
    label.label {{ label }}
  div(:class='{"field-body is-normal":horizontal, "field": !horizontal}')
    span.select
      select(
        :placeholder='placeholder'
        v-model='value'
        :class='{ "is-danger": invalid }'
        type='select'
        ref='inputToVerify')
        option(v-for='data in dataArr', :value='data.code')
          | {{ data.description}}
  p.help.is-danger(v-if='invalid') Please fill this field
</template>

<script>
export default {
  name: 'bselect',
  data () {
    return {
      value: window.localStorage.getItem('lang'),
      invalid: false
    };
  },
  props: {
    horizontal: {
      default: false,
      type: Boolean
    },
    name: {
      required: true
    },
    placeholder: {

    },
    dataSource: {
      required: true
    },
    onChange: {},
    label: {}
  },
  asyncComputed: {
    async dataArr () {
      let tmp = await this.dataSource;
      return tmp;
    }
  },
  computed: {
    standalone () {
      console.log(this.$parent, 'lel');
      return true;
    }
  },
  watch: {
    value (val) {
      this.onChange(val);
    }
  }
};
</script>

<style>
</style>
