import { mount } from "@vue/test-utils";
import { describe, expect, it, test } from "vitest";
import AppVue from "../App.vue";

describe('Mount', () => {
    const wrapper = mount(AppVue)

    test('Does wrapper exists', () => {
        expect(wrapper.exists()).toBe(true)
    })

    test('Detect all svg icon', () => {
        const icon = wrapper.findAll('svg.icon')
        expect(icon).toHaveLength(3)
    })

    test('Click svg icon in new folder to launch the modal', async () => {
        // get a button that contain action new folder
        const icon = wrapper.find('svg.new-folder')
        // triger the button
        await icon.trigger('click')
        // find the modal
        // const modal = wrapper.find('#myModal')
        // expect the modal show
        expect(wrapper.find('#myModal').exists()).toBe(true)
        // console.log(wrapper)
    })

    test('Close modal by clock close icon', async () => {
        // get a button that contain action new folder
        const icon = wrapper.find('.close-modal-icon')
        // triger the button
        await icon.trigger('click')
        // find the modal
        // const modal = wrapper.find('#myModal')
        // expect the modal show
        expect(wrapper.find('#myModal').exists()).toBe(false)
        // console.log(wrapper)
    })

    // const btn = wrapper
})