import Vue from "vue";

import ScientificCalculator from "./components/ScientificCalculator.vue";

Vue.component("scientific-calculator", ScientificCalculator);

new Vue({
    el: "#app"
});