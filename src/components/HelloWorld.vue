<template>
<div class="container">
  <p class="p">火爆商品</p>
  <div class="two">
    <div class="two-left" v-for="item in top" :key="item._id">
      <div class="two-top"><img :src=item.image alt=""></div>
      <div class="two-bottom">
        <p>{{item.name}}</p>
        <span>¥{{item.price}}</span>
      </div>
    </div>
    
  </div>
  <div class="button">
    <button :style="{background: all}" @click="All"><span>全部</span></button>
    <button @click="Style" :style="{background:style}"><span>款式新</span></button>
    <button @click="Sell" :style="{background:sell}"><span>销量高</span></button>
    <button @click="Rate" :style="{background:rate}"><span>好评多</span></button>
  </div>
  <div>
    <router-view></router-view>
  </div>
</div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
        return {
            goods: "",
            top:'',
            loadding: false,
            all:'',
            style:'',
            sell:'',
            rate:'',

        };
    },
     created() {
      axios.get("https://dahua0822-api.herokuapp.com/goods").then(res => {
            if (res.status == 200) {
                // this.loadding = false
                this.top = res.data.data.top;
                console.log(res.data.data.top)
            } else {
                // this.loadding = false
                alert('404')
            }
        });
       
    },
    methods:{
      All(){
        this.$router.push("/all");
        this.all='rgba(255, 223, 117, 1)';
        this.style = 'white';
        this.sell = 'white';
        this.rate  ='white'
      },
      Rate(){
        this.$router.push("/rate");
         this.all='white';
        this.style = 'white';
        this.sell = 'white';
        this.rate  ='rgba(255, 223, 117, 1)'
      },
      Sell(){
        this.$router.push("/sell");
        this.all='white',
        this.style = 'white',
        this.sell = 'rgba(255, 223, 117, 1)',
        this.rate  ='white'
      },
      Style(){
        this.$router.push("/style");
        this.all='white',
        this.style = 'rgba(255, 223, 117, 1)',
        this.sell = 'white',
        this.rate  ='white'
      }
    }
}
</script>
<style>
::-webkit-scrollbar{
  display: none;
}

.container{
  width: 375px;
  height: 100%;
  margin: 0;
  padding: 0;
  background: rgba(247, 247, 250, 1);
  
}
.p{
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 22px;
  padding-top: 28px;
  padding-left: 24px;
  text-align: left;
}
.two{
  width: 375px;
  height: 222px;
  /* overflow-y: scroll; */
  display: flex;
  overflow-x: auto;


}
.two>div{
  display: block;
  float: left;

}
.two-left{
  width: 168px;
  height: 222px;
  margin-left: 26px;
  border-radius: 30px;
  /* border: 1px solid red; */
}
.two-left:last-child{
  margin-right: 26px;
}
.two-top{
  width: 168px;
  height: 146px;
  background-color: white;
  border-radius: 30px 30px 0 0;
   display: flex;
    align-items: center;
    justify-content: center;
  overflow: hidden;

}
.two-top img{
  margin-left: 19px;
  height: 146px;
  margin: 0 auto;
}
.two-bottom{
  width: 168px;
  height: 76px;
  background-color: white;
  border-radius: 0 0 30px 30px;
}
.two-bottom p{
  padding-left: 18px;
  font-size: 12px;
  font-weight: 700;
  padding-top: 11px;
  width: 140px;
      overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.two-bottom span{
  display: block;
  padding-top: 14px;
  padding-left: 18px;
  font-size: 16px;
  font-weight: 700;
}
.button{
  width: 375px;
  height: 44px;
  margin-top: 32px;
  overflow-y: hidden;
  white-space: nowrap;

}
.button button:nth-child(1){
  background-color:rgba(255, 223, 117, 1) ;
  width: 44px;
  margin-left: 26px;
}
.button button{
  width: 99px;
height: 44px;
margin-left: 20px;
background-color: white;
border: none;
border-radius: 15px;
}
.button span{
  font-size: 14px;
  font-weight: 700;
}

</style>