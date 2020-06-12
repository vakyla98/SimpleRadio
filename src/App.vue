<template>
    <v-app id="app">
        <Header />
        <loading-overlay v-if="isLoading"></loading-overlay>
        <router-view v-else class='container' />
    </v-app>
</template>

<script>
import { mapActions, mapMutations,mapState } from 'vuex'
import Header from './components/Header'
import LoadingOverlay from './components/LoadingOverlay'
export default {
    name: 'App',
    components: {
        Header,
        LoadingOverlay,
    },
    methods: {
        ...mapActions(['fetchStations']),
        ...mapMutations(['changeLoadingState']),
    },
    computed: {
        ...mapState(['isLoading'])
    },
    async mounted() {
        await this.fetchStations()
        this.changeLoadingState(false)
    },
}
</script>
<style lang='scss'>
.container{
    width:100%;
    max-width:960px;
    margin:0 auto;
}
</style>
