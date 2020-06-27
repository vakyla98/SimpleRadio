<template>
    <div class="timer control-wraper">{{ minutes }} : {{ seconds }}</div>
</template>
<script>
export default {
    name: 'Timer',
    props: {
        time: Number,
    },
    computed: {
        minutes() {
            let minuteCounter = Math.floor(this.time / 60)
            return minuteCounter < 10 ? '0' + minuteCounter : minuteCounter
        },
        seconds() {
            let secondCounter = this.time % 60
            return secondCounter < 10 ? '0' + secondCounter : secondCounter
        },
    },
}
</script>
