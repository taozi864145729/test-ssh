Vue.component('app-services-list', {
    props: ['active', 'services', 'count'],
    template: `
      <div>
          <div class="prev_card">
             <img src="assets/section-detail/prev.png"/>
          </div>
          <transition-group name="service-list" tag="ul">
            <app-services-card v-for="(service, index) in services" 
            :index="index"
            :count="count" 
            :service="service"
            :key = "service">      
            </app-services-card>
          </transition-group>
          <div class="next_card">
             <img src="assets/section-detail/next.png"/>
          </div>
      </div>
      
    `,
    data: ()=> {
        return {}
    },
    methods: {

    }
});