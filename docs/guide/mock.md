# 数据 mock&联调

## 前言

Mock 数据是前端开发过程中必不可少的一环，是分离前后端开发的关键链路。通过预先跟服务器端约定好的接口，模拟请求数据甚至逻辑，能够让前端开发独立自主，不会被服务端的开发进程所阻塞。

## 开发环境

如果前端应用和后端接口服务器没有运行在同一个主机端口上，你需要在 vite.config.js 中将接口请求代理到接口服务器。

### 配置

已经默认配置了本地代理，可以根据自己的要求进行修改。

```js
server: {
    host: "127.0.0.1",
    port: 8086,
    open: true,
    // 反向代理
    proxy: {
        "/api": {
            target: "http://127.0.0.1:80/",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ""),
        },
    },
},
```

## 接口请求

首先在[mock/data]中新建模拟数据接口文件，如下示例：

```js
//mock/data/admin.js
import Mock from "mockjs";

const adminUser = (params) => {
  let body = JSON.parse(params.body);
  let data = {
    page: body.page,
    size: body.size,
    rows: [],
    total: 30,
  };

  for (let index = 0; index < body.size; index++) {
    data.rows.push(
      Mock.mock({
        id: "@integer(1, 100)",
        username: "@string('lower', 5)",
        nickname: "@ctitle",
        group_id: "@integer(1, 10)",
        "group|2": {
          name: "管理员组",
          id: 1,
        },
        status: 1,
        status_text: "正常",
        createtime: "@datetime",
      })
    );
  }
  return data;
};
export { adminUser };
```

然后在[mock/index.js]中设置 mock 接口地址拦截，如下所示：

```js
import Mock from "mockjs";
import { adminUser } from "./data/admin";
Mock.mock("http://127.0.0.1/api/adminUser", "post", adminUser);
```

完成拦截转发后可以在[src/api]文件夹中新建对应代理接口文件方便统一管理，也可使用 api 文件中的公共封装方法[src/api/common.js]直接在页面发起请求，分别如下所示：

```js
//src/api/index.js
import axios from "../utils/http/axios";

export const login = (data) => {
  return axios({
    url: "api/login",
    method: "post",
    data,
    config: {},
  });
};
```

```vue
<script>
import { login } from "@/api";
import { comReq } from "@/api/common.js";

export default {
  data() {
    return {};
  },
  created() {
    //使用接口统一配置方法
    login(this.form)
      .then((res) => {
        console.log(res);
        if (res.code == 1) {
          //执行操作
        }
      })
      .catch(() => {});
    //使用接口公共封装方法
    comReq("api/adminUser", "post", {
      page: 1,
      size: 10,
    })
      .then((res) => {})
      .catch(() => {});
  },
};
</script>
```
