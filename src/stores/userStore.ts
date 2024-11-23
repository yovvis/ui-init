import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCurrentUser } from '@/api/user.ts'
import ACCESS_ENUM from '@/hooks/access/accessEnum.ts'

interface LoginUserVO {
  createTime?: string
  id?: number
  updateTime?: string
  userAvatar?: string
  userName?: string
  userProfile?: string
  userRole?: string
}

export const useUserStore = defineStore('userStore', () => {
  const loginUser = ref<LoginUserVO>({
    userName: '未登录',
  })

  /**
   * 远程获取登录用户信息
   */
  async function fetchLoginUser() {
    await getCurrentUser().then((res) => {
      if (res.data.code === 0 && res.data.data) {
        loginUser.value = res.data.data
      } else {
        loginUser.value = { userRole: ACCESS_ENUM.NOT_LOGIN }
      }
    })
  }

  /**
   * 单独设置用户信息
   *
   * @param newLoginUser
   */
  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser
  }

  return { loginUser, fetchLoginUser, setLoginUser }
})
