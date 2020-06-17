<template>
    <v-app id="app">
        <Header />
        <loading-overlay v-if="isLoading"></loading-overlay>
        <transition v-else name="fade" mode="out-in">
            <router-view/>
        </transition>
    </v-app>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
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
        ...mapState(['isLoading']),
    },
    async mounted() {
        await this.fetchStations()
    },
}
</script>
<style lang="scss">

.fade-move {
    transition: transform 0.2s;
}
.fade-enter-active {
    transition: opacity 0.5s;
}
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

</style>
