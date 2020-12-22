<template>
        <div class="w-full my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">


    

        <div v-for="i in videodata" :key="i.vid" class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">

            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg">

                <router-link v-bind:to="'/video/'+i.vid">
                    <img alt="Placeholder" id="videothumbnail" class="block h-auto w-full" v-bind:src="'http://localhost:3000/'+i.vthumbnailurl">
                </router-link>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <router-link v-bind:to="'/video/'+i.vid" class="no-underline hover:underline text-black overflow-hidden">
                            <p class="video-title">{{i.vtitle}}</p>
                        </router-link>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        {{ i.date }}
                    </p>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <router-link class="flex items-center no-underline hover:underline text-black" v-bind:to="'/user/' +i.auther">
                        <img alt="Placeholder" class="block w-8 h-8 rounded-full" v-bind:src="'http://localhost:3000/'+i.profile">
                        <p class="ml-2 text-sm">
                            {{i.auther}}
                        </p>
                    </router-link>
                </footer>
            </article>
        </div>

    </div>
</div>
</template>
<script>
import axios from 'axios'
export default{
    name : "Home",
    data(){
        return {
             videodata : null
        }
    },
    beforeCreate() {
        axios.get("http://localhost:3000/")
        .then((res)=>{
            console.log(res)
            this.videodata = res.data.videos
        })
        .catch((err)=>{
            console.log(err)
        })
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
#videothumbnail{
 height: 300px;
}
   

</style>