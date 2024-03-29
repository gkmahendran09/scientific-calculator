import { mount } from "vue-test-utils";
import ScientificCalculator from "../../src/js/components/ScientificCalculator/ScientificCalculator.vue";
import expect from "expect";

describe("Scientific Calculator Basic Functionalities", () => {
    let wrapper, vm;

    beforeEach(() => {
        wrapper = mount(ScientificCalculator);
        vm = wrapper.vm;
    });

    /*
     * Checking Power On/Off
     * 
     */
    it("Checking Power On/Off", () => {
        vm.displayText = "";
        vm.on();
        expect(vm.displayText).toBe("0");
        vm.off();
        expect(vm.displayText).toBe("");
    });

    /*
     * Check for a valid mathematical expression
     * 
     * Test case - 1
     * ---------------
     * Current expression - 3+
     * Next Input - +
     * Computed - 3++ which is invalid, we shouldn't allow
     * 
     */
    it("Checks the new key stroke is valid", () => {
        vm.on();
        vm.keyPressed("3");
        vm.keyPressed("+");
        vm.keyPressed("+");
        expect(vm.displayText).toBe("3+");
    });

    /*
     * Basic calculator behavior
     * 
     */
    it("Should allow previous results for the next computation", () => {
        vm.on();
        vm.keyPressed("3");
        vm.keyPressed("+");
        vm.keyPressed("3");
        vm.keyPressed("=");
        expect(vm.displayText).toBe("6");
        vm.keyPressed("+");
        vm.keyPressed("1");
        vm.keyPressed("=");
        expect(vm.displayText).toBe("7");
    });

    /*
     * Format the numbers
     * 
     */
    it("Should format the number with , and display", () => {
        vm.on();
        vm.keyPressed("1");
        vm.keyPressed("1");
        vm.keyPressed("0");
        vm.keyPressed("0");
        vm.keyPressed("0");
        vm.keyPressed("0");

        setTimeout(() => { // Give some time
            expect(vm.displayText).toBe("110,000");
        }, 300);

        vm.keyPressed("1");
        vm.keyPressed("2");
        vm.keyPressed("3");
        vm.keyPressed("4");
        vm.keyPressed("5");
        setTimeout(() => { // Give some time
            expect(vm.displayText).toBe("110,000.12345");
        }, 300);
    });

});