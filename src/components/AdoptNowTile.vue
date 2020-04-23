<template>
  <div class="adopt-now">
      <router-link :to="{name: 'adopt'}">
        <img src="@/assets/img/girl.png" class="adopt" />
        <span class="title">Adopt Now</span> 
      </router-link>
    </div>
</template>

<script>
export default {
	name: 'adopt-now'
}
</script>