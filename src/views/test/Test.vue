<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function toHome() {
    router.push({ path: '/home' })
}
</script>
<template>
   <div>
    <div>test router page</div>
    <a-button type="primary" @click="toHome">to home</a-button>
   </div>
</template>
<style scoped>

</style>