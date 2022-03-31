<template>
    <div>
        <b-alert show>{{ msg }}</b-alert>
    </div>
</template>
<script>
export default {
    name: 'Message',
    props:{
        msg: String
    }
}
</script>
