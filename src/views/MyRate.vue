<template>
    <div>
        <MyBoth :goods="goods" />
        <MyLoadding v-if="loadding" />
    </div>
</template>
<script>
import axios from 'axios';
import MyBoth from './MyBoth.vue';
import MyLoadding from './MyLoadding.vue';
export default {
    name: "MyRate",
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
                sort: "rate"
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
    components: { MyBoth, MyLoadding }
}
</script>
<style>
</style>