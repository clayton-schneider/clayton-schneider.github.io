<template>
  <div class="home-view">
    <transition name="component-fade" mode="out-in">
      <component
        :is="link"
        @passUpProject="emitSetProject"
        @passUpWork="emitSetWork"
      >
      </component>
    </transition>
  </div>
</template>

<script>
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
export default {
  name: 'HomeView',
  props: ['link'],
  components: {
    Projects,
    Resume,
    Work,
    Contact,
  },
  methods: {
    emitSetProject(project) {
      this.$emit('setProjectView', project);
    },
    emitSetWork(work) {
      this.$emit('setWork', work);
    },
  },
};
</script>

<style lang="scss">
.home-view {
  width: 100%;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
  transform: translateX(10rem);
}
</style>
