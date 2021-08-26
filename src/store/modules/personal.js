const state = {
    result: ''
};

const getters = {
    getResult: (state) => {
        return state.result;
    }
};

const actions = {
    calculate: ({ commit }, resultData) => {
        commit('setResult', resultData);
    }
};

const mutations = {
    setResult: (state, data) => {
        state.result = data;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}