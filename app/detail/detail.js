Vue.component('detail', {
    props: [],
    template: `
     <div id="app__detail">
        <div class="detail__top_logo">
            <img src="assets/adenLogo2.png"/>
        </div>
        <div class="detail__top">
               <button class="black" v-on:click="toggleDetail"></button>
        </div>
        <div class="detail__container">
            <div class="detail__container_introduce">
                <h4>Introduce</h4>
                <div class="detail__container_introduce_text">
                name:anan man info:skdjkdkdksjdkdjzjkdnjkzdnjnzkdnjkNDJkn<br>
                name:anan man info:skdjkdkdksjdkdjzjkdnjkzdnjnzkdnjkNDJkn
                </div>
                <div class="detail__container_introduce_bottom"></div>
            </div>
            <div class="detail__container_left">
                <h4>Proposal Introduction</h4>
                <div class="detail__container_left_content">
                    <img src="assets/section-detail/shot.png"/>
                    <img src="assets/section-detail/shot.png"/>
                </div>
            <div class="detail__container_left_bottom"></div>
            </div>
                <div class="detail__container_center">
                <h4>Video</h4>
                <div class="detail__container_center_content">
                    <img src="assets/section-detail/looping2.png"/>
                </div>
            </div>
            <div class="detail__container_right">
            <h4>Menu Display</h4>
                <div class="detail__container_right_content">
                    <div class="detail__container_right_content_img">
                        <img src="assets/section-detail/looping.jpg"/>
                    </div>
                <div class="detail__container_right_content_img">
                    <img src="assets/section-detail/square menu-39.jpg"/>
                </div>
                <div>
                    <img src="assets/section-detail/looping.jpg"/>
                </div>
            </div>
            <div class="
            
            "></div>
        </div>
        </div>
        <div class="detail__container-2nd">
            <div class="detail__container_top">
                Site Pictures
            </div>
            
            <detail-picture :pictures="pictures"></detail-picture>
           
        </div>
    </div>
    `,
    data: ()=> {
        return {
            pictures: [
                "assets/section-pic/p1.jpg",
                "assets/section-pic/p2.jpg",
                "assets/section-pic/p3.jpg",
                "assets/section-pic/p4.jpg",
                "assets/section-pic/p5.jpg"
            ]
        }
    },
    methods: {
        toggleDetail:function() {
            this.$emit('toggleDetail',{value: false})
            return ;
        }
    }
});