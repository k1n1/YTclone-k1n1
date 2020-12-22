<template>
    <div>
        <h1>Video by User</h1>
        <h1>{{quary}}</h1>
    </div>
</template>

<script>
export default {
name: "Videobyuser",
    data(){
    return {
        quary  : this.$route.params.id,
    }
    }
}
</script>

<style scoped>

</style>