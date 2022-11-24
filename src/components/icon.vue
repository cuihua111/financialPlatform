<template>
    <component :is="props.icon"></component>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['icon'])
</script>