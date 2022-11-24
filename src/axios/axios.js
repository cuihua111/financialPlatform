import axios from "axios";
import { h } from 'vue';
import { message as antMessage, Spin } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css';
import { jumpLogin, downloadFile } from "/@/utils";
import { useHttpStatusStore } from '/@/stores/modules/httpStatus'

const loadingStore = useHttpStatusStore()
let requestNum = 0;

const addLoading = () => {
    // 增加loading 如果pending请求数量等于1，弹出loading, 防止重复弹出
    requestNum++;
    if (requestNum == 1) {
        loadingStore.changeStatus(true)
    }
};

const cancelLoading = () => {
    // 取消loading 如果pending请求数量等于0，关闭loading
    requestNum--;
    if (requestNum === 0) loadingStore.changeStatus(false)
};

export const createAxiosByinterceptors = config => {
    const instance = axios.create({
        timeout: 1000,    //超时配置
        withCredentials: true,  //跨域携带cookie
        ...config,   // 自定义配置覆盖基本配置
    });

    // 添加请求拦截器
    instance.interceptors.request.use(
        function (config) {
            // 在发送请求之前做些什么
            const { loading = true } = config;
            console.log("config:", config);
            // config.headers.Authorization = vm.$Cookies.get("vue_admin_token");
            if (loading) addLoading();
            return config;
        },
        function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        }
    );

    // 添加响应拦截器
    instance.interceptors.response.use(
        function (response) {
            // 对响应数据做点什么
            console.log("response:", response);
            const { loading = true } = response.config;
            if (loading) cancelLoading();
            const { code, data, message } = response.data;
            // config设置responseType为blob 处理文件下载
            if (response.data instanceof Blob) {
                return downloadFile(response);
            } else {
                if (code == 200) return data;
                else if (code == 401) {
                    jumpLogin();
                } else {
                    antMessage.error(message || 'error');
                    return Promise.reject(response.data);
                }
            }
        },
        function (error) {
            // 对响应错误做点什么
            console.log("error-response:", error);
            // console.log("error-config:", error.config);
            // console.log("error-request:", error.request);
            const { loading = true } = error.config;
            if (loading) cancelLoading();
            if (error.response) {
                if (error.response.status == 401) {
                    jumpLogin();
                }
            }
            antMessage.error(error?.response?.data?.message || "服务端异常");
            return Promise.reject(error);
        }
    );
    return instance;
};
