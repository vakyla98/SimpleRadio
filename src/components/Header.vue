<template>
    <div class="header mb-2">
        <v-app-bar color="grey">
            <v-app-bar-nav-icon @click="drawer = true">
                <v-icon>
                    {{ icons.menu }}
                </v-icon>
            </v-app-bar-nav-icon>
            <v-toolbar-title class="align-center">
                Simple radio
                <v-icon class="ml-3">
                    {{ icons.radio }}
                </v-icon>
            </v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            color="grey lighten-1"
            temporary
        >
            <v-list nav dense>
                <v-list-item-group active-class="orange--text text--accent-4">
                    <menu-link
                        v-for="link in links"
                        :link="link"
                        :key="link.route"
                    />
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
import { mdiRadio, mdiMenu, mdiHome, mdiStar, mdiPlus } from '@mdi/js'
import MenuLink from './Base/MenuLink.vue'
export default {
    name: 'Header',
    components: {
        MenuLink,
    },
    data() {
        return {
            drawer: false,
            icons: {
                radio: mdiRadio,
                menu: mdiMenu,
            },
            links: [
                {
                    text: 'All stations',
                    route: '/',
                    icon: mdiHome,
                },
                {
                    text: 'Favourite',
                    route: '/favourite',
                    icon: mdiStar,
                },
                {
                    text: 'Add station',
                    route: '/add-station',
                    icon: mdiPlus,
                },
            ],
        }
    },
}
</script>
<style>
.v-toolbar__title {
    display: flex;
}
</style>
