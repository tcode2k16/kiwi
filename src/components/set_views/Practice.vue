<template>
<div class="component">
    <div class="p_bar">
        <!--<span :style="'width:100%'" class="p_right"></span>
        <span :span="progress.wrong" class="p_wrong"></span>
        <span :span="total -progress.right -progress.wrong" class="p_none"></span>-->
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
            <el-card>
                <el-row>
                    <el-col :span="24" class="title">
                        <p class="text">{{word}}</p>
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
                            autofocus>
                        </input>
                        <span class="des" @click="focus_text">TYPE THE ANSWER</span>
                    </el-col>
                    <el-col :span="6">
                        <el-button type="primary">Answer</el-button>
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
                right: 5,
                wrong: 7,
                
            },
            word: "abc",
            res: 'abc'
        }
    },
    computed: {
        total() {
            return Object.keys(this.$store.state.study_sets.sets[this.uuid].set).length
        }
    },
    methods: {
        focus_text() {
            console.log('called');
            this.$refs.res.focus()
        }
    }
}

</script>

<style scoped>


.p_bar {
    height: 0.5vh;
    /*border-bottom: 0.5vh solid #fff;*/
    width: 100%;
}

.p_none {
    background-color: #fff;
    height:100%;
    display: block;
    position: relative;
    overflow: hidden;
}

.p_right {
    background-color: #2ecc71;
    height:100%;
    display: block;
    position: relative;
    overflow: hidden;
}

.p_wrong {
    background-color: #e74c3c;
    height:100%;
    display: block;
    position: relative;
    overflow: hidden;
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