<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" />
      </div>
      <el-button @click="login">123</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    async login() {
      const { data: res } = await this.$http.post('login', {
        username: 'admin',
        password: '123456'
      })
      console.log(res)
      window.sessionStorage.setItem('token', res.data.token)

      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  // left:50%;
  // top:50%;
  // transform:translate(-50%,-50%);

  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  margin: auto;
}
.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;

  position: absolute;
  top: -35%;
  left: 0%;
  right: 0%;
  margin: auto;

  background: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
</style>
