import { request } from "./request";

export const getHomeData = async (params) => {
    return request.get('/report/mediaList', { params })
}


// 文件下载
export const exportGoods = (data) =>
    request.post("/export", data, {
        responseType: "blob",
    });