<template>
    <div>
        <div class="section home subpage">
            <piaf-hero-sub :title="$t('lp.blogdetail.title')" :detail="$t('lp.blogdetail.detail')"/>
        </div>
        <div class="section" id="firstContent">
            <b-container>
                <b-row>
                    <b-colxx xxs="12" lg="7">
                        <b-card no-body>
                            <b-card-body class="p-0">
                                <img alt="subpage" src="/assets/img/landing-page/subpage-image.jpg" class="img-fluid card-img-fluid" />
                            </b-card-body>
                        </b-card>
                        <p class="mt-5 mb-0">Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service. <br /> <br /> Mauris hendrerit orci at iaculis laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla imperdiet dolor a ligula sagittis, id egestas ipsum accumsan. Donec mollis, diam at commodo eleifend, nunc ante imperdiet justo, non interdum libero urna a elit. Etiam gravida dapibus dui sed egestas. Fusce in libero at nisl aliquet iaculis. Cras id porttitor mauris. Ut eu justo placerat turpis condimentum congue eu non felis. Donec vel quam sit amet nunc ornare pellentesque sit amet non augue. <br /> <br /> Vivamus ultricies augue vitae commodo condimentum. Nullam faucibus eros eu mauris feugiat, eget consectetur tortor tempus. Sed volutpat mollis dui eget fringilla. Vestibulum blandit urna ut tellus lobortis tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque quis cursus mauris. Nam in ornare erat. Vestibulum convallis enim ac massa dapibus consectetur. Maecenas facilisis eros ac felis mattis, eget auctor sapien varius. Nulla non purus fermentum, pulvinar dui condimentum, malesuada nibh. Sed viverra quam urna, at condimentum ante viverra non. Mauris posuere erat sapien, a convallis libero lobortis sit amet. Suspendisse in orci tellus. <br /> <br /> Phasellus efficitur tellus a sem condimentum, vitae convallis sapien feugiat. Aenean non nibh nec nunc aliquam iaculis. Ut quis suscipit nunc. Duis at lectus a est aliquam venenatis vitae eget arcu. Sed egestas felis eget convallis maximus. Curabitur maximus, ligula vel sagittis iaculis, risus nisi tincidunt sem, ut ultricies libero nulla eu ligula. Nam ultricies mollis nulla, sed laoreet leo convallis ac. Mauris nisl risus, tincidunt ac diam aliquet, convallis pellentesque nisi. Nam sit amet libero at odio malesuada ultricies a vitae dolor. Cras in viverra felis, non consequat quam. Praesent a orci enim. Vivamus porttitor nisi at nisl egestas iaculis. Nullam commodo eget dui sollicitudin sagittis. Duis id nibh mollis, hendrerit metus consectetur, ullamcorper risus. Morbi elementum ultrices nunc, quis porta nisi ornare sit amet. <br /> <br /> Etiam tincidunt orci in nisi aliquam placerat. Aliquam finibus in sem ut vehicula. Morbi eget consectetur leo. Quisque consectetur lectus eros, sed sodales libero ornare cursus. Etiam elementum ut dolor eget hendrerit. Suspendisse eu lacus eu eros lacinia feugiat sit amet non purus.</p>
                    </b-colxx>
                    <piaf-sidebar/>                    
                </b-row>
            </b-container>
        </div>
        
        <div class="section background background-no-bottom mb-0">
            <piaf-newsletter />
        </div>
        <div class="section footer mb-0">
            <piaf-footer />
        </div>
    </div>
</template>
<script>
import PiafHeroSub from 'components/LandingPage/HeroSub'
import PiafNewsletter from 'containers/LandingPage/Newsletter'
import PiafFooter from 'containers/LandingPage/Footer'
import PiafSidebar from 'containers/LandingPage/Sidebar'

export default {
    components:{
        PiafHeroSub,
        PiafSidebar,
        PiafNewsletter,
        PiafFooter
    },
    data(){
        return{
        }
    },
    methods: {
        
    }
}
</script>