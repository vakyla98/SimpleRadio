<template>
    <transition-group name="xxx" tag="div" class="station-list">
        <station-card
            class="station-card_clickable ma-1 ma-sm-3"
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
.xxx-move {
    transition: all 1s;
}
.xxx-enter-active {
    transition: all 1s;
}
.xxx-leave-active {
    transition: all 1s;
    position: absolute;
}
.xxx-enter,
.xxx-leave-to {
    opacity: 0;
}
.station-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.station-card_clickable {
    cursor: pointer;
    width: 30%;
    // transition: transform 0.2s, box-shadow 0.2s;
    // transition: all 1s ease-in-out;
    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
    }
}
</style>
