<script setup>
import { ref, watch } from 'vue';
import { breadcrumbNameFormRouter } from '/@/utils'
import { useRoute } from 'vue-router';
const route = useRoute();
let routes = ref(breadcrumbNameFormRouter());
console.log(routes.value,'aaaaa')
watch(() => route.path, () => {
    routes.value = breadcrumbNameFormRouter()
})


const basePath = '/'
</script>

<template>
    <div>
        <a-breadcrumb :routes="routes">
            <template #itemRender="{ route, paths }">
                <span v-if="routes.indexOf(route) === routes.length - 1">
                    {{ route.breadcrumbName }}
                </span>
                <router-link v-else :to="`${basePath}/${paths.join('/')}`">
                    {{ route.breadcrumbName }}
                </router-link>
            </template>
        </a-breadcrumb>
    </div>
</template>
<style lang="less">

</style>