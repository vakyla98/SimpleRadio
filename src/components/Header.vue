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
                    <v-list-item to="/" exact>
                        <v-list-item-icon>
                            <v-icon>{{ icons.home }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>All stations</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="/add-station">
                        <v-list-item-icon>
                            <v-icon>{{ icons.plus }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Add station</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
import { mdiRadio, mdiMenu, mdiPlus, mdiHome } from '@mdi/js'
export default {
    name: 'Header',
    data() {
        return {
            drawer: false,
            icons: {
                radio: mdiRadio,
                menu: mdiMenu,
                plus: mdiPlus,
                home: mdiHome,
            },
        }
    },
}
</script>
<style>
.v-toolbar__title {
    display: flex;
}
</style>
