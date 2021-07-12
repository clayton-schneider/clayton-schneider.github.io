<template>
  <div class="glass">
    <HomeDash @linkChange="handleLinkChange" />
    <HomeView :link="link" />
  </div>
</template>

<script>
import HomeDash from '@/components/HomeDash';
import HomeView from '@/components/HomeView';
export default {
  name: 'Glass',
  components: { HomeDash, HomeView },
  data() {
    return {
      link: 'projects',
    };
  },
  methods: {
    handleLinkChange(mode) {
      this.link = mode;
    },
  },
};
</script>

<style lang="scss">
.glass {
  z-index: 3;
  background: white;
  min-height: 80vh;
  max-height: 80vh;
  min-width: 75%;
  border-radius: 3rem;
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.2)
  );
  backdrop-filter: blur(2rem);

  display: flex;
}
</style>
