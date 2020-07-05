<template>
    <div class="login">
        <div class="bk" />
        <div class="login-logo" />
        <div class="login-container">
            <div class="login-container-content">
                <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-position="left"
                    label-width="0px"
                    class="demo-ruleForm"
                    >
                    <h3 class="title">登录</h3>
                    <el-form-item prop="account">
                        <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="用户名">
                        <i slot="prepend" class="el-icon-user-solid el-icon"></i>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="checkPass">
                        <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="密码">
                        <i slot="prepend" class="el-icon-lock el-icon"></i>
                        </el-input>
                    </el-form-item>
                    <!--<el-form-item prop="checkCode">
                        <el-input type="text" v-model="ruleForm.checkCode" auto-complete="off" placeholder="验证码" style="width: 210px;"><i slot="prepend" class="icon-checkcode"></i></el-input>
                        <img :src="verifyCode" alt="验证码" class="checkCode" @click="changeVerifyCode"/>
                        <span class="checkCode-switch" @click="changeVerifyCode">换一个</span>
                    </el-form-item>-->
                    <el-form-item style="width:100%;margin-top: 50px;">
                        <el-button
                            type="primary"
                            native-type="submit"
                            class="login-btn"
                            @click.native.prevent="handleSubmit"
                        >登录</el-button>
                        <!--<el-button @click.native.prevent="handleReset">重置</el-button>-->
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
const { dataAjax } = require('@ajax');
const { login } = require('@util');
export default {
    name: 'Login',
    data () {
        return {
            ruleForm: {
                account: 'admin',
                checkPass: '123456',
                checkCode: ''
            },
            rules: {
                account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
                checkPass: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            }
        };
    },
    methods: {
        handleReset () {
            this.$refs.ruleForm.resetFields();
        },
        handleSubmit () {
            const _this = this;
            _this.$refs.ruleForm.validate(async valid => {
                if (valid) {
                    let data = {
                        userName: _this.ruleForm.account,
                        passWord: _this.ruleForm.checkPass
                    };
                    const res = await login(data);
                    sessionStorage.setItem('user', JSON.stringify(res));
                    _this.getCurrentUserInfo();
                }
            });
        },
        async getCurrentUserInfo () {
            const _this = this;
            const res = await dataAjax({
                url: '/user/current',
                loading: true
            });
            if(res) sessionStorage.setItem('menu', JSON.stringify(res));
            _this.$router.push({ path: '/index' });
        }
    }
};
</script>

<style lang="scss" scoped>
    .login {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        left: 0;
        background: #ffffff;
        .bk {
            position: absolute;
            top: 0px;
            left: 0px;
            bottom: 0px;
            width: 100%;
            height: 100%;
            background: url(../../../static/images/login_bg.png);
        }

        .login-container{
            border-radius: 5px;
            -moz-border-radius: 5px;
            background-clip: padding-box;
            width: 400px;
            height: 300px;
            background: #fff;
            border: 1px solid #eaeaea;
            box-shadow: 0 0 10px #cac6c6!important;
            transform: translate(-50%,-50%);
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 1;
            padding: 20px;
            h3{
                line-height: 56px;
                text-align: center;
                color: #232323;
                letter-spacing: 2px;
                font-weight: 600;
                font-size: 28px;
            }
            .login-btn {
                width:100%;
                height:48px;
                background-color: #70A7EA;
                font-size: 1.2rem;
                border-radius: 12px;
            }
            .el-icon {
                font-size: 24px;
            }
        }
}
</style>