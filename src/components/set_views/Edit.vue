<template>

<div>
    <br>
    <el-row type="flex">
        <el-col :span="20" :offset="2">
            <div v-for="(def, word) in $store.state.study_sets.sets[uuid].set">
                <WordCard :def="def" :word="word"></WordCard>
                <br>
            </div>
            
        </el-col>
    </el-row>

    
</div>


</template>

<script>

import WordCard from '../set_components/WordCard'

export default {
    props: ['set','uuid'],
    components: {
        WordCard
    }
}
</script>

