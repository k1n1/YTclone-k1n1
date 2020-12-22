<template>
  <div id="app">
    <Base/>
    <router-view>
      
    </router-view>
    <!-- <Footer /> -->
  </div>
</template>
<script>
import Base from "./components/Base"
// import Footer from "./components/Footer"
export default {
  name: 'App',
  components: {
    Base,
    // Footer,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
