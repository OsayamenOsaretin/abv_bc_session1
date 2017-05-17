'use strict'
module.exports = {

	/* Find minimum and maximum numbers from given array */
	findMinMax: (anArray) => {
		let min = anArray[0];
		let max = anArray[0];
		let answer = [];
		
		// Iterate through array, updating the values of min and max
		for (let i = 1; i < anArray.length; ++i){
			if(anArray[i] < min){
				min = anArray[i];
			}

			if(anArray[i] > max){
				max = anArray[i];
			}
		}
		
		// Test if all elements of the array are the same
		if(min === max){
			answer.push(min);
			return answer;
		}else{
			answer.push(min);
			answer.push(max);
		}

		return answer;
	}
}
