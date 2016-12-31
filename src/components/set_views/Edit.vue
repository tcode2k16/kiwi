<template>

<div>
    <br>
    <el-row type="flex">
        <el-col :span="17" :offset="2">
            <el-card>
                <el-row type="flex" align="middle">
                    <el-col :span="18">
                        <h3>Add terms to your set</h3>
                    </el-col>
                    <el-col :span="6">
                        <div style="display: inline-block" @click="new_term">
                            <el-button v-if="screenw > 768">Add</el-button>
                            <i class="el-icon-plus bt" v-else></i>
                        </div>
                    </el-col>
                </el-row>
            </el-card>
            <br>
        </el-col>
    </el-row>
    <el-row type="flex">
        <el-col :span="17" :offset="2">
            <div v-for="(term, tuuid) in $store.state.study_sets.sets[uuid].set" :key="tuuid">
                <WordCard :tuuid="tuuid" :term="term" :screenw="screenw" :uuid="uuid"></WordCard>
                <br>
            </div>
        </el-col>
    </el-row>

    
</div>


</template>

<script>

import WordCard from '../set_components/WordCard'

export default {
    props: ['uuid','screenw'],
    methods: {
        new_term() {
            this.$store.commit('add_term', {
                uuid: this.uuid,
                words: [{
                    word:undefined,
                    def:undefined
                }]
            })
            this.$message({
                type: 'success',
                message: 'Added term to "'+this.$store.state.study_sets.sets[this.uuid].name+'"'
            })
        }
    },
    components: {
        WordCard
    }
}
</script>

<style scoped>

.bt {
    cursor: pointer;
    margin: 10px;
    display: inline-block;
}

</style>