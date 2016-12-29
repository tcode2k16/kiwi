



<template>
    <el-row>
        <el-col :span="12">
            <draggable class="draggable" :options="{group:'widgets'}" @start="$store.state.dragging=true" @end="$store.state.dragging=false">
                <Welcome></Welcome>
            </draggable>
        </el-col>
        <el-col :span="12">
            <draggable class="draggable" :options="{group:'widgets'}" @start="$store.state.dragging=true" @end="$store.state.dragging=false">
                <div class="card_w">
                    <el-card>{{$store.state.info.user}}</el-card>
                    <br>                
                </div>
            </draggable>
        </el-col>
    </el-row>
</template>

<script>

import draggable from 'vuedraggable'
import Welcome from '../components/widgets/Welcome'

export default {
    components: {
        draggable,
        Welcome
    }
    
}
</script>

<style scoped>

.draggable {
    min-height: 50px;
    padding: 10px
}
</style>
