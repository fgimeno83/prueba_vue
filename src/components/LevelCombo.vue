<template>
    <select name="level" id="level" v-model="selectedLevel" @change="changeSelectedLevel">
        <option v-for="level in getLevels" :key="level">{{ level }}</option>
    </select>
</template>

<script>
    export default {
        name: 'LevelCombo',
        data() {
            return {
                levels: ['0-4', '5-10', '11-15', '16-20'],
                selectedLevel: this.componentLevel
            }
        },
        props: {
            componentLevel: String,
            componentIndex: Number
        },
        computed: {
            getLevels: function() {
                return this.levels;
            }
        },
        methods: {
            changeSelectedLevel: function(event) {
                const componentChanged = {
                    data: event.target.value,
                    index: this.componentIndex
                }
                this.$emit('changeLevel', componentChanged);
            }   
        }
    }
</script>