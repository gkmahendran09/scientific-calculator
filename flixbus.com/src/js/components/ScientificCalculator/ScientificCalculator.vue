<template>
  <div class="container">
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
    width: 600px;
    border: 1px solid #ccc;
  }
</style>

