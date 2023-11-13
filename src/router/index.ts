import { createRouter, createWebHistory } from 'vue-router'
import Feed from "@/views/Feed.vue"
import AllUsers from "@/views/AllUsers.vue"
import SingleMessage from "@/views/SingleMessage.vue"
import SingleUser from "@/views/SingleUser.vue"
import Login from "@/views/Login.vue"

const router = createRouter({
  history: createWebHistory(''),
  routes: [
    {
      path: '/',
      name: 'feed',
      component: Feed
    },
    {
      path: '/feed',
      name: 'feed',
      component: Feed
    },
    {
      path: '/users',
      name: 'AllUsers',
      component: AllUsers
    },
    {
      path: '/users/:id',
      name: 'singleUser',
      component: SingleUser
    },
    {
      path: '/feed/:id',
      name: 'singleMessage',
      component: SingleMessage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router