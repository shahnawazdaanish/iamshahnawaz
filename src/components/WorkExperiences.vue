<template>
  <v-container class="fill-height">
    <v-row class="justify-center align-center">
      <v-col
        cols="12"
        md="12"
        lg="12"
      >
        <v-timeline side="end" v-for="work_experience in work_experiences" :key="work_experience.id">
          <v-timeline-item size="large" v-for="position in work_experience.positions" :key="position.position">
            <template #icon>
              <v-avatar image="https://i.pravatar.cc/64"></v-avatar>
            </template>
            <template #opposite>
              <span class="font-weight-bold">{{ position.startDate }} - {{ position.endDate }} </span>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="text-h5">
                {{ position.position }}
              </v-card-title>
              <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed
                euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix
                an salutandi sententiae.
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {WorkExperience} from "@/interfaces/WorkExperience";

let work_experiences = ref<WorkExperience[]>([])

async function loadWEFromMsw() {
  const resp = await fetch('/work_experiences')
    .then(response => response.json())
    .then(json => {
      return json
    })
    .catch(err => console.log('Error', err))

  work_experiences.value = await resp;
}

onMounted(async () => {
  await loadWEFromMsw()
})
</script>
