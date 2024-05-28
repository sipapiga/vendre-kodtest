<template>
  <section class="hero container">
    <img :src="backgroundImage" alt="Hero background" class="hero-img"/>
    <div class="hero-content">
      <h1>{{ title }}</h1>
      <h3>{{ subtitle }}</h3>
    </div>
  </section>
</template>
<script>
export default {
  name: "Hero",
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false
    },
    backgroundImage: {
      type: String,
      required: true
    }
  }
}
</script>