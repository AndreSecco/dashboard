<template>
  <div>
    <DashBoardComponent>
      <div class="main"  slot="slot-pages">
        <div class="pages">
          <h1>Sobre</h1>
        </div>
      </div>
    </DashBoardComponent>
  </div>
</template>

<script>
import DashBoardComponent from "../Dashboard/DashBoardComponent.vue";

export default {
  name:'SobreComponent',
  components:{
    DashBoardComponent
  }

};
</script>

<style lang="scss" src="./style.scss" scoped />