<template>
	<div class="form-wrap">
		<form class="register">
			<p class="login-register">
				Already have an account?
				<router-link class="router-link" :to="{ name: 'Login' }"
					>Login</router-link
				>
			</p>
			<h2>Create Your FireBlog Account</h2>
			<div class="inputs">
				<div class="input">
					<input type="text" placeholder="First Name" v-model="firstName" />
					<inline-svg
						:src="require('../assets/Icons/user-alt-light.svg')"
						class="icon"
					/>
				</div>
				<div class="input">
					<input type="text" placeholder="Last Name" v-model="lastName" />
					<inline-svg
						:src="require('../assets/Icons/user-alt-light.svg')"
						class="icon"
					/>
				</div>
				<div class="input">
					<input type="text" placeholder="Username" v-model="username" />
					<inline-svg
						:src="require('../assets/Icons/user-alt-light.svg')"
						class="icon"
					/>
				</div>
				<div class="input">
					<input type="text" placeholder="Email" v-model="email" />
					<inline-svg
						:src="require('../assets/Icons/envelope-regular.svg')"
						class="icon"
					/>
				</div>
				<div class="input">
					<input type="password" placeholder="Password" v-model="password" />
					<inline-svg
						:src="require('../assets/Icons/lock-alt-solid.svg')"
						class="icon"
					/>
				</div>
				<div v-show="error" class="error">{{ this.errorMsg }}</div>
				<div v-show="!error" class="correct">注册成功</div>
			</div>
			<button @click.prevent="register">Sign Up</button>
			<div class="angle"></div>
		</form>
		<div class="background"></div>
	</div>
</template>

<script>
export default {
	name: 'blogbase-register',
	data() {
		return {
			firstName: '',
			lastName: '',
			username: '',
			email: '',
			password: '',
			error: true,
			errorMsg: ''
		}
	},
	methods: {
		async register() {
			if (
				this.email !== '' &&
				this.password !== '' &&
				this.firstName !== '' &&
				this.lastName !== '' &&
				this.username !== ''
			) {
				const value = await fetch(
					'https://qcvfxm.api.cloudendpoint.cn/register',
					{
						method: 'POST',
						headers: {
							Accept: 'application/json, text/plain, */*',
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							email: this.email,
							password: this.password,
							username: this.username,
							firstname: this.firstName,
							lastname: this.lastName
						})
					}
				).then((response) => response.json())
				if (value.result) {
					this.error = false
					this.$store.commit('setProfileInfo', {
						email: this.email,
						username: this.username,
						firstname: this.firstName,
						lastname: this.lastName
					})
					this.$store.commit('setProfileInitials')
					this.$router.push({ name: 'Home' })
				} else {
					this.error = true
					this.errorMsg = '注册失败'
				}
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.register {
	h2 {
		max-width: 350px;
	}
}
</style>
