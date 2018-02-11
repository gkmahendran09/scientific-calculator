<template>
    <div>
      <div v-for="(keyArr, keyArrIndex) in keys" :key="keyArrIndex" :class="`keypad-row-${keyArrIndex}`">
        <button @click="$emit('onKeypress', key)" class="keypad__btn" :class="getAdditionalClasses(key, keyArrIndex, index)" v-for="(key, index) in keyArr" :key="index">{{key}}</button>
      </div>
    </div>
</template>
<script>
export default {
  name: "Keypad",  
  data() {
    return {
      displayText: "",
      keys: [
        [                  "√", "OFF"],
        ["MC", "MR", "M-", "M+", "/"],
        ["%", "7", "8", "9", "*"],
        ["+/-", "4", "5", "6", "-"],
        ["C", "1", "2", "3", "+"],
        ["AC", "0", ".", "="]
      ]
    }
  },

    methods: {
      getAdditionalClasses(key, keyArrIndex, index) {
        let classes = `keypad__btn-${keyArrIndex}${index}`;
        if(key == "AC" || key == "C") {
          classes += " keypad__btn--danger";
        }

        return classes;
      }
    }
}
</script>

<style lang="scss" scoped>
  .keypad-row-0:before {
    content: "SL-300SV";
    display: block;
    position: absolute;
    font-size: 12px;
    font-weight: 600;
    transform: translate(30px, 15px);
    color: #44454b;
  }
  .keypad-row-0 {
    text-align: right;
  }
  .keypad__btn {
    width: 50px;
    margin: 5px;
    border: 0;
    background-image: linear-gradient(to bottom, #2E2C30, #4c4c53);
    color: #fff;
    border-radius: 6px;
    font-size: 24px;
    letter-spacing: -2px;
    outline: 0;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    line-height: 40px;
  }

  .keypad__btn--danger {
    background-image: linear-gradient(to bottom, #965466, #AC607E);
    box-shadow: inset #000 0px 0px 3px;
  }

  // '+' button
  .keypad__btn-44 {
    height: 96px;
    position: absolute;
  }

  // 'AC' button
  .keypad__btn-50:after {
    content: "ON";
    color: #454545;
    font-size: 10px;
    position: absolute;
    transform: translate(-20px, 26px);
    letter-spacing: 0px;
  }
  .keypad__btn-50:before,
  .keypad__btn-51:before {
    content: "";
    display: block;
    position: absolute;
    width: 5px;
    background: #49484e;
    height: 28px;
    transform: translate(-11px, 5px);
    border-bottom-left-radius: 100px;
    border-top-left-radius: 50px;
  }

  .keypad__btn-51:before {
    transform: translate(-18px, 5px);
    border-radius: 0;
    border-bottom-right-radius: 100px;
    border-top-right-radius: 50px;
  }

</style>