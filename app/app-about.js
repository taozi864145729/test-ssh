Vue.component('app-about', {
    props: ['active'],
    template: `
        <div id="app__about" class="about__right-container" 
         :style="{ opacity: active?1:0,
                  display: active?'': 'none'}">
         <div class="about__header-section">
            <h2>About ADEN Services</h2>
        </div>
        <div class="about__core-section">
            <div class="about__content-section">
               <video width="100%" autoplay loop muted>
                    <source src="assets/aden.mp4" type="video/mp4">
                </video>
            </div>
            <div class="about__footer-section">
              
            </div>
        </div>
    </div>
    `,
    data: ()=> {
        return {}
    },
    methods: {
    }
})