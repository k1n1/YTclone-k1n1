<template>
  <div>
    <!-- component -->
    <section class="py-9 bg-opacity-50 h-screen">
      <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
        <div
          class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t"
        >
          <div class="max-w-sm mx-auto md:w-full md:mx-0">
            <div class="inline-flex items-center space-x-4">
              <img
                class="w-16 h-16 object-cover rounded-full"
                alt="User avatar"
                v-bind:src="profileimage"
              />

              <h1 class="text-gray-600">{{ fullname }}</h1>
            </div>
          </div>
        </div>
        <div class="bg-white space-y-6">
          <div
            class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center"
          >
            <h2 class="md:w-1/3 max-w-sm mx-auto">Account</h2>
            <div class="md:w-2/3 max-w-sm mx-auto">
              <label class="text-sm text-gray-400">Email</label>
              <div class="w-full inline-flex border">
                <input
                  type="email"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  v-model="email"
                  readonly
                />
              </div>
            </div>
          </div>
          <div
            class="md:inline-flex space-y-4 md:space-y-0 w-full px-4 text-gray-500 items-center"
          >
            <h2 class="md:w-1/3 max-w-sm mx-auto"></h2>
            <div class="md:w-2/3 max-w-sm mx-auto">
              <label class="text-sm text-gray-400">Username</label>
              <div class="w-full inline-flex border">
                <input
                  type="email"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  v-model="username"
                  readonly
                />
              </div>
            </div>
          </div>
          <hr />
          <div>
            <center v-if="profileupdatemessage.statuscode == 204">
              <h1 class="text-green-600 font-bold">
                {{ profileupdatemessage.messsage }}
              </h1>
            </center>
            <center v-else>
              <h1 class="text-red-600 font-bold">
                {{ profileupdatemessage.messsage }}
              </h1>
            </center>
          </div>
          <div
            class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center"
          >
            <h2 class="md:w-1/3 mx-auto max-w-sm">Personal info</h2>
            <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
              <div>
                <label class="text-sm text-gray-400">Full name</label>
                <div class="w-full inline-flex border">
                  <input
                    type="text"
                    v-model="fullname"
                    class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                    placeholder=""
                  />
                </div>
              </div>
              <div>
                <label class="text-sm text-gray-400">Facebook Profile</label>
                <div class="w-full inline-flex border">
                  <input
                    type="text"
                    v-model="facebook"
                    class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                    placeholder=""
                  />
                </div>
              </div>
              <div>
                <label class="text-sm text-gray-400">Twitter Profile</label>
                <div class="w-full inline-flex border">
                  <input
                    type="text"
                    v-model="twitter"
                    class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                    placeholder=""
                  />
                </div>
              </div>
              <div>
                <label class="text-sm text-gray-400">Instagram Profile</label>
                <div class="w-full inline-flex border">
                  <input
                    type="text"
                    v-model="instagram"
                    class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </div>
          <center>
            <div>
              <button
                @click="updateProfile"
                class="py-2 px-4 bg-indigo-400 text-center text-white rounded-md"
              >
                Update Profile
              </button>
            </div>
          </center>

          <br />
          <hr />
          <div>
            <center v-if="usernamemessage.statuscode == 204">
              <h1 class="text-green-600 font-bold">
                {{ usernamemessage.messsage }}
              </h1>
            </center>
            <center v-else>
              <h1 class="text-red-600 font-bold">
                {{ usernamemessage.messsage }}
              </h1>
            </center>
          </div>
          <form
            @submit.prevent="updateprofileimage"
            enctype="multipart/form-data"
          >
            <div
              class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center"
            >
              <h2 class="md:w-4/12 max-w-sm mx-auto">Change Profile Photo</h2>

              <div
                class="md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2"
              >
                <div class="w-full inline-flex border-b">
                  <input
                    type="file"
                    class="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                    placeholder="New"
                    ref="selectimage"
                    @change="selectimage"
                  />
                </div>
              </div>

              <div class="md:w-3/12 text-center md:pl-6">
                <button
                  class="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right"
                >
                  <svg
                    fill="none"
                    class="w-4 text-white mr-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Profile",
  data() {
    return {
      username: "",
      email: "",
      fullname: "",
      facebook: "",
      twitter: "",
      instagram: "",
      profileimage: null,
      profileupdatemessage: {
        messsage: "",
        statuscode: "",
      },
      usernamemessage: {
        messsage: "",
        statuscode: "",
      },
      selectprofileimage: null,
    };
  },
  methods: {
    updateProfile() {
      var requestbody = {
        fullname: this.fullname,
        facebook: this.facebook,
        twitter: this.twitter,
        instagram: this.instagram,
      };
      axios
        .post("http://localhost:3000/account/profile", requestbody, {
          headers: {
            token: localStorage.getItem("authtoken"),
          },
        })
        .then((res) => {
          if (res.status === 204) {
            this.profileupdatemessage.messsage = "Your Profile Is Updated";
            this.profileupdatemessage.statuscode = 204;
          }
          if (res.status === 203) {
            this.profileupdatemessage.messsage = "Please Try Again";
            this.profileupdatemessage.statuscode = 203;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateusername() {
      var requestbody = {
        username: this.username,
      };
      axios
        .post(
          "http://localhost:3000/account/profile/updateusername",
          requestbody,
          {
            headers: {
              token: localStorage.getItem("authtoken"),
            },
          }
        )
        .then((res) => {
          if (res.status === 204) {
            this.usernamemessage.messsage = "UserName Is Upadted";
            this.usernamemessage.statuscode = 204;
          }
          if (res.status === 208) {
            this.usernamemessage.messsage = "UserName is Taken";
            this.usernamemessage.statuscode = 208;
          }
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    selectimage() {
      this.selectprofileimage = this.$refs.selectimage.files[0];
      this.profileimage = URL.createObjectURL(this.selectprofileimage)
    },
    updateprofileimage() {
      const formData = new FormData();
      formData.append("file", this.selectprofileimage);
      axios
        .post("http://localhost:3000/account/profile/updateimage", formData, {
          headers: {
            token: localStorage.getItem("authtoken"),
          },
        })
        .then((res) => {
          this.profileimage =
            "http://localhost:3000/" + res.data.filepath.filename;
            this.selectimage = null
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  beforeCreate() {
    if (localStorage.getItem("authtoken")) {
      axios
        .get("http://localhost:3000/account/profile/", {
          headers: {
            token: localStorage.getItem("authtoken"),
          },
        })
        .then((res) => {
          if (res.data.profile.email == undefined) {
            this.$router.push("/login");
          }
          this.email = res.data.profile.email;
          this.facebook = res.data.profile.facebook;
          this.twitter = res.data.profile.twitter;
          this.fullname = res.data.profile.fullname;
          this.instagram = res.data.profile.instagram;
          this.username = res.data.profile.username;
          this.profileimage =
            "http://localhost:3000/" + res.data.profile.profilephoto;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.$router.push("/login");
    }
  },
};
</script>

<style scoped>
section {
  margin-bottom: 50px;
}
</style>