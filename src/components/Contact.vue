<template>
  <div class="contacts">
    <h2>Contact</h2>

    <div class="contact-container">
      <div
        class="contact"
        v-for="(contact, index) in contacts"
        :key="contact.name"
        @click="copyLink(index)"
      >
        <img :src="`../assets/${contact.image}`" alt="contact.name" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      contacts: [
        {
          name: 'Email',
          image: 'email.png',
          copy: 'clayton.schneider@uconn.edu',
        },
        { name: 'Phone', image: 'phone.png', copy: '203-491-8241' },
        {
          name: 'LinkedIn',
          image: 'linkedin.png',
          copy: 'https://www.linkedin.com/in/clayton-schneider-0b1194171/',
        },
        {
          name: 'GitHub',
          image: 'github.png',
          copy: 'https://github.com/clayton-schneider',
        },
      ],
    };
  },
  methods: {
    copyLink(index) {
      navigator.clipboard.writeText(this.contacts[index].copy).then(() => {
        this.$toasted.show(
          `${this.contacts[index].name} was copied to clipboard`,
          {
            position: 'bottom-center',
            duration: 3000,
          }
        );
      });
    },
  },
};
</script>

<style lang="scss">
.contacts {
  padding: 5rem 10rem;
  h2 {
    font-size: 4rem;
    font-weight: 700;
    color: rgba(108, 32, 156, 0.6);
  }
}

.contact-container {
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 15rem 15rem;
  column-gap: 7.5rem;
  row-gap: 5rem;
}

.contact {
  cursor: pointer;
  width: 15rem;
  height: 15rem;
  border-radius: 3rem;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.25),
    rgba(255, 255, 255, 0.55)
  );
  box-shadow: 4px 4px 4px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(0);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(1rem);
    transition: transform 0.3s ease;
  }
}
</style>
