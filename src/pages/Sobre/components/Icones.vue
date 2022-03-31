<template>
  <div>
      <h3>Tecnologias</h3>
    <div class="row mt-5">
      <div class="col-2">
        <img class="img" src="./img/icone-html.png" alt="HTML" />
        <p class="mt-2 text-icon">HTML</p>
      </div>
      <div class="col-2">
        <img class="img" src="./img/icone-sass.png" alt="SASS" />
        <p class="mt-2 text-icon">SASS</p>
      </div>
      <div class="col-2">
        <img class="img" src="./img/icone-vue.png" alt="VUE" />
        <p class="mt-2 text-icon">Vue JS</p>
      </div>
      <div class="col-2">
        <img class="img" src="./img/icone-bootstrap.png" alt="BootsTrap" />
        <p class="mt-2 text-icon">BootsTrap</p>
      </div>
      <div class="col-2">
        <img class="img" src="./img/icone-javascript.png" alt="JavaScript" />
        <p class="mt-2 text-icon">JavaScript</p>
      </div>
      <div class="col-2">
        <img class="img" src="./img/icone-json.png" alt="JSON" />
        <p class="mt-2 text-icon">JSON</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Icones",
};
</script>
<style lang="scss" scoped>
.img {
  height: 82px;
  width: 82px;
}
.text-icon{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
}
</style>