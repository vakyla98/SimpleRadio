<template>
    <div class="station-card">
        <img
            class="station-card__img"
            :src="station.image"
            @error="setDefaultImage"
        />
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
    data() {
        return {
            defaultImage: require('@/assets/img/station-card_default.png'),
        }npm
    },
    methods: {
        setDefaultImage(e) {
            e.target.src = this.defaultImage
        },
    },
}
</script>
