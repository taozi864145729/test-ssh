Vue.component('app-introduce', {
    props: ['active'],
    template: `
    <div class="introduce__center_section" v-if="active" v-on:click="activeMap">
        <div class="paragraph__center_section">
            <div class="introduce__center_paragraph">
                <div class="introduce__paragraph_1">
                    <img src="./assets/pointSelected.png"/>
                </div>
                <div>
                    <div><i>26,000</i>EMPLOYEES</div>
                    <div>Employees from 25 nationalities</div>
                </div>
            </div>
            <div class="introduce__center_paragraph">
                <div class="introduce__paragraph_1">
                    <img src="./assets/pointSelected.png"/>
                </div>
                <div>
                    <div>ARROUND<i>1,200</i>CUSTOMERS SITES</div>
                    <div>One million of consumers</div>
                </div>
            </div>
            <div class="introduce__center_paragraph">
                <div class="introduce__paragraph_1">
                    <img src="./assets/pointSelected.png"/>
                </div>
                <div>
                    <div>PRESENT IN <i>60+</i>CITIES IN CHINA</div>
                </div>
            </div>
            <div class="introduce__center_paragraph">
                <div class="introduce__paragraph_1">
                    <img src="./assets/pointSelected.png"/>
                </div>
                <div>
                    <div>PRESENT IN  <i>20+</i>COUNTRIES</div>
                    <div>South - East Asia, Central Asia and Africa.</div>
                </div>
            </div>
        </div>
    </div>
    `,
    data: ()=> {
        return {}
    },
    methods: {
        activeMap: function () {
            this.$emit('toggleMap', {active: true});
        }
    }
});