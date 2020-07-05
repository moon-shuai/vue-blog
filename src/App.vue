<template>
  <div id="app">
    <transition name="fade" mode="out-in" keep-alive>
        <div class="container">
            <router-view />
        </div>
    </transition>
  </div>
</template>

<style lang="scss">
</style>
