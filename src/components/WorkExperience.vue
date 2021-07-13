<template>
  <div class="experience">
    <div class="experience__top-bar">
      <h4 class="close" @click="emitClose">X</h4>
      <h2>Work Title</h2>
    </div>
    <div class="details">
      <div>
        <h2>The Role: Role Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quia
          harum consequatur sint accusantium incidunt ducimus, non ullam
          inventore odio.
        </p>
      </div>
      <div>
        <h2>The Impact:</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa magnam
          eius rerum officia, at animi suscipit vero fugit sequi obcaecati?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkExperience',
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
