<template>
    <div class="layout">
        <x-from></x-from>
    </div>
</template>

<script setup lang="ts">
import XFrom from "../components/x-form/x-form.vue";
import { ref, reactive, toRefs, onMounted } from "vue";
const form = reactive({
    Email: "",
    password: "",
    isAgree: false,
});


onMounted(() => {
    console.log('login')
})
</script>

<style lang="scss" scoped>
.layout {
    position: absolute;
    left: calc(50% - 200px);
    top: 20%;
    width: 400px;
}

.loginBtn {
    width: 100px;
}

.loginForm {
    text-align: center;
}

.checkBox {
    margin-left: 7px;
}

.inpWidth {
    width: 165px;
}
</style>
