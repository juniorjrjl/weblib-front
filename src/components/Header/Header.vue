<template>
  <Fragment>
    <div class="p-grid" id="dvHeader">
      <div class="p-col-1 p-md-1 p-lg-1">
        <Button class="p-button-rounded" icon="pi pi-bars" @click="visibility = true" id="btnMenu"/>
      </div>
      <div class="p-col-10 p-md-10 p-lg-10">
        <h1 id="titleHeader">WebLib</h1>
      </div>
      <div class="p-col-1 p-md-1 p-lg-1">
      <Sidebar :visible.sync="visibility" :baseZIndex="1000" position="left" >
        <router-link to="/">Home</router-link> | 
        <router-link to="/NewUser">NewUser</router-link>
      </Sidebar>
      </div>
    </div>
  </Fragment>
</template>

<script src="./Header.js"></script>

<style src="./Header.css"></style>