<template>
  <div class="container">
    <div class="header">
      <h2>CASIO</h2>
    </div>
    <div class="display">
      <display :display-text="displayText" />
    </div>
    <div class="keypad">
      <keypad @onKeypress="keyPressed" />
    </div>
  </div>
</template>
<script>
import Calculate from "./mixins/calculate.js";

import Display from "./_Display.vue";
import Keypad from "./_Keypad.vue";
export default {
  mixins: [ Calculate ],
  components: {Display, Keypad},
  data() {
    return {
      displayText: ""
    }
  }
}
</script>

<style scoped>
  .container {
    margin: 50px auto;
    width: 400px;
    border: 3px solid #ccc;
    border-radius: 10px;
    background: #D2D2D6;
    padding: 10px;
  }

  .header > h2 {
    font-family: 'Orbitron', sans-serif;
    color: #44454B;
  }
</style>

