<template>
    <div class="station-card">
        <img class="station-card__img" :src="station.image" />
        <p class="station-card__name my-1 my-sm-2" v-text="station.name" />
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
@import '../style/mixins.scss';
.station-card {
    display: flex;
    justify-content: flex-end;
    max-width: 180px;
    width: 100%;
    height: 100%;
    font-size: 14px;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    &__img {
        width: 100%;
    }
    @include screen(max, 600px) {
        font-size: 12px;
    }
    @include screen(max, 480px) {
        max-width: 116px;
    }
}
</style>
