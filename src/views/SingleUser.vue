<script setup lang="ts">
import { useRoute } from 'vue-router'
import BoiteUtilisateur from '@/components/BoiteUtilisateur.vue';

const route = useRoute()
const id = Number(route.params.id)

const fauxUtilisateur = {
  id: id,
  login: 'UtilisateurFictif',
  adresseEmail: 'utilisateur@example.com',
  premium: false
};
</script>

<template>
  <div>
    <BoiteUtilisateur :utilisateur="fauxUtilisateur" />
  </div>
</template>

<style scoped>
</style>
