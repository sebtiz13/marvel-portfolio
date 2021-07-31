<template>
  <div class="loading">
    <div class="loader" />
  </div>
</template>

<script>
export default {
  name: 'Loading',
}
</script>

<style>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color:rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  border-color: white;
}

.loader, .loader::after {
  width: 120px;
  height: 120px;
  border-width: 4px;
  border-style: solid;
  border-radius: 50%;
}

.loader::after {
  content: '';
  display: block;
  margin: -4px 0 0 -4px;
  border-color: #e62429 #e62429 transparent transparent;
  animation:spin 4s linear infinite;
}

@keyframes spin {
  100% {
    transform:rotate(360deg);
  }
}
</style>
