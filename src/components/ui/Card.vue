<template>
  <div class="card box-shadow">
    <div class="card-image">
      <img :src="avatar" :alt="first_name + '-image'" />
    </div>
    <div class="card-body">
      <h3>{{ first_name }} {{ last_name }}</h3>
      <div class="card-contact flex justify-center">
        <a  class="gap-4" :href="'mailto:' + email">
          <ion-icon name="mail-outline"></ion-icon>
          <span>Kontakt</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    }
  }
}
</script>
