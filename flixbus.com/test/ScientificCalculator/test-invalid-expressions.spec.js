import { mount } from "vue-test-utils";
import ScientificCalculator from "../../src/js/components/ScientificCalculator/ScientificCalculator.vue";
import expect from "expect";

describe("Scientific Calculator Invalid expressions", () => {
    let wrapper, vm;

    beforeEach(() => {
        wrapper = mount(ScientificCalculator);
        vm = wrapper.vm;
    });
    /*
     * Invalid expressions
     *
     */
    it("Checks for Invalid expressions", () => {
        
        // 100 + 07
        vm.on();
        vm.keyPressed("1");
        vm.keyPressed("0");
        vm.keyPressed("0");
        vm.keyPressed("+");
        vm.keyPressed("0");
        vm.keyPressed("7");
        vm.keyPressed("=");
        expect(vm.displayText).toBe("107");

        // 100+
        vm.on();
        vm.keyPressed("1");
        vm.keyPressed("0");
        vm.keyPressed("0");
        vm.keyPressed("+");
        vm.keyPressed("=");
        expect(vm.displayText).toBe("0");
    });
});
