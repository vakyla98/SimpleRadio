<template>
    <input class="favourite" v-model="checked" type="checkbox" />
</template>
<script>
import { ls_service } from '../services'
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'Favourite',
    props: {
        route: {
            type: String,
            required: true,
        },
    },
    methods: {
        ...mapMutations(['toggleFavourite']),
        favouriteHandler() {
            this.toggleFavourite(this.route)
            ls_service.setFavourites(this.favouritesStations)
        },
    },
    computed: {
        ...mapState({
            favouritesStations: state => state.userModule.favouritesStations,
        }),
        checked: {
            get() {
                return this.favouritesStations.includes(this.route)
            },
            set() {
                this.favouriteHandler()
            },
        },
    },
}
</script>
