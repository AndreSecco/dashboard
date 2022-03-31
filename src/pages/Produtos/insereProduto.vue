<template>
  <div>
    <b-modal
      v-model="show"
      id="modal-1"
      size="xl"
      title="Insira um Produto"
      hide-footer
    >
      
    </b-modal>
  </div>
</template>
<script>
import Message from "../../components/Message.vue";
export default {
  name: "insereProduto",
  emits: ["atualiza-lista-prod"],
  props:{
      show: Boolean
  },
  data() {
    return {
      nomeProd: null,
      precoProd: null,
      estoqueProd: null,
      codBarras: null,
      produto: null,
      msg: null,
      form: {},
      show: false,
    };
  },
  methods: {
    limpaCampos() {
      (this.nomeProd = ""),
        (this.precoProd = ""),
        (this.codBarras = ""),
        (this.estoqueProd = "");
    },

    async insereProduto(e) {
      e.preventDefault();

      const data = {
        nomeProd: this.nomeProd,
        precoProd: this.precoProd,
        estoqueProd: this.estoqueProd,
        codBarras: this.codBarras,
      };

      const dataJson = JSON.stringify(data);

      const req = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await req.json();

      // Colocar msg de sistema
      this.msg = `Registro inserido com sucesso`;

      // Apagar mensagem
      setTimeout(() => (this.msg = ""), 2500);
      //setTimeout(() => (this.show = false), 2500);

      // Limpar os Campos
      this.limpaCampos();

      //Recarregar lista de produtos
      this.$root.$emit("atualiza-lista-prod");
    },
    getProdutos(){
        
        
    }
  },
  mounted() {},
  components: {
    Message,
  },
};
</script>
