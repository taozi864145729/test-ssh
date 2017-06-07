Vue.component('app-bottom-buttons', {
    props: ['chinaActive'],
    template: `
      <div class="button__group">
      <button v-for="(button,index) in buttons"
      v-bind:class="{active: chinaActive}"
      :typeid = "button.id"
      :style="{
          transition: 'top 0.3s ease ' + index * 0.2 + 's',
          right: (buttons.length - index) * (150 + 20) + 200 + 'px'
      }"
      v-on:click="serviceTypeSelect"
      >{{button.title}}</button>
    </div>
    `,
    data: ()=> {
        return {
            buttons: [
                {id: '1', title: 'Industry'},
                {id: '2', title: 'Education'},
                {id: '3', title: 'Oxygen'},
                {id: '4', title: 'Hospitality'},
                {id: '5', title: 'Health Care'}
            ]
        }
    },
    methods: {
        serviceTypeSelect: function (e) {
            this.$emit('serviceTypeSelect', {value: e.target.attributes.typeid.value})
        }
    }
});