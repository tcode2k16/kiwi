<template>

<div>
    <div v-for="set in $store.state.study_sets.ids">
        <el-row type="flex" align="middle" justify="space-between">
            <el-col :span="20" :offset="2" :md="{span: 16, offset: 4}" :lg="{span: 12, offset: 6}">
                <router-link :to="'/Set/'+set">
                    <el-card :body-style="{ padding: '0px' }" style="color:#2c3e50;">
                        <el-row>
                            <el-col :span="6">
                                <img :src="img_path(set)" class="set_img">
                            </el-col>
                            <el-col :span="18">
                                <h1>{{$store.state.study_sets.sets[set].name}}</h1>
                                <p>{{$store.state.study_sets.sets[set].description}}</p>
                            </el-col>
                        </el-row>
                    </el-card>
                </router-link>
            </el-col>
        </el-row>
        <br><br>
    </div>
    <br><br>
    <el-row>
        <el-row :span="24">
            <el-button @click="add_set = true" type="primary" size="large">
                create new set
            </el-button>
        </el-row>
    </el-row>
    <br>


    <el-dialog title="Add new set" v-model="add_set" style="width: calc(100%-300px)">
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
            }
        }
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
                set: []
            }

            
            while (this.$store.state.study_sets.ids.indexOf(set_id) >= 0) {
                set_id = this.uuid()
            }

            if (this.form.name === '' || this.form.name === undefined) {
                this.$notify.error({
                    title: 'Study set unnamed',
                    message: 'You must name your study set'
                })
                return
            }

            this.$store.commit('add_study_set', {uuid: set_id, set: new_set})
            this.$notify({
                title: 'Set added',
                message: this.form.name+' is added to your study sets',
                type: 'success'
            })
            this.form.name = ''
            this.form.description = ''
            
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

</style>
