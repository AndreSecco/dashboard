<template>
  <div class="sidebar">
    <div class="top">
      <div class="avatar">
        <span><i class="fa fa-user"></i></span>
      </div>
      <div class="info">
        <p class="name">André Secco</p>
        <p class="status">Online</p>
      </div>
    </div>
    <div class="menu">
      <p class=""></p>
      <hr />
      <ul>
        <router-link :to="{ name: 'home' }"
          ><li><i class="fa fa-home icon"></i> Início</li></router-link
        >

        <router-link :to="{ name: 'sobre' }"
          ><li><i class="fa-solid fa-address-card icon"></i> Sobre</li>
        </router-link>

        <router-link :to="{ name: 'produtos' }"
          ><li>
            <i class="fa-solid fa-box-archive icon"></i> Produtos
          </li></router-link
        >

        <router-link :to="{ name: 'clientes' }"
          ><li><i class="fa-solid fa-user icon"></i> Clientes</li></router-link
        >

        <router-link :to="{ name: 'vendas' }"
          ><li>
            <i class="fa-solid fa-cash-register icon"></i> Vendas
          </li></router-link
        >

        <router-link :to="{ name: 'relatorios' }">
          <li>
            <i class="fa-solid fa-chart-line icon"></i> Relatórios
          </li></router-link
        >
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "SideBarComponent",
};
</script>
<style lang="scss">
.sidebar {
  color: #fff;

  .top {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;

    .avatar {
      margin-right: 12px;

      span {
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f7f9fc;
        color: #333745;
        font-size: 20px;
        text-align: left;
      }
    }

    .info {
      p {
        margin: 0;
        text-align: left;
      }

      .name {
      }

      .status {
        font-size: 12px;
      }
    }
  }

  .menu {
    text-align: left !important;

    ul a {
      padding: 10px;
      list-style: none;
      font-size: 16px;
      text-decoration: none;
      display: flex;
      border-radius: 9px;

      li {
        color: rgb(238 238 238);
        text-decoration: none;
        list-style: none;

        .icon {
          padding: 0px 16px;
        }
      }
    }
    a:hover {
      background-color: #2c2c3bd1 !important;
      transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      -webkit-box-flex: 1;
    flex-grow: 1;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    }
    hr {
      width: 60%;
      margin: 0 25% 25px 18%;
    }
  }
}
</style>