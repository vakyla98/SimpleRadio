<template>
    <div class="player">
        <control-panel :url="station.url" />
    </div>
</template>
<script>
import ControlPanel from './ControlPanel.vue'
export default {
    name: 'Player',
    components: {
        ControlPanel,
    },
    props:{
        station:{
            type:Object,
            required:true
        }
    },
}
</script>
<style lang="scss">

</style>
