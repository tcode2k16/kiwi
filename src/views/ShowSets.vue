<template>

<div>
    <div v-for="set in $store.state.study_sets">
        <el-row type="flex" align="middle">
            
            <el-col :offset="2" :span="20">
                <router-link :to="'/Set/'+set.name">
                    <el-card :body-style="{ padding: '0px' }" style="color:#2c3e50;">
                        <el-row>
                            <el-col :span="6">
                                <img :src="img_path(set)" class="set_img">
                            </el-col>
                            <el-col :span="18">
                                <h1>{{set.name}}</h1>
                                <p>{{set.description}}</p>
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


    <el-dialog title="Add new set" size="large" v-model="add_set">
        <el-form :model="form">
            <el-form-item label="Name of your study set" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Description" :label-width="formLabelWidth">
            <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
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
            formLabelWidth: '200px'
        }
    },
    methods: {
        img_path(set) {
            if (!set.image)
                return '/static/images/'+this.$store.state.default_image+'.jpg'
            return '/static/images/'+set.image+'.jpg'
        },
        create_set() {
            this.add_set = false
            this.$store.commit('add_study_set', {
                name: this.form.name,
                image: Math.floor(Math.random()*(this.$store.state.img_num+1)),
                description: this.form.description,
                set: []
            })
            this.$notify({
                title: 'Set added',
                message: this.form.name+' is added to your study sets',
                type: 'success'
            })
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
