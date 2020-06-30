<template>
    <keep-alive>
        <div class="station-page container">
            <input
                type="text"
                class="station-page__search input "
                v-model="searchText"
                placeholder="Station name"
            />
            <transition name="fade-fast" mode="out-in">
                <stations-list
                    :stations="filteredStations"
                    v-if="filteredStations.length"
                />
                <p
                    v-else
                    class="station-page__describer station-page__describer_not-found"
                >
                    Any station with this name :(
                </p>
            </transition>
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
            return this.stations.filter(el =>
                el.name.toLowerCase().includes(this.searchText.toLowerCase())
            )
        },
    },
}
</script>
<style lang="scss"></style>
