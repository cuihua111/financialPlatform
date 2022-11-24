<script setup>
import SiderComponent from './sider/index.vue';
import HeaderComponent from './header/index.vue';
import ContentComponent from './content/index.vue';
import FooterComponent from './footer/index.vue';

</script>

<template>
    <a-layout has-sider>
        <SiderComponent />
        <a-layout :style="{ marginLeft: '200px' }">
            <HeaderComponent />
            <ContentComponent />
            <FooterComponent/>
        </a-layout>
    </a-layout>
</template>

<style scoped>

</style>