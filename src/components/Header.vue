<template>
  <div class="topbar shadow-lg">
    <div class="wrapper container py-4">
      <div class="flex flex-row justify-between items-center">
        <div class="logo">
          <a href="/">
            <img alt="logo" class="logo" src="../assets/pw_logo.svg"/>
          </a>
        </div>
        <div class="menu">
          <div class="list flex justify-between">
            <ul class="anchor_nav" id="anchor_nav">
              <Menu/>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu.vue"

export default {
  name: "Header",
  components: {Menu},
};
</script>
