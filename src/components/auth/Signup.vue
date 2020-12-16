<template>
  <div>
    <div class="max-w-md mx-auto bg-white shadow-xl rounded my-8">
      <div class="text-center text-gray-600 py-4">Join With </div>
      <div class="flex justify-center mb-10">
        <button
          class="flex items-center bg-gray-100 shadow-md border border-gray-200 rounded px-4 py-2 mr-2 hover:shadow-xl"
        >
          <svg
            class="fill-current text-gray-600 w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z"
            />
          </svg>
          <div class="text-indigo-700">Facebook</div>
        </button>
        <button
          class="flex items-center bg-gray-100 shadow-md border border-gray-200 rounded px-4 py-2 mr-2 hover:shadow-xl"
        >
          <svg
            class="fill-current text-gray-600 w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z"
            />
          </svg>
          <div class="text-indigo-700">GitHub</div>
        </button>
      </div>
      <div class="bg-gray-200 pt-8 pb-16">
        <div class="text-center text-gray-600 mb-6">
          Or Join with Email & Password
        </div>
        <div class="w-4/5 mx-auto">
          <div class="flex items-center bg-white rounded shadow-md mb-4">
            <span class="px-3">
              <svg
                class="fill-current text-gray-500 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"
                />
              </svg>
            </span>
            <input
              class="w-full h-12 focus:outline-none"
              type="email"
              name="email"
              placeholder="Email"
              v-model="email"
            />
          </div>
          <div class="flex items-center bg-white rounded shadow-md mb-4">
            <span class="px-3">
              <svg
                class="fill-current text-gray-500 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                />
              </svg>
            </span>
            <input
              class="w-full h-12 focus:outline-none"
              type="password"
              name="password"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <div v-if="errormessage.statusCode == 201">
            <h1 class="text-green-500 font-bold">{{ errormessage.message }}</h1>
          </div>
          <div v-else>
            <h1 class="text-red-500 font-bold">{{ errormessage.message }}</h1>
          </div>
          <button
            @click="join"
            class="bg-indigo-600 block mx-auto mt-12 text-white text-sm uppercase rounded shadow-md px-6 py-2"
          >
            Sign in
          </button>
        </div>
        <div class="text-right mr-10">
          <router-link to="/login" class="mt-8">Login</router-link>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "Signup",
  data() {
    return {
      errormessage: {
        message : "",
        statusCode : ""
      },
      email : "",
      password : "",
    };
  },
  methods:{
      join(){
          var requestbody = {
            "email": this.email,
            "password": this.password
          }
          // this.errrmsg = "Email is Already Registered"
          axios.post("http://localhost:3000/account/signup", requestbody)
          .then((res)=>{
            if(res.status == 208){
              this.errormessage.message = "Email is Already Used"
              this.errormessage.statusCode = 208
            }
            if(res.status == 201){
              this.errormessage.message = "Account Has been Created"
              this.errormessage.statusCode = 201
            } 
            if(res.status == 203){
              this.errormessage.message = "Password Must Be 8 Characters Long"
              this.errormessage.statusCode = 203
            }         
          })
          .catch((err)=>{
            console.log(err);
          })
      }
  }
};
</script>

<style>
</style>