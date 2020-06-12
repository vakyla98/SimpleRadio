<template>
    <v-app id="app">
        <Header />
        <loading-overlay v-if="getLoadingState"></loading-overlay>
        <router-view />
    </v-app>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
import Header from './components/Header'
import LoadingOverlay from './components/LoadingOverlay'
export default {
    name: 'App',
    components: {
        Header,
        LoadingOverlay,
    },
    data() {
        return {
            isLoading: true,
        }
    },
    methods: {
        ...mapActions(['fetchStations']),
        ...mapMutations(['changeLoadingState']),
    },
    computed: {
        ...mapGetters(['getLoadingState']),
    },
    async mounted() {
        await this.fetchStations()
        this.changeLoadingState(false)
    },
}
</script>
