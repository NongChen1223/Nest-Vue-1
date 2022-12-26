<template>
  <div class="container">
    <!-- <div>
      <router-link to="/">Login</router-link>
    </div> -->
    <!-- <div>
      <router-link style="margin-left: 30px;" to="/reg">Reg</router-link>
    </div> -->
    <div class="container__login">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from "vue"
</script>

<style lang="scss" scoped>
.container {
  &__login {
    width: 100%;
    height: 100vh;
  }
}
</style>
