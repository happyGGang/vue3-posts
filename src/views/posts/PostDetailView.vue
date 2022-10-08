<template>
	<div>
		<h1>제목</h1>
		<p>내용</p>
		<p>202-01-01</p>
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
				<button class="btn btn-outline-danger">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const goListPage = () => router.push({ name: 'PostListView' });
const goEditPage = () => router.push({ name: 'PostEditView', params: { id } });
</script>

<style lang="scss" scoped></style>
