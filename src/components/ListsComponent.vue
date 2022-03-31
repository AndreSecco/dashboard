<template>
  <div class="lists">
    <div class="top top-title">
      <p>{{ description  }}  <span class="badge badge-info">{{ data.length }} </span></p>
    </div>
    <div class="content top">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">{{ columns[0] }}</th>
            <th scope="col">{{ columns[1] }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <th scope="row">{{ item.id}}</th>
            <td>{{item.nomeProd}}</td>
            <td>{{ (descritpion == 'Clientes') ? item.email : item.descricao}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListsComponents",
  props:{
      data: Array,
      description: String,
      columns: {},
  },
};
</script>
<style lang="scss" scoped>
.lists {
  box-shadow: 0px 0px 15px -9px #00000059;
  border-radius: 10px;
  background-color: #fff;
  padding: 15px;

  .top {
    text-align: left;
  }
  .top-title{
    font-size: 19px;
  }

}

</style>