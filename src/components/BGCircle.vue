<template>
  <div
    class="circle"
    :style="{
      height: radius * 2 + 'rem',
      width: radius * 2 + 'rem',
      top: top + '%',
      left: left + '%',
    }"
  ></div>
</template>

<script>
export default {
  name: 'BGCircle',
  props: ['radius', 'top', 'left'],
};
</script>

<style lang="scss">
.circle {
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.75),
    rgba(255, 255, 255, 0.15)
  );

  border-radius: 50%;
  position: absolute;
  z-index: 2;
}
</style>
