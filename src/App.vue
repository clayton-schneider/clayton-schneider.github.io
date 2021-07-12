<template>
  <main id="app">
    <Glass />
    <BGCircle :radius="20" :top="60" :left="-5" />
    <BGCircle :radius="15" :top="40" :left="75" />
  </main>
</template>

<script>
import Glass from '@/components/Glass';
import BGCircle from '@/components/BGCircle';
export default {
  components: {
    Glass,
    BGCircle,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

$primary: #fd7491;
$secondary: #b368e3;
$third: #6c209c;

html {
  font-size: 62.5%;
}

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
}

main {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(to right top, $primary, $secondary);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
