<template>
    <div class="station-card">
        <slot></slot>
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
        }
    },
    methods: {
        setDefaultImage(e) {
            e.target.src = this.defaultImage
        },
    },
}
</script>
