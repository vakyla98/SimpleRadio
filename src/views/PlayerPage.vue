<template>
    <div class="player-page container d-flex align-center flex-column">
        <station-card :station="station" class="my-5" />
        <Player :station="station"  class="mt-5" />
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
<style lang="scss">
.player-info {
    background-color: green;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 450px;
    border-radius: 10px;
    // margin: 0 auto;
    &__text {
        line-height: 32px;
        font-size: 14px;
    }
}
</style>
