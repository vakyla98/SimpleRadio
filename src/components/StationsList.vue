<template>
    <transition-group name="card-list" tag="div" class="station-list">
        <station-card
            class="station-card_clickable"
            v-for="station in stations"
            :key="station.name"
            :station="station"
            @click.native="$router.push({ path: `/player/${station.route}` })"
        />
    </transition-group>
</template>
<script>
import StationCard from './StationCard'
export default {
    name: 'StationList',
    components: {
        StationCard,
    },
    props: {
        stations: {
            type: Array,
            required: true,
        },
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
    cursor: pointer;
    transition: all 0.5s ease-in-out, box-shadow 0.1s;
    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.5);
    }
}
</style>
