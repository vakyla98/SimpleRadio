<template>
    <div class="player-page">
        <div class="player-info flex-wrap flex-sm-nowrap shadow main-grad mb-5">
            <station-card :station="station" class="ma-2" />
            <p class="player-info__text ma-2 text-center text-sm-left px-3 px-sm-0">
                This application created by a beginner front-end developer, if
                you have ideas or offers or you find a bug, you can write to me
                :)
            </p>
        </div>
        <Player :station="station" />
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
    margin: 0 auto;
    &__text {
        line-height: 32px;
        font-size: 14px;
    }
}
</style>
