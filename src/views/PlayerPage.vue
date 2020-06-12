<template>
    <div class="player-page">
        <Player :station="station" />
        <station-card :station="station" />
    </div>
</template>
<script>
import Player from '../components/Player.vue'
import StationCard from '../components/StationCard'
import { mapGetters } from 'vuex'

export default {
    name: 'PlayerPage',
    components: {
        Player,
        StationCard,
    },
    data() {
        return {
            stationRoute: this.$route.params.stationRoute,
            station: {},
        }
    },

    beforeMount() {
        this.station = this.getStationByRoute(this.stationRoute)
    },
    computed: {
        ...mapGetters(['getStationByRoute']),
    },
}
</script>
