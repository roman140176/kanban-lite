import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Demo from '@/demos/ReactivePropsDemo.vue'

test('удвоение пропа работает', () => {
  const wrapper = mount(Demo, { props: { count: 2 } })
  expect(wrapper.text()).toContain('удвоили: 4')
})
