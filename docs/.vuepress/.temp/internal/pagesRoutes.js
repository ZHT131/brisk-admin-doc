import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-756f05ca","/components/crud.html","",["/components/crud","/components/crud.md"]],
  ["v-eb14d09e","/guide/changelog.html","更新日志",["/guide/changelog","/guide/changelog.md"]],
  ["v-1c7b2593","/guide/introduction.html","介绍",["/guide/introduction","/guide/introduction.md"]],
  ["v-621628ba","/guide/start.html","开始",["/guide/start","/guide/start.md"]],
  ["v-5539b51c","/other/donate.html","赞助",["/other/donate","/other/donate.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
