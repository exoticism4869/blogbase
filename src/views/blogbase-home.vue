<template>
	<div class="home">
		<BlogPost v-if="!user" :post="welcomeScreen" />
		<BlogPost :post="post" v-for="(post, index) in allPost" :key="index" />
		<div v-if="!user" class="updates">
			<div class="container">
				<h2>never miss a post. Register for your free account today!</h2>
				<router-link class="router-button" :to="{ name: 'Register' }"
					>Register for blogbase<Arrow class="arrow arrow-light"
				/></router-link>
			</div>
		</div>
	</div>
</template>

<script>
import BlogPost from '../components/blogbase-blogpost.vue'
export default {
	name: 'blogbase-home',
	components: { BlogPost },
	data() {
		return {
			welcomeScreen: {
				title: 'welcome!',
				blogPost:
					'Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!',
				welcomeScreen: true,
				photo: 'coding'
			}
		}
	},
	created() {
		this.$store.commit('getAllPost')
	},
	methods: {},
	computed: {
		user() {
			return this.$store.state.user
		},
		allPost() {
			console.log(this.$store.state.allPost)
			return this.$store.state.allPost
		}
	}
}
</script>

<style lang="scss" scoped>
.blog-card-wrap {
	h3 {
		font-weight: 300;
		font-size: 28px;
		margin-bottom: 32px;
	}
}

.updates {
	.container {
		padding: 100px 25px;
		display: flex;
		flex-direction: column;
		align-items: center;
		@media (min-width: 800px) {
			padding: 125px 25px;
			flex-direction: row;
		}
		.router-button {
			display: flex;
			font-size: 14px;
			text-decoration: none;
			@media (min-width: 800px) {
				margin-left: auto;
			}
		}
		h2 {
			font-weight: 300;
			font-size: 32px;
			max-width: 425px;
			width: 100%;
			text-align: center;
			text-transform: uppercase;
			@media (min-width: 800px) {
				text-align: initial;
				font-size: 40px;
			}
		}
	}
}
</style>
