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
                :percentagem="'7%'"
                :iconeCard="'fa-users'"
                :qtd="clients.length"
              />
            </div>
            <div class="col">
              <CardComponent
                :type="'Produtos'"
                :percentagem="'12%'"
                :iconeCard="'fa-box'"
                :qtd="products.length"
              />
            </div>
            <div class="col">
              <CardComponent
                :type="'Serviços'"
                :percentagem="'3%'"
                :iconeCard="'fa-store'"
                :qtd="'270'"
              />
            </div>
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
                    :data="products"
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
      products: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      let response = await axios.get("/");

      if (response.status == 200) {
        
        this.clients = response.data.clients;
        this.products = response.data.products;
      } else {
        console.log("Ocorreu um erro com os Clientes");
      }
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