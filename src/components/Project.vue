<template>
  <div class="detailed">
    <div class="detailed__top-bar">
      <h4 class="close" @click="emitClose">X</h4>
      <h2 class="detailed__name">{{ project.name }}</h2>
      <div class="detailed__links">
        <a href="www.google.com" target="_blank" class="">
          <img src="@/assets/open.png" alt="Open Link" />
        </a>
        <a href="www.google.com" target="_blank">
          <img src="@/assets/github-2.png" alt="Open GitHub" />
        </a>
      </div>
    </div>
    <div class="details">
      <div class="problem">
        <h2>The Problem:</h2>
        <p>
          {{ project.problem }}
        </p>
      </div>
      <div class="result">
        <h2>The Result:</h2>
        <p>
          {{ project.result }}
        </p>
      </div>
      <div class="technical">
        <h2>Technical:</h2>
        <p>
          {{ project.technical }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project'],
  name: 'Project',
  methods: {
    emitClose() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss">
.detailed {
  padding: 3rem;
  width: 100%;

  &__links {
    margin-left: auto;

    a:first-of-type {
      margin-right: 3rem;
    }
  }

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

.details {
  margin: 5rem auto 0;
  padding: 3rem;
  width: 90%;
  min-height: 30vh;
  border-radius: 3rem;
  background: rgba(255, 255, 255, 0.4);

  div {
    margin-top: 3rem;

    &:first-of-type {
      margin-top: 0;
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: 500;
  }
  p {
    font-size: 1.6rem;
  }
}
</style>
