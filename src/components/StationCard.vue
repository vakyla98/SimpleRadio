<template>
    <div class="station-card">
        <img class="station-card__img" :src="station.image" />
        <span class="station-card__name" v-text="station.name" />
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
}
</script>
