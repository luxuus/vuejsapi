<script setup lang="ts">

  import type {Ref} from "vue";
  import type {Utilisateur} from "@/types";
  import {ref} from "vue";
  import BoiteUtilisateur from "@/components/BoiteUtilisateur.vue";

  const users:Ref<Utilisateur[]> = ref([
      {
        id:4,
        adresseEmail:"toto@gouv.fr",
        login:"toto",
        premium:false
      },
      {
        id:5,
        adresseEmail:"oifeozeif@azfnoza.fr",
        login:"oifeozeif",
        premium:true
      }
      ]);

</script>

<template>
  <BoiteUtilisateur v-for="user in users" :key="user.id" :utilisateur="user" />
</template>

<style scoped>

</style>