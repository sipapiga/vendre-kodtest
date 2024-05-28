<template>
  <article>
    <Header />
    <Home />
  </article>
</template>

<script>
import Home from "@/components/Home.vue";
import Header from "@/components/Header.vue";

export default {
  name: "IndexPage",
  components: {
    Home,
    Header
  },
};
</script>
