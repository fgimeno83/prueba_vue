<template>
    <select name="numberOfFoes" id="numberOfFoes" v-model="selectedNumber" @change="changeSelectedNumber">
        <option v-for="number in getNumbers" :key="number">{{ number }}</option>
    </select>
</template>

<script>
    export default {
        name: 'NumberCombo',
        data() {
            return {
                numbers: [1,2,3,4,5,6,7,8,9,10],
                selectedNumber: this.componentNumber
            }
        },
        props: {
            componentNumber: String,
            componentIndex: Number
        },
        computed: {
            getNumbers: function() {
                return this.numbers;
            }
        },
        methods: {
            changeSelectedNumber: function(event) {
                const componentChanged = {
                    data: event.target.value,
                    index: this.componentIndex
                }
                this.$emit('changeNumber', componentChanged);
            }   
        }
    }
</script>