<template>
  <div class="projects">
    <h2>Projects</h2>

    <div class="project-container">
      <div
        class="project"
        v-for="(project, index) in projects"
        :key="project.name"
        @click="setProject(index)"
      >
        <div class="project__image">
          <img :src="`../assets/${project.image}`" :alt="project.alt" />
        </div>
        <div class="project__info">
          <h2>{{ project.name }}</h2>
          <p>{{ project.short }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          image: 'mvc.png',
          alt: 'MVC image',
          name: 'Media Voices Children Streaming Service',
          short: 'Custom made streaming platform using Paypal API',
          githubLink: 'https://github.com/clayton-schneider/mvc-store',
          hostedLink: 'https://media-voices-dev.web.app/',
          problem:
            'Media Voices for Children (MVC) produces documentaries in the child rights space. Institutions like colleges and libraries can purchase the streaming rights to show these films, however the process was long and arduous. First, the institution would have to reach out by email to express interest in the film. MVC would then ask questions about how they intended to show the film. A streaming rights licence would then be drawn out, the institution would sign and then mail a check to MVC. These licenses were on a yearly basis and MVC would need to track when they would expire and reach back out to their customers about renewal.',
          result:
            'The new streaming platform allows MVC to manage their documentaries on a digital space. They now have full control over who can view their films. Their favorite part is that customers subscribe for the right to stream these films. No longer do they have to stress about managing licenses and tracking when a license must be renewed. Behind the scenes everything is automated so that for the customer everything is completely self-serve. The ease of use for the customer means more money in MVC’s pocket and less time managing the system.',
          technical:
            'The user interface is built in the Vue ecosystem. Vuex maintains state, while Vue Router handles any routing. The design followed Google’s material design theme and was built using Vuetify. Behind the scenes the app is powered by Firebase. Firebase powers authentication, database management, cloud functions, and hosting. The app itself connects to Paypal’s API. This connection is what makes the subscription model all possible.',
        },
        {
          image: 'rec.png',
          alt: 'rec image',
          name: 'Recommendable',
          short: 'Resume storage app, with Stripe and Oauth integrations',
          githubLink: 'https://github.com/clayton-schneider/rec-frontend',
          hostedLink: 'https://optimistic-mcclintock-6effb2.netlify.app/',
          problem:
            'Back when I was in high school and applying to colleges, one of my teachers wrote a phenomenal letter of recommendation. Years later, when it came time to apply for jobs I went looking for that letter of recommendation. Unfortunately, I couldn’t find it.',
          result:
            'Recommendable serves as a locker for any letters of recommendation you may have. The application allows you to store letters of recommendation, request a letter of recommendation from someone, and send your letters in a verified “sealed” manner',
          technical:
            'The user interface was built using Vue and Vuetify. Behind the scenes there is an Express server hosted on Heroku. The custom API allows users to perform CRUD operations around recommendations. It also connects to Stripe to allow users to purchase credits which allow them to send their recommendations in a “sealed” manner.',
        },
        {
          image: 'cruise.png',
          alt: 'cruise image',
          name: 'Cruisers Motorsports',
          short: 'JAMstack website to increase customer leads',
          githubLink: 'https://github.com/clayton-schneider/cruisers',
          hostedLink: 'https://cruisersmotorsports.com/',
          problem:
            'Cruisers Motorsports is an auto shop that specializes in high performance modifications. Previously they had no online presence. The owner shared that customers would come into the shop with the same questions: “What services do they perform?”, “How long would X project take?”, “What would X service cost?”, etc…',
          result:
            'Their new website provides business information and a path for the customer to reach out and get their questions answered about any upcoming projects they may have. The owner has told me how it has helped him with his business. He has spent less time answering repetitive questions and more time closing sales.',
          technical:
            'The website is built using Jamstack methodologies. Under the hood it is powered by Gridsome, a static site generator. For scheduling purposes the sire utilizes Calendly.',
        },
        {
          image: 'port.png',
          alt: 'portfolio image',
          name: 'This Portfolio',
          short: 'Portfolio to display my past work',
          githubLink: 'https://github.com/clayton-schneider/rec-frontend',
          hostedLink: 'https://clayton-schneider.github.io/',
          problem:
            'I would like to begin working in the web development industry. I have over two years of experience and a desire to pair my skills with a company that’s looking for a great web developer. Due to the competitive nature of the industry I need a way to stand out and highlight my skills so that I can separate myself from the rest.',
          result:
            'You are now on my portfolio looking through past examples of work and projects that I have worked on. I am now able to show and demonstrate my skills and competencies.',
          technical: 'This website is built on Vue',
        },
      ],
    };
  },
  methods: {
    setProject(index) {
      const setProject = this.projects[index];
      this.$emit('passUpProject', setProject);
    },
  },
};
</script>

<style lang="scss">
.projects {
  padding: 5rem 10rem;
  h2 {
    font-size: 4rem;
    font-weight: 700;
    color: rgba(108, 32, 156, 0.6);
  }
}

.project {
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

.project-container {
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
