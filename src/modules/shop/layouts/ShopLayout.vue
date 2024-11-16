<template>
  <!-- component -->
  <!-- Create By Joker Banny -->
  <body class="bg-white">
    <!-- Header Navbar -->
    <TopMenu />

    <!-- Title -->
    <div class="pt-32 bg-white">
      <h1 class="text-center text-2xl font-bold text-gray-800">Todos los productos</h1>
    </div>

    <!--cuerpo-->
    <PrincipalView />
    <!-- Footer -->
    <CustomFooter />
  </body>
</template>

<script lang="ts" setup>
import TopMenu from '../componets/TopMenu.vue';
import CustomFooter from '../componets/CustomFooter.vue';
import PrincipalView from '../views/principalView.vue';
</script>
