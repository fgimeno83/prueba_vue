<template>
    <div class="form-container">
        <form name="personalForm">
            <div v-for="(component, index) in getComponents" :key="component">
                <div>
                    <LevelCombo :componentLevel="component.level" :componentIndex="index" @changeLevel="onChangeLevel"></LevelCombo>
                </div>
                <div>
                    <NumberCombo :componentNumber="component.number" :componentIndex="index" @changeNumber="onChangeNumber"></NumberCombo>
                </div>
                <input type="button" @click="deleteComponent(index)" value="Quitar" />
            </div>
            <div class="button-container">
                <input type="button" @click="addComponent()" value="Añadir" />
                <input type="button" @click="send()" value="Calcular" />
            </div>
        </form>
        <input type="text" disabled :value="getResult"/>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import NumberCombo from './NumberCombo.vue';
    import LevelCombo from './LevelCombo.vue';

    export default {
        name: 'Personal',
        components: {
            NumberCombo,
            LevelCombo
        },
        data() {
            return {
                components: [{level: '0-4', number: "1"}]
            }
        },
        computed: {
            ...mapGetters([
                'getResult'
            ]),
            getComponents: function() {
                return this.components;
            }
        },
        methods: {
            ...mapActions([
                'calculate'
            ]),
            addComponent: function() {
                this.components.push({level: '0-4', number: "1"});
            },
            deleteComponent: function(index) {
                this.components.splice(index, 1);
            },
            onChangeNumber: function(data) {
                this.components[data.index].number = data.data;
            },
            onChangeLevel: function(data) {
                this.components[data.index].level = data.data;
            },
            send: function() {
                var result = '';
                this.components.forEach(element => {
                    result = result + element.level + ' - ' + element.number + ' / ';
                });
                
                this.calculate(result);
            }
        }
    }
</script>