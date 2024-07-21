//Currying
let a = [-5,1,2,4,591,392,391,2,5,10,2,1,1,1,20,20,'huha']
let b = [-25,-5,1,15,591,392,391,2,5,10,2,1,1,1,20,20,'huha', true]

//with two functions
const pipe = (f,g) => (a) => g(f(a));
const compose = (f,g) => (a) => f(g(a));

//with any functions
const pipe2 = (...fns) => (a) => fns.reduce((acc, fn) => fn(acc), a);
const compose2 = (...fns) => (a) => fns.reduceRight((acc, fn) => fn(acc), a);

//with any functions and with any arguments
const pipe3 = (...fns) => fns.reduce((acc,fn) => (...args) => fn(acc(...args)));
const compose3 = (...fns) => fns.reduceRight((acc,fn) => (...args) => fn(acc(...args)));


///---Functional Programming---///
let isArray = (a) => Array.isArray(a);
let isNumber = (a) => typeof a === 'number'

//filter is merging arrays, because from multiple arguments it gives back only one array (which has arrays)
//Not needed --> let mergeArray = (...args) => args.reduce((acc, element) => [...acc, ...element])
//By the way flatting is needed
let isArrayFiltered = (...args) => args.filter(isArray);
let flatArray = (a) => a.flat(Infinity);
let isNumberFiltered = (a) => a.filter(isNumber);
let ascSorted = (a) => a.sort((a,b)=>a-b)	
let reduced = (a) => {
	let repeat=0;
	let repeatPrev;
	return a.reduce((acc, element, index, array)=>{

		if(element === array[index+1]){
			repeatPrev = repeat;
			repeat++;
		} else{
			repeatPrev = repeat;
			repeat = 0;
		}
			
		if(!repeat && repeatPrev){
			acc=[...acc, Array(repeatPrev+1).fill(element)];
		}else if(!repeat && !repeatPrev){
			acc=[...acc, element]; 
		}

		return acc
	}, [])
} 

let ascSortedReduced = pipe3(isArrayFiltered, flatArray, isNumberFiltered ,ascSorted, reduced)
ascSortedReduced(a,b)