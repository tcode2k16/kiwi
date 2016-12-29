<template>

<div>
    <el-card>
        <h3>Todo list</h3>


        <div v-for="(task, index) in tasks">
            <hr>
            <el-row type="flex" align="middle">
                <el-col :span="2"><el-checkbox v-model="task.done"></el-checkbox></el-col>
                <el-col :span="20"><p :style="task.done ? 'text-decoration: line-through;' : ''">{{task.name}}</p></el-col>
                <el-col :span="2">
                    <div @click="remove_task(index)">
                        <i class="el-icon-close delete"></i>
                    </div>
                </el-col>
                
            </el-row>
        </div>
        
        <hr><br>
        <el-row type="flex" align="middle">
            <el-col :span="24">
                <el-input size="large" @blur="change_focus" @focus="change_focus" placeholder="What needs to be done?" v-model="input" @keyup.native.enter="addTodo"></el-input>
            </el-col>
            
            
        </el-row>

    </el-card>
    <br>
</div>

</template>

<script>

export default {
    data() {
        return {
            tasks: JSON.parse(JSON.stringify(this.$store.state.menu.todos)),
            input: ''
        }
    },
    watch: {
      tasks: {
          deep: true,
          handler() {
              this.$store.commit('change_todo', this.tasks)
          }
      }  
    },
    methods: {
        remove_task(index) {
            this.tasks.splice(index, 1)
            
        },
        addTodo() {
            if (this.input === "" || this.input === undefined) return;
            this.tasks.push({
                name: this.input,
                done: false
            })
            this.input = ''
            document.activeElement.blur()
        },
        change_focus() {
            this.$store.commit('toggle_drag')
        }
    }
}

</script>

<style>
.delete {
    cursor: pointer;
}
</style>