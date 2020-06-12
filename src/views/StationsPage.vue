<template>
    <div class="station-page">
        <v-btn dark @click="xxx">X</v-btn>
        <stations-list :stations="getAllStations" />
    </div>
</template>

<script>
let x = 0
import { mapGetters } from 'vuex'
import StationsList from '../components/StationsList.vue'
export default {
    name: 'StationPage',
    components: { StationsList },
    data() {
        return {}
    },
    methods: {
        xxx() {
            x = this.getAllStations
            console.log(x)
            // db.ref('stations/' + id).set({
            //     bump: 'dump',
            //     gump: 'puml',
            // })
        },
    },
    computed: {
        ...mapGetters(['getAllStations']),
    },
}
</script>
