<template>
    <div class="home">
        <el-container>
            <el-aside width="200px">
                <Menu/>
            </el-aside>
            <el-container>
                <el-header style="height:48px">
                    <Header/>
                </el-header>
                <el-main>
                    <el-button @click="aaaa">按键 </el-button>
                </el-main>
                <el-footer>
                    <Footer/>
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>

import Header from '@comm/Header.vue';
import Menu from '@comm/Menu.vue';
import Footer from '@comm/Footer.vue';
import { mapState } from 'vuex';
export default {
    name: 'Home',
    components: {
        Header,
        Menu,
        Footer
    },
    computed: {
        ...mapState(['title'])
    },
    data () {
        return {};
    },
    created () {
        console.log(this.title);
    },
    mounted () {

    },
    methods: {
        aaaa () {
        }
    }
};
</script>

<style lang="scss">
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 48px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
