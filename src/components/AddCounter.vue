<!-- html -->
<template>
  <div class="container">
    <div class="field is-grouped">
      <div class="control">
				<!-- v click, then call method -->
        <button class="button is-primary" v-on:click="addCounter()">Add</button>
      </div>
  </div>
  </div>
</template>

<script>
// store
import store from '../store/store';
// actions 
import * as type from '../store/mutationTypes/types';

// Export template
export default {
	// Define methods
	methods: {
		// v-on:click="addCouter()" 
  	addCounter(){
			// store fire, action, type, payload 
    	store.dispatch({
				// type: increment, the action name is increment 
      	type: type.Increment,
				// payload
        amount: 20
      })
  	}
	}
}
</script>
