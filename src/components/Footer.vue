<template>
  <div class="container-fluid" id="footer-content">
    <adopt-me-branding id="footer-branding" />
    <Menu id="footer-menu" />
    <p class="address">Main St #1245</p>
    <p class="address">Amazing City, 45677</p>
    <p id="credits">Some images were taken from unsplash.com</p>
  </div>
</template>

<script>
import Menu from './Menu'
import AdoptMeBranding from './AdoptMeBranding'

export default {
  name: 'footer-menu',
  components: {
    AdoptMeBranding,
    Menu
    }
}
</script>