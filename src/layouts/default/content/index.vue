<script setup>
import { useHttpStatusStore } from '/@/stores/modules/httpStatus'
import { storeToRefs } from 'pinia'
const loadingStore = useHttpStatusStore()
const { status } = storeToRefs(loadingStore)
</script>

<template>
    <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }" style="height: calc(100vh - 158px)">
        <a-spin :spinning="status" :delay="100">
            <RouterView>
                <template #default="{ Component, route }">
                    <Transition name="fade-slide" mode="out-in" appear>
                        <keep-alive>
                            <Suspense>
                                <component :is="Component" :key="route.path" />
                            </Suspense>
                        </keep-alive>
                    </Transition>
                </template>
            </RouterView>
        </a-spin>
    </a-layout-content>
</template>

<style >
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: opacity 0.5s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
}
</style>