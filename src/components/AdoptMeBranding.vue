<template>
  <div class="container-fluid">
      <router-link :to="{name: 'home'}" class="branding">
        <img src="../assets/img/logo.png" alt="AdoptMe.org logo" class="logo" />
        <span class="align-middle text-decoration-none" id="logo-link">AdoptMe.Org</span> 
      </router-link>
    </div>
</template>

<script>
export default {
	name: 'branding'
}
</script>