<template>
  <span class="orclaw-crab" aria-hidden="true" v-html="orclawAssistantCrabSvg" />
</template>

<script setup lang="ts">
import orclawAssistantCrabSvg from '@/assets/images/orclaw-assistant-crab.svg?raw'
</script>

<style scoped>
.orclaw-crab {
  display: block;
  transform-origin: 50% 90%;
  animation: orclaw-side-step 3.8s cubic-bezier(0.45, 0, 0.3, 1) infinite;
}

.orclaw-crab :deep(svg) {
  width: 100%;
  height: 100%;
  overflow: visible;
  animation: orclaw-body-bob 3.8s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: 50% 78%;
}

.orclaw-crab :deep(#body) {
  animation: orclaw-shell-settle 3.8s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: 50% 70%;
}

.orclaw-crab :deep(#eye_left),
.orclaw-crab :deep(#eye_right) {
  animation: orclaw-eye-peek 3.8s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: 50% 100%;
}

.orclaw-crab :deep(#eye_right) {
  animation-delay: -0.18s;
}

.orclaw-crab :deep(#claw_left) {
  animation: orclaw-claw-left-snap 3.8s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: 76% 92%;
}

.orclaw-crab :deep(#claw_right) {
  animation: orclaw-claw-right-snap 3.8s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: 24% 92%;
}

.orclaw-crab :deep(#claw_left > path:nth-child(1)) {
  animation: orclaw-claw-left-open 3.8s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: 78% 82%;
}

.orclaw-crab :deep(#claw_left > path:nth-child(2)) {
  animation: orclaw-claw-left-pinch 3.8s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: 38% 68%;
}

.orclaw-crab :deep(#claw_right > path:nth-child(1)) {
  animation: orclaw-claw-right-open 3.8s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: 22% 82%;
}

.orclaw-crab :deep(#claw_right > path:nth-child(2)) {
  animation: orclaw-claw-right-pinch 3.8s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: 62% 68%;
}

.orclaw-crab :deep(#leg_l1),
.orclaw-crab :deep(#leg_l2),
.orclaw-crab :deep(#leg_l3) {
  animation: orclaw-leg-left-step 2.6s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: 86% 52%;
}

.orclaw-crab :deep(#leg_r1),
.orclaw-crab :deep(#leg_r2),
.orclaw-crab :deep(#leg_r3) {
  animation: orclaw-leg-right-step 2.6s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: 14% 52%;
}

.orclaw-crab :deep(#leg_l1),
.orclaw-crab :deep(#leg_r2) {
  animation-delay: -0.15s;
}

.orclaw-crab :deep(#leg_l2),
.orclaw-crab :deep(#leg_r3) {
  animation-delay: -0.45s;
}

.orclaw-crab :deep(#leg_l3),
.orclaw-crab :deep(#leg_r1) {
  animation-delay: -0.8s;
}

@keyframes orclaw-side-step {
  0%,
  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  18% {
    transform: translate3d(-3px, 1px, 0) rotate(-0.35deg);
  }
  42% {
    transform: translate3d(5px, -1px, 0) rotate(0.28deg);
  }
  64% {
    transform: translate3d(2px, 1px, 0) rotate(-0.18deg);
  }
  82% {
    transform: translate3d(6px, 0, 0) rotate(0.22deg);
  }
}

@keyframes orclaw-body-bob {
  0%,
  100% {
    transform: translateY(0) rotate(-0.35deg);
  }
  30% {
    transform: translateY(1px) rotate(0.55deg);
  }
  58% {
    transform: translateY(-2px) rotate(-0.65deg);
  }
  78% {
    transform: translateY(1px) rotate(0.35deg);
  }
}

@keyframes orclaw-shell-settle {
  0%,
  100% {
    transform: scaleY(1) translateY(0);
  }
  45% {
    transform: scaleY(0.994) translateY(1px);
  }
  68% {
    transform: scaleY(1.004) translateY(-1px);
  }
}

@keyframes orclaw-eye-peek {
  0%,
  100% {
    transform: translateY(0) scaleY(1);
  }
  38% {
    transform: translateY(-2px) scaleY(1.02);
  }
  48% {
    transform: translateY(0) scaleY(0.9);
  }
  56% {
    transform: translateY(-2px) scaleY(1.01);
  }
}

@keyframes orclaw-claw-left-snap {
  0%,
  100% {
    transform: translate3d(0, 0, 0) rotate(-2deg);
  }
  22% {
    transform: translate3d(-2px, 2px, 0) rotate(-5deg);
  }
  50% {
    transform: translate3d(2px, -2px, 0) rotate(4deg);
  }
  72% {
    transform: translate3d(1px, -1px, 0) rotate(1deg);
  }
}

@keyframes orclaw-claw-right-snap {
  0%,
  100% {
    transform: translate3d(0, 0, 0) rotate(2deg);
  }
  22% {
    transform: translate3d(2px, -2px, 0) rotate(5deg);
  }
  50% {
    transform: translate3d(-2px, 2px, 0) rotate(-4deg);
  }
  72% {
    transform: translate3d(-1px, 1px, 0) rotate(-1deg);
  }
}

@keyframes orclaw-claw-left-open {
  0%,
  100% {
    transform: rotate(-2deg);
  }
  44% {
    transform: rotate(-11deg) translate3d(-2px, 1px, 0);
  }
  62% {
    transform: rotate(3deg) translate3d(1px, -1px, 0);
  }
}

@keyframes orclaw-claw-left-pinch {
  0%,
  100% {
    transform: rotate(1deg);
  }
  44% {
    transform: rotate(9deg) translate3d(2px, -1px, 0);
  }
  62% {
    transform: rotate(-4deg) translate3d(-1px, 1px, 0);
  }
}

@keyframes orclaw-claw-right-open {
  0%,
  100% {
    transform: rotate(2deg);
  }
  44% {
    transform: rotate(11deg) translate3d(2px, 1px, 0);
  }
  62% {
    transform: rotate(-3deg) translate3d(-1px, -1px, 0);
  }
}

@keyframes orclaw-claw-right-pinch {
  0%,
  100% {
    transform: rotate(-1deg);
  }
  44% {
    transform: rotate(-9deg) translate3d(-2px, -1px, 0);
  }
  62% {
    transform: rotate(4deg) translate3d(1px, 1px, 0);
  }
}

@keyframes orclaw-leg-left-step {
  0%,
  100% {
    transform: translate3d(0, 0, 0) rotate(-2deg);
  }
  28% {
    transform: translate3d(-4px, -1px, 0) rotate(4deg);
  }
  54% {
    transform: translate3d(4px, 2px, 0) rotate(-5deg);
  }
  76% {
    transform: translate3d(2px, 1px, 0) rotate(-3deg);
  }
}

@keyframes orclaw-leg-right-step {
  0%,
  100% {
    transform: translate3d(0, 0, 0) rotate(2deg);
  }
  28% {
    transform: translate3d(4px, 1px, 0) rotate(-4deg);
  }
  54% {
    transform: translate3d(-4px, -2px, 0) rotate(5deg);
  }
  76% {
    transform: translate3d(-2px, -1px, 0) rotate(3deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .orclaw-crab,
  .orclaw-crab :deep(svg),
  .orclaw-crab :deep(#body),
  .orclaw-crab :deep(#eye_left),
  .orclaw-crab :deep(#eye_right),
  .orclaw-crab :deep(#claw_left),
  .orclaw-crab :deep(#claw_right),
  .orclaw-crab :deep(#claw_left > path),
  .orclaw-crab :deep(#claw_right > path),
  .orclaw-crab :deep([id^="leg_"]) {
    animation: none;
  }
}
</style>
