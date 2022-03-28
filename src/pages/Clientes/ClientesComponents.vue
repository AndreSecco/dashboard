<template>
  <div>
    <DashBoardComponent>
      <div class="main" slot="slot-pages">
        <div class="pages">
           <h1>Clientes</h1>
        </div>
      </div>
    </DashBoardComponent>
  </div>
</template>

<script>
import DashBoardComponent from "../Dashboard/DashBoardComponent.vue";

export default {
  name: "ProdutosComponents",
  components: {
    DashBoardComponent
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />