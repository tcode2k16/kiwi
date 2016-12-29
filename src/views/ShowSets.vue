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
</div>
    
</template>

<script>
    
export default {
    methods: {
        img_path(set) {
            if (!set.image)
                return '/static/images/'+this.$store.state.default_image+'.jpg'
            return '/static/images/'+set.image+'.jpg'
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
