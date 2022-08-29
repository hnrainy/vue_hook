<template>
    <ul>
        <li v-for="item in goods" :key=item._id>
            <img class="img1" :src=item.image alt="">
            <div class="center">
                <p class="name">{{ item.name }}</p>
                <p class="price">¥{{ item.price }}</p>
            </div>
            <div class="right">
                <img src="../img/购物车.png" alt="">
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'MyBoth',
    props: {
        goods: Array
    }

}
</script>
<style>
    

ul {
    width: 100%;
    height: 1000px;
}

li {
    width: 327px;
    margin-left: 26px;
    height: 68px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

li .img1 {
    width: 68px;
    height: 68px;
    border-radius: 15px;
}

.center {
    /* margin-left: 20px; */
    padding-left: 24px;
    box-sizing: border-box;
    width: 180px;
    height: 52px;
    margin-top: 8px;
    position: relative;
}

.right {
    width: 48px;
    height: 48px;
    background: rgba(255, 230, 148, 1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.right img {
    width: 18px;
}

.name {
    font-size: 12px;
    font-weight: 700;
    width: 175px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.price {
    font-size: 16px;
    font-weight: 700;
    position: absolute;
    bottom: 8px;
}

</style>