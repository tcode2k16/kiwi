<template>

<div>
    <el-card>
        <el-row>
            <el-col :span="8">
                <el-button type="primary" size="large" @click.native="start_train">
                    <h3>Start<br>Training</h3>
                </el-button>

                
                
            </el-col>
            <el-col :span="16">
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
            this.$store.commit('add_streak');
        }
    }
}    

</script>


<style scoped>



</style>