<template>
  <Header />
  <Main />
</template>

<script>
import Header from "./Header.vue";
import Main from "./Main.vue";

export default {
  name: "Home",
  components: { Header, Main },
};
</script>
