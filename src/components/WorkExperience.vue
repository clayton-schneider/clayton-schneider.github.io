<template>
  <div class="experience">
    <div class="experience__top-bar">
      <h4 class="close" @click="emitClose">X</h4>
      <h2>{{ experience.name }}</h2>
    </div>
    <div class="details">
      <div>
        <h2>Summary</h2>
        <p>
          {{ experience.summary }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkExperience',
  props: ['experience'],
  methods: {
    emitClose() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss">
.experience {
  padding: 3rem;
  height: 100%;
  width: 100%;

  &__top-bar {
    display: flex;
    align-items: center;
    width: 100%;
    h2 {
      margin-left: 3rem;
      font-size: 4rem;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.7);
    }
    .close {
      font-size: 5rem;
      font-weight: 700;
      line-height: 4.5rem;
      background: linear-gradient(to bottom right, #b368e3, #fd7491);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      cursor: pointer;
    }
  }
}
</style>
