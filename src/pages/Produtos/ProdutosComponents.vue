<template>
  <div>
    <DashBoardComponent>
      <div class="main" slot="slot-pages">
        <div class="pages">
          <h1>Produtos</h1>
          <div>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
                    v-model="form.nome"
                    type="Nome"
                    placeholder="Nome"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group class="col-2"
                  id="input-group-2"
                  label="Preço de Compra:"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    placeholder="R$"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group class="col-1"
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

                <b-form-group class="col-2"
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
                <b-form-group class="col-3"
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

                <b-form-group  class="col-3"
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
                
                <b-form-group  class="col-2"
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

                <b-form-group  class="col-3"
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
                </b-form-group>
              </div>
              <b-button type="submit" class="mr-1" variant="primary"
                >Salvar</b-button
              >
              <b-button type="reset" variant="danger">Excluir</b-button>
            </b-form>
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
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
      methods: {
        onSubmit(event) {
          event.preventDefault();
          alert(JSON.stringify(this.form));
        },
        onReset(event) {
          event.preventDefault();
          // Reset our form values
          this.form.email = "";
          this.form.name = "";
          this.form.food = null;
          this.form.checked = [];
          // Trick to reset/clear native browser form validation state
          this.show = false;
          this.$nextTick(() => {
            this.show = true;
          });
        },
      },
    };
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />