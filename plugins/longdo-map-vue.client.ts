import LongDoMap from "longdo-map-vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(LongDoMap, {
    load: {
      apiKey: "f38639d33e37f4e422cd8085d997d55f",
    },
  });
});
