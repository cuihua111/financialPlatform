import { ref } from "vue";
import { defineStore } from "pinia";

export const useBreadcrumbName = defineStore('breadcrumbName', () => {
    const currentBreadcrumbName = ref([]);

    function changeBreadcrumbName(_arr) {
        currentBreadcrumbName.value = _arr
    }

    return { currentBreadcrumbName, changeBreadcrumbName }
}) 