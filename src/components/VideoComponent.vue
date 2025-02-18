<template>
  <div class="video-container">
    <video class="centered-video" loop autoplay muted>
      <source src="/src/assets/video-login.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<style scoped>
.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65vh;
}

.centered-video {
  max-width: 80%;
  max-height: 80%;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  border: 1px solid black;
  object-fit: cover;
}
</style>
