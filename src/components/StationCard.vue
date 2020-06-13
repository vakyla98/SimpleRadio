<template>
    <div class="station-card">
        <img class="station-card__img" :src="station.image" />
        <p class="station-card__name my-2" v-text="station.name" />
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
<style lang="scss">
.station-card {
    display: flex;
    flex-shrink: 0;
    max-width: 180px;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
    justify-content: center;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>
