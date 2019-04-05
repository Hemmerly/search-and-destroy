'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	if (array.length < 1) return false;

	if (array.length === 1) {
		if (array[0] === target){
			return true;
		}else{
			return false
	}

	}else{
		let midInd =Math.ceil(array.length/2)
		let midpoint = array[midInd]
		let leftArr = array.slice(0,midInd);
		let rightArr = array.slice(midInd+1)
		if (midpoint === target){
			return true;
		}else if (midpoint > target){
			 return binarySearch(leftArr,target)
		}else {
			return binarySearch(rightArr,target)
		}
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch