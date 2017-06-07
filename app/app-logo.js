Vue.component('app-logo', {
    props: ['chinaActive'],
    template: `
     <div class="logo__section">
        <img 
        :src="chinaActive ? 'assets/adenLogo2.png' : 'assets/adenLogo1.png'"
        height="50px" v-on:click="back"/>
        <div class="logo_text" v-if="!chinaActive">
            Welcome to the ADEN Services Capabilities Word Map
        </div>
    </div>
    `,
    data: ()=> {
        return {}
    },
    methods: {
        back: function () {
            if (this.chinaActive) {
                this.$emit('backWorld');
            } else {
                this.$emit('back');
            }
        }
    }
});