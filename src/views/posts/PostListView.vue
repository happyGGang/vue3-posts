<template>
	<div>
		<h1>게시글 목록</h1>
		<hr class="my-4" />
		<div class="row g-3">
			<div v-for="post in posts" :key="post.id" class="col-4">
				<PostItem
					:title="post.title"
					:content="post.content"
					:created-at="post.createdAt"
					@click="goPage(post.id)"
				></PostItem>
			</div>
		</div>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { getPosts } from '@/api/posts.js';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const posts = ref([]);
const params = ref({
	_sort: 'createdAt',
	_order: 'desc',
});

const fetchPost = async () => {
	try {
		const { data } = await getPosts(params);
		posts.value = data;
	} catch (error) {
		console.log(error);
	}
};
fetchPost();

const goPage = id => {
	//router.push(`/posts/${id}`);
	router.push({
		name: 'PostDetailView',
		params: {
			id,
		},
	});
};
</script>

<style lang="scss" scoped></style>
