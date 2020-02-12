<template>
  <v-app>
    <v-content>
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
#app
  position: absolute
  top: 50%
  left: 50%
  width: 80vw
  height: 80vh
  margin: 0 auto
  transform: translate(-50%, -50%)
  background: rgba(18, 18, 18, .5)
</style>
