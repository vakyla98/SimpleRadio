<template>
    <v-app id="app">
        Text here to chack fonts
        <loading-overlay v-if="isLoading"></loading-overlay>
        <div class="audio-wrapper">
            <audio src="http://62.80.190.246:8000/PRK128" controls></audio>
        </div>
        <ControlPanel :url="curUrl" />
        <button @click="xxx">X</button>
    </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ControlPanel from './components/ControlPanel'
import LoadingOverlay from './components/LoadingOverlay'
export default {
    name: 'App',
    components: {
        ControlPanel,
        LoadingOverlay
    },
    data() {
        return {
            curUrl: 'http://online.radioplayer.ua/FlashRadio',
            isLoading: true,
        }
    },
    methods: {
        ...mapActions(['fetchStations']),
        xxx() {
            console.log(this.getAllStations)
            // id++
            // db.ref('stations/' + id).set({
            //     bump: 'dump',
            //     gump: 'puml',
            // })
        },
    },
    computed: {
        ...mapGetters(['getAllStations']),
    },
    async mounted() {
        await this.fetchStations()
        this.isLoading = false
    },
}
</script>
<style lang="scss">
.audio-wrapper {
    display: flex;
    flex-direction: column;
}

</style>
