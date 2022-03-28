<template>
  <div>
    <DashBoardComponent>
      <div class="main" slot="slot-pages">
        <div class="pages">
           <h1>Vendas</h1>
        </div>
      </div>
    </DashBoardComponent>
  </div>
</template>

<script>
import DashBoardComponent from "../Dashboard/DashBoardComponent.vue";

export default {
  name: "VendasComponents",
  components: {
    DashBoardComponent
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />