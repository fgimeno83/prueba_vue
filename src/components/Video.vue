<template>
    <div>
        <ul>
            <li v-for="video in getVideos" :key="video">{{ video }}</li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'Video',
        computed: {
            ...mapGetters(['getVideos'])
        },
        methods: {
            ...mapActions(['fetchVideos'])
        },
        created() {
            this.fetchVideos();
        }
    }
</script>