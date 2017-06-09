<template lang='pug'>
.bar
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
//.bar
  .v-bar
    .h-bar
      slot(name='left')
    .h-bar
      slot
    .h-bar
      slot(name='right')
</template>

<script>
export default {
  name: 'footer',
  props: {
    height: {

    }
  }
};
</script>

<style scoped>
.bar {
  padding: 5px;
  background-color: #555;
}
.bar .columns, .bar .column {
  padding: 0;
  margin: 0;
}
.h-bar {
  display: flex;
  flex-direction: row;
}
.v-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.center {
  justify-content: center;
}
.start {
  justify-content: flex-start;
}
.end {
  justify-content: flex-end;
}
p.center {
  text-align: center;
}
</style>
