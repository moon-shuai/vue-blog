<template>
    <div><el-button @click="aaaaa"></el-button></div>
</template>

<script>
import { mapState, mapActions} from 'vuex';
export default {
    name:'Menu',
    computed: {
        ...mapState(['menuList'])
    },
    data () {
        return {

        };
    },
    created () {
        const _this = this;
        const menusAuth = this.menuList;
        if (!menusAuth) _this.getMenu();
    },
    mounted () {

    },
    methods: {
        ...mapActions(['getMenu', 'decrement']),
        aaaaa () {
            this.decrement();
        }
    }
};
</script>

<style>

</style>