<script setup lang="ts">

  import type {Ref} from "vue";
  import type {Utilisateur} from "@/types";
  import {onMounted, ref} from "vue";
  import BoiteUtilisateur from "@/components/BoiteUtilisateur.vue";

  const users = ref([]);

  onMounted(() => {
    fetch('https://webinfo.iutmontp.univ-montp2.fr/~polletm/r5.a.05-programmationavancee-web-td4/public/api/utilisateurs')
        .then(reponsehttp => reponsehttp.json())
        .then(reponseJSON => {
          users.value = reponseJSON["hydra:member"];
        });
  })

</script>

<template>
  <BoiteUtilisateur v-for="user in users" :key="user.id" :utilisateur="user" />
</template>

<style scoped>

</style>