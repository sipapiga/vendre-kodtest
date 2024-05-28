<template>
  <div class="card box-shadow" :id="'card-'+ id">
    <div class="card-image mx-auto">
      <img :src="avatar" :alt="first_name + '-image'" />
    </div>
    <div class="card-body">
      <h3>{{ first_name }} {{ last_name }}</h3>
      <div class="card-contact flex justify-center my-4">
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
    id:{
      type:Number,
      required:true
    },
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
