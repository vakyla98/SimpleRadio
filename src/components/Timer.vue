<template>
    <div class="timer control-wraper">
        <transition name="time" mode="out-in">
            <span class="timer__minutes" v-text="minutes" :key="minutes" />
        </transition>
        <span class="colon"> : </span>
        <span class="timer__seconds" v-text="seconds" :key="seconds" />
    </div>
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
<style lang="scss">
.colon {
    white-space: pre;
}
</style>
