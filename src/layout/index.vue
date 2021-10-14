<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="1">
          <user-outlined />
          <span>nav1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span>nav2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span>nav3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout></a-layout>
  </a-layout>
  <router-view></router-view>
</template>

<script setup lang="ts"></script>

<style></style>
