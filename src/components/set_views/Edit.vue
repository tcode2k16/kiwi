<template>

<div>
    <br>
    <el-row type="flex">
        <el-col :span="20" :offset="2">
            <div v-for="(term, tuuid) in $store.state.study_sets.sets[uuid].set" :key="tuuid">
                <WordCard :tuuid="tuuid" :term="term" :uuid="uuid"></WordCard>
                <br>
            </div>
        </el-col>
    </el-row>

    
</div>


</template>

<script>

import WordCard from '../set_components/WordCard'

export default {
    props: ['uuid'],
    components: {
        WordCard
    }
}
</script>

<style scoped>


</style>