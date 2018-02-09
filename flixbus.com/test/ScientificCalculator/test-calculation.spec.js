import { mount } from "vue-test-utils";
import ScientificCalculator from "../../src/js/components/ScientificCalculator/ScientificCalculator.vue";
import expect from "expect";

describe("Scientific Calculator Calculation", () => {
    let wrapper, vm;

    beforeEach(() => {
        wrapper = mount(ScientificCalculator);
        vm = wrapper.vm;
    });
    /*
     * Basic calculations - +, -, *, /, %
     *
     */
    it("Checks for Basic calcuations", () => {
        vm.on();

        // Addition
        vm.keyPressed("1");
        vm.keyPressed("0");
        vm.keyPressed("0");
        vm.keyPressed("+");
        vm.keyPressed("7");
        vm.keyPressed("=");
        expect(vm.displayText).toBe("107");

        // Subtraction
        vm.keyPressed("3");
        vm.keyPressed("-");
        vm.keyPressed("3");
        vm.keyPressed("=");
        expect(vm.displayText).toBe("0");

        // Multipilication
        vm.keyPressed("3");
        vm.keyPressed("*");
        vm.keyPressed("3");
        vm.keyPressed("=");
        expect(vm.displayText).toBe("9");

        // Division
        vm.keyPressed("3");
        vm.keyPressed("/");
        vm.keyPressed("3");
        vm.keyPressed("=");
        expect(vm.displayText).toBe("1");

        // Mod
        vm.keyPressed("3");
        vm.keyPressed("%");
        vm.keyPressed("3");
        vm.keyPressed("=");
        expect(vm.displayText).toBe("0");

        // Sqrt
        vm.keyPressed("4");
        vm.keyPressed("√");
        expect(vm.displayText).toBe("2");
    });

});