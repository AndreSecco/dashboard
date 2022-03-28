<template>
    <div class="dashmain">
        <div class="sidebar">
                <SideBarComponent />
        </div>
        <div class="content-right">

            <div class="navbar">
                <NavBarComponent />
            </div>
            <div class="content-pages">
                <slot name="slot-pages"></slot>
            </div>
        </div>
    </div>
</template>
<script>
import NavBarComponent from './components/NavBarComponent.vue'
import SideBarComponent from './components/SideBarComponent.vue'

export default {
 name:"DashBoardComponent",
components:{
    NavBarComponent,
    SideBarComponent
}
}
</script>
<style lang="scss" src="./style.scss" scoped />