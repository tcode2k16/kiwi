<template>

<el-card>
    <el-row type="flex">
        <el-col :span="2">
            <div style="float: left;">
                <p class="correctness">{{correctness >= 0 ? '+'+correctness : correctness}}</p>
            </div>
        </el-col>
        <el-col :span="22">
            <div style="float: right;">
                <p v-if="edit_w" style="color:#20a0ff;display: inline-block">{{screenw < 768 ? 'click to save' : 'click pen to save'}}</p>
                <i class="el-icon-edit bt" @click="editBt" :style="edit_w ? 'color:#20a0ff;' : '' "></i>
                <div  @click="star = !star" style="display: inline-block;">
                    <i class="el-icon-star-on bt" style="color:#20a0ff;" v-if="star"></i>
                    <i class="el-icon-star-off bt" v-else></i>
                </div>
                
                <i class="el-icon-close bt" @click="delete_term"></i>
            </div>
        </el-col>
    </el-row>
    <el-row type="flex" align="middle">
       
        <el-col :span="8" class="title" :xs="{span:24}">
            <p class="n_edit" v-if="!edit_w" @dblclick="startEdit('name')">{{word}}</p>
            <textarea v-if="edit_w"
                @blur="onblur"
                v-model="word"
                v-autosize="word"
                class="word"
                ref="name"
                autocomplete="off"
                placeholder="Term">
            </textarea>
        </el-col>
    

        <el-col :span="16" class="divider def_c">
            <p class="n_edit" v-if="!edit_w" @dblclick="startEdit('def')">{{def}}</p>
            <textarea v-if="edit_w"
                @blur="onblur"
                v-model="def"
                v-autosize="def"
                class="word"
                ref="desc"
                autocomplete="off"
                placeholder="Definition">
            </textarea>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24" class="def_c_m">
            <p class="n_edit" v-if="!edit_w" @dblclick="startEdit('def')">{{def}}</p>
            <textarea v-if="edit_w"
                @blur="onblur"
                v-model="def"
                v-autosize="def"
                class="word"
                ref="desc2"
                autocomplete="off"
                placeholder="Definition">
            </textarea>
        </el-col>
    </el-row>
</el-card>

</template>


<script>

export default {
    props: ['term','uuid','tuuid','screenw'],
    data() {
        return {
            edit_w: false,
            word: this.term.word,
            def: this.term.def,
            star: this.term.star,
            correctness: this.term.correctness
        }
    },
    mounted() {
        if (this.term.word === undefined) {
            this.startEdit('name')
        }
    },
    methods: {
        editBt() {
            if(!this.edit_w)
                this.startEdit('name')
        },
        delete_term() {
            this.$confirm('This will permanently delete the term. Continue?', 'Warning', {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                this.delete_state()
                this.$message({
                    type: 'success',
                    message: 'Delete completed'
                })
            })
        },
        onblur() {
            window.setTimeout(function() {
                if (this.$refs.name !== document.activeElement && this.$refs.desc !== document.activeElement && this.$refs.desc2 !== document.activeElement )
                    this.startEdit()
            }.bind(this),200)
            

        },
        startEdit(el) {
            this.edit_w = !this.edit_w
            if (this.edit_w) {
                this.$nextTick(function () {
                    if (el==='def')
                        if (this.screenw < 768)
                            this.$refs.desc2.focus()
                        else
                            this.$refs.desc.focus()
                    else
                        this.$refs.name.focus()
                })
            } else  {
                if (this.word !== this.term.word || this.def !== this.term.def) {
                    this.change_state()
                    this.$message({
                        type: 'success',
                        message: 'Term updated'
                    })
                }
            }
            
                
        },
        change_state() {
            this.$store.commit('change_term', {
                uuid: this.uuid,
                tuuid: this.tuuid,
                terms: {
                    word: this.word,
                    def: this.def,
                    star: this.star,
                    correctness: this.correctness
                }
            })

        },
        delete_state() {
            this.$store.commit('delete_term', {
                uuid: this.uuid,
                tuuid: this.tuuid
            })
        }
    },
    watch: {
        star: {
            handler() {
                this.$store.commit('star_term', {
                    uuid: this.uuid,
                    tuuid: this.tuuid
                })

                let msg = ' "'+this.word+'"'
                if (this.star)
                    msg = "Stared"+msg
                else
                    msg = "Unstared"+msg
                this.$message({
                    type: 'success',
                    message: msg 
                })

            }
        }
    }
}
</script>

<style scoped>

.divider {
     border-left:3px solid #f0f0f0; 
     padding: 10px;
     
}

.title {
    padding: 10px;
}

.bt {
    cursor: pointer;
    margin: 10px;
    display: inline-block;
}

.correctness {
    color: #20a0ff;
    font-size: 20px;
    font-weight: bold;
    margin: 10px
}

.n_edit {
    text-align: left;
    padding: 0 2rem;
}

.def_c_m {
    display: none;
    padding: 10px;
}

.word {
    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    -ms-transition: all 0.30s ease-in-out;
    -o-transition: all 0.30s ease-in-out;
    transition:all 0.30s ease-in-out;
    outline: none;
    text-align: left;
    padding: 3px 0px 3px 3px;
    /*padding: 0 2rem;*/
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
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

@media screen and (max-width: 768px) {
    .def_c {
        display: none !important;
    }

    .def_c_m {
        display: block !important;
    }

    .title {
        color: #000;
    }

    

    


    
}

</style>