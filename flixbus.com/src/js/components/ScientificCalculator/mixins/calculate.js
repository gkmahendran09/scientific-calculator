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
            case "√":
                this.calculate(key);
                break;
            case "AC":
                this.on();
                break;
            case "C":
                this.clear();
                break;
            case "OFF":
                this.off();
                break;

            default:
                this.updateDisplayText(key);
                break;
            }
        },

        updateDisplayText(key) {
            if (this.displayText != "0") {
                if(this.isValidInput(key)) {
                    this.displayText += key;
                }
            } else {
                this.displayText = key;
            }
        },

        isValidInput(key) {
            if(key == "+" || key == "-" || key == "*" || key == "/") {
                return this.displayText.slice(-1) == key ? false : true;
            }

            return true;
        },

        // "=" || "√"
        calculate(key) {
            if (key == "√") {
                this.displayText = Math.sqrt(this.displayText).toFixed(6);
            } else {
                this.displayText = eval(this.displayText);
            }
        },

        // "C" || "AC"
        clear() {
            this.displayText = "0";
        },

        // "AC"
        on() {
            this.powerOn = true;
            this.clear();
        },

        // "OFF"
        off() {
            this.powerOn = false;
            this.displayText = "";
        }
    }
};

export default Calculate;