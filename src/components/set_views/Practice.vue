<template>
<div class="component">
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
            <el-card v-if="total !== 0">
                <el-row>
                    <el-col :span="24" class="title">
                        <p class="text">{{definition}}</p>
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
                        <span class="des" @click="focus_text">TYPE THE ANSWER</span>
                    </el-col>
                    <el-col :span="6">
                        <el-button type="primary" @click="submit_answer">Answer</el-button>
                    </el-col>
                </el-row>
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
                right: 100,
                wrong: 7,
                
            },
            wrongTerms: {},
            res: '',
            view: {
                correct: false,
                wrong: false
            }
            
            
        }
    },
    methods: {
        focus_text() {
            this.$refs.res.focus()
        },
        submit_answer() {
            if (this.isCorrect) {
                console.log('correct')
                this.update()
            } else {
                console.log('wrong :(')
                console.log(this.answer);
            }
        },
        randomWord(obj) {
            let keys = Object.keys(obj)
            let index = keys.length * Math.random() << 0
            console.log(keys);
            return keys[index]
        },
        update() {
            if (this.isCorrect)
                this.progress.right++;
            else {
                this.progress.wrong++
                this.wrongTerms[this.tuuid]=this.term[this.tuuid]
            }
            this.$store.commit('finish_practise_term',{
                tuuid: this.tuuid,
                uuid: this.uuid
            })
            this.res = ''
        }
    },
    computed: {
        terms() {
            return this.$store.state.study_sets.sets[this.uuid].practise
        },
        tuuid() {
            return this.randomWord(this.$store.state.study_sets.sets[this.uuid].practise)
        },
        total() {
            return Object.keys(this.$store.state.study_sets.sets[this.uuid].set).length
        },
        answer() {
            console.log(this.tuuid);
            if (this.total===0 || this.tuuid===undefined) return ''
            return this.$store.state.study_sets.sets[this.uuid].set[this.tuuid].word
        },
        isCorrect() {
            return this.res.toLowerCase() === this.answer.toLowerCase()
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
    background-color: green;
    width: 50%
}

.wrong {
    z-index: 11;
    background-color: red;
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
    border-bottom: 3px solid #475669;
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
    font-size: 30px
}


.des {
    display: block;
    text-align: left;
    margin: 0px auto 1px;
    width: 90%;
    color: #97a5aa;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
}
</style>