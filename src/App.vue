<template>
  <router-view id="app" />
</template>

<script>

export default {
  name: 'App',
  watch: {
    $route (to, from) {
      if (to.path !== from.path && window && window.plausible) {
        window.plausible('pageview', { u: to.path })
      }
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Graphik Web';
  font-weight: 400;
  src:  local('Graphik Regular Web'),
        local('Graphik Web'),
        url('./assets/fonts/Graphik-Regular-Web.woff') format('woff'),
        local('Graphik Regular'),
        local('Graphik');
}
body, html, h1, h2, h3, h4, h5, h6, p, ul li, a {
  margin: 0;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  padding: 0;
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  text-decoration: none;
  color: inherit;
}
:root {
  // Not mobile first approach, but post-css custom properties support for MQs is still only a pull request. IE11 main beneficary of that, prioritise desktop font size
  --font-size: 20px;
  @media(min-width: 1920px) {
    --font-size: 22px;
  }
  @media(max-width: $sm) {
    --font-size: 18px;
  }
  @media(max-width: $xs) {
    --font-size: 16px;
  }
}
body {
  background-color: $bg-color;
  font-size: $font-size;
  line-height: $line-height;
  font-weight: $font-weight-regular;
  color: $text-color;
  font-family: 'Graphik Web', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  margin: vr(0.5);
  @media (min-width: $md) {
    margin: vr(0.5) vr(1);
  }
}
</style>
