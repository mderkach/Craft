<template>
  <v-app>
    <v-content style="max-height: 100%;">
      <Container />
    </v-content>
  </v-app>
</template>

<script>
import Container from "./components/Container";

export default {
  name: "App",

  components: {
    Container
  },
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style lang="sass">
html, body
  overflow: hidden !important
#app
  display: none
  width: 94vw
  height: 94vh
  background: rgba(18, 18, 18, .75)
  overflow: hidden !important
  &.active
    display: block
  .v-application--wrap
    min-height: auto
    height: 100%
</style>
