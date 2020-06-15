<template>
    <div class="station-list">
        <station-card
            class="station-card_clickable ma-1 ma-sm-3"
            v-for="station in stations"
            :station="station"
            :key="station.name"
            @click.native="$router.push({ path: `/player/${station.route}` })"
        />
    </div>
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
.station-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.station-card_clickable {
    cursor: pointer;
    width: 25%;
    transition: 0.2s;
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
    }
}
</style>
