<template>
    <div class="loading-overlay">
        <h2 class="loading-overlay__text mb-5" >Wait please :)</h2>
        <v-progress-circular
        class='loading-overlay__spinner'
            :size="70"
            :width="7"
            color="orange"
            indeterminate
        ></v-progress-circular>
    </div>
</template>
<script>
export default {
    name: 'LoadingOverlay',
}
</script>
<style lang="scss">
.loading-overlay{
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width:100vw;
    height:100vh;
    z-index: 10;
}

</style>