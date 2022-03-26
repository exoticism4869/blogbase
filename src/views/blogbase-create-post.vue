<template>
	<div class="create-post">
		<!-- <Loading v-show="loading" /> -->
		<div class="container">
			<div :class="{ invisible: !error }" class="err-message">
				<p><span>Error:</span>{{ this.errorMsg }}</p>
			</div>
			<div class="blog-info">
				<input type="text" placeholder="Enter Blog Title" v-model="blogTitle" />
				<div class="upload-file">
					<label for="blog-photo">Upload Cover Photo</label>
					<input
						type="file"
						ref="blogPhoto"
						id="blog-photo"
						@change="fileChange"
						accept=".png, .jpg, .jpeg"
					/>
				</div>
			</div>
			<div class="blog-photo-preview">
				<img :src="blogCoverPhoto" />
			</div>
			<div class="editor">
				<QuillEditor
					theme="snow"
					content-type="html"
					v-model:content="blogHTML"
				/>
			</div>
			<div class="blog-actions">
				<button @click="uploadBlog">Publish Blog</button>
			</div>
		</div>
	</div>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

export default {
	name: 'CreatePost',
	data() {
		return {
			file: null,
			error: null,
			errorMsg: null,
			loading: null,
			blogCoverPhoto: '',
			blogTitle: '',
			blogHTML: ''
		}
	},
	components: {
		QuillEditor
	},
	methods: {
		fileChange() {
			this.file = this.$refs.blogPhoto.files[0]
			const reader = new FileReader()
			reader.addEventListener('load', (evt) => {
				this.blogCoverPhoto = evt.target.result
			})
			reader.readAsDataURL(this.file)
		},
		uploadBlog() {
			if (!this.user) {
				return
			}
			if (this.file.size >= 1024 * 1024) {
				this.error = true
				this.errorMsg = 'Please ensure your uploaded cover photo size < 1M!'
				setTimeout(() => {
					this.error = false
				}, 5000)
				return
			}
			if (!this.file) {
				this.error = true
				this.errorMsg = 'Please ensure you uploaded a cover photo!'
				setTimeout(() => {
					this.error = false
				}, 5000)
				return
			}
			if (this.blogTitle.length === 0 || this.blogHTML.length === 0) {
				this.error = true
				this.errorMsg = 'Please ensure Blog Title & Blog Post has been filled!'
				setTimeout(() => {
					this.error = false
				}, 5000)
				return
			}
			fetch('https://qcvfxm.api.cloudendpoint.cn/uploadBlog', {
				method: 'PUT',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify({
					email: this.email,
					blogTitle: this.blogTitle,
					blogCover: this.blogCoverPhoto,
					blogContent: this.blogHTML
				})
			})
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		email() {
			return this.$store.state.profileEmail
		}
	}
}
</script>

<style lang="scss">
.create-post {
	position: relative;
	height: 100%;
	button {
		margin-top: 0;
	}
	.router-button {
		text-decoration: none;
		color: #fff;
	}
	label,
	button,
	.router-button {
		transition: 0.5s ease-in-out all;
		align-self: center;
		font-size: 14px;
		cursor: pointer;
		border-radius: 20px;
		padding: 12px 24px;
		color: #fff;
		background-color: #303030;
		text-decoration: none;
		&:hover {
			background-color: rgba(48, 48, 48, 0.7);
		}
	}
	.blog-photo-preview {
		width: 500px;
		height: 300px;
		border: #303030 1px solid;
		margin-bottom: 10px;
		img {
			width: 100%;
			height: 100%;
		}
	}
	.container {
		position: relative;
		height: 100%;
		padding: 10px 25px 60px;
	}
	// error styling
	.invisible {
		opacity: 0 !important;
	}
	.err-message {
		width: 100%;
		padding: 12px;
		border-radius: 8px;
		color: #fff;
		margin-bottom: 10px;
		background-color: #303030;
		opacity: 1;
		transition: 0.5s ease all;
		p {
			font-size: 14px;
		}
		span {
			font-weight: 600;
		}
	}
	.blog-info {
		display: flex;
		margin-bottom: 32px;
		input:nth-child(1) {
			min-width: 300px;
		}
		input {
			transition: 0.5s ease-in-out all;
			padding: 10px 4px;
			border: none;
			border-bottom: 1px solid #303030;
			&:focus {
				outline: none;
				box-shadow: 0 1px 0 0 #303030;
			}
		}
		.upload-file {
			flex: 1;
			margin-left: 16px;
			position: relative;
			display: flex;
			input {
				display: none;
			}
			.preview {
				margin-left: 16px;
				text-transform: initial;
			}
			span {
				font-size: 12px;
				margin-left: 16px;
				align-self: center;
			}
		}
	}
	.editor {
		height: 60vh;
		display: flex;
		flex-direction: column;
		.quillWrapper {
			position: relative;
			display: flex;
			flex-direction: column;
			height: 100%;
		}
		.ql-container {
			display: flex;
			flex-direction: column;
			height: 100%;
			overflow: scroll;
		}
		.ql-editor {
			padding: 20px 16px 30px;
		}
	}
	.blog-actions {
		margin-top: 32px;
		button {
			margin-right: 16px;
		}
	}
}
</style>
