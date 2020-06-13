<template>
    <keep-alive>
        <div class="station-page">
            <v-btn dark @click="xxx">Удали эту кнопку</v-btn>
            <stations-list :stations="getAllStations" />
        </div>
    </keep-alive>
</template>

<script>
let x = 0
import { mapGetters } from 'vuex'
import StationsList from '../components/StationsList.vue'
export default {
    name: 'StationPage',
    components: { StationsList },
    data() {
        return {}
    },
    methods: {
        xxx() {
            x = this.getAllStations
            console.log(x)
        },
    },
    computed: {
        ...mapGetters(['getAllStations']),
    },
}
</script>
