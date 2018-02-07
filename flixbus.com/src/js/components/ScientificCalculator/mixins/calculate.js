const Calculate = {
  methods: {
      // When key pressed
    keyPressed(key) {
      
      // Check if the calculator is "ON"
      // Don't perform any operation
      // if the calculator is "OFF"
      if(!this.powerOn && key != "AC") return;

      // Perform the action based on
      // Key press
      switch (key) {
        case "=":
          this.calculate();
          break;
        case "AC":
          this.on();
          this.clear();
          break;
        case "C":
          this.clear();
          break;
        case "OFF":
          this.off();
          break;

        default:
          if(this.displayText != "0") {
            this.displayText += key;
          } else {
            this.displayText = key;
          }
          break;
      }
    },


    // "="
    calculate() {
      this.displayText = eval(this.displayText);
    },

    // "C" || "AC"
    clear() {
      this.displayText = "0";
    },

    // "AC"
    on() {
      this.powerOn = true;
    },

    // "OFF"
    off() {
      this.powerOn = false;
      this.displayText = "";
    }
  }
};

export default Calculate;