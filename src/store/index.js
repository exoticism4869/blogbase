import Vuex from 'vuex'

export default new Vuex.Store({
	state: {
		editPost: null,
		user: null,
		profileEmail: null,
		profileFirstName: null,
		profileLastName: null,
		profileUsername: null,
		profileInitials: null,
		allPost: null,
		ownPost: null
	},
	getters: {
		getPostById: (state) => (id) => {
			return state.allPost.find((post) => post._id === id)
		}
	},
	mutations: {
		toggleEditPost(state, payload) {
			state.editPost = payload
		},
		// updateUser(state, payload) {
		// 	state.user = payload
		// },
		setProfileInfo(state, doc) {
			// state.profileId = doc.id
			state.profileEmail = doc.email
			state.profileFirstName = doc.firstname
			state.profileLastName = doc.lastname
			state.profileUsername = doc.username
			state.user = true
			// console.log(state.profileId)
		},
		setProfileInitials(state) {
			console.log(state.profileFirstName)
			state.profileInitials =
				state.profileFirstName.match(/(\b\S)?/g).join('') +
				state.profileLastName.match(/(\b\S)?/g).join('')
		},
		signOut(state) {
			state.profileEmail = null
			state.profileFirstName = null
			state.profileLastName = null
			state.profileUsername = null
			state.user = null
		},
		async getAllPost(state) {
			const ansAll = await fetch(
				'https://qcvfxm.api.cloudendpoint.cn/getPost',
				{
					method: 'POST',
					headers: {
						accept: 'application/json',
						'content-type': 'application/json'
					},
					body: JSON.stringify({
						email: state.profileEmail,
						all: true
					})
				}
			).then((response) => response.json())
			console.log(ansAll)
			state.allPost = ansAll
		},
		async getOwnPost(state) {
			const ansOwn = await fetch(
				'https://qcvfxm.api.cloudendpoint.cn/getPost',
				{
					method: 'POST',
					headers: {
						accept: 'application/json',
						'content-type': 'application/json'
					},
					body: JSON.stringify({
						email: state.profileEmail,
						all: false
					})
				}
			).then((response) => response.json())
			state.ownPost = ansOwn
		}
	},

	actions: {},
	modules: {}
})
