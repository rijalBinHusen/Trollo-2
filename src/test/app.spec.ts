import { mount } from "@vue/test-utils";
import { describe, expect, it, test } from "vitest";
import AppVue from "../App.vue";

describe('Mount', () => {
    const wrapper = mount(AppVue)

    test('Does wrapper exists', () => {
        expect(wrapper.exists()).toBe(true)
    })
})