<template>
  <div class="basic-header">
    <a-row :wrap="false">
      <a-col flex="150px">
        <div class="title-bar">
          <img class="logo" src="../../../assets/logo.png" alt="logo" />
          <div class="title">亿智狐API</div>
        </div>
      </a-col>
      <a-col flex="auto">
        <f-menu></f-menu>
      </a-col>
      <a-col flex="80px">
        <div class="right">
          <div v-if="userStore.loginUser.id">
            {{ userStore.loginUser.userName ?? '无名' }}
          </div>
          <div v-else>
            <a-button type="primary" href="/user/login">登录</a-button>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/stores/userStore.ts'
const userStore = useUserStore()
</script>
<style scoped lang="scss">
.basic-header {
  * {
    font-family:
      PingFang SC,
      sans-serif;
  }
}

.title-bar {
  display: flex;
  align-items: center;

  .title {
    color: black;
    font-size: 18px;
    margin-left: 16px;
  }

  .logo {
    height: 48px;
  }
}
</style>
