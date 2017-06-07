<!--
  This Component centers everything in it horizontally and vertically
  Props:
  - width: changes the width in 12th pieces
-->
<template lang='pug'>
.level
  .level-item
    slot
</template>

<script>
export default {
  name: 'center-box'
};
</script>
