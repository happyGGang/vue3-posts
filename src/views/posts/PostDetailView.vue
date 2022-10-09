<template>
	<div>
		<h1>{{ post.title }}</h1>
		<p>{{ post.content }}</p>
		<p>{{ post.createdAt }}</p>
		<hr class="my-4" />
		<div class="row g-2">
			<div class="col-auto">
				<button class="btn btn-outline-dark">이전</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark">다음</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goListPage">목록</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="goEditPage">
					수정
				</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-danger" @click="remove">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getPostById, deletePost } from '@/api/posts.js';
import { ref } from 'vue';

const props = defineProps({
	id: Number,
});

//const route = useRoute();
const router = useRouter();
//const id = route.params.id;
const post = ref({});

const fetchPost = async () => {
	const { data } = await getPostById(props.id);
	setPost(data);
};
const setPost = ({ title, content, createAt }) => {
	post.value.title = title;
	post.value.content = content;
	post.value.createAt = createAt;
};
fetchPost();
const remove = async () => {
	try {
		if (confirm('삭제하시겠습니까?')) {
			await deletePost(props.id);
			router.push({ name: 'PostListView' });
		}
	} catch (error) {
		console.log(error);
	}
};
const goListPage = () => router.push({ name: 'PostListView' });
const goEditPage = () =>
	router.push({ name: 'PostEditView', params: { id: props.id } });
</script>

<style lang="scss" scoped></style>
