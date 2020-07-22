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
<style lang="scss">
.favourite {
    position: absolute;
    align-self: flex-end;
    transform: translate(-4px, 4px);
    width: 30px;
    height: 30px;
    font-size: 20px;
    line-height: 16px;
    visibility: hidden;
    cursor: pointer;
}
.favourite:before {
    content: '';
    border: 2px solid gray;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    visibility: visible;
    width: 15px;
    height: 15px;
    border-radius: 50%;
}
.favourite:checked:before {
    background-color: #f57f17;
}
</style>
