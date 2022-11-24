<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

import { message } from "ant-design-vue";
import 'ant-design-vue/es/message/style/css'; 

defineProps({
  msg: String
})

const router = useRouter();

const count = ref(0)


function clickFunc() {
  count.value++;
  message.info('xxxxx')
}

function toLogin(){
  router.push('/login')
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <a-button type="primary" @click="clickFunc">count is {{ count }}sssss</a-button>

    <a-button type="primary" @click="toLogin" danger>toLogin</a-button>
  </div>


</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
