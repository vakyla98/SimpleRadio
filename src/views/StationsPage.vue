<template>
    <keep-alive>
        <div class="station-page container">
            <input type="text" class="input" v-model="searchText" />
            <stations-list :stations="filteredStations" />
        </div>
    </keep-alive>
</template>

<script>
import { mapState } from 'vuex'
import StationsList from '../components/StationsList.vue'
export default {
    name: 'StationPage',
    components: { StationsList },
    data() {
        return {
            searchText: '',
        }
    },
    computed: {
        ...mapState({
            stations: state => state.stationsModule.stations,
        }),
        filteredStations() {
            return this.stations.filter(el => el.name.includes(this.searchText))
        },
    },
}
</script>
<style lang="scss">
.input {
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
    background-color: green;
}
</style>
