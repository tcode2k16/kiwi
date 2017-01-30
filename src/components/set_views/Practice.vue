<template>
<div class="component">
    <div style=""
        tabindex="0"
        @keydown="update"
        ref="inputdiv"></div>
    <div class="p_bar" v-if="total !== 0">
        <div class="wrong" :style="'width:'+(progress.wrong+progress.right)/total*100+'%'"></div>
        <div class="right" :style="'width:'+(progress.right)/total*100+'%'"></div>
    </div>

    <!--<el-row>
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
    <br>-->

    <br>
    <br>
    <br>
    <el-row type="flex">
        <el-col :span="largeScreen ? 18 : 24" :offset="largeScreen ? 3 : 0">      
            <div v-if="total !== 0">
                <el-card v-show="!view.correct && !view.wrong">
                    <el-row>
                        <el-col :span="24" class="title">
                            <p class="text prompt">{{definition}}</p>
                        </el-col>
                    </el-row>
                    <br>
                    <hr class="divider">
                    <br>
                    <el-row type="flex" align="middle">
                        <el-col :span="18">
                            <input rows="1"
                                class="word"
                                v-model="res"
                                ref="res"
                                autocomplete="off"
                                placeholder="Answer"
                                @keydown.enter.prevent="submit_answer"
                                autofocus>
                            </input>
                            <span class="des" @click="focus_text">type the answer</span>
                        </el-col>
                        <el-col :span="6">
                            <el-button type="primary" @click="submit_answer">Answer</el-button>
                        </el-col>
                    </el-row>
                </el-card>
                <el-card v-show="view.correct">
                    <el-row>
                        <el-col :span="24" class="title">
                            <p class="text correct prompt">Correct</p>
                        </el-col>
                    </el-row>
                    <br>
                    <el-row>
                        <el-col :span="24" class="title">
                            <span class="des">Prompt</span>
                            <p class="text">{{definition}}</p>
                        </el-col>
                    </el-row>
                    <br>
                    <hr class="divider">
                    <br>
                    <el-row type="flex" align="middle">
                        <el-col :span="24">
                            <span class="des">correct</span>
                            <p class="text">{{answer}}</p>
                        </el-col>
                    </el-row>
                    <br>
                    <el-row>
                        <el-col :span="24" class="title">
                            <el-button type="primary" @click="update">Press any key to continue</el-button>
                        </el-col>
                    </el-row>
                </el-card>
                <el-card v-show="view.wrong && res !== ''">
                    <el-row>
                        <el-col :span="24" class="title">
                            <p class="text incorrect prompt">Incorrect</p>
                        </el-col>
                    </el-row>
                    <br>
                    <el-row>
                        <el-col :span="24" class="title">
                            <span class="des">Prompt</span>
                            <p class="text">{{definition}}</p>
                        </el-col>
                    </el-row>
                    <br>
                    <hr class="divider">
                    <br>
                    <el-row type="flex" align="middle">
                        <el-col :span="24">
                            <span class="des">you said</span>
                            <p class="text">{{res}}</p>
                            <span class="override" @click="override">Override: I was right</span>
                        </el-col>
                    </el-row>
                    <br>
                    <hr class="divider">
                    <br>
                    <el-row type="flex" align="middle">
                        <el-col :span="24">
                            <span class="des">correct</span>
                            <p class="text">{{answer}}</p>
                        </el-col>
                        
                    </el-row>
                    <br>
                    <el-row>
                        <el-col :span="24" class="title">
                            <el-button type="primary" @click="update">Press any key to continue</el-button>
                        </el-col>
                    </el-row>
                </el-card>
                <el-card v-show="view.wrong && res === ''">
                    <el-row>
                        <el-col :span="24" class="title">
                            <p class="text incorrect prompt">Copy answer</p>
                        </el-col>
                    </el-row>
                    <br>
                    <el-row>
                        <el-col :span="24" class="title">
                            <span class="des">Prompt</span>
                            <p class="text">{{definition}}</p>
                        </el-col>
                    </el-row>
                    <br>
                    <hr class="divider">
                    <br>
                    <el-row type="flex" align="middle">
                        <el-col :span="24">
                            <span class="des">correct</span>
                            <p class="text">{{answer}}</p>
                        </el-col>
                    </el-row>
                    <br>
                    <hr class="divider">
                    <br>
                    <el-row type="flex" align="middle">
                        <el-col :span="24">
                            <input rows="1"
                                class="word"
                                v-model="cpanswer"
                                ref="cpanswer"
                                autocomplete="off"
                                placeholder="Answer"
                                @keyup="cpanswer_change"
                                autofocus>
                            </input>
                            <span class="des" @click="focus_text">copy answer</span>
                        </el-col>
                    </el-row>
                </el-card>
            </div>
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
                right: 0,
                wrong: 0,
                
            },
            res: '',
            cpanswer: '',
            view: {
                correct: false,
                wrong: false
            }
            
        }
    },
    methods: {
        override() {
            this.res = this.answer
            this.update()
        },
        cpanswer_change() {
            console.log('called');
            if (this.isCorrect(this.cpanswer,this.answer)) {
                this.cpanswer = ''
                this.update()
            }
        },
        onMove() {
            console.log('key down');
        },
        focus_text() {
            this.$refs.res.focus()
        },
        submit_answer() {
            if (this.isCorrect(this.res,this.answer)) {
                this.view.correct=true
            } else {
                this.view.wrong=true
            }
            if(this.res !== '') {
                console.log('working');
                this.$nextTick(function() {
                    this.$refs.inputdiv.focus()
                })
            }else {
                this.$nextTick(function() {
                    this.$refs.cpanswer.focus()
                })
            }
        },
        randomWord(obj) {
            
            let index = obj.length * Math.random() << 0
            return obj[index]
        },
        update() {
            console.log('update');
            if(this.isCorrect(this.res,this.answer)) {
                this.progress.right++;
            }else {
                this.progress.wrong++
                this.$store.commit('add_wrong_term', {
                    tuuid: this.tuuid,
                    uuid: this.uuid
                })
            }
            this.view.correct = false;
            this.view.wrong = false;
            this.res = ''
            this.$store.commit('finish_practise_term',{
                tuuid: this.tuuid,
                uuid: this.uuid
            })
            this.$nextTick(function() {
                this.$refs.res.focus()
            })
        },
        isCorrect(e1,e2) {
            return e1.trim().toLowerCase() === e2.trim().toLowerCase()
        }
    },
    computed: {
        wrongTerms() {
            return this.$store.state.study_sets.sets[this.uuid].practise.wrong
        },
        terms() {
            return this.$store.state.study_sets.sets[this.uuid].practise.all
        },
        tuuid() {
            return this.randomWord(this.terms)
        },
        total() {
            return Object.keys(this.$store.state.study_sets.sets[this.uuid].set).length
        },
        answer() {
            console.log(this.tuuid);
            if (this.total===0 || this.tuuid===undefined) return ''
            return this.$store.state.study_sets.sets[this.uuid].set[this.tuuid].word
        },
        definition() {
            console.log(this.tuuid);
            if (this.total===0 || this.tuuid===undefined) return ''
            return this.$store.state.study_sets.sets[this.uuid].set[this.tuuid].def
            // return ''
        }
    }
}

