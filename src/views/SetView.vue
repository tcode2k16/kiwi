<template>

<div v-if="have_set">
    <el-row type="flex" justify="space-between" align="middle" v-if="activeOp === 'Edit'" class="cover">
        <el-col :span=10>
            <h1>{{set.name}}</h1>
            <div>
                <div style="display: inline-block" @click="import_w = true">
                    <i class="el-icon-upload bt"></i>
                </div>
                <div style="display: inline-block">
                    <i class="el-icon-share bt"></i>
                </div>
                <div style="display: inline-block" @click="delete_set">
                    <i class="el-icon-delete bt"></i>
                </div>
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
        <Edit key="Edit" v-if="activeOp === 'Edit'" :screenw="screenw" :uuid="this.$route.params.name"></Edit>
    </transition>
    <transition name="fade">
        <Practice key="Practice" v-if="activeOp === 'Practice'" ></Practice>
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
import Practice from '../components/set_views/Practice'

export default {
    data() {
        return {
            activeOp: 'Edit',
            set: this.$store.state.study_sets.sets[this.$route.params.name],
            import_w: false,
            im_words: {
                str:''
            },
            screenw: window.innerWidth,
            have_set: this.$route.params.name in this.$store.state.study_sets.sets,
            uuid: this.$route.params.name
        }
    },
    methods: {
        delete_set() {
            this.$confirm('This will permanently delete the study set. Continue?', 'Warning', {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                this.$router.push('/My_Sets')
                this.$store.commit('delete_study_set', {
                    uuid: this.uuid
                })
                this.$message({
                    type: 'success',
                    message: 'Delete completed'
                })
                
            })
        },
        img_path(img) {
            return '/static/images/'+ (img || this.$store.state.default_image) +'.jpg'
        },
        import_words() {
            this.import_w = false
            if (this.im_words.str === "" || this.im_words.str === undefined) {
                this.$message.error({
                    title: 'Import failed',
                    message: 'the text cannot be nothing'
                })
                return
            }
            let words = this.im_words.str.split('\n\n')
            let new_d = []

             words.map(each=>{
                let terms = each.split('**')
                if (terms.length!==2) return;

            
                new_d.push({
                    word: terms[0],
                    def: terms[1]
                })
            })
            if (new_d.length <= 0) {
                this.$message.error({
                    message: 'No correct term found'
                })
                return
            }

            this.$store.commit('add_term',{
                uuid: this.$route.params.name,
                words: new_d
            })
            this.$message({
                type: 'success',
                message: 'Imported terms into "'+this.set.name+'"'
            })
        },
        handleResize() {
            this.screenw = window.innerWidth
        }
    },
    beforeCreate() {
        
        if (!(this.$route.params.name in this.$store.state.study_sets.sets)) {
            this.$router.push('/My_Sets')
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
    },
    components: {
        Edit,
        Practice
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

.bt {
    cursor: pointer;
    margin: 10px;
    display: inline-block;
}

</style>