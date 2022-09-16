import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import NavigationVue from "../components/Navigation.vue";

describe('Component must be receive a props', () =>{
    const folder = [
        {id: 1, name: 'Test', href: "#archive"},
        {id: 2, name: 'All board', href: "#allBoard"}
      ]
    it('first anchor element must be contain text Archive', async () => {
        const wrapper = mount(NavigationVue, {
            propsData: { folder }
        })

        // await wrapper.find('a').text().toBe('Archive')
        expect(wrapper.find('a').text()).toBe('Test')
        // console.log(wrapper.html())
    })
})