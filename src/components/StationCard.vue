<template>
    <div class="station-card">
        <Favourite :route="station.route" @click.native.stop="" />
        <img
            class="station-card__img"
            :src="station.image"
            @error="setDefaultImage"
        />
        <span class="station-card__name" v-text="station.name" />
    </div>
</template>
<script>
import Favourite from './Favourite.vue'

export default {
    name: 'StationCard',
    components: {
        Favourite,
    },
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
