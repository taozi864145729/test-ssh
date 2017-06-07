Vue.component('app-services-menu', {
    props: ['chinaActive', 'services', 'checkClear'],
    template: `
    <div class="services__left_container">
        <div class="services_header">IFM SERVICES</div>
        <div class="services_content">
            <ul>
                <li v-for="service in services"  :serviceid="service.id">
                     <input type="radio" class="input_check" name="services" :id="service.id"  v-on:click="serviceSelect"   >
                     <label :for="service.id"></label>
                     <label class="service__name" :for="service.id">{{service.name}}</label> 
                </li>
            </ul>
        </div>
    </div>
    `,
    data: ()=> {
        return {}
    },
    watch: {
        'checkClear': function (val, oldval) {
            if (val == true) {
                $('.services_content input').attr('checked', false);
            }
        },
    },
    methods: {
        serviceSelect: function (e) {
            this.$emit('serviceSelect', {value: e.target.parentNode.attributes.serviceid.value});
            return ;
        }
    },
    mounted: function () {
    }
});