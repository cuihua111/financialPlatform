import { createAxiosByinterceptors } from '/@/axios/axios'

const MODE  = import.meta.env.VITE_MODE;

const baseURL = MODE === 'development' ? '/api' : 'xxx';
export const request = createAxiosByinterceptors({
    baseURL
});