<template>
  <div class="wrapper">
    <transition name="fade">
      <div class="container" v-if="!isLoading">
        <div class="settings clearfix">
            <div class="pull-left">
              <span class="power-indicator" :class="{'on': powerOn}"> {{presentCalculatorState}}</span>
            </div>
            <div class="pull-right">
              <label v-show="powerOn"><input type="checkbox" v-model="sound">Turn {{sound === true ? 'OFF' : 'ON'}} Sound</label>
            </div>
        </div>
        <div class="header clearfix">
          <h2 class="pull-left header__left-heading">CASIO</h2>
          <span class="pull-right header__right-box"></span>
        </div>
        <div class="display">
          <display :power-on="powerOn" :display-text="displayText" :is-signed-number="isSignedNumber" :in-memory="inMemory" />
        </div>
        <div class="keypad">
          <keypad @onKeypress="keyPressed" />
        </div>
        <audio ref="beep">
          <source src="sound/beep.mp3">
        </audio>
      </div>
    </transition>
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
      isLoading: true, // Initial page load
      displayText: "",
      powerOn: false, // calculator state "ON / OFF"
      sound: false, // Sound "On / OFF"
      isSignedNumber: false, // Indicates signed property of given number '+/-'
      inMemory: false, // Indicates whether the value stored in memory
      memory: "",
    }
  },

  computed: {
    presentCalculatorState() {
      return this.powerOn === true ? "ON" : "OFF";
    }
  },

  created() {
    setTimeout(() => {
      this.isLoading = false;
    }, 100);
  }
}
</script>

<style scoped>
  .container {
    margin: 50px auto;
    width: 336px;
    position: relative;
    /* background-image: linear-gradient(to bottom, #F2F4F7, #AFAFB5); */

    background:#f2f4f7;background-image: url(data:image/png;base64,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);

    border-radius: 10px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;

    /* border */
    border: 3px solid #ccc;

    /* left */
    border-left-width: 9px;
    
    /* right */
    border-right-width: 7px;
    
    /* top */
    border-top-width: 7px;
    border-top-color: #f1f1f1;
    /* bottom */
    border-bottom-width: 12px;
    border-bottom-color: #b8b8bb;
    /* border end */
  }

  .settings {
    position: absolute;
    width: 100%;
    transform: translate(0px, -30px);
  }

  .power-indicator:before {
    content: "";
    width: 10px;
    height: 10px;
    background: red;
    display: inline-block;
    border-radius: 100%;
  }

  .power-indicator.on:before {
    background: green;
  }

  .header {
    margin-bottom: 10px;
  }

  .header__left-heading {
    font-family: 'Orbitron', sans-serif;
    color: #44454B;
    padding: 20px;
    margin: 0;
    font-weight: 700;
    font-size: 22px;
  }

  .header__right-box {
    display: block;
    border: 1px solid #000;
    height: 45px;
    width: 145px;
    background: #261B19;
    border: 4px solid #5A5C62;
    margin-top: 10px;
    margin-right: 20px;
    border-radius: 5px;
  }

  .header__right-box:after {
    font-family: 'Orbitron', sans-serif;
    content: "TWO WAY POWER";
    color: #5A5C62;
    position: relative;
    top: 44px;
    text-align: center;
    display: block;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 1px;
}

  .keypad {
    padding: 10px;
  }
</style>

