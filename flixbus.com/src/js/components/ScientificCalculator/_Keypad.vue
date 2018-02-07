<template>
    <div>
        <button @click="$emit('onKeypress', key)" class="keypad__btn" :class="getAdditionalClasses(key)" v-for="key in keys">{{key}}</button>
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
  },

    methods: {
      getAdditionalClasses(key) {
        if(key == "AC" || key == "C") {
          return "keypad__btn--danger"
        }
      }
    }
}
</script>

<style lang="scss" scoped>
  .keypad__btn {
    width: 60px;
    margin: 5px;
    background-image: linear-gradient(to bottom, #2E2C30, #4c4c53);
    color: #fff;
    border-radius: 6px;
    font-size: 24px;
    letter-spacing: -2px;
    outline: 0;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    line-height: 35px;
  }

  .keypad__btn--danger {
    background-image: linear-gradient(to bottom, #965466, #AC607E);
  }
</style>