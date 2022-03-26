<template>
	<div class="form-wrap">
		<form class="login">
			<p class="login-register">
				Don't have an account?
				<router-link class="router-link" :to="{ name: 'Register' }"
					>Register</router-link
				>
			</p>
			<h2>Login to Blogbase</h2>
			<div class="inputs">
				<div class="input">
					<input type="email" placeholder="email" v-model="email" />
					<inline-svg
						:src="require('../assets/Icons/envelope-regular.svg')"
						class="icon"
					/>
				</div>
				<div class="input">
					<input type="password" placeholder="password" v-model="password" />
					<inline-svg
						:src="require('../assets/Icons/lock-alt-solid.svg')"
						class="icon"
					/>
				</div>
				<div v-show="error" class="error">{{ this.errorMsg }}</div>
			</div>
			<button @click.prevent="signIn">Sign In</button>
			<div class="angle"></div>
		</form>
		<div class="background"></div>
	</div>
</template>

<script>
export default {
	name: 'blogbase-login',
	data() {
		return {
			email: '',
			password: '',
			error: null,
			errorMsg: '邮箱或密码不正确'
		}
	},
	methods: {
		async signIn() {
			if (this.email !== '' && this.password !== '') {
				const value = await fetch('https://qcvfxm.api.cloudendpoint.cn/login', {
					method: 'POST',
					headers: {
						Accept: 'application/json, text/plain, */*',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						email: this.email,
						password: this.password
					})
				}).then((response) => response.json())
				if (value.result) {
					this.error = false
					this.$store.commit('setProfileInfo', value.result)
					this.$store.commit('setProfileInitials')
					this.$store.commit('getOwnPost')
					this.$router.push({ name: 'Home' })
				} else {
					this.error = true
				}
			}
		}
	}
}
</script>

<style lang="scss">
.form-wrap {
	overflow: hidden;
	display: flex;
	height: 100vh;
	justify-content: center;
	align-self: center;
	margin: 0 auto;
	width: 90%;
	@media (min-width: 900px) {
		width: 100%;
	}
	.login-register {
		margin-bottom: 32px;
		.router-link {
			color: #000;
		}
	}
	form {
		padding: 0 10px;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		@media (min-width: 900px) {
			padding: 0 50px;
		}
		h2 {
			text-align: center;
			font-size: 32px;
			color: #303030;
			margin-bottom: 40px;
			@media (min-width: 900px) {
				font-size: 40px;
			}
		}
		.inputs {
			width: 100%;
			max-width: 350px;
			.input {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-bottom: 8px;
				input {
					width: 100%;
					border: none;
					background-color: #f2f7f6;
					padding: 4px 4px 4px 30px;
					height: 50px;
					&:focus {
						outline: none;
					}
				}
				.icon {
					width: 12px;
					position: absolute;
					left: 6px;
				}
			}
		}
		.forgot-password {
			text-decoration: none;
			color: #000;
			cursor: pointer;
			font-size: 14px;
			margin: 16px 0 32px;
			border-bottom: 1px solid transparent;
			transition: 0.5s ease all;
			&:hover {
				border-color: #303030;
			}
		}
		.angle {
			display: none;
			position: absolute;
			background-color: #fff;
			transform: rotateZ(3deg);
			width: 60px;
			right: -30px;
			height: 101%;
			@media (min-width: 900px) {
				display: initial;
			}
		}
	}
	.background {
		display: none;
		flex: 2;
		background-size: cover;
		background-image: url('../assets/background.png');
		width: 100%;
		height: 100%;
		@media (min-width: 900px) {
			display: initial;
		}
	}
}
</style>
