<template>
  <div>
    <DashBoardComponent>
      <div class="main" slot="slot-pages">
        <div class="pages">
          <header>
            <h1>DashBoard</h1>
          </header>
          <div class="row">
            <div class="col">
              <CardComponent
                :type="'Clientes'"
                :iconeCard="'fa-users'"
                :qtd="clients.length"
              />
            </div>
            <div class="col">
              <CardComponent
                :type="'Produtos'"
                :iconeCard="'fa-box'"
                :qtd="produtos.length"
              />
            </div>
            <!-- <div class="col">
              <CardComponent
                :type="'Serviços'"
                :percentagem="'3%'"
                :iconeCard="'fa-store'"
                :qtd="'270'"
              />
            </div> -->
            <div class="col">
              <CardComponent
                :type="'Relatórios'"
                :percentagem="'25%'"
                :iconeCard="'fa-chart-bar'"
                :qtd="'30'"
              />
            </div>
          </div>
          <div class="row">
            <div class="container mt-3">
              <div class="row">
                <div class="col col-md-6">
                  <ListsComponent
                    :data="clients"
                    description="Clientes"
                    :columns="['Nome', 'E-mail']"
                  />
                </div>
                <div class="col col-md-6">
                  <ListsComponent
                    :data="produtos"
                    description="Produtos"
                    :columns="['Nome', 'Descrição']"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashBoardComponent>
  </div>
</template>
<script>
import DashBoardComponent from "../Dashboard/DashBoardComponent.vue";
import CardComponent from "../../components/CardComponent.vue";
import ListsComponent from "../../components/ListsComponent.vue";

const axios = require("axios").default;
//@ts-ignore
require("axios").default = require("axios");
var axiosRetry = require("axios").default;

export default {
  name: "HomeComponent",
  data() {
    return {
      clients: [],
      produtos: [],
    };
  },
  mounted() {
    this.getProdutos()
  },
  methods: {
   async getProdutos() {
      const req = await fetch("https://my-json-server.typicode.com/andresecco/dashboard/produtos/");
      const data = await req.json();

      this.produtos = data;

      console.log(this.produtos)
    },

  },
  components: {
    DashBoardComponent,
    CardComponent,
    ListsComponent,
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/_main";
.container {
  margin-left: 0px !important;
}
.col {
  padding-left: 0px;
}
</style>