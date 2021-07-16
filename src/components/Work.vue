<template>
  <div class="works">
    <h2>Work</h2>

    <div class="work-container">
      <div
        class="work"
        v-for="(work, index) in works"
        :key="work.name"
        @click="setWork(index)"
      >
        <div class="work__image">
          <img :src="`../assets/${work.image}`" :alt="work.alt" />
        </div>
        <div class="work__info">
          <h2>{{ work.name }}</h2>
          <p>{{ work.short }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Work',
  data() {
    return {
      works: [
        {
          image: 'pratt.png',
          alt: 'MVC image',
          name: 'Pratt & Whitney: Senior Design',
          short: 'Led automation to process lab data',
          summary:
            'Pratt & Whitney has a lab that is focused on improving the thermal barrier coatings that go on their jet engines. Their lab had five sensors each collecting data once per second. After their tests were completed they would process all this data by hand in excel to be able to understand what happened in their tests. I created an electron app that allowed them to upload their data to be stored and processed automatically, all while following strict ITAR regulations.',
        },
        {
          image: 'carling.png',
          alt: 'Carling Tech image',
          name: 'Carling Technologies: Process Improvement',
          short: 'Led process improvement within headquarters',
          summary:
            'Carling Technologies is a manufacturer of electrical switches. I was tasked with the responsibility of improving different processes at their headquarters with automation. For example there was one process for handling returns from customers due to quality errors. Their previous process involved paperwork and manually contacting different employees around the organization to gather data. The new system that I developed was all electronic and automatically collected data, saving the company hundreds of hours a year.',
        },
        {
          image: 'simple.png',
          alt: 'Simply Sprout image',
          name: 'Simply Sprout: Owner & Developer',
          short:
            'Developer at company that creates websites for small businesses',
          summary:
            'Responsible for client relations and leading development for customer solutions. Typical tasks include meeting with clients to understand their needs, closing sales, and then developing a solution that solves their problems.',
        },
      ],
    };
  },
  methods: {
    setWork(index) {
      const setWork = this.works[index];
      this.$emit('passUpWork', setWork);
    },
  },
};
</script>

<style lang="scss">
.works {
  padding: 5rem 10rem;
  h2 {
    font-size: 4rem;
    font-weight: 700;
    color: rgba(108, 32, 156, 0.6);
  }
}

.work {
  background: white;
  display: flex;
  margin-bottom: 3.5rem;
  max-width: 65rem;

  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.65),
    rgba(255, 255, 255, 0.85)
  );
  box-shadow: 4px 4px 4px 1px rgba(0, 0, 0, 0.1);
  border-radius: 3rem;
  padding: 2.5rem;
  transform: translateY(0);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(1rem);
    transition: transform 0.3s ease;
  }

  &__info {
    margin-left: 3rem;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);
  }

  p {
    font-size: 1.2rem;
  }
}

.work-container {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  max-height: 50rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: #ddd;
    background: linear-gradient(to bottom right, #fd7491, #a274fd);
    visibility: hidden;
  }
  &:hover::-webkit-scrollbar-thumb {
    visibility: visible;
  }
}
</style>
