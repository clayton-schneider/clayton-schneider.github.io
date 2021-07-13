<template>
  <div class="glass">
    <transition name="fade" mode="out-in">
      <div class="flex" v-if="!project.name" key="home">
        <HomeDash @linkChange="handleLinkChange" />
        <HomeView :link="link" @setProjectView="setProject" />
      </div>
      <div v-else key="project">
        <Project :project="project" @close="close" />
      </div>
    </transition>
  </div>
</template>

<script>
import HomeDash from '@/components/HomeDash';
import HomeView from '@/components/HomeView';
import Project from '@/components/Project';
export default {
  name: 'Glass',
  components: { HomeDash, HomeView, Project },
  data() {
    return {
      link: 'projects',
      project: {},
    };
  },
  methods: {
    handleLinkChange(mode) {
      this.link = mode;
    },
    setProject(project) {
      this.project = project;
    },
    close() {
      this.project = {};
    },
  },
};
</script>

<style lang="scss">
.glass {
  z-index: 3;
  background: white;
  height: 80vh;
  width: 75%;
  border-radius: 3rem;
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.2)
  );
  backdrop-filter: blur(2rem);

  .flex {
    height: 100%;
    display: flex;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
