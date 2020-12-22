<template>
    <div>
        <div class="video-background">
            <video controls autoplay>
                <source
                    v-bind:src="'http://localhost:3000/stream/'+videodata.vurl"
                    type="video/mp4">
                Your browser does not support the video tag.
                <div class="player-buttons">
                </div>
            </video>
        </div>
        <div class="video-discription">
            <p class="video-title">{{ videodata.vtitle}}</p>
            <p class="video-views">views : 10000 - {{ videodata.date }}</p>
        </div>
        <div class="video-discription">
            <td>
                <img alt="Placeholder" class="block h-auto w-full rounded-full"
                     v-bind:src="'http://localhost:3000/'+ videodata.profile">
            </td>
            <td class="video-channel">{{ videodata.auther }}</td>
            <td v-if="follow" class="video-channel-follow">
                <button @click="channel_follow(videodata.auther)"
                        class="rounded-full bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                    unFollow
                </button>
            </td>
            <td v-if="follow != null" class="video-channel-follow">
                <button @click="channel_follow(videodata.auther)"
                        class="rounded-full bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                    Follow
                </button>
            </td>
        </div>
        <div class="video-discription">
           {{videodata.vdesctiptions}}
            <hr class="mt-6 video-discription">
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {

    name: "Video",
    data() {
        return {
            videodata : null,
            videoDescription : null,
            follow : false

        }
    },
    methods: {
        channel_follow(username) {
            // alert(user)
            axios.post("http://localhost:3000/follow", {"username": username}, {
                headers:{
                    "token" : localStorage.getItem("authtoken")
                }
            })
            .then((res)=>{
                alert(res.data)
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })

        }
    },
    beforeCreate() {
        const url = `http://localhost:3000/video/${this.$route.params.id}`
        axios.get(url, {
            headers : {
                "token" : localStorage.getItem("authtoken")
            }
        })
        .then((res)=>{
            console.log(res)
            this.videodata = res.data.data.resp
            this.follow = res.data.data.follow
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
</script>

<style scoped>
video {
    width: 100%;
    height: 600px;
}

.video-background {
    background-color: black;
}

.video-discription {
    padding: 0 15rem;
    margin-top: 25px;
}

.video-title {
    font-size: 1.5rem;
}

.video-views {
    font-size: 15px;
}

img {
    width: 40px;
    height: 40px;
}

td {
    text-align: center;
    vertical-align: middle;
}

.video-channel {
    padding-left: 10px;
    font-size: 15px;
    font-weight: 500;
}

.video-channel-follow {
    padding-left: 1200px;

}

button {
    padding: 5px 15px;
    color: white;
}

.player-buttons {
    height: 128px;
    left: 50%;
    margin: -64px 0 0 -64px;
    position: absolute;
    top: 50%;
    width: 128px;
    z-index: 1;
}
</style>