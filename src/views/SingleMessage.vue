<script setup lang="ts">
    import { useRoute } from 'vue-router'
    import BoitePublication from "@/components/BoiteUtilisateur.vue";
    const route = useRoute()
    const id = route.params.id

    const faussePublication = {
      id:3,
      message:"Hello world !!",
      datePublication:"2023-09-15T12:02:09.037Z",
      auteur:{
        id:4,
        adresseEmail:"toto@gouv.fr",
        login:"toto",
        premium:false
      }
    };

</script>

<template>


  <div>
    <BoitePublication :publication="faussePublication"  :utilisateur="faussePublication.auteur"/>
  </div>

</template>

<style scoped>

</style>