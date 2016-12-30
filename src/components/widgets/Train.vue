<template>

<div>
    <el-card>
        <el-row type="flex" align="middle">
            <el-col :span="8" :xs="{span: 24}">
                <el-button type="primary" style="width: calc(100%-10px)" @click.native="start_train">
                    <h3>Start<br>Training</h3>
                </el-button>

                
                
            </el-col>
            <el-col :span="16" class="text">
                <h1>{{$store.state.menu.num_streak}} Days Streak</h1>
            </el-col>
        </el-row>
    </el-card>
    <br>
</div>

</template>

<script>

export default {
    methods: {
        start_train() {
            this.$store.commit('add_streak')
            // this.$store.commit('toggle_drag')
        }
    }
}    

</script>


<style scoped>
@media screen and (max-width: 768px) {
    .text {
        display: none !important;
    }
}


</style>