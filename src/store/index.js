import { createStore } from 'vuex';
import Personal from './modules/personal';
import Video from './modules/video';

const store = createStore({
    modules: {
        Personal,
        Video
    }
});

export default store;