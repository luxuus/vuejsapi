<script setup lang="ts">
import { ref } from 'vue';
import { storeAuthentification } from '@/store/storeAuthentification';
import { flashMessage} from "@smartweb/vue-flash-message";
import router from '../router/index';

const connectingUser = ref({
  login: "",
  password: ""
});

function connect(): void {
  storeAuthentification.connexion(
      connectingUser.value.login,
      connectingUser.value.password,
      () => {
        flashMessage.show({
          type: 'success',
          title: 'Connexion réussie',
        });
        router.push({name:'feed'})
      },
      () => {
        connectingUser.value.login = ""
        connectingUser.value.password = ""
        flashMessage.show({
          type: 'error',
          title: 'Connexion échouée',
        });
      }
  );
}
</script>




<template>
  <div class="wrapper">
    <div class="top">
      <h3>Création du profil</h3>
    </div>
    <form  @submit.prevent="connect" class="content">
      <div class="group">
        <label>Login</label>
        <input v-model="connectingUser.login" >
      </div>
      <div class="group">
        <label>Mot de passe</label>
        <input type="password" v-model="connectingUser.password" >
      </div>
      <button type="submit">
        Connexion
      </button>
    </form>
  </div>
</template>

<style scoped>
@import "@/components/ContentBox.css";
</style>
