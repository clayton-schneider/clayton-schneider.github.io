<template>
  <div class="dash">
    <div class="dash__user">
      <img src="@/assets/userImg.png" alt="profile picture" />
      <h2>Clayton Schneider</h2>
      <p>Web Developer</p>
    </div>

    <div class="dash__links">
      <div
        class="dash__link"
        v-for="link in links"
        :key="link.name"
        @click="emitLinkChange(link.open)"
      >
        <img :src="`../assets/${link.image}`" alt="projects image" />
        <p>{{ link.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeDash',
  data() {
    return {
      links: [
        {
          image: 'gear.png',
          alt: 'projects image',
          name: 'Projects',
          open: 'projects',
        },
        {
          image: 'work.png',
          alt: 'work image',
          name: 'Work Experience',
          open: 'work',
        },
        {
          image: 'contact.png',
          alt: 'contact image',
          name: 'Contact',
          open: 'contact',
        },
        {
          image: 'resume.png',
          alt: 'resume image',
          name: 'Resume',
          open: 'resume',
        },
      ],
    };
  },
  methods: {
    emitLinkChange(mode) {
      this.$emit('linkChange', mode);
    },
  },
};
</script>

<style lang="scss">
.dash {
  width: 30rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.2)
  );
  border-radius: 3rem 0 0 3rem;

  &__user {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      padding-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.6);
    }
    p {
      padding-top: 0;
      font-size: 1.6rem;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.8);
    }
  }

  &__links {
    margin-top: 4rem;
    padding-left: 4.5rem;
  }

  &__link {
    cursor: pointer;
    margin-bottom: 5rem;
    display: flex;
    align-items: center;

    p {
      padding-left: 1.5rem;
      font-size: 1.8rem;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.6);
    }
  }
}
</style>
