<template>
    <div class="station-list">
        <v-btn dark @click="xxx">X</v-btn>
    </div>
</template>

<script>
let x = 0
import { mapGetters } from 'vuex'
export default {
    name: 'StationList',
    components: {},
    data() {
        return {
            curUrl: 'http://online.radioplayer.ua/FlashRadio',
        }
    },
    methods: {

        xxx() {
            x = this.getAllStations
            console.log(x)
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
}
</script>
