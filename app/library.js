'use strict';
module.exports = {

	/* Test array for Arithmetic Progressions or Geometric Progressions */

	aritGeo: (anArray) => {
		if(anArray.length === 0){
			return 0;
		}

		
		let minRatio = 1/0, maxRatio = -1/0, minDiff = 1/0, maxDiff = -1/0;
		let diff, ratio; 


		for(let i = 1; i < anArray.length; ++i){
			diff = anArray[i] - anArray[i-1];
			ratio = anArray[i]/anArray[i-1];

			// Test for the minimum and maximum Ratios
			minRatio = Math.min(ratio, minRatio);
			maxRatio = Math.max(ratio, maxRatio);


			// Test for the minimum and maximum Differences
			minDiff = Math.min(diff, minDiff);
			maxDiff = Math.max(diff, maxDiff);
		}

		if(minDiff === maxDiff){
			return "Arithmetic";
		}

		if(minRatio === maxRatio){
			return "Geometric";
		}

		return -1;


	}
}