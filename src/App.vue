<template>
    <v-app id="app">
        <Header />
        <loading-overlay v-if="isLoading"></loading-overlay>
        <transition v-else name="fade" mode="out-in">
            <router-view />
        </transition>
    </v-app>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
// import { ls_service } from './services'
import Header from './components/Header'
import LoadingOverlay from './components/LoadingOverlay'
export default {
    name: 'App',
    components: {
        Header,
        LoadingOverlay,
    },
    methods: {
        ...mapMutations({
            updateFavouritesStations: state =>
                state.userModule.updateFavouritesStations,
        }),
        ...mapActions(['fetchStations']),
    },
    computed: {
        ...mapState({
            isLoading: state => state.isLoading,
        }),
    },
    async mounted() {
        await this.fetchStations()
        this.updateFavouritesStations(ls_service.getFavourites())
    },
}
</script>
