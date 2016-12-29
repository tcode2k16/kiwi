import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
        app_name: "Kiwi",
        routes: {
            names: ['Menu','My Sets','My Activities', 'My Study Plan'],
            icon: "./assets/logo.png",
        },
        menu: {
          todos: [
            { name: "eat stuff", done: false },
            { name: "read stuff", done: true }
          ],
          num_streak: 10,
          drag_grid: [
            ['Welcome','Train','Activities'],
            ['Todo']
          ]
        },
        activities: [
          {name: 'how to kill ebarbs', action: 'add', time: '2016.12.29'},
          {name: 'how to kill ebarbs', action: 'edit', time: '2016.12.29'},
          {name: 'how to kill ebarbs', action: 'delete', time: '2016.12.30'}
        ],
        drag_op: {
          group:'widgets',
          disabled: false
        }
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  change_todo (state, update) {
    state.menu.todos = update
  },
  add_streak(state) {
    state.menu.num_streak++
  },
  toggle_drag(state) {
    let new_op = !state.drag_op.disabled
    state.drag_op = {...state.drag_op, disabled: new_op}
  },
  set_drag_grid(state, update) {
    state.menu.drag_grid = JSON.parse(JSON.stringify(update))
  }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}

// getters are functions
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [createPersistedState()]
})