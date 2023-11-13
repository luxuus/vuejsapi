<script setup lang="ts">

import {storeAuthentification} from "@/store/storeAuthentification";
import {ref} from "vue";

const message = ref("");
const emit = defineEmits<{updated: []}>()

function envoyer(): void {
  fetch("https://webinfo.iutmontp.univ-montp2.fr/~polletm/r5.a.05-programmationavancee-web-td4/public/api/publications", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ storeAuthentification.JWT
    },
    body: JSON.stringify({message: message.value}),
  }).then(
    (response) => {
      if (response.status === 201) {
        emit("updated");
      }
    }
  );
}
</script>

<template>
  <div class="wrapper">
    <div class="top">
      <h3>Nouveau message</h3>
    </div>
    <form  @submit.prevent="envoyer">
      <div class="group">
        <label>Message</label>
        <input v-model="message" >
      </div>
      <button type="submit">
        Envoyer
      </button>
    </form>
  </div>
</template>
