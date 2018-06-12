<template>
    <div id="wrapper">
        <main>
            <div class="ui-layout aside-layout">
                <sidemenu></sidemenu>
            </div>
            <div class="ui-layout content-layout">
              <keep-alive>
                <connection></connection>
              </keep-alive>
            </div>
        </main>
    </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'
  import Connection from './LandingPage/Connection'
  import Sidemenu from './LandingPage/Sidemenu'

  export default {
    name: 'landing-page',
    components: {SystemInformation, Connection, Sidemenu},
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    height: 100vh;
    width: 100vw;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  main {
    display: flex;
    justify-content: space-between;
    min-width: 500px;
    max-width: 550px;
    min-height: 600px;
    max-height: 600px;
  }
  main > .ui-layout {
    flex:1;
  }
  .aside-layout {
    background: rgba(134,226,214,1);
    background: -moz-linear-gradient(45deg, rgba(134,226,214,1) 0%, rgba(78,205,197,1) 100%);
    background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(134,226,214,1)), color-stop(100%, rgba(78,205,197,1)));
    background: -webkit-linear-gradient(45deg, rgba(134,226,214,1) 0%, rgba(78,205,197,1) 100%);
    background: -o-linear-gradient(45deg, rgba(134,226,214,1) 0%, rgba(78,205,197,1) 100%);
    background: -ms-linear-gradient(45deg, rgba(134,226,214,1) 0%, rgba(78,205,197,1) 100%);
    background: linear-gradient(45deg, rgba(134,226,214,1) 0%, rgba(78,205,197,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#86e2d6', endColorstr='#4ecdc5', GradientType=1 );
  }
  .content-layout {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    flex: 90%!important;
  }

</style>
