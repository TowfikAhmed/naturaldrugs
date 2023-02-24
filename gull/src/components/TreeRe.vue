<template>
    <div class="relative" :class="classnames" v-if="tree">
        <span class="info">
            <span class="avater">
                <img src="@/assets/images/avater-bg.svg" alt="">
                <img src="@/assets/images/pointer1.svg" alt="" class="pointer" v-if="classnames == 'a'">
                <img src="@/assets/images/pointer2.svg" alt="" class="pointer" v-if="classnames == 'b'">
                <img src="@/assets/images/pointer0.svg" alt="" class="pointer" v-else>
                <img src="@/assets/images/man.png" alt="" class="avt">
            </span>
            <span class="text">
                <span class="">
                    <p>User ID</p>
                    <p>Full Name</p>
                    <p>Refer ID</p>
                    <p>Gender</p>
                    <p>Team A</p>
                    <p>Team B</p>
                    <p>Total BP</p>
                </span>
                <span class="">
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                </span>
                <span class="">
                    <p class="">{{tree.id}}</p>
                    <p class="">{{tree.name}}</p>
                    <p class="">{{tree.user.username}}</p>
                    <p class="">{{tree.gender}}</p>
                    <p class="">{{tree.collective_bp_a}} BP</p>
                    <p class="">{{tree.collective_bp_b}} BP</p>
                    <p class="">{{sum([tree.bp,tree.collective_bp_a,tree.collective_bp_b])}} BP</p>
                </span>
            </span>
            <svg class="conn" style="width: 50%;height: 150px;position:absolute;top:50px" preserveAspectRatio="none" width="754" height="166" viewBox="0 0 754 166" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M375.383 1.17188C328.073 124.958 -6.61087 89.837 1.13224 165.836" stroke="#F1579F"/>
                <path d="M378.617 1.17188C425.927 124.958 760.611 89.837 752.868 165.836" stroke="#F1579F"/>
            </svg>

        </span>
        <TreeRe :classnames="'a'" :tree="tree.placement_a" v-if="tree.placement_a && tree.placement_a.name"></TreeRe>
        <div class="relative" v-else>
            <span class="info">
                <span class="avater">
                    <img src="@/assets/images/avater-bg.svg" alt="">
                    <img src="@/assets/images/pointer3.svg" alt="" class="pointer">
                    <img src="@/assets/images/tbd.svg" alt="" class="avt">
                </span>
                <h5>TBD</h5>
            </span>
        </div>
        <TreeRe :classnames="'b'" :tree="tree.placement_b" v-if="tree.placement_b && tree.placement_b.name"></TreeRe>
        <div class="relative" v-else>
            <span class="info">
                <span class="avater">
                    <img src="@/assets/images/avater-bg.svg" alt="">
                    <img src="@/assets/images/pointer4.svg" alt="" class="pointer">
                    <img src="@/assets/images/tbd.svg" alt="" class="avt">
                </span>
                <h5>TBD</h5>
            </span>
        </div>
    </div>
</template>

<script>
export default {
  name: "TreeRe",
  props: {
    tree: {
        type: Object,
        required: true
    },
    classnames: Boolean,
  },
  methods:{
    sum: function(nums){
        let result = 0;
        nums.forEach(function(n){ result += n * 1; });
        return result.toFixed(2)
    }
  }
};
</script>

<style scoped>
.hidden, .hidden *{
    max-width: 0;
    opacity: 0;
}
.relative{
    position: relative;
}
.info{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    text-align: center;
    display: block;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    width: 100%;
}
.info .avater{
    height: 80px;
    width: 100%;
    padding: 0px;
    display: block;
    margin: 0;
    position: relative;
}
.info .avater img{
    border-radius: 50%;
    padding: 5px;
    height: 100%;
    width: 100%;
    height: 80px;
    width: 80px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
}
.info .text{
    background: rgb(255, 234, 251);
    padding: 5px 10px;
    z-index: 14;
    border-radius: 4px;
    box-shadow: 3px 3px 6px rgba(128, 128, 128, 0.37);
    font-size: 13px;
    display: flex;
    z-index: 999;
    overflow: hidden;
}
.info .text span{
    flex: 1;
}
.info .text p{
    white-space: nowrap;
    text-align: left;
}
.info .text span:nth-child(2) p{
    text-align: center;
    padding: 0px 6px;
}
    .info .text{
        display: none;
    }
    .head .text{
        display: flex;
    }
    .head > div > div > div .text{
        display: none;
    }
    .info .avater img.pointer{
        height: 90px;
        width: 90px;
        z-index: 1111;
        border-radius: 0;
    }
    .info .avater img.avt{
        height: 70px;
        width: 70px;
    }
    .start svg{
        opacity: .1;
    }
    .head svg{
        opacity: 1;
    }
    .head > div svg{
        opacity: .5;
    }
    .head > div > div svg{
        opacity: .3;
    }
    path{
        stroke-width: 2px;
        filter: drop-shadow(0 0 1px #fff) drop-shadow(0 0 2px #fff)  ;
    }
    @keyframes glow {
      0% {
        filter: drop-shadow(0 0 1px #fff) drop-shadow(0 0 2px #fff)  ;
        /* text-shadow: , , , , , , 3; */
      }
  
      50% {
        filter: drop-shadow(0 0 2px #fff) drop-shadow(0 0 3px #ff4da6) ;
        /* text-shadow: , , , , , , ; */
      }
    100% {
        filter: drop-shadow(0 0 1px #fff) drop-shadow(0 0 2px #fff)  ;
    }
    }
</style>