Vue.component('detail-picture', {
    props: ["pictures"],
    data: ()=> {
        return {
            position: 2
        }
    },
    template: `
       <div class="detail__container_bottom">
        <div class="detail-picture__prev">
                <img src="assets/section-detail/prev.png" v-on:click="prev" class="prev" width="25" height="40"/>
            </div>
        <div class="detail-picture__mask">
            <!--<button v-on:click="prev" class="prev"></button>-->
            
            <ul class="detail-picture__wrapper"
                :style="{
                    marginLeft: (560 + -1 * position * 280) + 'px'
                }">
                 <li  v-for="(item,index) in pictures" v-bind:key="item"  class="detail-picture__item"
                      :style="{
                        transform: recodeTransform(index)
                   }"
                   >
                       <img :src="item" />
                 </li>
            </ul>
            <!--<button v-on:click="next" class="next"></button>-->
            
            <!--<img src="assets/section-detail/next.png" v-on:click="next" class="next"/>-->
        </div>
        <div class="detail-picture__next"> 
                <img src="assets/section-detail/next.png" v-on:click="next" width="25" height="40"/>
            </div>
   </div>
    `,
    methods: {
        prev: function () {
            if (this.position > 0) {
                this.position--;
            }
        },
        next: function () {
            if (this.position < this.pictures.length - 1) {
                this.position++
            }
        },
        recodeTransform: function (i) {

            if (this.position == i) {
                return 'scale(1.1)'
            } else if (this.position + 1 == i) {
                return 'scale(0.8)'
            } else if (this.position - 1 == i) {
                return 'scale(0.8)'
            } else if (this.position + 2 == i) {
                return 'translateX(-50px) scale(0.5)'
            } else if (this.position - 2 == i) {
                return 'translateX(50px) scale(0.5)'
            } else {
                return 'scale(0.5)'
            }
        }
    },
    computed: {}
});
