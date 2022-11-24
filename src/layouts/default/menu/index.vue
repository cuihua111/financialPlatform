<script setup>

import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined, BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
    MailOutlined
} from '@ant-design/icons-vue';
import { ref, h } from 'vue';

import { RouterLink } from 'vue-router';

import { menuList } from './menuList'

import CoustomIcon from "/@/components/icon.vue";

console.log(menuList, 'menuList')


const selectedKeys = ref(['1'])

</script>

<template>
    <div>
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
            <div v-for="item in menuList">
                <a-sub-menu v-if="item?.children">
                    <template #icon>
                        <CoustomIcon :icon="item?.icon" />
                    </template>
                    <template #title>{{ item?.label }}</template>
                    <a-menu-item v-for="subItem in item?.children" :key="subItem?.key">
                        <RouterLink :to="subItem?.path"> {{ subItem.label }}</RouterLink>
                    </a-menu-item>
                </a-sub-menu>
                <a-menu-item v-else :key="item.key">
                    <RouterLink :to="item?.path">
                        <CoustomIcon :icon="item?.icon" />
                        <span class="nav-text">{{ item?.label }}</span>
                    </RouterLink>

                </a-menu-item>
            </div>
        </a-menu>
    </div>
</template>

<style scoped>

</style>