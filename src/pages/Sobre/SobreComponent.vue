<template>
  <div>
    <DashBoardComponent>
      <div class="main"  slot="slot-pages">
        <div class="pages">
          <h1>Sobre</h1>
          <div>
            <Icones />
            <Descricao />
          </div>
        </div>
      </div>
    </DashBoardComponent>
  </div>
</template>

<script>
import DashBoardComponent from "../Dashboard/DashBoardComponent.vue";
import Icones from './components/Icones.vue'
import Descricao from './components/Descricao.vue'

export default {
  name:'SobreComponent',
  components:{
    DashBoardComponent,
    Icones,
    Descricao
  }

};
</script>

<style lang="scss" src="./style.scss" scoped />