import { mount } from "@vue/test-utils";
import TestComponent from '../indexComp.vue'
import ErrorMsg from '@/components/error-message/error-message/ErrorMsg.vue'

describe('test - Unit', () => {
    it.only('should contain all flags', () => {
        const wrapper = mount(TestComponent, {
            propsData: {
                test:''
            }
        })
        const vm = wrapper.vm
        const vmKeys = Object.keys(vm.$data)
        expect(vmKeys).toEqual(['name', 'idade', 'email'])

    })

    it('should contain tag p - Unit', () => {
        const wrapper = mount(TestComponent)
        const findElement = wrapper.find('h1')

        expect(findElement.exists()).toBe(true)
        
    })

    it('should exist isActive Function - Unit', async () => {
        const wrapper = mount(TestComponent)
        const spy = jest.spyOn(wrapper.vm, 'isactive');

        await wrapper.find('button').trigger('click')

        expect(spy).toHaveBeenCalled()
    })

    it('should isactive function to be defined - Unit', () => {
        const wrapper = mount(TestComponent)

        expect(wrapper.vm.isactive).toBeTruthy()
    })

    it('should exist a div - Unit', () => {
        const wrapper = mount(ErrorMsg)
        const findElement = wrapper.find('div')

        expect(findElement.exists()).toBe(true)
    })

})