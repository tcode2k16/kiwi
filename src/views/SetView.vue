<template>

<div>
    <el-row type="flex" justify="space-between" align="middle" v-if="activeOp === 'Edit'" class="cover">
        <el-col :span=10>
            <h1>{{set.name}}</h1>
            <div>
                <el-button @click="import_w = true">import</el-button>
                <el-button>export</el-button>
            </div>
        </el-col>
        <el-col :span=12>
            <el-card class="img_card" :body-style="{ 'padding': '0px' }">
                <el-row>
                    <el-col :span="24">
                        <img :src="img_path(set.image)" class="set_img">
                    </el-col>
                </el-row>
            </el-card>
        </el-col>
    </el-row>
    <el-row type="flex" justify="space-between" align="middle" style="background-color: #ffffff">
        <el-col :span="24">
            <el-tabs style="float: right" v-model="activeOp">
                <el-tab-pane label="Edit" name="Edit"></el-tab-pane>
                <el-tab-pane label="Practice" name="Practice"></el-tab-pane>
                <el-tab-pane label="Flashcards" name="Flashcards"></el-tab-pane>
            </el-tabs>
        </el-col>
    </el-row>
    
    <transition name="fade">
        <Edit v-if="activeOp === 'Edit'" :set="set" :uuid="this.$route.params.name"></Edit>
    </transition>

    <el-dialog title="Import words" v-model="import_w">
        <el-form :model="im_words">
            <el-form-item label="Paste in your words">
                <el-input type="textarea" v-model="im_words.str" :autosize="{ minRows: 5, maxRows: 10}" placeholder="tree,a type of plant;dog,a type of animal (etc.)" auto-complete="off"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
        <el-button @click="import_w = false">Cancel</el-button>
        <el-button type="primary" @click="import_words">Confirm</el-button>
        </span>
    </el-dialog>
</div>


</template>

<script>


import Edit from '../components/set_views/Edit'

export default {
    data() {
        return {
            activeOp: 'Edit',
            set: this.$store.state.study_sets.sets[this.$route.params.name],
            import_w: false,
            im_words: {
                str:''
            }
        }
    },
    methods: {
        img_path(img) {
            return '/static/images/'+ (img || this.$store.state.default_image) +'.jpg'
        },
        import_words() {
            this.import_w = false
            console.log('working');
            if (this.im_words.str === "" || this.im_words.str === undefined) {
                this.$notify.error({
                    title: 'Import failed',
                    message: 'the text cannot be nothing'
                })
                return
            }
            let words = this.im_words.str.split('\n\n')
            let new_d = {}

             words.map(each=>{
                let terms = each.split('\t')
                if (terms.length!==2) return;
                 new_d[terms[0]] = terms[1]
            })

            console.log(new_d)
            this.$store.commit('add_word',{
                uuid:this.$route.params.name,
                words: new_d
            })
        }
    },
    components: {
        Edit
    }
}

</script>

<style scoped>





.set_img {
    z-index: 10;
    width: 100%;
    height: 100%;
    display: block;
    image-rendering: pixelated;
}

.img_card {
    z-index: 10;
    width: 15vw;
    height: 15vw;
    display: block;
    float: right;
    margin-right: 3vw
}


.cover {
    background-color: #ffffff !important;
    height: 30vh
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>