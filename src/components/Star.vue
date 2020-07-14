<template>

    <input class="star" type="checkbox" title="bookmark page">
</template>
<script>
// import { mdiStar, mdiStarOutline } from '@mdi/js'
export default {
    name: 'Star',
    // data() {
    //     return {
    //         icons: {
    //             favourite: mdiStar,
    //             notFavourite: mdiStarOutline,
    //         },
    //     }
    // },
    props: {
        isFavourite: { type: Boolean, default: false },
    },
}
</script>
<style lang="scss">
.star {
    position: absolute;
    align-self: flex-end;
    transform: translate(-8px, 8px);
    font-size: 30px;
    line-height: 30px;
}
.star:before {
   content: "\2605";
   position: absolute;
}
.star:checked:before {
   content: "\2606";
   position: absolute;
   color:red;
}
</style>
