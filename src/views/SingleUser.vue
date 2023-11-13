<script setup lang="ts">
import { useRoute } from 'vue-router'
import BoiteUtilisateur from '@/components/BoiteUtilisateur.vue';
import {onMounted, ref} from "vue";
import Feed from "@/views/Feed.vue";

const route = useRoute()
const id = Number(route.params.id)

const fauxUtilisateur = ref({
  id: id,
  login: 'chargement',
  adresseEmail: 'chargement',
  premium: false
});

onMounted(() => {
  fetch('https://webinfo.iutmontp.univ-montp2.fr/~polletm/r5.a.05-programmationavancee-web-td4/public/api/utilisateurs/' + id)
      .then(reponsehttp => reponsehttp.json())
      .then(reponseJSON => {
        fauxUtilisateur.value = reponseJSON;
      });
})

</script>

<template>
  <div>
    <BoiteUtilisateur :utilisateur="fauxUtilisateur" />
    <Feed :idUtilisateur="id" />
  </div>
</template>

<style scoped>
</style>
