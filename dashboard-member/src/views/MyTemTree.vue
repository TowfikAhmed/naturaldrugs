<template>
    <section class="treeBody" @mousemove="mouseMove($event)" @scroll="pageScrolled($event)">
        <TreeRe :classnames="'start head'" :tree="tree" v-if="tree"></TreeRe>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import ApiService, { baseUrl } from "@/core/services/ApiService";
import TreeRe from "@/components/TreeRe.vue";

export default defineComponent({
  name: "tree-dashboard",
  setup() {
    const store = useStore();
    return { store };
  },
  components: {
    TreeRe,
  },
        data() {
            return {
                mousePos: 0,
                tree: "",
            }
        },
        mounted() {
            this.getTree()
        },
        methods:{
            getTree(){
                ApiService.get("placement/").then((response) => {
                    console.log(response.data);
                    this.tree = response.data;
                });
            },
            mouseMove(e){
                this.mousePos = e.clientX
            },
            pageScrolled(){
                const head = document.querySelector<HTMLElement>('.treeBody .head');
                const child = document.querySelector<HTMLElement>('.treeBody .head div');
                if (child && child.getBoundingClientRect().top < 100){
                    var rect = document.querySelector<HTMLElement>('.treeBody')!.getBoundingClientRect()
                    console.log((rect.right-rect.left)/2, this.mousePos-rect.left )
                    console.log('Change')
                    if((rect.right-rect.left)/2 > this.mousePos-rect.left){
                        head!.classList.remove('head')
                        child!.classList.add('head');
                        child!.nextElementSibling!.classList.add('hidden')
                    }else{
                        head!.classList.remove('head')
                        child!.nextElementSibling!.classList.add('head')
                        child!.classList.add('hidden')
                    }
                }else if(document.querySelector('.treeBody .head')!.getBoundingClientRect().top > 100){
                    console.log('Revert')
                    var currentHead = document.querySelector<HTMLElement>('.treeBody .head')
                    if(currentHead!.classList.contains('start')){
                        return
                    }
                    currentHead!.classList.remove('head')
                    currentHead!.parentElement!.classList.add('head')
                    if (currentHead!.nextElementSibling){
                        currentHead!.nextElementSibling!.classList.remove('hidden')
                    }else{
                        currentHead!.previousElementSibling!.classList.remove('hidden')
                    }
                }
            }
        }
});
</script>


<style>
    .treeBody{
        height: 80vh;
        overflow-y: scroll;
    }
    .treeBody::-webkit-scrollbar {
      display: none;
    }
    .treeBody {
      -ms-overflow-style: none;
      scrollbar-width: none; /* Firefox */
    }
    .treeBody div{
        height: 400px;
    }
    .treeBody section{
        display: flex;
        justify-content: center;
    }
    .treeBody .head, .treeBody div{
        padding-top: 170px;
        max-width: 100%;
        height: 330px;
        display: flex;
        justify-content: center;
        flex: 1;
        transition: all .3s ease;
    }
    .treeBody .head{
        width: 100%;
        height: 200px;
    }
</style>