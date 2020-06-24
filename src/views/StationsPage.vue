<template>
    <keep-alive>
        <div class="station-page">
            <stations-list :stations="stations" />
        </div>
    </keep-alive>
</template>

<script>
let x = 0
import { mapState } from 'vuex'
import StationsList from '../components/StationsList.vue'
export default {
    name: 'StationPage',
    components: { StationsList },
    methods: {
        xxx() {
            x = this.stations
            console.log(x)
        },
    },
    computed: {
        ...mapState({
            stations: state => state.stationsModule.stations,
        }),
    },
}
</script>
