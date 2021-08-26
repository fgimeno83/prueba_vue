import axios from 'axios';

const ROOT_URL = 'http://localhost:6069/';
const TUTORIAL_SERVICE = 'tutorials';

export default {
    getVideos() {
        return axios.get(`${ROOT_URL }${TUTORIAL_SERVICE}`);
    }
}