import restApi from '../../api/restApi';

const state = {
    videos: []
};

const getters = {
    getVideos: state => state.videos
};

const mutations = {
   setVideos: (state, videos) => {
    state.videos = videos;
   }
};

const actions = {
    async fetchVideos({ commit }) {
        restApi.getVideos().then(
            response => {
                commit('setVideos', response.data);
            }
        );
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}