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
     * Test case - 1
     * -------------
     * Once the computation is completed, the next input
     * should be considered as a new entry.
     * Example - 3 + 3 = 6
     * For the next input(1) it should start fresh ( should be '1' NOT '61')
     */
    it("Should start fresh for the next computation", () => {
        vm.on();
        vm.keyPressed("3");
        vm.keyPressed("+");
        vm.keyPressed("3");
        vm.keyPressed("=");
        vm.keyPressed("1");
        expect(vm.displayText).toBe("1");
    });

});