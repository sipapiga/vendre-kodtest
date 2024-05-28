<template>
  <section>
    <Hero
        title="Om oss"
        subtitle="Medarbetare"
        background-image="/assets/images/bg.jpg"
    />
  </section>
  <section class="employees-list container py-4">
    <div v-if="employeesList.length === 0 && !isLoading">Ingen data att visa...</div>
    <div class="employees-card gap-4">
      <Card
          v-for="employee in employeesList"
          :key="employee.id"
          :id="employee.id"
          :first_name="employee.first_name"
          :last_name="employee.last_name"
          :email="employee.email"
          :avatar="employee.avatar"
          :job_title="employee.job_title"
      />
    </div>

    <div class="pagination flex justify-between">
      <p class="flex items-center">Visar sida {{ currentPage }} till {{ totalPages }} av {{ totalData }} resultat</p>
      <div class="pagination-btn flex">
        <Button @click="previousPage" :disable="currentPage ===1">Previous</Button>
        <Button @click="nextPage" :disable="currentPage ===totalPages">Next</Button>
      </div>
    </div>
  </section>


</template>

<script setup>
import {onMounted} from 'vue';
import Card from '@/components/ui/Card.vue';
import {useEmployees} from '@/composables/useEmployees';

import Hero from "@/components/ui/Hero.vue";
import Button from "@/components/ui/Button.vue";

const {
  isLoading,
  currentPage,
  totalPages,
  employeesList,
  fetchData,
  nextPage,
  previousPage,
  totalData
} = useEmployees();

onMounted(() => {
  fetchData();
});
</script>