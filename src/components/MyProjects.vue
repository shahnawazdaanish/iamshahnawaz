<template>
  <v-container class="fill-height">
    <v-row class="justify-center align-center">
      <v-col
        cols="12"
        md="12"
        lg="12"
      >
        <v-row>
          <template
            v-for="(image,imgIdx) in imageLayout"
            :key="imgIdx"
          >
            <v-col :cols="image.cols">
              <v-img
                :src="`https://picsum.photos/500/300?image=${image.cols * 20}`"
                height="100%"
                cover
              />
            </v-col>

            <v-col
              v-if="image.children"
              class="d-flex flex-column"
              cols="6"
            >
              <v-row>
                <v-col
                  v-for="(children,childIdx) in image.children"
                  :key="childIdx"
                  :cols="children.cols"
                >
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${children.cols + childIdx}`"
                    height="100%"
                    cover
                  />
                </v-col>
              </v-row>
            </v-col>
          </template>
        </v-row>
      </v-col>
    </v-row>
  </v-container>

</template>

<script setup>
const imageLayout = [
  {cols: 4},
  {
    cols: 8,
    children: [{cols: 12}, {cols: 12}],
  },
  {cols: 6},
  {cols: 3},
  {cols: 9},
  {cols: 4},
  {cols: 8},
]
</script>
