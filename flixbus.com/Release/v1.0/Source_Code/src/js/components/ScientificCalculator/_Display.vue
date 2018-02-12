<template>
<div class="display">
  <span class="indicator" v-show="powerOn">
    <span class="indicator__operator"><span v-show="inMemory">M</span></span>
    <span class="indicator__operator"><span v-show="isSignedNumber">_</span></span>
  </span>
  <input type="text" :value="displayText | formatNumber" readonly class="display__input">
</div>
</template>
<script>
export default {
  name: "Display",  
  props: {
      powerOn: {
        type: Boolean
      },
      displayText: {
          type: [String, Number]
      }, 
      isSignedNumber: {
        type: Boolean
      },
      inMemory: {
        type: Boolean
      }
  },
  filters: {
    formatNumber(v) {
      let x = v.toString().split(".");
      let x1 = x[0];
      let x2 = x.length > 1 ? "." + x[1] : "";
      x1 = x1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      return x1 + x2;
    }
  }
}
</script>
<style scoped>
.display {
  width: 100%;
  background: #D6E3E3;
  position: relative;
  
  border-radius: 5px;

  /* Border */

  border: 3px solid #636A72;

  border-left-width: 13px;
  border-right-width: 13px;
  border-top-width: 10px;
  border-bottom-width: 20px;

  /* End Border */
}

.indicator {
  position: absolute;
  top: 12px;
  left: 7px;
  font-size: 9px;
}

.indicator__operator {
  min-height: 10px;
  text-align: center;
  display: block;
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
  margin: 0; /* reset for 'Safari' */
}
</style>

