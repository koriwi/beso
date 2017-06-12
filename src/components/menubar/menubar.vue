<template lang='pug'>
//.bar(:class='[classes]')
  .columns(:style='{height: height}')
    .column.is-3.h-bar.start
      .v-bar
        slot(name='left')
    .column.is-6.h-bar.center
      .v-bar
        slot
    .column.is-3.h-bar.end
      .v-bar
        slot(name='right')
.nav
  .nav-left
    .nav-item(v-for='item in $slots.left')
</template>

<script>
export default {
  name: 'menubar',
  props: {
    height: {},
    color: {
      default: 'primary',
      type: String
    },
    'lighter-color': {
      default: false,
      type: Boolean
    },
    'border': {
      type: String,
      validator (val) {
        const valid = ['top', 'bottom'];
        return valid.indexOf(val) !== -1;
      }
    }
  },
  computed: {
    classes () {
      const color = `is-${this.color}`;
      let cl = {};
      cl['is-lighter'] = this.lighterColor;
      cl[color] = true;
      cl['border-top'] = this.border === 'top';
      cl['border-bottom'] = this.border === 'bottom';
      return cl;
    }
  },
  mounted () {
    console.log(this.$slots);
  }
};
</script>

<style lang='sass' scoped>
.bar
  padding: 5px;
  & .columns, & .column
    padding: 0;
    margin: 0;

.h-bar
  display: flex;
  flex-direction: row;

.v-bar
  display: flex;
  flex-direction: column;
  justify-content: center;

.center
  justify-content: center;

.start
  justify-content: flex-start;

.end
  justify-content: flex-end;

p.center
  text-align: center;

.border-bottom
  border-bottom: solid 1px #333;

.border-top
  border-top: solid 1px #333;

</style>
