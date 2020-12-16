<template>
        <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">


    

        <div v-for="i in videodata" :key="i.id" class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">

            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg">

                <router-link to="/video/1">
                    <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
                </router-link>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <router-link to="/video/1" class="no-underline hover:underline text-black overflow-hidden">
                            <p class="video-title">{{i.videodescription}}</p>
                        </router-link>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        11/1/19
                    </p>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full" v-bind:src=i.imgurl>
                        <p class="ml-2 text-sm">
                            {{i.auther}}
                        </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>

            </article>
            <!-- END Article -->

        </div>

    </div>
</div>
</template>
<script>
export default{
    name : "Home",
    data(){
        return {
             videodata : [
                {
                    id : 1,
                    videodescription : "1 - Use the grid-flow utilities Use the grid-flow utilities",
                    imgurl : "https://picsum.photos/32/32/?random",
                    auther : "Mr.k1n1",
                    autherimg : "https://picsum.photos/32/32/?random"
                },
                {
                    id : 2,
                    videodescription : "2 - Use the grid-flow utilities Use the grid-flow utilities",
                    imgurl : "https://picsum.photos/32/32/?random",
                    auther : "Mr.k1n1",
                    autherimg : "https://picsum.photos/32/32/?random"
                },
                {
                    id : 3,
                    videodescription : "3 - Use the grid-flow utilities Use the grid-flow utilities",
                    imgurl : "https://picsum.photos/32/32/?random",
                    auther : "Mr.k1n1",
                    autherimg : "https://picsum.photos/32/32/?random"
                },
                {
                    id : 4,
                    videodescription : "4 - Use the grid-flow utilities Use the grid-flow utilities",
                    imgurl : "https://picsum.photos/32/32/?random",
                    auther : "Mr.k1n1",
                    autherimg : "https://picsum.photos/32/32/?random"
                },
            ]
        }
    },
    beforeCreate() {
        // alert ("User for Fech New data")
    }
}
</script>
<style scoped>
.video-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
}
</style>