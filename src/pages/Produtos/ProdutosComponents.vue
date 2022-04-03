<template>
  <div>
    <DashBoardComponent>
      <div class="main" slot="slot-pages">
        <div class="pages">
          <h1>Produtos</h1>
          <Message :msg="msg" v-show="msg" />
          <div>
            <b-collapse id="collapse-1" v-model="visible" class="mt-2">
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
              v-b-toggle.collapse-1
            >
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
                <tr v-for="produto in produtos" :key="produto.id">
                  <th scope="row">{{ produto.id }}</th>
                  <td>{{ produto.nomeProd }}</td>
                  <td>{{ produto.codBarras }}</td>
                  <td>R$ {{ produto.precoProd }}</td>
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
import InsereProduto from "./insereProduto.vue";
import Message from "../../components/Message.vue";

export default {
  name: "ProdutosComponents",
  components: {
    DashBoardComponent,
    InsereProduto,
    Message,
  },
  data() {
    return {
      nomeProd: null,
      idProd: null,
      precoProd: null,
      estoqueProd: null,
      codBarras: null,
      produtos: null,
      produtos_id: null,
      form: {},
      msg: null,
      show: true,
      visible: false,
    };
  },
  methods: {
    limpaCampos() {
      (this.nomeProd = ""),
      (this.precoProd = ""),
      (this.codBarras = ""),
      (this.estoqueProd = "");
    },
    // INJSERE OS PRODUTOS
    async insereProduto(e) {
      e.preventDefault();

      const data = {
        nomeProd: this.nomeProd,
        precoProd: this.precoProd,
        estoqueProd: this.estoqueProd,
        codBarras: this.codBarras,
      };

      const dataJson = JSON.stringify(data);

      const req = await fetch("https://github.com/AndreSecco/dashboard/tree/master/db/db.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await req.json();
      this.getProdutos();
      // Colocar msg de sistema
      this.msg = `Registro inserido com sucesso`;

      // Apagar mensagem
      setTimeout(() => (this.msg = ""), 2500);
      //setTimeout(() => (this.show = false), 2500);

      // Limpar os Campos
      this.limpaCampos();
    },

    // LISTA OS PRODUTOS
    async getProdutos() {
      const req = await fetch("https://github.com/AndreSecco/dashboard/tree/master/db/db.json");
      const data = await req.json();

      this.produtos = data;

      console.log(this.produtos);
    },

    // CONFIRMA EXCLUSÃO
    confirmaExclusao(id) {
      if (confirm("Deseja excluir este produto?")) this.deleteProd(id);
    },
    async deleteProd(id) {
      const req = await fetch(`https://github.com/AndreSecco/dashboard/tree/master/db/db.json/${id}`, {
        method: "DELETE",
      });

      const res = await req.json();

      // Mensagem
      this.msg = "Registro excluído com sucesso";

      setTimeout(() => {
        (this.msg = ""), (this.show = false);
      }, 2500);

      this.getProdutos();
    },

    async updateProd(id) {

      const option = event.target.value;

      const req1 =await fetch(`https://github.com/AndreSecco/dashboard/tree/master/db/db.json/${id}`)
      
      const data = await req1.json();

      this.idProd = data.id
      this.nomeProd = data.nomeProd
      this.precoProd = data.precoProd 
      this.estoqueProd = data.estoqueProd
      this.codBarras = data.codBarras

     
    },
    async confirmaUpdate(id){
       const dataJson = JSON.stringify({ 
        nomeProd: this.nomeProd,
        precoProd: this.precoProd,
        estoqueProd: this.estoqueProd,
        codBarras: this.codBarras,
      });

       const req = await fetch(`https://github.com/AndreSecco/dashboard/tree/master/db/db.json/${id}`, {
         method: "PATCH",
         headers:{"Content-Type": "application/json"},
         body: dataJson
       })

      const res = await req.json()

      console.log(res) 
      this.getProdutos()

    }
  },
  mounted() {
    this.getProdutos();
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />