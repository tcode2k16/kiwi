<template>

<div>
    <el-card>
        <h3>Welcome to {{$store.state.app_name}}</h3>
        <h1>{{now}}</h1>
    </el-card>
    <br>
</div>

</template>

<script>

import moment from 'moment'

export default {
    data() {
        return {
            now: moment().format('h:mm:ss')
        }
    },
    methods: {
        update_time() {
            this.now = moment().format('h:mm:ss')
            setTimeout(this.update_time, 1000)
        }
    },
    mounted() {
        this.update_time()
    }
}
</script>