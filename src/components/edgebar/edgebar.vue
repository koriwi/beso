<template lang='pug'>
.bar(:class='[classes]')
  // p {{ config.logo.location }}
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
</template>

<script>
import mixinConfig from 'MIX/config';

export default {
  name: 'edgebar',
  mixins: [mixinConfig],
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
      let cl = {};
      const color = `is-${this.color}`;

      cl[color] = true;
      cl['is-lighter'] = this.lighterColor;
      cl['border-top'] = this.border === 'top';
      cl['border-bottom'] = this.border === 'bottom';
      return cl;
    }
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
  border-bottom: solid 1px orange;

.border-top
  border-top: solid 1px orange;

</style>
