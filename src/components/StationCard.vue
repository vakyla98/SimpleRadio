<template>
    <div class="station-card">
        <img :src="station.image" />
        <p>{{ station.name }}</p>
    </div>
</template>
<script>
export default {
    name: 'StationCard',
    props: {
        station: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {}
    },
}
</script>
