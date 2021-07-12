<template>
  <div class="works">
    <h2>Work</h2>

    <div class="work-container">
      <div class="work" v-for="work in works" :key="work.name">
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
          image: 'mvc.png',
          alt: 'MVC image',
          name: 'Media Voices For Children Streaming Service',
          short: 'Custom made streaming platform using Paypal API',
        },
        {
          image: 'rec.png',
          alt: 'rec image',
          name: 'Recommendable',
          short: 'Resume storage app, with Stripe and Oauth integrations',
        },
        {
          image: 'cruise.png',
          alt: 'cruise image',
          name: 'Cruisers Motorsports',
          short: 'JAMstack website to increase customer leads',
        },
        {
          image: 'simple.png',
          alt: 'simple image',
          name: 'Simply Sprout',
          short: 'JAMstack website to increase customer leads',
        },
      ],
    };
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
