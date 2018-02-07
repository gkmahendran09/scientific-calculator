const Calculate = {
  methods: {
      // When key pressed
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

    // On "="
    calculate() {
      this.displayText = eval(this.displayText);
    },

    // On "C" || "AC"
    clear() {
      this.displayText = "";
    }
  }
};

export default Calculate;