
import { message } from 'ant-design-vue';
import { pageRoutes } from '/@/router/routes/pageRoutes'
/**
 *   跳转登录
 */
export const jumpLogin = () => {
    // vm.$Cookies.remove("vue_admin_token");
    // vm.$router.push(`/login?redirect=${encodeURIComponent(vm.$route.fullPath)}`);
};

/**
 * @description 重组路由，为了面包屑
 * @return {Array[Object]} [{breadcrumbName:'xx',path:'/xx',children:[{breadcrumbName:'xxxx',path:'/xxxx'}]}]
 */

export const breadcrumbNameFormRouter = () => {
    const getPathAndName = (data) => {
        let breadcrumbItem = {
            path: data.path,
            breadcrumbName: data.name
        }
        let childrenArray = [];
        if (data.children && data.children.length) {
            for (let index = 0; index < data.children.length; index++) {
                const element = data.children[index];
                childrenArray.push(getPathAndName(element))
            }
            return childrenArray
        } else {
            return breadcrumbItem
        }
    }
    let breadcrumbName = [];
    pageRoutes.map(item => {
        console.log([...item.children],'itemitemitemitem')
        let childrenResult = undefined;
        if (location.href.includes(item.path)) {
            childrenResult = getPathAndName(item);
        } else {
            return
        }
        let finlydataItem = {
            path: item.path,
            breadcrumbName: item.breadcrumbName,
            children: childrenResult
        }
        breadcrumbName.push(finlydataItem)
        breadcrumbName.push({path:'/aaaaa',breadcrumbName:'aaaaa'})
    })
    return breadcrumbName
}

/**
 * 下载文件
 * @param response
 * @returns
 */
export const downloadFile = (response) => {
    console.log("response.data.type:", response.data.type);
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = function () {
            try {
                console.log("result:", this.result);
                const jsonData = JSON.parse(this.result); // 成功 说明是普通对象数据
                if (jsonData?.code !== 200) {
                    message.error(jsonData?.message ?? "请求失败");
                    reject(jsonData);
                }
            } catch (err) {
                // 解析成对象失败，说明是正常的文件流
                const blob = new Blob([response.data]);
                // 本地保存文件
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                const filename = response?.headers?.["content-disposition"]
                    ?.split("filename*=")?.[1]
                    ?.substr(7);
                link.setAttribute("download", decodeURI(filename));
                document.body.appendChild(link);
                link.click();
                resolve(response.data);
            }
        };
        fileReader.readAsText(response.data);
    });
};