</script>

<style scoped>
.component {
    /*min-height: 100%;*/
}

.p_bar {
    z-index: 10;
    height: 0.5vh;
    /*border-bottom: 0.5vh solid #fff;*/
    width: 100%;
    background-color: white;
    display: block;
    position: absolute;
}

.right, .wrong {
    position: absolute;
    content: "";
    /*display: inline-block;*/
    top:  0;
    left: 0;
    height: 100%;
}

.right {
    z-index: 12;
    background-color: #28cc7d;
    width: 50%
}

.wrong {
    z-index: 11;
    background-color: #ff725b;
    width: 60%;
}

.divider {
    background-color: #f0f0f0;
    height: 2px;
    border: none;
    width: 95%
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
    /*margin: 5px 1px 3px 0px;*/
    margin: 5px auto 1px;
    border-style: none;
    border-bottom: 2px solid #475669;
    font-size: 18px;
    color: #2c3e50;
    width: 90%;
    resize: none;
    overflow:hidden;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;

}

.word:focus {
    border-bottom: 3px solid #20a0ff;
}


.text {
    text-align: left;
    /*padding: 3px 0px 3px 3px;*/
    /*margin: 5px 1px 3px 0px;*/
    margin: 0 auto;
    width: 90%;
    color: #475669;
    font-size: 16px
}

.prompt {
    font-size: 30px !important;
}

.correct {
    color: #28cc7d;
    font-weight: bold;
}

.incorrect {
    color: #ff725b;
    font-weight: bold;
}


.des {
    display: block;
    text-align: left;
    margin: 0px auto 5px;
    width: 90%;
    color: #97a5aa;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;
    
}

.override {
    right: 0;
    cursor: pointer;
    display: inline-block;
    position: absolute;
    top: 0;
    margin: auto;
    font-weight: bold;
    color: #3498db;
    font-size: 16px;
    z-index: 30;
}
</style>