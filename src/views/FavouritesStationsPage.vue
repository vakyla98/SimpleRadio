<template>
    <keep-alive>
        <div class="station-page container">
            <transition name="fade-fast" mode="out-in">
                <stations-list
                    :stations="favourites"
                    transitionName="fade-fast"
                    v-if="favourites.length"
                />
                <p class="text-center mt-5" v-else>
                    You dont add any favourite station, but you can do this at
                    <router-link to="/">stations page</router-link>
                </p>
            </transition>

        </div>
    </keep-alive>
</template>

<script>
import { mapGetters } from 'vuex'
import StationsList from '../components/StationsList.vue'
export default {
    name: 'FavouritesStationsPage',
    components: { StationsList },
    computed: {
        ...mapGetters({
            favourites: 'getFavouritesStations',
        }),
    },
}
</script>
