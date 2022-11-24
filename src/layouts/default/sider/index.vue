<script setup>

import MenuComponent from '/@/layouts/default/menu/index.vue'
</script>

<template>
    <div>
        <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }">
            <div class="logo">
                <img width="100" src="../../../assets/image/logo.png" alt="">
            </div>
            <div class="sider_container">
                <MenuComponent/>
            </div>
        </a-layout-sider>
    </div>
</template>

<style lang="less" scoped>
.logo {
    padding: 15px 0;
    text-align: center;
    vertical-align: middle;
}

.sider_container {
    height: calc(100% - 58px);
    overflow-y: auto;
}
</style>