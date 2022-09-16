import { mount } from "@vue/test-utils";
import { expect, it, describe } from "vitest";
import ModalVue from "../components/Modal.vue";

describe('Modal component', () => {
    
    it('Must be not render because the props is false', () => {
        // wrapper, mount the component first, and include the props too
        const wrapper = mount(ModalVue, {
            props: {
                isShow: false
            }
        })
        // expecting the modal element not exists
        expect(wrapper.find('span').exists()).toBe(false)
        
    })

    it('Must be render because the props is true', () => {
        // wrapper, mount the component first, and include the props too
        const wrapper = mount(ModalVue, {
            props: {
                isShow: true
            }
        })
        // expecting the modal element exists
        expect(wrapper.find('span').exists()).toBe(true)
    })
})