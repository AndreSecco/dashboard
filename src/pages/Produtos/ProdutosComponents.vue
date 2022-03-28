<template>
  <div>
    <DashBoardComponent>
      <div class="main" slot="slot-pages">
        <div class="pages">
          <h1>Produtos</h1>
          <div>
            <b-form  v-if="show">
              <div class="d-flex" inline>
                <b-form-group
                  class="col-6"
                  id="input-group-1"
                  label="Nome:"
                  label-for="input-1"
                >
                  <b-form-input
                    class="col-12"
                    id="input-1"
                    v-model="nome"
                    type="Nome"
                    placeholder="Nome"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  class="col-2"
                  id="input-group-2"
                  label="Preço de Compra:"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="preco"
                    placeholder="R$"
                    required
                  ></b-form-input>
                </b-form-group>
<!-- 
                <b-form-group
                  class="col-1"
                  id="input-group-2"
                  label="MVA%:"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    placeholder="%"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  class="col-2"
                  id="input-group-2"
                  label="Val. Venda:"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    placeholder="Val Venda"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div inline class="d-flex">
                <b-form-group
                  class="col-3"
                  id="input-group-3"
                  label="NCM:"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-descricao"
                    v-model="form.email"
                    type="NCM"
                    placeholder="NCM:"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  class="col-3"
                  id="input-group-3"
                  label="Grupo:"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-descricao"
                    v-model="form.email"
                    type="Grupo"
                    placeholder="Grupo"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  class="col-2"
                  id="input-group-3"
                  label="Estoque:"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-descricao"
                    v-model="form.email"
                    type="Estoque"
                    placeholder="Estoque"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  class="col-3"
                  id="input-group-3"
                  label="Cód. de Barras:"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-descricao"
                    v-model="form.email"
                    type="Cód. de Barras"
                    placeholder="Cód. de Barras"
                    required
                  ></b-form-input>
                </b-form-group> -->
              </div>
              <b-button class="mr-1" variant="primary" @click="addProduto"
                >Salvar</b-button
              >
              <b-button type="reset" variant="danger">Excluir</b-button>
            </b-form>
          </div>
          <div class="mt-3">
            <!-- Listagem -->
            <b-button variant="outline-primary">
              Adicionar Novo Registro</b-button
            >
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Cod. de Barras</th>
                  <th scope="col">Preço</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in listagem" :key="item">
                  <th scope="row">{{item.id}}</th>
                  <td>{{item.nome}}</td>
                  <td>{{item.codBarras}}</td>
                  <td>R$ {{ item.preco}}</td>
                  <td>
                    <b-button variant="outline-primary">Editar</b-button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
    DashBoardComponent,
  },
  data() {
    return {
      listagem: [],
      nome: '',
      preco: '',

      form: {
      },
      show: true,
     
    };
  },
  methods: {
    adicionarListagem() {

    },
    addProduto(){
      this.listagem.push({nome:this.nome, preco:this.preco})
      this.nome = ''
      this.preco = ''
    }
  },
  created(){
    var list = [
      {id: 1, nome: 'Iphone 13 PRO', codBarras: '123546897453', preco: 7350.99}
    ]
    this.listagem = list
  }
};
</script>

<style lang="scss" src="./style.scss" scoped />