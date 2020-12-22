<template>
  <div class="px-64">
    <h1>All Notification From This User - {{username}}</h1>
    <div class="px-6 py-4 border-0 rounded relative mb-4">
      <span class="inline-block align-middle mr-8">
        <router-link to="/thisisdianamic" class="font-medium">
          This is a gray alert - check it out!</router-link>
      </span>
    </div>
    <div class="px-6 py-4 border-0 rounded relative mb-4">
      <span class="inline-block align-middle mr-8">
        <router-link to="/thisisdianamic" class="font-medium">
          This is a gray alert - check it out!</router-link>
      </span>
    </div>
    <div class="px-6 py-4 border-0 rounded relative mb-4">
      <span class="inline-block align-middle mr-8">
        <router-link to="/thisisdianamic" class="font-medium">
          This is a gray alert - check it out!</router-link>
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "Notification",
  data(){
    return {
      username: ""
    }
  },
  beforeCreate() {
    if(localStorage.getItem("authtoken")){
      axios.get("http://localhost:3000/account/", {
        headers: {
          "token" : localStorage.getItem("authtoken")
        }
      })
      .then((res)=>{
        this.username = res.data.user.email
        if(res.data.user.email == undefined){
          this.$router.push("/login")
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    else{
      this.$router.push("/login")
    }
      
  }
};
</script>