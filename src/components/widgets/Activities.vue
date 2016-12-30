<template>

<div>
    <el-card>
        <el-row>
            <el-col :span="24">
                <h3>Activity Log</h3>
            </el-col>
        </el-row>
        <div v-for="log in $store.state.activities">
            <hr>
            <el-row>
                <el-col :span="18" :xs="{span:24}">
                    {{
                        get_activity(log)
                    }}
                </el-col>
                <el-col :span="6" class="time">
                    {{log.time}}
                </el-col>
            </el-row>
            <br>
        </div>

        <div v-if="$store.state.activities.length===0">
            <hr>
            <el-row>
                <el-col :span="24">
                    <h4>no activities</h4>
                    <p>start by creating a new set</p>
                </el-col>
                
            </el-row>
            <br>
        </div>
        
    </el-card>
    <br>
</div>

</template>

<script>
    export default {
        methods: {
            get_activity(log) {
                switch (log.action) {
                    case 'add':
                        return 'added "'+log.name+'" to your study sets'
                    case 'delete':
                        return 'deleted "'+log.name+'" from your study sets'
                    case 'edit':
                        return 'edited "'+log.name+'" in your study sets'
                }
            }
        }
    }
</script>

<style scoped>

@media screen and (max-width: 768px) {
    .time {
        display: none !important;
    }
}

</style>
