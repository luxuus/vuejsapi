<script setup lang="ts">
    import { useRoute } from 'vue-router'
    import BoitePublication from "@/components/BoiteUtilisateur.vue";
    import {onMounted} from "vue";
    const route = useRoute()
    const id = route.params.id

    const faussePublication = ref({
      id:3,
      message:"Hello world !!",
      datePublication:"2023-09-15T12:02:09.037Z",
      auteur:{
        id:4,
        adresseEmail:"toto@gouv.fr",
        login:"toto",
        premium:false
      }
    });

    onMounted(() => {
      fetch('https://webinfo.iutmontp.univ-montp2.fr/~polletm/r5.a.05-programmationavancee-web-td4/public/api/publications/' + id)
          .then(reponsehttp => reponsehttp.json())
          .then(reponseJSON => {
            faussePublication.value = reponseJSON;
          });
    })


</script>

<template>


  <div>
    <BoitePublication :publication="faussePublication"  :utilisateur="faussePublication.auteur"/>
  </div>

</template>

<style scoped>

</style>