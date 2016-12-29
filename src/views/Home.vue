



<template>
    <el-row>
        <el-col :span="12">
            <draggable class="draggable" :options="{group:'widgets'}" @start="dragging=true" @end="dragging=false">
                <Welcome></Welcome>
                <Train></Train>
                <Activities></Activities>
            </draggable>
        </el-col>
        <el-col :span="12">
            <draggable class="draggable" :options="{group:'widgets'}" @start="dragging=true" @end="dragging=false">
                <Todo></Todo>

            </draggable>
        </el-col>
    </el-row>
</template>

<script>

import draggable from 'vuedraggable'
import Welcome from '../components/widgets/Welcome'
import Todo from '../components/widgets/Todo'
import Train from '../components/widgets/Train'
import Activities from '../components/widgets/Activities'


export default {
    components: {
        draggable,
        Welcome,
        Todo,
        Train,
        Activities
    },
    data() {
        return {
            dragging: false
        }
    },
    methods: {
        preventBehavior(e) {
            e.preventDefault()
        }

    },
    watcher: {
        dragging: {
            handler() {
                if (this.dragging)
                    document.addEventListener("touchmove", this.preventBehavior, false)
                else
                    document.removeEventListener("touchmove", this.preventBehavior, false)
            }
        }
    }
    
}
</script>

<style scoped>

.draggable {
    min-height: 50px;
    padding: 10px
}
</style>
