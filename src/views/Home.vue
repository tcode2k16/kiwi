



<template>
    <el-row>
        <el-col :span="12">
            <draggable class="draggable" :list="drag_grid[0]" :options="$store.state.drag_op" @start="dragging=true" @end="dragging=false">
                <div v-for="each in drag_grid[0]">
                    <MenuWidgets :name="each"></MenuWidgets>    
                </div>
            </draggable>
        </el-col>
        <el-col :span="12">
            <draggable class="draggable" :list="drag_grid[1]" :options="$store.state.drag_op" @start="dragging=true" @end="dragging=false">
                <div v-for="each in drag_grid[1]">
                    <MenuWidgets :name="each"></MenuWidgets>    
                </div>

            </draggable>
        </el-col>
    </el-row>
</template>

<script>

import draggable from 'vuedraggable'
import MenuWidgets from '../components/widgets/MenuWidgets'


export default {
    components: {
        draggable,
        MenuWidgets
    },
    data() {
        return {
            dragging: false,
            drag_grid: JSON.parse(JSON.stringify(this.$store.state.menu.drag_grid))
        }
    },
    methods: {
        preventBehavior(e) {
            e.preventDefault()
        }

    },
    watch: {
        dragging: {
            handler() {
                if (this.dragging)
                    document.addEventListener("touchmove", this.preventBehavior, false)
                else
                    document.removeEventListener("touchmove", this.preventBehavior, false)
            }
        },
        drag_grid: {
            deep: true,
            handler() {
                this.$store.commit('set_drag_grid', this.drag_grid)
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
