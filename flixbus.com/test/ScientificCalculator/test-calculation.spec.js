import { mount } from "vue-test-utils";
import ScientificCalculator from "../../src/js/components/ScientificCalculator/ScientificCalculator.vue";
import expect from "expect";

/*
* Basic calculations - +, -, *, /, %
*
*/
describe("Scientific Calculator Basic Calculation", () => {
    let wrapper, vm;

    beforeEach(() => {
        wrapper = mount(ScientificCalculator);
        vm = wrapper.vm;
    });

    // Addition
    it("Addition", () => {
        vm.on();

        vm.keyPressed("1");
        vm.keyPressed("0");
        vm.keyPressed("0");
        vm.keyPressed("+");
        vm.keyPressed("7");
        vm.keyPressed("=");
        expect(vm.displayText).toBe("107");
    });

    // Subtraction
    it("Subtraction", () => {
        vm.on();

        vm.keyPressed("3");
        vm.keyPressed("-");
        vm.keyPressed("3");
        vm.keyPressed("=");
        expect(vm.displayText).toBe("0");
    });

    // Multipilication
    it("Multiplication", () => {
        vm.on();

        vm.keyPressed("3");
        vm.keyPressed("*");
        vm.keyPressed("3");
        vm.keyPressed("=");
        expect(vm.displayText).toBe("9");
    });

    // Division
    it("Division", () => {
        vm.on();

        vm.keyPressed("3");
        vm.keyPressed("/");
        vm.keyPressed("3");
        vm.keyPressed("=");
        expect(vm.displayText).toBe("1");
    });

    // Mod
    it("Mod", () => {
        vm.on();

        vm.keyPressed("3");
        vm.keyPressed("%");
        vm.keyPressed("3");
        vm.keyPressed("=");
        expect(vm.displayText).toBe("0");
    });

    // Sqrt
    it("Sqrt", () => {
        vm.on();

        vm.keyPressed("4");
        vm.keyPressed("√");
        expect(vm.displayText).toBe("2");
    });

});