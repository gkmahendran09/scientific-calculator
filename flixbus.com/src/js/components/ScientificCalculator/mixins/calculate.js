const Calculate = {
    methods: {
        // When key pressed
        keyPressed(key) {

            // Check for sound settings
            // and play the sound
            if (this.powerOn && this.sound == true) {
                // Checking for $ref to make the test pass
                // without breaking the functionality
                this.$refs.beep && this.$refs.beep.play();
            }
      
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
            case "+/-":
                this.isSignedNumber = !this.isSignedNumber;
                break;
            case "M+":
                this.addMemory();
                break;
            case "M-":
                this.subtractMemory();
                break;
            case "MR":
                this.readMemory();
                break;
            case "MC":
                this.clearMemory();
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
            if (!this.isFreshEntry()) {
                if(this.isValidInput(key)) {
                    this.displayText += key;
                }
            } else {
                this.displayText = key;
                this.isNext = false;
            }
        },

        isValidInput(key) {
            if(key == "+" || key == "-" || key == "*" || key == "/") {
                return this.displayText.slice(-1) == key ? false : true;
            }

            return true;
        },

        isFreshEntry() {
            return this.displayText == "0" || this.isNext;
        },

        // "=" || "√"
        calculate(key) {
            this.displayText = this.displayText.toString().replace(/([+\-*/%])(0+)/g, "$1");
            if (key == "√") {
                this.displayText = Math.sqrt(this.displayText).toString();
            } else {
                try {
                    this.displayText = eval(this.displayText).toString();
                } catch(err) {
                    this.displayText = "0";
                }
            }

            if(this.isSignedNumber) {
                this.displayText = - this.displayText;
            }

            this.isSignedNumber = false;
            this.isNext = true;
        },

        // "C" || "AC"
        clear() {
            this.displayText = "0";
            this.isNext = true;
        },

        // "AC"
        on() {
            this.powerOn = true;
            this.sound = true;
            this.isSignedNumber = false;
            this.clearMemory();
            this.clear();
        },

        // "OFF"
        off() {
            this.powerOn = false;
            this.displayText = "";
        },


        // Memory operations
        // add
        addMemory() {
            this.memory = Number(this.memory) + Number(this.displayText);
            this.inMemory = true;
        },
        // subtract
        subtractMemory() {
            this.memory = Number(this.memory) - Number(this.displayText);
            this.inMemory = true;
        },
        // read
        readMemory() {
            if(this.inMemory) {
                this.displayText = this.memory;
            }
        },
        // clear
        clearMemory() {
            this.memory = "";
            this.inMemory = false;
        }
    }
};

export default Calculate;