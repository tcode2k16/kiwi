<template>

<Welcome v-if="name === 'Welcome'"></Welcome>
<Todo v-else-if="name === 'Todo'"></Todo>
<Train v-else-if="name === 'Train'"></Train>
<Activities v-else-if="name === 'Activities'"></Activities>

</template>

<script>
    
import Welcome from './Welcome'
import Todo from './Todo'
import Train from './Train'
import Activities from './Activities'

export default {
    props: ['name'],
    components: {
        Welcome,
        Todo,
        Train,
        Activities
    }
}

</script>