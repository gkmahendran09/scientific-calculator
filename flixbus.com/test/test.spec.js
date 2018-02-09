import { mount } from "vue-test-utils";
import ScientificCalculator from "../src/js/components/ScientificCalculator/ScientificCalculator.vue";
import expect from "expect";

describe("Scientific Calculator", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(ScientificCalculator);
    });

    it("Checking Power On/Off", () => {
        wrapper.vm.displayText = "";
        wrapper.vm.on();
        expect(wrapper.vm.displayText).toBe("0");
    });

});