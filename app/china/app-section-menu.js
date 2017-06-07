Vue.component('app-section-menu',{
    props: [],
    template:`
        <div class="menu_container">   
             <button v-for="button in buttons" v-on:click="menuClick(button)" class="button">
                 {{button.title}}
             </button>
             <button class="button back" v-on:click="toggleChinaSection"> </button>            
        </div>`,
    data:()=> {
        return {
            buttons: [
                {id: 'ncr',title: 'NCR'},
                {id: 'ecr',title: 'ECR'},
                {id: 'ccr',title: 'CCR'},
                {id: 'wcr',title: 'WCR'},
                {id: 'scr',title: 'SCR'},
            ]
        }
    },
    methods:{
        menuClick :function(btn){

        },
        toggleChinaSection:function(){
            this.$emit('toggleChinaSection',{});
            return ;
        }
    }
});