<template>
  <input type="text" :value="displayText" readonly>
</template>
<script>
export default {
  name: "Display",  
  props: {
      displayText: {
          type:String
      }
  }
}
</script>
