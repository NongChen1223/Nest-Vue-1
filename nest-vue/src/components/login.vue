<template>
    <div class="layout">
        <el-tabs type="border-card">
            <el-tab-pane label="登录">
                <el-form label-position="right" label-width="60px" style="max-width: 460px" class="loginForm">
                    <el-form-item label="邮箱：">
                        <el-input v-model="form.Email" />
                    </el-form-item>
                    <el-form-item label="密码：">
                        <el-input type="password" v-model="form.password" />
                    </el-form-item>

                    <el-row>
                        <el-checkbox class="checkBox" v-model="form.isAgree" label="同意用户使用准则" name="type" />
                    </el-row>
                    <el-button v-if="form.isAgree" type="primary" class="loginBtn" @click="login">
                        登录
                    </el-button>
                </el-form>
            </el-tab-pane>
        </el-tabs>
        /div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from "vue"
const form = reactive({
    Email: "",
    password: "",
    isAgree: 0,
;



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
