<template>
    <div class="my_card">
        <div class="top content">
            <h3>{{type}}</h3>
            <p class="percentagem"><i class="fa fa-arrow-up"></i> {{ percentagem}}</p>
        </div>
        <div class="footer content">
           <i :class="['fa ico iconeCard',  iconeCard,]"></i>
            <p class="qtd">{{ qtd }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'CardComponent',
    props:{
        type: String,
        percentagem: String,
        iconeCard: String,
        qtd: String
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_main";
.my_card{
    margin: 10px;
    width: 300px;
    display: flex;
    flex-direction: column;
    background-color: $branco;
    padding: 25px;
    box-shadow: 0px 0px 15px -9px #00000059;
    border-radius: 16px;

    .content{
        display: flex;
        justify-content: space-between;
       
    }
    .top{
  
    }

    .footer{
        margin-top: 10px;
    }


}
</style>


