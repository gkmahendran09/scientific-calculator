import { mount } from "vue-test-utils";
import ScientificCalculator from "../src/js/components/ScientificCalculator/ScientificCalculator.vue";
import expect from "expect";

describe("Scientific Calculator", () => {
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
        vm.displayText = "3+";
        vm.keyPressed("+");
        expect(vm.displayText).toBe("3+");
    });

    /*
     * Basic calculations - +, -, *, /, %
     *
     */
    it("Checks for Basic calcuations", () => {
        vm.on();

        // Addition
        vm.displayText = "3+3";
        vm.keyPressed("=");
        expect(vm.displayText).toBe(6);

        // Subtraction
        vm.displayText = "3-3";
        vm.keyPressed("=");
        expect(vm.displayText).toBe(0);

        // Multipilication
        vm.displayText = "3*3";
        vm.keyPressed("=");
        expect(vm.displayText).toBe(9);

        // Division
        vm.displayText = "3/3";
        vm.keyPressed("=");
        expect(vm.displayText).toBe(1);

        // Mod
        vm.displayText = "3%3";
        vm.keyPressed("=");
        expect(vm.displayText).toBe(0);

        // Sqrt
        vm.displayText = "2";
        vm.keyPressed("√");
        expect(vm.displayText).toBe("1.414214");
    });

});