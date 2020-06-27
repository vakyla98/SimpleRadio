<template>
    <div class="player-page d-flex player-container container flex-column">
        <div class="player-info pa-5 mb-5 mt-2 mt-sm-5 shadow main-grad">
            <v-btn
                small
                class="player-info__btn"
                color="orange"
                @click="changeStation('prev')"
            >
                <v-icon>mdi-menu-left</v-icon>
            </v-btn>
            <transition name="fade" mode="out-in">
                <station-card
                    :station="station"
                    :key="station.name"
                    class="mx-5"
                />
            </transition>

            <v-btn
                small
                class="player-info__btn"
                color="orange"
                @click="changeStation('next')"
            >
                <v-icon>mdi-menu-right</v-icon>
            </v-btn>
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
    methods: {
        changeStation(dir) {
            dir === 'next'
                ? (this.station = this.getNextStation(this.station))
                : (this.station = this.getPrevStation(this.station))
            this.$router.push({
                path: `/player/${this.station.route}`,
            })
        },
    },
    beforeMount() {
        this.station = this.getStationByRoute(this.stationRoute)
    },
    computed: {
        ...mapGetters([
            'getStationByRoute',
            'getPrevStation',
            'getNextStation',
        ]),
    },
}
</script>
<style lang="scss">
@import '../style/mixins.scss';
.player-container {
    max-width: 520px;
}
.player-info {
    display: flex;
    border-radius: 10px;
    align-items: stretch;
    height: 257px;
    &__btn {
        height: initial !important;
        flex-grow: 1;
    }
    &__text {
        line-height: 32px;
        font-size: 14px;
    }
    @include screen(max, 600px) {
        height: 246px;
    }
    @include screen(max, 480px) {
        height: 180px;
    }
}
</style>
