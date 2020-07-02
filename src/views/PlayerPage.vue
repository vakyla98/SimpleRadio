<template>
    <div class="player-page d-flex player-container container flex-column">
        <div class="player-info pa-5 mb-5 mt-2 mt-sm-5 shadow main-grad">
            <v-btn
                small
                class="player-info__btn"
                color="orange"
                @click="changeStation('prev')"
            >
                <v-icon>{{ icons.arrowLeft }}</v-icon>
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
                <v-icon>{{ icons.arrowRight }}</v-icon>
            </v-btn>
        </div>
        <Player :station="station" />
        <keyboard-events
            :preventedKeys="['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight']"
        />
    </div>
</template>
<script>
import Player from '../components/Player.vue'
import StationCard from '../components/StationCard'
import KeyboardEvents from '../components/KeyboardEvents.vue'

import { mapGetters, mapState } from 'vuex'

import { mdiMenuRight, mdiMenuLeft } from '@mdi/js'

export default {
    name: 'PlayerPage',
    components: {
        Player,
        StationCard,
        KeyboardEvents,
    },
    data() {
        return {
            stationRoute: this.$route.params.stationRoute,
            station: {},
            icons: {
                arrowLeft: mdiMenuLeft,
                arrowRight: mdiMenuRight,
            },
        }
    },
    methods: {
        nextStation() {
            this.station = this.getNextStation(this.station)
        },
        prevStation() {
            this.station = this.getPrevStation(this.station)
        },
        changeStation(direction) {
            direction === 'next' ? this.nextStation() : this.prevStation()
            this.$router.push({
                path: `/player/${this.station.route}`,
            })
        },
    },
    beforeMount() {
        this.station = this.getStationByRoute(this.stationRoute)
    },
    computed: {
        ...mapState({
            keys: state => state.keyboardModule.keys,
        }),
        ...mapGetters([
            'getStationByRoute',
            'getPrevStation',
            'getNextStation',
        ]),
    },
    watch: {
        keys: {
            deep: true,
            handler() {
                if (this.keys['ArrowLeft']) this.changeStation('prev')
                if (this.keys['ArrowRight']) this.changeStation('next')
            },
        },
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
