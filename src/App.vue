<template>
  <v-app>
    <v-content style="max-height: 100%; overflow: auto;">
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
html
  overflow: hidden
#app
  display: none
  width: 80vw
  height: 80vh
  background: rgba(18, 18, 18, .75)
  &.active
    display: block
  .v-application--wrap
    min-height: 100%
</style>
