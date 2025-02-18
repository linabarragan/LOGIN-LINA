<template>
  <div class="video-container">
    <video class="centered-video" loop autoplay muted>
      <source src="/src/assets/video-login.mp4" type="video/mp4" />
      Tu navegador no soporta la etiqueta de video.
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
  max-width: 80%; /* Ancho máximo del video */
  max-height: 80%; /* Altura máxima del video */
  border-radius: 20px; /* Bordes redondeados */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5); /* Sombra para dar profundidad */
  border: 1px solid black; /* Borde blanco alrededor del video */
  object-fit: cover; /* Ajusta el video al contenedor sin distorsionar */
}
</style>
