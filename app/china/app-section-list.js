Vue.component('app-section-list', {
    props: [],
    template: `
     <div class="sites__right-container">
        <h4>Select Sites</h4>
        <div class="sites__content">
            <div class="sites__content_paragraph flex__row" v-for="item in items" v-on:click="toggleDetail">
                <div>
                    <img :src="item.image"/>
                </div>
                <div class="flex__row_1 sites_text">
                   {{item.content}}
                </div>
            </div>
        </div>
    </div>
    `,
    data: ()=> {
        return {
            items: []
        }
    },
    methods: {
        fetchItems: function () {
            $.getJSON('data/section_content.json', (data)=> {
                this.items = data;
            })
        },
        toggleDetail:function() {
            this.$emit('toggleDetail',{value: true})
            return ;
        }
    },
    mounted: function () {
        this.fetchItems();
    }
});
