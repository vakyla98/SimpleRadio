<template>
    <div class="station-list">
        <station-card
            v-for="station in stations"
            :station="station"
            :key="station.name"
            @click.native="
                $router.push({ path: `/player/${station.route}` })
            "
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
