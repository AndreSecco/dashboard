<template>
    <div class="navbarTop">
        <div style="line-height: 6px; padding-top: 12px;">
        <p style="font-size: 25px; font-family: caviar dreams; font-weight: bold;">ANDRÉ SECCO</p>
        <p style="font-size: 10px; font-weight: bold; font-family: caviar dreams;">MAIS, MELHOR E EM MENOS TEMPO</p>
        </div>
        <!-- <img src="@/assets/logo-andre.png" width="150px" alt=""> -->
        <a href="" @click.prevent="logout" class="logout"><i class="fa-solid fa-right-from-bracket"></i> Sair</a>
    </div>
</template>
<script>
export default {
    name: "NavBarComponent",
    methods:{
        logout(){
            this.$router.push({name: 'login'})
        }
    }
}
</script>
<style lang="scss" scoped>

.navbarTop{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;


    .logout{
    color: #333745;

}
}

</style>