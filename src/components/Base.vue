<template>
   <div>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="flex-shrink-0">
            <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
          </router-link>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Treanding</a>

              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Subscription</a>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <router-link to="/notifications" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mx-1">
              <span class="sr-only">View notifications</span>
              <!-- Heroicon name: bell -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </router-link>
            <div v-if="isuserlogin === false">
                <router-link to="/signup" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mx-1">
                  Sign up
                </router-link>
                <router-link to="/login" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mx-1">
                    Login
                </router-link>
            </div>
            <div v-else>
              <router-link to="/studio" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mx-1">
                Studio
              </router-link>
                <router-link to="/profile" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mx-1">
                    {{useremail}}
                </router-link>
                <button @click="logout" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mx-1">
                    Logout
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    -->
  </nav>
    <div class="p-8">
  <div class="bg-white flex items-center shadow-md">
    <input v-model="search" class="w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search">
    
    <div class="p-4">
      <button to="/search/" class="p-2 w-12 h-12 flex items-center justify-center" @click="searchData">
        Search
      </button>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import axios from 'axios'
export default {
    name:"Base", 
    data() {
        return {
            search : "",
            url : "",
            isuserlogin : false,
            useremail : ""
        }
    },
    methods : {
        searchData(){
            this.url = "/search/"+this.search
            this.$router.push(this.url)
        },
        logout(){
          localStorage.removeItem("authtoken")
          this.isuserlogin = false
          location.reload()
        }
    },
    beforeCreate(){
          axios.get("http://localhost:3000/account/", {
          headers: {
            "token" : localStorage.getItem("authtoken")
          }
        })
        .then((res)=>{
          if(res.data.user === undefined){
            this.isuserlogin = false;
          }else{
            this.isuserlogin = true;
            this.useremail = res.data.user.email
          }
        })
        .catch((err)=>{
          console.log(err);
        })
    }
    
}
</script>

<style scoped>
nav{
    margin : 0;
    padding : 0;
    box-sizing :border-box;
    border:none;
}
.nav-white{
    background-color:white;
    color:black;
}
.color-black{
    color:black;
}
</style>