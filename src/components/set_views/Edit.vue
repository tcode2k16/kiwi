<template>

<div>
    <br>
    <el-row type="flex">
        <el-col :span="20" :offset="2">
            <div v-for="(term, tuuid) in $store.state.study_sets.sets[uuid].set">
                <WordCard :tuuid="tuuid" :term="term" @change="change_state" :key="tuuid" :uuid="uuid"></WordCard>
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
    },
    methods: {
        change_state(obj) {
            if (obj.word === '' || obj.word === undefined) {
                this.$store.commit('delete_term', {
                    uuid: obj.uuid,
                    tuuid: obj.tuuid
                })
                
            }
            else
                this.$store.commit('change_term', {
                    uuid: obj.uuid,
                    tuuid: obj.tuuid,
                    terms: {
                        word: obj.word,
                        def: obj.def
                    }
                })

        }
    }
}
</script>

