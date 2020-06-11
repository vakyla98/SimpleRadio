<template>
    <label for="volume">
        Volume
        <input
            ref="volumeInput"
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="1"
            v-model="currentVolume"
            step="0.01"
        />
    </label>
</template>
<script>
export default {
    name: 'InputRange',
    props: {
        volume: {
            type: String,
            required: true,
        },
    },
    methods: {},
    computed: {
        currentVolume: {
            get() {
                return this.volume
            },
            set() {
                this.$emit('changeVolume', this.$refs.volumeInput.value)
            },
        },
    },
}
</script>
<style lang="scss">
@import '../style/vars.scss';

</style>
