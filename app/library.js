'use strict'
module.exports = {

	/* Find minimum and maximum numbers from given array */
	findMinMax: (anArray) => {
		let min = 10000;
		let max = 0;
		let answer = [];

		for (let i = 0; i < anArray.length; ++i){
			if(anArray[i] < min){
				min = anArray[i];
			}

			if(anArray[i] > max){
				max = anArray[i];
			}
		}

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