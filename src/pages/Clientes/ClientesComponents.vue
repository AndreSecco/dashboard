<template>
  <div>
    <DashBoardComponent>
      <div class="main" slot="slot-pages">
        <div class="pages">
           <h1>Clientes</h1>
            <Message :msg="msg" v-show="msg" />
            <div>
            <b-collapse id="collapse-2" v-model="visible" class="mt-2">
              <b-form id="produto-form" @submit="insereProduto">
                <div class="d-flex row">
                 
                  <b-form-group
                    class="col-12 col-sm-6"
                    id="input-nomeProd"
                    label="Nome:"
                    label-for="input-1"
                  >
                    <b-form-input
                      class="col-12"
                      id="nomeProd"
                      v-model="nomeProd"
                      type="text"
                      placeholder="Nome"
                      required
                    >{{nomeProd}}</b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="col-12 col-sm-2"
                    id="input-precoProd"
                    label="Preço de Venda:"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="precoProd"
                      v-model="precoProd"
                      placeholder="R$"
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
                      id="input-estoque"
                      v-model="estoqueProd"
                      type="Estoque"
                      placeholder="Estoque"
                      required
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div class="d-flex row">
                  <b-form-group
                    class="col-6"
                    id="input-group-6"
                    label="Cód. de Barras:"
                    label-for="input-3"
                  >
                    <b-form-input
                      id="input-descricao"
                      v-model="codBarras"
                      type="Cód. de Barras"
                      placeholder="Cód. de Barras"
                      required
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div id="atlista">
                  <b-button 
                                
                    type="submit"
                    class="mr-1"
                    variant="success"
                    @click="(visible = !visible), insereProduto"
                    >Inserir</b-button
                  >
                  <b-button
                 
                    class="mr-1"
                    variant="primary"
                    @click="(visible = !visible), confirmaUpdate(idProd)"
                    >Alterar</b-button
                  >
                  <b-button
                    type="reset"
                    class="mr-1"
                    @click="(visible = !visible), limpaCampos()"
                    >Cancelar</b-button
                  >
                </div>
              </b-form>
            </b-collapse>
          </div>
          <div class="mt-3">
            <!-- Listagem -->
            <b-button
              variant="outline-primary"
              class="mb-3"
              v-b-toggle.collapse-2
            >
              Adicionar Novo Cliente</b-button
            >

            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Idade</th>
                  <th scope="col">E-mail</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="cliente in clientes" :key="cliente.id">
                  <th scope="row">{{ cliente.id }}</th>
                  <td>{{ cliente.nomeCliente }}</td>
                  <td>{{ cliente.idadeCliente }}</td>
                  <td>{{ cliente.emailCliente }}</td>
                  <td>
                    <b-button @click="updateProd(produto.id), (visible = !visible)" class="mr-2" variant="outline-primary"
                      >Editar</b-button
                    >
                    <b-button
                      @click="confirmaExclusao(produto.id)"
                      variant="outline-danger"
                      >Excluir</b-button
                    >
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
import Message from "../../components/Message.vue";

export default {
  name: "ProdutosComponents",
  components: {
    DashBoardComponent,
    Message
  },
  data(){
    return{
      clientes: null,
      nomeCliente: null,
      idadeCliente: null,
      emailCliente: null,
      form: {},
      show: true,
      msg: null
    }
  },
  methods:{
    // LISTA OS CLIENTES
    async getClientes() {
      const req = await fetch("http://localhost:3000/clientes");
      const data = await req.json();

      this.clientes = data;

      console.log(this.clientes);
    },


  },
  mounted(){
    this.getClientes()
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />