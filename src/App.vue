<template>
  <div>
    <router-view/>
    <color-switcher/>
  </div>
</template>
<script>
import ColorSwitcher from 'components/Common/ColorSwitcher'
export default {
  components:{
    ColorSwitcher
  }
};
</script>

