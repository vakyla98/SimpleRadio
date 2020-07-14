<template>
    <transition-group name="card-list" tag="div" class="station-list">
        <station-card
            class="station-card_clickable"
            v-for="station in stations"
            :key="station.name"
            :station="station"
            @click.native="stationHandler(station)"
        >
            <Favourite
                :isFavourite="favouritesStations.includes(station.route)"
                :route="station.route"
                @click.native.stop=""
                @toggleState="favouriteHandler"
            />
        </station-card>
    </transition-group>
</template>
<script>
import StationCard from './StationCard.vue'
import Favourite from './Favourite.vue'
import { ls_service } from '../services'
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'StationList',
    components: {
        StationCard,
        Favourite,
    },
    props: {
        stations: {
            type: Array,
            required: true,
        },
    },
    methods: {
        ...mapMutations(['toggleFavourite']),
        stationHandler(station) {
            this.$router.push({ path: `/player/${station.route}` })
        },
        favouriteHandler(stationRoute) {
            this.toggleFavourite(stationRoute)
            ls_service.setFavourites(this.favouritesStations)
        },
    },
    computed: {
        ...mapState({
            favouritesStations: state => state.userModule.favouritesStations,
        }),
    },
}
</script>
<style lang="scss">
@import '../style/mixins.scss';
.station-list {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    @include screen(max, 480px) {
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }
    grid-gap: 10px;
}
.station-card_clickable {
    transition: all 0.5s ease-in-out, box-shadow 0.1s;
    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.5);
    }
}
</style>
