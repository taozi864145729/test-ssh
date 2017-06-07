


Vue.component('app', {
    props: [],
    template: `<div id="app__container"
                      v-bind:class="{
                          'bgpWorld': !mapActive && !chinaActive,
                          'bgpWorldDark': mapActive && !chinaActive,
                          'bgpChina': chinaActive
                      }"
                  >
        <app-svg :active="mapActive" :chinaActive="chinaActive" v-on:toggleMap="toggleMap" v-on:toggleChina="toggleChina"></app-svg>
        <app-logo :chinaActive="chinaActive" v-on:back="back" v-on:backWorld="backWorld"></app-logo>
        <app-about :active="!mapActive"></app-about>
        <app-introduce :active="!mapActive" v-on:toggleMap="toggleMap"></app-introduce>
      
    </div>`,
    data: ()=> {
        return {
            mapActive: false,
            chinaActive: false
        }
    },
    methods: {
        toggleMap: function (obj) {
            this.mapActive = obj.active;
        },

        toggleChina: function (obj) {
            this.chinaActive = obj.active;
        },

        back: function () {
            this.mapActive = false;
            this.chinaActive = false;
        },

        backWorld: function () {
            this.mapActive = true;
            this.chinaActive = false;
        }
    }
})