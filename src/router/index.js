import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';

const routes = [
	{
		path: '/',
		name: 'HomeView',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'AboutView',
		component: AboutView,
	},
	{
		path: '/posts',
		name: 'PostListView',
		component: PostListView,
	},
	{
		path: '/posts/create',
		name: 'PostCreateView',
		component: PostCreateView,
	},
	{
		path: '/posts/:id/',
		name: 'PostDetailView',
		component: PostDetailView,
	},
	{
		path: '/posts/:id/edit',
		name: 'PostEditView',
		component: PostEditView,
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFoundView',
		component: NotFoundView,
	},
	{
		path: '/nested',
		name: 'NestedView',
		component: NestedView,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
