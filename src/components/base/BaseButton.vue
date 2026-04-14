<template>
  <RouterLink
    v-if="to"
    :to="to"
    :class="buttonClasses"
  >
    <slot />
  </RouterLink>

  <button
    v-else
    :type="type"
    :disabled="disabled"
    :class="buttonClasses"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type ButtonVariant = 'primary' | 'secondary'
type NativeButtonType = 'button' | 'submit' | 'reset'

const props = withDefaults(
  defineProps<{
    to?: string
    variant?: ButtonVariant
    type?: NativeButtonType
    disabled?: boolean
  }>(),
  {
    to: undefined,
    variant: 'primary',
    type: 'button',
    disabled: false,
  },
)

// Shared class generation keeps links and buttons visually consistent.
const buttonClasses = computed(() => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2'
  const disabledClasses = props.disabled ? 'cursor-not-allowed opacity-60' : ''

  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700',
    secondary: 'border border-zinc-300 bg-white text-zinc-950 hover:border-rose-400 hover:text-rose-700',
  }

  return [baseClasses, variantClasses[props.variant], disabledClasses].filter(Boolean).join(' ')
})
</script>
