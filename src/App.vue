<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { ref } from 'vue';
import { RouterView } from 'vue-router'

const locale = ref(zhCN)
</script>

<template>
  <a-config-provider :locale="locale">
    <RouterView />
  </a-config-provider>
</template>

<style scoped>

</style>
