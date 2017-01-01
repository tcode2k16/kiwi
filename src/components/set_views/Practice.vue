<template>
<div class="component">
    <el-row type="flex" :getter="progress.total" class="p_bar">
        <el-col :span="progress.right" class="p_right"></el-col>
        <el-col :span="progress.wrong" class="p_wrong"></el-col>
        <el-col :span="progress.total -progress.right -progress.wrong" class="p_none"></el-col>
    </el-row>

    <el-row>
        <el-col :span="12">
            <el-button @click="progress.right++">
                right
            </el-button>
        </el-col>
        <el-col :span="12 ">
            <el-button @click="progress.wrong++">
                wrong
            </el-button>
        </el-col>
    </el-row>
    <br>
    <el-row type="flex">
        <el-col :span="largeScreen ? 18 : 24" :offset="largeScreen ? 3 : 0">
            <el-card>
                <h1>hello</h1>
            </el-card>
        </el-col>
    </el-row>
</div>


</template>

<script>
    
export default {
    props: ['largeScreen','uuid'],
    data() {
        return {
            progress: {
                right: 5,
                wrong: 7,
                total: 30
            }
        }
    }
}

</script>

<style scoped>


.p_bar {
    height: 0.5vh;
    /*border-bottom: 0.5vh solid #fff;*/
}

.p_none {
    background-color: #3498db;
}

.p_right {
    background-color: #2ecc71;
}

.p_wrong {
    background-color: #e74c3c;
}

</style>