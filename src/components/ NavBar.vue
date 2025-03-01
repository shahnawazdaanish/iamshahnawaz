<template>
  <v-app-bar flat>
    <!-- Container for logo and menu items -->
    <v-container class="d-flex align-center justify-center">
      <!-- Logo -->
      <v-app-bar-title>
        <v-img
          :src="currentTheme === 'dark' ? logoLight : logo"
          max-height="70"
          max-width="70"
          @click="logoClicked"
        ></v-img>
      </v-app-bar-title>

      <!-- Menu items for desktop view -->
      <template v-if="!isMobileDevice.value">
        <v-btn
          v-for="link in links"
          :key="link"
          @click="selectTaskType(link)"
          :text="link"
          variant="text"
          :active="isRouteCurrentMenu(link)"
          :class="{ 'selected-link': isRouteCurrentMenu(link) }">
          {{ link }}
        </v-btn>

        <v-spacer/>

        <v-btn
          class="text-none text-subtitle-1"
          color="#05B990"
          size="small"
          variant="outlined"
          @click="createTask">
          {{ DOWNLOAD_CV }}
        </v-btn>

        <v-btn
          flat
          @click="toggleDarkMode"
        >
          <v-icon
            :icon="getThemeToggleIcon"
            small
            color="#05B990"
            fixed
            left
          ></v-icon>
        </v-btn>
      </template>

      <!-- Hamburger icon for mobile view -->
      <v-app-bar-nav-icon v-if="isMobileDevice.value" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>

  <!-- Navigation drawer for mobile view -->
  <v-navigation-drawer v-model="drawer" temporary v-if="isMobileDevice.value">
    <v-list>
      <v-list-item
        v-for="link in links"
        :key="link"
        @click="selectTaskType(link)"
        :class="{ 'selected-link': link === selectedLink }">
        <v-list-item-title>{{ link }}</v-list-item-title>
      </v-list-item>
      <v-list-item @click="createTask">
        <v-list-item-title>Create Task</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>


<script setup lang="ts">
import router from "@/router";
import {computed, ref} from 'vue'
import {useTheme, useDisplay} from 'vuetify'
import {
  MY_EDUCATIONS,
  MY_PROJECTS,
  MY_SKILLS,
  MY_WORK_EXPERIENCES,
  DOWNLOAD_CV
} from "@/constants/appConstants";
import logo from '@/assets/logo.png';
import logoLight from '@/assets/logo-light.png';

const display = useDisplay()
const theme = useTheme()

const isMobileDevice = computed(() => {
  return display.mobile
})
const currentRouteName = computed(() => router.currentRoute.value.name)
const currentTheme = computed(() => theme.global.name.value)

const links = ref<string[]>([MY_WORK_EXPERIENCES, MY_EDUCATIONS, MY_SKILLS, MY_PROJECTS])
const drawer = ref(false);
const selectedLink = ref('');

const emit = defineEmits(['task-type-selected', 'logo-clicked']);

const selectTaskType = (taskType: string) => {
  selectedLink.value = taskType;
  emit('task-type-selected', taskType);
  drawer.value = false;
  router.push({path: convertMenuToLink(taskType)});
};

const logoClicked = () => {
  emit('logo-clicked');
  router.push({path: '/'})
};

const convertMenuToLink = (link: string) => link.toLowerCase().replace(/ /g, '_');
const isRouteCurrentMenu = (menu: string) => {
  return menu.toLowerCase() === currentRouteName.value.replace(/_/g, ' ').replace('\/', '');
};

const createTask = () => {
  // router.push({name: TASK_CREATE_VIEW}).then();
  drawer.value = false;
};

const toggleDarkMode = () => {
  theme.global.name.value = theme.global.name.value === 'light' ? 'dark' : 'light'
};
const getThemeToggleIcon = computed(() =>
  theme.global.name.value === 'light' ? 'mdi-lightbulb-off' : 'mdi-lightbulb-on-10'
);
</script>
