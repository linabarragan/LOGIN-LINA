<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import VideoComponent from './components/VideoComponent.vue'
</script>

<template>
  <div class="app-container">
    <header class="header">
      <HeaderComponent></HeaderComponent>
    </header>
    <section class="section">
      <div class="vistas">
        <RouterView></RouterView>
      </div>
      <div class="video">
        <VideoComponent></VideoComponent>
      </div>
    </section>
    <footer class="footer">
      <FooterComponent></FooterComponent>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  background-image: linear-gradient(
    -80deg,
    #bbffff 0,
    #a2fdfc 12.5%,
    #83f2f9 25%,
    #5ce6f7 37.5%,
    #06d8f5 50%,
    #00caf4 62.5%,
    #00bdf5 75%,
    #00b1f6 87.5%,
    #00a5f7 100%
  );
}

.header {
  height: 20vh;
}

.section {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
}

.vistas {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.video {
  flex: 1;
}

.footer {
  height: 15vh;
}
</style>
