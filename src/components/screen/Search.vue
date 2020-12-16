<template>
    <div class="serch-result">
        <div>
            <div class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-blue-500">
                <p class="inline-block align-middle mr-8">
                    <b class="capitalize">{{quary}}</b> Serch Result
                </p>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name : "Search",
    data(){
        return {
           quary  : this.$route.params.id,
        }
    },
    watch : {
        '$route.params.id': function (id) {
                this.quary = id
        } 
    },
}
</script>

<style scoped>
h1{
    margin-bottom: 30px;
}
img{
    width:200px;
    height: 150px;
}
.video-title{
    font-size: 1.5rem;
}
.serch-result{
    padding: 0 15rem;
}
.video-auther{
    margin-top:15px;
    font-size: 1rem;
}
.video-text{
    display: vertical;
    padding-left: 20px;
}

</style>