<script setup>
import { useRouter } from 'vue-router';
import { getHomeData } from '../../axios/home_api';
const router = useRouter();

function toHome() {
    router.push({ path: '/login' })
}
const data = await getHomeData({ apiHosts: 'jp' })
// console.log(data, 'aaaaa')
</script>
<template>
    <div>
        <div>home</div>
        <a-button type="primary" @click="toHome">to home</a-button>
    </div>
</template>
<style scoped>

</style>