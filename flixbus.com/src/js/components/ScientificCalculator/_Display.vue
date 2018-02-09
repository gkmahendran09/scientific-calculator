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
  width: 100%;
  background: #D6E3E3;
  
  border-radius: 5px;

  /* Border */

  border: 3px solid #636A72;

  border-left-width: 13px;
  border-right-width: 13px;
  border-top-width: 10px;
  border-bottom-width: 20px;

  /* End Border */
}

.display__input {
  background: inherit;
  width: 100%;
  line-height: 75px;
  font-family: "Digital-7", sans-serif;
  font-size: 75px;
  text-align: right;
  letter-spacing: -2px;
  border: 2px solid #46464b;
  box-shadow: inset #000 2px 2px 2px;
  padding: 5px;
}
</style>

