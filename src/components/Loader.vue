<template>
    <section class="spinner-wrapper mt-4" id="spinnerWrapper">
        <div class="spinner" data-id="spinner">
            <div class="spinner-cell">
                <div class="pl pl-leapfrog"></div>
            </div>
        </div>
    </section>
	<div id="loader-ok-msg" v-if="okMsg"><label>{{okMsg}}</label></div>
	<div id="loader-msg"><label>{{msg ?? $t('loading')}} ...</label></div>
</template>
<script lang="ts" setup>
import { toRefs } from 'vue'
const props = defineProps({
	msg: { type : String, required: false, default: null},
	okMsg: {type : String, required: false}
})
const {msg} = toRefs(props)

</script>
<style lang="scss" scoped>
$spinner: spinner;
$pl: pl;
$leapfrog: leapfrog;

.spinner-wrapper{
	margin:0 auto;
}

.#{$spinner} {
	display: flex;
	justify-content: center;
	align-items: center;
	clear: both;
}

.#{$spinner}-wrapper {
    background: transparent;
    padding-top: 1rem;
    padding-bottom: 1rem;

	&.showelementspinner {
		display: flex;

		.#{$spinner} {
			display: flex;
		}
	}
}

/** GLOBAL PRELOADER STYLES **/
.#{$pl},
.#{$pl}:before,
.#{$pl}:after {
	-webkit-animation: 2s linear infinite;
	animation: 2s linear infinite;
}

.#{$pl} {
	position: relative;
	width: 4.7em;
	height: 4.7em;
	@media (max-width: 768px) {
		width: 3em;
		height: 3em;
	}
}

.#{$pl}:before,
.#{$pl}:after {
	background: $color-primary-01-500;
	content: '';
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 50%;
	-webkit-transform-origin: 50% 100%;
	-ms-transform-origin: 50% 100%;
	transform-origin: 50% 100%;
	clip-path: polygon(0 0, 100% 0, 50% 100%);
	-webkit-clip-path: polygon(0 0, 100% 0, 50% 100%);
}

/** STYLES FOR INDIVIDUALS PRELOADERS **/

/* LEAP FROG */
.#{$pl}-#{$leapfrog}:before,
.#{$pl}-#{$leapfrog}:after {
	clip-path: polygon(0 0, 100% 0, 0 100%);
	-webkit-clip-path: polygon(0 0, 100% 0, 0 100%);
	top: 50%;
	left: 50%;
	width: 70.71%;
	height: 70.71%;
	-webkit-transform-origin: 0 0;
	-ms-transform-origin: 0 0;
	transform-origin: 0 0;
}

.#{$pl}-#{$leapfrog}:before {
	-webkit-animation-name: leapFrogA;
	animation-name: leapFrogA;
}

.#{$pl}-#{$leapfrog}:after {
	-webkit-animation-name: leapFrogB;
	animation-name: leapFrogB;
	background: $color-primary-01-300;
}

@keyframes leapFrogA {
	from { transform: rotateZ(-135deg) rotateY(0deg) rotateX(0deg); z-index: 0 }
	12.5% { transform: rotateZ(-135deg) rotateY(-180deg) rotateX(0deg); z-index: 1 }
	25%, 50% { transform: rotateZ(-135deg) rotateY(-180deg) rotateX(-180deg); z-index: 0 }
	62.5% { transform: rotateZ(-135deg) rotateY(0deg) rotateX(-180deg); z-index: 1 }
	75%, to { transform: rotateZ(-135deg) rotateY(0deg) rotateX(0deg); z-index: 0 }
}
@keyframes leapFrogB {
	from, 25% { transform: rotateZ(-45deg) rotateY(0deg) rotateX(0deg); z-index: 0 }
	37.5% { transform: rotateZ(-45deg) rotateY(-180deg) rotateX(0deg); z-index: 1 }
	50%, 75% { transform: rotateZ(-45deg) rotateY(-180deg) rotateX(-180deg); z-index: 0 }
	87.5% { transform: rotateZ(-45deg) rotateY(0deg) rotateX(-180deg); z-index: 1 }
	to { transform: rotateZ(-45deg) rotateY(0deg) rotateX(0deg); z-index: 0 }
}

#loader-msg{
	width:100%;
	text-align: center;
	padding-top: 1rem;
	label{
		font-weight: bold;
	}
}
#loader-ok-msg{
	width:100%;
	text-align: center;
	padding-top: 1rem;
	label{
		color: $color-primary-01-500;
		font-size: 1.1rem;
		font-weight: bold;
	}

}
</style>