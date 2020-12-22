<template>
    <div class="float-container">
        <div class="sidebar">
            <div class="side-nav p-12">
                <router-link to="/studio/videos">
                    Videos
                </router-link>
            </div>
            <div class="side-nav p-12">
                <router-link to="/studio/views-comments">
                    Views & Comments
                </router-link>
            </div>
            <div class="side-nav p-12">
                <router-link to="/studio/analytics">
                    Analytics
                </router-link>
            </div>
        </div>
        <div class="video-info">
            <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2">
                Video Title
            </label>
            <input v-model="title" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="video-title" type="text" placeholder="Video Title">
        </div>
                <div class="w-full inline-flex border-b py-8">
                    <input
                        type="file"
                        class="w-11/12 focus:outline-none focus:text-gray-600"
                        placeholder="thumbnail"
                        accept="image/jpeg,image/png,image/jpg"
                        ref="thumbnail"
                        @change="selectimage"
                    />
                </div>
                <div v-if="currentthumbnail != null">
                    <img
                        class="thumbnail-img"
                        alt="User avatar"
                        v-bind:src="currentthumbnail"
                    />
                </div>
            <div class="border border-dashed border-gray-500 relative">
                <input @change="selectedvideo" ref="video" accept="video/mp4" type="file" id="video" multiple class="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50 sele">
                <div class="text-center p-10 absolute top-0 right-0 left-0 m-auto">
                    <h4 v-if="videoname == null">
                        Select File your Creativity
                        <br/>to
                        Upload
                    </h4>
                    <p class="text-green-600" v-else>{{videoname}}</p>
                </div>
            </div>
            <div class="uploaded-video" v-if="video != null">
                    <video controls autoplay>
                        <source :src="currentvideo" type="video/mp4">
                        Your browser does not support the video tag.
                        <div class="player-buttons">
                        </div>
                    </video>
            </div>
            <div class="video-descriptions pt-6">
                <textarea v-model="descriptions" class="resize border rounded-md shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" placeholder="Video Descriptions">

                </textarea>
            </div>
            <div>
                <h1>Upload</h1>
                <div class="h-3 relative max-w-full rounded-full overflow-hidden">
                    <div class="w-full h-full bg-gray-200 absolute"></div>
                    <div id="bar" class="h-full bg-green-500 relative w-0"></div>
                </div>
            </div>
            <div class="upload-button">
                <button @click="uploadvideo" class="inline-block align-middle px-6 py-2 text-xs font-medium leading-6 text-center text-blue-700 uppercase transition bg-transparent border-2 border-blue-700 rounded ripple hover:bg-blue-100 focus:outline-none">
                    Upload
                </button>
            </div>
        </div>

    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Home",
    data(){
        return {
            video : null,
            title : null,
            descriptions : null,
            videoname : null,
            currentvideo : null,
            thumbnail : null,
            currentthumbnail : null
        }
    },
    methods : {
        selectimage(){
            this.thumbnail = this.$refs.thumbnail.files[0]
            this.currentthumbnail = URL.createObjectURL(this.thumbnail)
            this.$refs.thumbnail.value = null
        },
        selectedvideo(){
            this.video = this.$refs.video.files[0]
            this.videoname = this.video.name
            this.currentvideo = URL.createObjectURL(this.video)
            this.$refs.video.value = null
        },
        uploadvideo(){
            const formData = new FormData()
            formData.append("file", this.video)
            formData.append("file", this.thumbnail)
            formData.append("title", this.title)
            formData.append("diescrptions", this.descriptions)
            axios.post("http://localhost:3000/video/upload", formData, {
                headers : {
                    "token" : localStorage.getItem("authtoken")
                },
                onUploadProgress: uploadEvent =>{
                    let progress = Math.round(uploadEvent.loaded / uploadEvent.total * 100)
                    let bar = document.getElementById('bar');
                    bar.style.width = progress + "%";
                }
            })
            .then((res)=>{

                this.video = null
                this.title = null
                this.descriptions = null
                this.videoname = null
                this.currentvideo = null
                this.currentthumbnail = null
                this.selectedimage = null
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })
        }

    }
}
</script>

<style scoped>
.float-container {
    border: 3px solid #fff;
    padding: 20px;
}

.sidebar {
    width: 15%;
    float: left;
    padding: 20px;
    background-color: aliceblue;

}
#video::selection{
    background-color: red;
}
.video-info {
    width: 85%;
    float: left;
    padding: 20px;
}
.upload-button{
    padding-left: 47%;
    padding-top: 50px;
}
textarea{
    width: 100% !important;
    min-height: 100px!important;
}
.uploaded-video{
    width: 500px;
    padding-top: 30px;
}
.thumbnail-img{
    width: 500px;
    padding: 30px 0;
}
</style>