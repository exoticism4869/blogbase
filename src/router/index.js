import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/blogbase-home.vue'
import Login from '../views/blogbase-login.vue'
import Register from '../views/blogbase-register.vue'
import Blogs from '../views/blogbase-blogs.vue'
import CreatePost from '../views/blogbase-create-post.vue'
import ViewBlog from '../views/blogbase-viewblog.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: 'Home'
		}
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: {
			title: 'Login'
		}
	},
	{
		path: '/register',
		name: 'Register',
		component: Register,
		meta: {
			title: 'Register'
		}
	},
	{
		path: '/blogs',
		name: 'Blogs',
		component: Blogs,
		meta: {
			title: 'Blogs'
		}
	},
	{
		path: '/create-post',
		name: 'CreatePost',
		component: CreatePost,
		meta: {
			title: 'Create Post'
		}
	},
	{
		path: '/view-blog',
		name: 'ViewBlog',
		component: ViewBlog,
		meta: {
			title: 'View Blog'
		}
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} | FireBlog`
	next()
})

export default router
