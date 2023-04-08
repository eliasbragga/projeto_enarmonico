import { createLocalVue, mount } from "@vue/test-utils";
import InputComp from "@/components/InputComp.vue";
// import Vuetify from "vuetify";
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

describe("InputComp", () => {
  const localVue = createLocalVue();

  beforeEach(() => {
    Vue.use(Vuetify);
  });

  it("should emit adicionarNota event when button is clicked", async () => {
    const wrapper = mount(InputComp, {
      localVue,
      vuetify: new Vuetify(),
    });
  
    const input = wrapper.find('input');
    const button = wrapper.find('button');
    const value = 'Ab';
  
    await input.setValue(value);
  
    button.trigger('click');
  
    expect(wrapper.emitted().adicionarNota).toBeTruthy();
  
    expect(wrapper.emitted().adicionarNota[0][0]).toBe(value);
  });
});