<template>
    <div>
        <button @click="$emit('onKeypress', key)" class="keypad__btn" v-for="key in keys">{{key}}</button>
    </div>
</template>
<script>
export default {
  name: "Keypad",  
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
  }
}
</script>

<style scoped>
  .keypad__btn {
    width: 50px;
    height: 50px;
    margin: 10px;
  }
</style>