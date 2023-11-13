<script setup lang="ts">

  import type {Ref} from "vue";
  import type {Publication} from "@/types";
  import {onMounted, ref} from "vue";
  import BoitePublication from "@/components/BoitePublication.vue";
  import FormulairePublication from "@/views/FormulairePublication.vue";
  import {storeAuthentification} from "@/store/storeAuthentification";

  const publications:Ref<Publication[]> = ref([]);

  onMounted( () => {
    chargerFeed()
  })

  function chargerFeed(): void {
    fetch('https://webinfo.iutmontp.univ-montp2.fr/~polletm/r5.a.05-programmationavancee-web-td4/public/api/publications')
        .then(reponsehttp => reponsehttp.json())
        .then(reponseJSON => {
          publications.value = reponseJSON["hydra:member"];
        });
  }
</script>

<template>
  <FormulairePublication @updated="chargerFeed" v-if="storeAuthentification.estConnecte"/>
  <BoitePublication :publication="publication" :key="publication.id" v-for="publication in publications" />
</template>

<style scoped>

</style>