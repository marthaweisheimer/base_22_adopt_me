<template>
  <div id="app">
    <div class="container-fluid row" id="header">
      <adopt-me-branding class="col-7"/>
      <Menu class="col-5" id="header-menu" />
    </div>
    <div>
      <router-view class="content" />
    </div>
    <div class="container-fluid" id="footer">
      <Footer class="footer-menu"></Footer>
    </div>
  </div>
</template>

<script>
import AdoptMeBranding from './components/AdoptMeBranding.vue'
import Footer from './components/Footer.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    AdoptMeBranding,
    Footer,
    Menu
  }
}
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
