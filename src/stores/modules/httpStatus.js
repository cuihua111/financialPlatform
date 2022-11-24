import { ref } from "vue";
import { defineStore } from "pinia";

export const useHttpStatusStore = defineStore('loadingStatus', () => {
    const status = ref(true);
    function changeStatus(_status) {
        status.value = _status
    }
    return { status, changeStatus }
})