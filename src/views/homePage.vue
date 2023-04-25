<template>
    <app-navbar></app-navbar>
    <sliderSec></sliderSec>
    <servicesSec></servicesSec>
    <offerSec></offerSec>
    <agencySec></agencySec>
    <app-footer></app-footer>
   
</template>
<!-- local componentler -->
<script>
import sliderSec from '@/components/home/sliderSec.vue';
import servicesSec from '@/components/home/servicesSec.vue';
import offerSec from '@/components/home/offerSec.vue';
import agencySec from '@/components/home/agencySec.vue';

export default{
    components:{
    sliderSec,
    servicesSec,
    offerSec,
    agencySec,
}
};

</script>