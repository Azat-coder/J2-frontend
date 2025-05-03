<script setup lang="ts">
import FeaturesWidget from '@/entities/landing/FeaturesWidget.vue';
import FooterWidget from '@/entities/landing/FooterWidget.vue';
import HeroWidget from '@/entities/landing/HeroWidget.vue';
import HighlightsWidget from '@/entities/landing/HighlightsWidget.vue';
import PricingWidget from '@/entities/landing/PricingWidget.vue';
import TopbarWidget from '@/entities/landing/TopbarWidget.vue';
</script>

<template>
    <div class="bg-surface-0 dark:bg-surface-900">
        <div id="home" class="landing-wrapper overflow-hidden">
            <div class="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 flex items-center justify-between relative lg:static">
                <TopbarWidget />
            </div>
            <HeroWidget />
            <FeaturesWidget />
            <HighlightsWidget />
            <PricingWidget />
            <FooterWidget />
        </div>
    </div>
</template>
