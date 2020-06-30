<template>
    <keep-alive>
        <div class="station-page container">
            <stations-list :stations="stations" />
        </div>
    </keep-alive>
</template>

<script>
import { mapState } from 'vuex'
import StationsList from '../components/StationsList.vue'
export default {
    name: 'StationPage',
    components: { StationsList },
    computed: {
        ...mapState({
            stations: state => state.stationsModule.stations,
        }),
    },
}
</script>
