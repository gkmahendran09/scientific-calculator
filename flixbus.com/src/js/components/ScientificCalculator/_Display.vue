<template>
<div class="display">
  <input type="text" :value="displayText" readonly class="display__input">
</div>
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
<style scoped>
.display {
  border: 3px solid #636A72;
  border-radius: 5px;
  width: 100%;
  padding: 5px;
  background: #D6E3E3;
}

.display__input {
  background: inherit;
  width: 100%;
  line-height: 50px;
  font-family: 'Orbitron', sans-serif;
  font-size: 40px;
  direction: rtl;
  letter-spacing: 5px;
  border: 0;
}
</style>

