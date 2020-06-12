<template>
    <div class='player-page'>
        <Player v-if='!getLoadingState'/>
    </div>
</template>
<script>
import Player from '../components/Player.vue'
import {mapGetters} from 'vuex'
export default {
    name:'PlaterPage',
    components:{
        Player
    },
    computed:{
        ...mapGetters(['getLoadingState'])
    }
}
</script>