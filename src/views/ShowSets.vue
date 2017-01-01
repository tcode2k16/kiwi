<template>

<div>
    <br>
    <el-row type="flex" align="middle" justify="space-between">
        <el-col :span="20" :offset="2" :md="{span: 16, offset: 4}" :lg="{span: 12, offset: 6}">
            <el-card>
                <el-row type="flex" align="middle">
                    <el-col :span="18">
                        <h2>Add New Study Set</h2>
                    </el-col>
                    <el-col :span="6">
                        <div style="display: inline-block" @click="add_set = true">
                            <el-button v-if="screenw > 768" type="primary" >Add</el-button>
                            <i class="el-icon-plus bt" v-else></i>
                        </div>
                    </el-col>
                </el-row>
            </el-card>
            <br>
        </el-col>
    </el-row>
    

    <div v-for="set in $store.state.study_sets.ids">
        <el-row type="flex" align="middle" justify="space-between">
            <el-col :span="20" :offset="2" :md="{span: 16, offset: 4}" :lg="{span: 12, offset: 6}">
                <router-link :to="'/Set/'+set">
                    <el-card :body-style="{ padding: '0px' }" style="color:#2c3e50;">
                        <el-row>
                            <el-col :span="6" class="img_div">
                                <img :src="img_path(set)" class="set_img">
                            </el-col>
                            <el-col :span="18" :xs="{span:24}">
                                <h2>{{$store.state.study_sets.sets[set].name}}</h2>
                                <p>{{$store.state.study_sets.sets[set].description}}</p>
                            </el-col>
                        </el-row>
                    </el-card>
                </router-link>
            </el-col>
        </el-row>
        <br><br>
    </div>
    <br>


    <el-dialog title="Add new set" v-model="add_set" >
        <el-form :model="form">
            <el-form-item label="Name of your study set" >
                <el-input v-model="form.name" :autofocus="true"></el-input>
            </el-form-item>
            <el-form-item label="Description" >
                <el-input
                    placeholder="A awesome description"
                    v-model="form.description">
                </el-input>

            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="add_set = false">Cancel</el-button>
            <el-button type="primary" @click="create_set">Confirm</el-button>
        </span>
    </el-dialog>



</div>
    
</template>

<script>
    
export default {
    data() {
        return {
            add_set:false,
            form: {
                name: '',
                description: ''
            },
            screenw: window.innerWidth
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        img_path(set) {
            let url_num = this.$store.state.study_sets.sets[set].image;
            return '/static/images/'+ (url_num || this.$store.state.default_image) +'.jpg'
        },
        create_set() {
            this.add_set = false
            let set_id = this.uuid()
            let new_set = {
                image: Math.floor(Math.random()*(this.$store.state.img_num+1)),
                description: this.form.description,
                name: this.form.name,
                practise: {},
                set: {}
            }

            
            while (this.$store.state.study_sets.ids.indexOf(set_id) >= 0) {
                set_id = this.uuid()
            }

            if (this.form.name === '' || this.form.name === undefined) {
                this.$message.error({
                    title: 'Study set unnamed',
                    message: 'You must name your study set'
                })
                return
            }

            this.$store.commit('add_study_set', {uuid: set_id, set: new_set})
            this.$message({
                title: 'Set added',
                message: this.form.name+' is added to your study sets',
                type: 'success'
            })
            this.form.name = ''
            this.form.description = ''
            this.$router.push('/Set/'+set_id)
            
        },
        handleResize() {
            this.screenw = window.innerWidth
        },
        uuid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        }
    }
}

</script>

<style scoped>

.set_img {
    width: 100%;
    height: 100%;
    display: block;
    image-rendering: pixelated;
}

.bt {
    cursor: pointer;
    margin: 10px;
    display: inline-block;
}



@media screen and (max-width: 768px) {
    .img_div {
        display: none !important;
    }
}

</style>
