<template>
  <div class="login_container">
    <!-- 外框 -->
    <div class="login_box">
      <!-- 头像 -->
      <div class="logo">
        <!--<img src="../assets/logo.png"
             alt="">-->
        <h1>用户登陆</h1>
      </div>
      <!-- 表单 -->
      <el-form
        ref="formRef"
        :model="form"
        label-width="0px"
        class="sign"
        :rules="ruleLogin"
      >
        <!-- 登录名 -->
        <el-form-item prop="username">
          <el-input
            prefix-icon="iconfont icon-user"
            v-model="form.username"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            prefix-icon="iconfont icon-3702mima"
            show-password
            v-model="form.password"
            @keyup.enter.native="login"
          ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      // 校验数据是否合法
      ruleLogin: {
        username: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          { min: 2, max: 6, message: "长度在 2 到 10 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 重置方法
    reset: function () {
      this.$refs.formRef.resetFields();
    },
    // 表单提交预验证
    login: function () {
      /*
      this.$refs.formRef.validate(async val => {
        // 预验证失败阻止程序向下执行
        if (!val) return;
        // 预验证通过发送请求
        let { data: res } = await this.$http.post('login', this.form);
        if (res.meta.status !== 200) return this.$message.error("登录失败");
        this.$message.success("登录成功");
        // 保存登录成功的token
        window.sessionStorage.setItem("token", res.data.token);
        // 跳转到home页面
        this.$router.push("/home")
      })
    },*/
    },
  },
};
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
  background-color: #d2d9e0;
}

.login_box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 300px;
  width: 450px;
  border-radius: 14px;
  background-color: #fff;

  .logo {
    position: absolute;
    left: 50%;
    top: 14%;
    transform: translate(-50%, -50%);
  }
}

.sign {
  margin-top: 90px;
  padding: 0 20px;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
