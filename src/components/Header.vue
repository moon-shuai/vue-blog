<template>
    <div class="header">
        <div class="header-icon el-icon-s-fold el-icon"></div>
        <div class="header-title">

            <!-- 多语言放在登录页面 -->
            <!-- <span class="heder-lang">
                <el-select v-model="langvalue" placeholder="请选择">
                    <el-option
                    v-for="item in langOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </span> -->
            
            <span class="heder-lang mr20 el-icon-s-custom">欢迎你！陈帅</span>
            <el-tooltip content="全屏缩放" effect="dark" placement="bottom" fullscreen>
                <div id="screenfull" class="el-icon el-icon-full-screen mr10" @click="handleFullScreen" />
            </el-tooltip>
            <span class="heder-lang el-icon-picture mr10 el-icon"></span>
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    <span class="heder-lang el-icon-unlock el-icon"></span>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">修改密码</el-dropdown-item>
                    <el-dropdown-item command="b">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import screenfull from 'screenfull';
export default {
    name:'Header',
    data () {
        return {
            langvalue:'cn',
            langOptions: [
                { value: 'cn', label: '中文'}, 
                { value: 'en', label: 'English'}
            ],

        };
    },
    created () {

    },
    mounted() {
    },
    beforeDestroy() {
    },
    methods: {
        handleFullScreen() {
            if (!screenfull.isEnabled) {
                this.$message.warning('您的浏览器版本过低不支持全屏显示！');
                return false;
            }
            screenfull.toggle();
        },
        handleCommand(command) {
            this.$message.success('success','click on item ' + command, true);
        }
    }
};
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    line-height: 48px;
    justify-content: space-between;
    font-size: 16px;
    .header-icon {
        line-height: 48px;
        text-align: left;
    }
    .header-title {
        text-align: right;
    }
    .el-icon {
        cursor: pointer;
        font-size: 24px;
    }

    .el-dropdown-link {
        cursor: pointer;
    }
}
</style>