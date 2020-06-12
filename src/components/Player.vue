<template>
    <div class="player">
        <control-panel :url="station.url" />
    </div>
</template>
<script>
import ControlPanel from './ControlPanel.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'Player',
    components: {
        ControlPanel,
    },
    data() {
        return {
            stationName: this.$route.params.stationName,
            station: {},
        }
    },
    computed: {
        ...mapGetters(['getAllStations', 'getLoadingState']),
    },
    async beforeMount() {
        let all = this.getAllStations
        this.station = all[this.stationName]
    },
}
</script>
