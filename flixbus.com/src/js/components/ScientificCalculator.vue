<template>
  <div class="container">
    <div class="display">
      <input type="text" :value="displayText" readonly>
    </div>
    <div class="keypad">
      <button @click="keyPressed(key)" class="keypad__btn" v-for="key in keys">{{key}}</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      displayText: "",
      keys: [
                          "√", "OFF",
        "MC", "MR", "M-", "M+", "/",
        "%", "7", "8", "9", "*",
        "+/-", "4", "5", "6", "-",
        "C", "1", "2", "3", "+",
        "AC", "0", ".", "="

      ]
    }
  },

  methods: {
    keyPressed(key) {
      switch (key) {
        case "=":
          this.calculate();
          break;
        case "C":
        case "AC":
          this.clear();
          break;
      
        default:
          this.displayText += key;
          break;
      }
    },

    calculate() {
      this.displayText = eval(this.displayText);
    },

    clear() {
      this.displayText = "";
    }
  }
}
</script>

<style scoped>
  .container {
    width: 600px;
    border: 1px solid #ccc;
  }

  .keypad__btn {
    width: 50px;
    height: 50px;
    margin: 10px;
  }
</style>

