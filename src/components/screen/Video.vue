<template>
    <div>
        <div class="video-background">
            <video controls autoplay>
            <source :src="urlforvideo" type="video/mp4">
            Your browser does not support the video tag.
            </video>
        </div>
        <div class="video-discription">
            <p class="video-title">Videos Title </p>
            <p class="video-views">views : 10000 - Aug 10,2020</p>
        </div>
        <div class="video-discription">
            <td>
                <img alt="Placeholder" class="block h-auto w-full rounded-full" src="https://picsum.photos/600/400/?random">
            </td>
            <td class="video-channel">Mr.k1n1</td>
            <td class="video-channel-follow">
                <button @click="channel_follow" class="rounded-full bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                    Follow
                </button>
            </td>
        </div>
        <div class="video-discription">
            To control the font weight of an element at a specific breakpoint, add a {screen}: prefix to any existing font weight utility. For example, use md:font-bold to apply the font-bold utility at only medium screen sizes and above.o control the font weight of an element at a specific breakpoint, add a {screen}: prefix to any existing font weight utility. For example, use md:font-bold to apply the font-bold utility at only medium screen sizes and above.o control the font weight of an element at a specific breakpoint, add a {screen}: prefix to any existing font weight utility. For example, use md:font-bold to apply the font-bold utility at only medium screen sizes and above.o control the font weight of an element at a specific breakpoint, add a {screen}: prefix to any existing font weight utility. For example, use md:font-bold to apply the font-bold utility at only medium screen sizes and above.o control the font weight of an element at a specific breakpoint, add a {screen}: prefix to any existing font weight utility. For example, use md:font-bold to apply the font-bold utility at only medium screen sizes and above.o control the font weight of an element at a specific breakpoint, add a {screen}: prefix to any existing font weight utility. For example, use md:font-bold to apply the font-bold utility at only medium screen sizes and above.o control the font weight of an element at a specific breakpoint, add a {screen}: prefix to any existing font weight utility. For example, use md:font-bold to apply the font-bold utility at only medium screen sizes and above.o control the font weight of an element at a specific breakpoint, add a {screen}: prefix to any existing font weight utility. For example, use md:font-bold to apply the font-bold utility at only medium screen sizes and above.o control the font weight of an element at a specific breakpoint, add a {screen}: prefix to any existing font weight utility. For example, use md:font-bold to apply the font-bold utility at only medium screen sizes and above.o control the font weight of an element at a specific breakpoint, add a {screen}: prefix to any existing font weight utility. For example, use md:font-bold to apply the font-bold utility at only medium screen sizes and above.o control the font weight of an element at a specific breakpoint, add a {screen}: prefix to any existing font weight utility. For example, use md:font-bold to apply the font-bold utility at only medium screen sizes and above.o control the font weight of an element at a specific breakpoint, add a {screen}: prefix to any existing font weight utility. For example, use md:font-bold to apply the font-bold utility at only medium screen sizes and above.o control the font weight of an element at a specific breakpoint, add a {screen}: prefix to any existing font weight utility. For example, use md:font-bold to apply the font-bold utility at only medium screen sizes and above.o control the font weight of an element at a specific breakpoint, add a {screen}: prefix to any existing font weight utility. For example, use md:font-bold to apply the font-bold utility at only medium screen sizes and above.o control the font weight of an element at a specific breakpoint, add a {screen}: prefix to any existing font weight utility. For example, use md:font-bold to apply the font-bold utility at only medium screen sizes and above.o control the font weight of an element at a specific breakpoint, add a {screen}: prefix to any existing font weight utility. For example, use md:font-bold to apply the font-bold utility at only medium screen sizes and above.o control the font weight of an element at a specific breakpoint, add a {screen}: prefix to any existing font weight utility. For example, use md:font-bold to apply the font-bold utility at only medium screen sizes and above.
            <hr class="mt-6 video-discription">
        </div>
    </div>
</template>

<script>
export default {
    
    name: "Video",
    // beforeCreate(){
    //     alert(this.$route.params.id)
    // }
    data () {
        return {
            urlforvideo : "http://localhost:3000/video",
            testvideos : "fjkhnglti4se5",
           
        }
    },
    methods: {
        channel_follow(){
            alert("Follow Button")
        }
    }
}
</script>

<style scoped>
video {
    width: 100%;
    height: 600px;
}
.video-background{
    background-color: black;
}
.video-discription{
    padding : 0 15rem;
    margin-top: 25px;
}
.video-title{
    font-size:1.5rem;
}
.video-views{
    font-size:15px;
}
img{
    width: 40px;
    height: 40px;
}
td {
  text-align: center;
  vertical-align: middle;
}
.video-channel{
    padding-left : 10px;
    font-size: 15px;
    font-weight: 500;
}
.video-channel-follow{
    padding-left : 1200px;

}
button{
    padding: 5px 15px;
    color: white;
}

</style>