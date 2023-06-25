import type { Directive, DirectiveBinding } from 'vue'

const vColor: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding
    el.style.color = value
  }
}

export default vColor
