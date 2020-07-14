<template>
    <transition-group name="card-list" tag="div" class="station-list">
        <station-card
            class="station-card_clickable"
            v-for="station in stations"
            :key="station.name"
            :station="station"
            @click.native="stationHandler(station)"
        >
            <!-- <Star
                :isFavourite="favourites.includes(station.route)"
                @click.native.stop="starHandler(station.route)"
            /> -->
            <input class="star" checked type="checkbox" @click.stop="" />
        </station-card>
    </transition-group>
</template>
<script>
import StationCard from './StationCard.vue'
// import Star from './Star.vue'
import { mapState } from 'vuex'

export default {
    name: 'StationList',
    components: {
        StationCard,
        // Star,
    },
    props: {
        stations: {
            type: Array,
            required: true,
        },
    },
    methods: {
        stationHandler(station) {
            this.$router.push({ path: `/player/${station.route}` })
        },
        starHandler(stationRoute) {
            console.log(stationRoute)
        },
    },
    computed: {
        ...mapState({
            favourites: state => state.userModule.favouritesStations,
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
.star {
    position: absolute;
    align-self: flex-end;
    transform: translate(-4px, 4px);
    width: 30px;
    height: 30px;
    font-size: 20px;
    line-height: 16px;
    visibility: hidden;
    cursor: pointer;
}
.star:before {
    content: '';
    border: 2px solid #f57f17;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    visibility: visible;
    width: 15px;
    height: 15px;
    border-radius: 50%;
}
.star:checked:before {
    content: '';
    position: absolute;
    background-color: #f57f17;
    width: 15px;
    height: 15px;
}
</style>
