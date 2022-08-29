<template>
    <div>
        <MyBoth :goods="goods" />
        <Loadding v-if="loadding" />
    </div>
</template>
<script>
import axios from 'axios'
import MyBoth from './MyBoth.vue';
import Loadding from './MyLoadding.vue';

export default {
    name: "MyAll",
    data() {
        return {
            goods: null,
            loadding: false
        };
    },
    created() {
        this.loadding = true
        axios.get("https://dahua0822-api.herokuapp.com/goods", {
            params: {
                sort: "all"
            }
        }).then(res => {
            if (res.status == 200) {
                this.loadding = false
                this.goods = res.data.data.data;
            }
            else {
                this.loadding = false
                alert("404");
            }
        });
    },
    components: { MyBoth, Loadding }
}
</script>
<style>
</style>