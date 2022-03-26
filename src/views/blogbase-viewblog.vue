<template>
	<div class="post-view">
		<div class="container quillWrapper">
			<h2>{{ post.blogTitle }}</h2>
			<!-- <h4>
				Posted on:
				{{
					new Date(this.currentBlog[0].blogDate).toLocaleString('en-us', {
						dateStyle: 'long'
					})
				}}
			</h4> -->
			<img src="../assets/blogPhotos/beautiful-stories.jpg" alt="" />
			<div class="post-content ql-editor" v-html="post.blogContent"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ViewBlog',
	computed: {
		post() {
			return this.$store.getters.getPostById(this.$route.params.id)
		}
	}
	// async mounted() {
	// 	this.currentBlog = await this.$store.state.blogPosts.filter((post) => {
	// 		return post.blogID === this.$route.params.blogid
	// 	})
	// }
}
</script>

<style lang="scss">
.post-view {
	h4 {
		font-weight: 400;
		font-size: 14px;
		margin-bottom: 24px;
	}
}
</style>
