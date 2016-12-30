<template>

<el-card>
    <el-row type="flex" align="middle">
       
        <el-col :span="8" class="title">
            <p v-if="!edit_w">{{word}}</p>
            <textarea v-if="edit_w"
                v-model="word"
                class="word"
                ref="name"
                autocomplete="off"
                @keyup="textAreaAdjust">
            </textarea>
        </el-col>
    

        <el-col :span="13" class="divider">
            <p v-if="!edit_w">{{def}}</p>
            <textarea v-if="edit_w"
                v-model="def"
                class="word"
                ref="desc"
                @keyup="textAreaAdjust">
            </textarea>
        </el-col>
        

        <el-col :span="3">
            <i class="el-icon-edit bt" @click="startEdit" :style="edit_w ? 'color:#20a0ff;' : '' "></i>
            <i class="el-icon-star-on bt" :style="stared ? 'color:#20a0ff;' : ''" @click="stared = !stared"></i>
        </el-col>
    </el-row>
</el-card>

</template>


<script>

export default {
    props: ['term','uuid','tuuid'],
    data() {
        return {
            edit_w: false,
            word: this.term.word,
            def: this.term.def,
            stared: false
        }
    },
    methods: {
        textAreaAdjust(e) {
            e.target.style.height = "auto"
            e.target.style.height = e.target.scrollHeight+"px"
        },
        startEdit() {
            this.edit_w = !this.edit_w
            if (this.edit_w) {
                this.$nextTick(function () {
                    this.textAreaAdjust({target: this.$refs.name})
                    this.textAreaAdjust({target: this.$refs.desc})
                    this.$refs.name.focus()
                })
            } else if (!this.edit_w) {
                if (this.word !== this.term.word || this.def !== this.term.def) {
                    this.change_state()
                }
            }
                
        },
        change_state() {
            this.$store.commit('change_term', {
                uuid: this.uuid,
                tuuid: this.tuuid,
                terms: {
                    word: this.word,
                    def: this.def
                }
            })


        }
    }
}
</script>

<style scoped>

.divider {
     border-left:3px solid #f0f0f0; 
     padding: 10px
     
}

.title {
    padding: 10px
}

.bt {
    cursor: pointer;
    margin: 10px
}

.word {
    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    -ms-transition: all 0.30s ease-in-out;
    -o-transition: all 0.30s ease-in-out;
    transition:all 0.30s ease-in-out;
    outline: none;
    text-align: center;
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border-style: none;
    border-bottom: 3px solid #f0f0f0;
    font-size: 16px;
    color: #2c3e50;
    width: 90%;
    resize: none;
    overflow:hidden;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;

}

.word:focus {
    border-bottom: 3px solid #20a0ff;
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>