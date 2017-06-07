Vue.component('app-svg', {
    props: ['active', 'chinaActive'],
    template: `
        <div id="app__svg" 
        v-bind:class="{active:active}"
        v-on:click="mapAction">
           <app-services-menu v-if="chinaActive" :services = "chinaServicesType" :checkClear="checkClear"  v-on:serviceSelect="serviceSelect"></app-services-menu>
           <app-bottom-buttons :chinaActive="chinaActive" v-on:serviceTypeSelect="serviceTypeSelect" v-if="false"></app-bottom-buttons>
           <app-services-list v-if="chinaActive && serviceItemSelect" 
                                :services="services" :count="services_count"></app-services-list>
           <app-section-list v-if="chinaActive && isChinaSection" v-on:toggleDetail="toggleDetail"></app-section-list>
           <app-section-menu v-if="chinaActive && isChinaSection" v-on:toggleChinaSection="toggleChinaSection" ></app-section-menu>
           <detail v-if="detailActive" v-on:toggleDetail="toggleDetail"></detail>  
        </div>
      
    `,
    //
    data: ()=> {
        return {
            world: null,
            china: null,
            section: {},
            services: [],   //china section
            textSection: null,
            isChinaSection: false,
            services_count :0,
            detailActive: false,

            serviceType: null,
            serviceItemSelect: null,
            checkClear:false,

            chinaSection: [
                {id: 1, name: 'ncr', x: -450, y: 50, s: 1.5},
                {id: 2, name: 'ecr', x: -450, y: -80, s: 1.5},
                {id: 3, name: 'ccr', x: -400, y: -100, s: 1.5},
                {id: 4, name: 'wcr', x: -250, y: -100, s: 1.5},
                {id: 5, name: 'scr', x: -350, y: -150, s: 1.5}
            ]
        }
    },
    methods: {
        sectionSelect: function (x = -600, y = -300, s = 1.5) {
            let section = new Snap.Matrix();
            section.translate(x, y);
            section.scale(s);
            return section;
        },

        mapAction: function (e) {

            if (!this.active) {
                this.$emit('toggleMap', {active: true});
            }

            if (!this.chinaActive) return;

            if (['BUTTON', 'LABEL', 'INPUT'].indexOf(e.target.tagName) != -1) return;

            if (this.serviceItemSelect) {
                this.serviceItemSelect = null;
                this.checkClear = true;
            }

            this.chinaSectionAction();
        },

        toggleChinaSection:function() {
            this.chinaSectionAction();
        },

        //service button
        // serviceTypeSelect: function (obj) {
        //     this.serviceType = obj.value;
        //     this.checkClear = false;
        // },

        serviceSelect: function (obj) {
            this.checkClear = false;
            this.serviceItemSelect = obj.value;
            let _index = this.services.findIndex((t) => t.id == obj.value);

            for (let i = 0; i < _index; i++) {
                setTimeout(()=> {
                    this.services[i].ready = true;
                }, 200 * i)
            }

            setTimeout(()=> {
                for (let i = 0; i < _index; i++) {
                    let _theItem = this.services[0];
                    _theItem.ready = false;
                    this.services.splice(0, 1);
                    setTimeout(()=> {
                        this.services.push(_theItem);
                    }, 400 * i)
                }
            }, 200 * _index)

            return;
        },

        chinaSectionAction: function (sec) {
            if (sec) {
                this.section.text.attr({visibility: 'hidden'});
                this.section.bigpoint.attr({visibility: 'hidden'});
                this.section.point.attr({visibility: 'visible'});
                this.section.component.attr({'fill': 'rgba(147,207,255,0.6)'});
                this.section.componentParent.animate({transform: this.sectionSelect(sec.x, sec.y, sec.s)}, 500, mina.ease);
                this.isChinaSection = true;
                $('#china #regionsName').children().not('#' + this.section.id + "_group").hide();
            } else {
                if (!this.section.text) return;
                this.section.text.attr({visibility: 'visible'});
                this.section.bigpoint.attr({visibility: 'visible'});
                this.section.point.attr({visibility: 'hidden'});
                this.section.component.attr({'fill': this.section.fill});
                this.section.componentParent.animate({transform: this.sectionSelect(0, 0, 1)}, 500, mina.ease);
                this.isChinaSection = false;
                $('#china  #regionsName').children().not('#' + this.section.id + '_group').show(500);
            }
        },

        toggleDetail: function (obj) {
            this.detailActive = obj.value;
        },

        fetchService: function () {
            $.getJSON('data/service_content.json', (data)=> {
                this.services = data;
                this.services_count = data.length;
                this.chinaServicesType = data.map((s)=> {
                    return {id: s.id, name: s.name}
                })
            })
        }

    },
    watch: {
        "chinaActive": function (val, oldval) {
            if (val != oldval && !val) {    //chinaActive==false
                this.world.animate({'opacity': 1}, 1000, mina.ease)
                this.china.animate({transform: this.sectionSelect(2866, 617, 1), 'opacity': 0}, 1000, mina.ease);
                this.china.toFront();

                this.isChinaSection = false;
                this.detailActive = false;
                this.serviceType = null;
                this.serviceItemSelect = null;
                this.chinaSectionAction();
            }
        },

        "active": function (val, oldval) {
            if (val != oldval && val) {
                //如果地图有激活，地图上的注释开放显示
                this.textSection.attr({opacity: 1});
            } else {
                this.textSection.attr({opacity: 0});
            }
        }
    },
    mounted: function () {

        this.fetchService();

        let s = Snap("#app__svg");

        Snap.load("world-map-points.svg", (c) => {
            s.append(c);
            this.world = s.select("#world");
            this.china = s.select("#china");
            this.textSection = s.select('#text_section');


            $('#app__svg #china_mask').click((e)=> {
                e.preventDefault();
                e.stopPropagation();
                this.world.animate({'opacity': 0}, 1000, mina.ease)
                this.china.animate({transform: this.sectionSelect(1900, 150, 3.2), 'opacity': 1}, 1000, mina.ease);  //this.aniSelect()
                this.china.toBack();
                this.$emit('toggleChina', {active: true});
                return;
            })

            $('#app__svg [hoverable]').mouseover((e)=> {
                let _id = e.target.id + '_text';
                $('#' + _id).attr('visibility', 'visible');
            })
            $('#app__svg [hoverable]').mouseout((e)=> {
                let _id = e.target.id + '_text';
                $('#' + _id).attr('visibility', 'hidden');
            })


            $('#china [chinasection]').click((e)=> {
                e.preventDefault();
                e.stopPropagation();

                let _sec = this.chinaSection.find(o=> o.name == e.target.id)
                this.section.component = s.select('#' + e.target.id);
                this.section.componentParent = s.select('#' + e.target.id + "_group g");
                this.section.text = s.select('#' + e.target.id + "_text");
                this.section.point = s.select('#' + e.target.id + "_point");
                this.section.bigpoint = s.select('#' + e.target.id + "_bigpoint");
                this.section.id = e.target.id;
                this.section.fill = this.section.component.attr('originfill');
                this.chinaSectionAction(_sec);

                return;
            })

        });
    },
    computed: {}
})