<template>
  <div class="main">
    <h1>Login</h1>
    <div class="pages">
      <div class="content-login">
        <div>
          <b-form @submit="onSubmit" @reset="onReset" >
            <b-form-group
              id="input-group-1"
              label="Endereço de E-mail:"
              label-for="input-1"
            >
              <b-form-input
                class="df"
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Seu E-mail"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Seu Nome:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.name"
                placeholder="Seu Nome"
                required
              ></b-form-input>
            </b-form-group>

            <div style="display: flex">
              <b-button
                class="mr-2"
                type="submit"
                variant="primary"
                @click="login"
                >Enviar</b-button
              >
              <b-button type="reset" variant="danger">Limpar</b-button>
            </div>
          </b-form>
          <!-- <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
          </b-card> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      form: {
        email: "",
        name: "",
      },
    };
  },
  methods: {
      login(){
          this.$router.push({name: 'home'})
      }
  },
};
</script>
<style lang="scss" src="./style.scss" scoped />