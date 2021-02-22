<template>
  <div class="d-flex" style="margin-bottom: 2px">
    <slot/>
    <v-spacer/>
    <!--  靠右对齐按钮  -->
    <div>
      <slot name="right"/>
    </div>
  </div>
</template>