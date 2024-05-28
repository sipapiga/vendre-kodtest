<template>
  <article>
    <Header />
    <Home />
    <Aboutus />
  </article>
</template>

<script>
import Home from "@/components/Home.vue";
import Header from "@/components/Header.vue";
import Aboutus from "@/components/Aboutus.vue";

export default {
  name: "IndexPage",
  components: {
    Home,
    Header,
    Aboutus,
  },
};
</script>
