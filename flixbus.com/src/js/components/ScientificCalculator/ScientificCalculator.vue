<template>
  <div class="wrapper">
    <transition name="fade">
      <div class="container" v-if="!isLoading">
        <div class="header clearfix">
          <h2 class="pull-left header__left-heading">CASIO</h2>
          <span class="pull-right header__right-box"></span>
        </div>
        <div class="display">
          <display :display-text="displayText" />
        </div>
        <div class="keypad">
          <keypad @onKeypress="keyPressed" />
        </div>
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
      isLoading: true,
      displayText: "",
      powerOn: false
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
    width: 386px;
    background-image: linear-gradient(to bottom, #F2F4F7, #AFAFB5);

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

