<template>
    <div class="loadding" @touchmove.stop.prevent="() => { }">
        <div class="round"></div>
    </div>
</template>
<script>

</script>
<style scoped>
.loadding {
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;

}

.round {
    width: 100px;
    height: 100px;
    border: 6px solid;
    border-radius: 100%;
    border-color: #fff transparent #fff transparent;
    animation: loading 0.75s linear infinite;
}

@keyframes loading {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>