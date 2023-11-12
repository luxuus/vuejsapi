<script setup lang="ts">


  import type {Ref} from "vue";
  import type {Publication} from "@/types";
  import {ref} from "vue";
  import BoitePublication from "@/components/BoitePublication.vue";

  const publications:Ref<Publication[]> = ref([
      {
        id:3,
        message:"Hello world !!",
        datePublication:"2023-09-15T12:02:09.037Z",
        auteur:{
          id:4,
          adresseEmail:"toto@gouv.fr",
          login:"toto",
          premium:false
        }
      },
      {
        id:4,
        message:"Salut le monde !!",
        datePublication:"2022-05-15T12:02:09.037Z",
        auteur:{
          id:5,
          adresseEmail:"toto@gouv.fr",
          login:"titi",
          premium:true
        }
    }
  ]);

</script>

<template>
  <BoitePublication :publication="publication" :key="publication.id" v-for="publication in publications" />
</template>

<style scoped>

</style>