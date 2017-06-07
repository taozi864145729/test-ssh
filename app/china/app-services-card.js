Vue.component('app-services-card', {
    props: ['index', 'count', 'service', ''],
    template: `
    
    <div class="support__services_container"
         :style="{
             top,
             right,
             width,
             height,
             transform,
             opacity,
             zIndex
         }"
    >
        <h2>
            {{service.name}}
        </h2>
        <div class="support__services_paragraph flex__row">
            <div class="support__services_paragraph_img">
                <img :src="service.image">
            </div>
            <div class="support__services_paragraph_text flex__row_1">
                <div class="support__services_paragraph_detail">
                    {{service.content}}
                </div>
                <div class="support__services_paragraph_key">
                    <h5>Key Clients:</h5>
                    <ul>
                       <li v-for="client in service.clients">{{client}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `,
    data: ()=> {
        return {}
    },
    methods: {},
    computed: {
        top: function () {
            return 140 * (1 + 0.3 * this.count - 0.3 * this.index) + 'px'
        },
        right: function () {
            return -1 * (this.index * 10) + 280 + 'px';
        },
        height: function() {
            return 330 * (1 - 0.1 * this.index) + 'px'
        },
        width: function() {
            return 620 * (1 - 0.05 * this.index) + 'px'
        },
        opacity : function() {
            if (this.service.ready) {
                return 0
            } else {
                return  0.9 - this.index * 0.05;
            }
        },
        zIndex: function() {
            return 20 - this.index;
        },
        transform: function() {
            if (this.service.ready) {
                return 'translateX(-30px)'
            } else {

            }
        }
    }
});