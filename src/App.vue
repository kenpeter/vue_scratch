<!-- html -->
<template>
	<!-- layout -->
  <div class="container">
		<!-- counter component -->
    <Counter></Counter><br />

		<!-- all columns -->    
		<div class="columns">
			<!-- is-11, add -->
    	<div class="column is-11">
        <AddCounter></AddCounter>
      </div>

			<!-- column remove -->
      <div class="column auto">
        <RemoveCounter></RemoveCounter>
      </div>
    </div>

 </div>
</template>

<script>

	// com1
	import Counter from './components/Counter.vue';

	// com2
	import AddCounter from './components/AddCounter.vue';

	// com3
	import RemoveCounter from './components/RemoveCounter.vue';

	// export component, that is how we use components in template
	export default {
    components : {
      Counter,
      AddCounter,
      RemoveCounter
    }
  }
</script>
