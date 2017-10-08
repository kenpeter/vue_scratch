// vue 
import Vue from 'vue'
// state
import Vuex from 'vuex'

//vue uses state
Vue.use(Vuex)

const state = {
	count: 0
}

const actions = {
	// This is like the switch redux, it matches.
	// payload is object or this case is 20
	increment (context, payload) {
		// action cannot change state, we need to call
		// increment in mutations with payload
		// commit means call mutation
		context.commit('increment', payload)
	},

	decrement (context, payload) {
  	context.commit('decrement', payload)
  }
}


const mutations = {
	// we have state
	increment (state, payload) {
		// we return state.count, part of state
		return state.count = state.count + payload.amount
	},

	decrement (state, payload){
  	return state.count = state.count - payload.amount;
  }
}


// export vue
// {state: state}
const store = new Vuex.Store({
	state: state,
	actions: actions,
	mutations: mutations   
})

export default store
