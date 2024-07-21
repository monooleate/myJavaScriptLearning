
// using this array, 
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array. Removes the first element from an array and returns it!
array.shift();

// 2. Sort the array in order. 
array.sort();

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");

// 4. Remove "Apples" from the array.
array.splice(0, 1);

// 5. Sort the array in reverse order. 
array.reverse();

// 9. The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object 
//selected from start to end (end not included) where start and end represent the index of items in that array. 
//The original array will not be modified.
array.slice();

// using this array, 
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
array2[1][1][0];

// Complete the below questions using this array:
const array = [
	{
		username: "john",
		team: "red",
		score: 5,
		items: ["ball", "book", "pen"]
	},
	{
		username: "becky",
		team: "blue",
		score: 10,
		items: ["tape", "backpack", "pen"]
	},
	{
		username: "susy",
		team: "red",
		score: 55,
		items: ["ball", "eraser", "pen"]
	},
	{
		username: "tyson",
		team: "green",
		score: 1,
		items: ["book", "pen"]
	},

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArray = []
array.forEach(user => {
	let { username } = user;
	username = username + "!";
	newArray.push(username);
})
console.log(newArray);

//Create an array using map that has all the usernames with a "?" at the end of usernames
const mapArray = array.map(user => {
	let { username } = user;
	return username + "?";
})
console.log(mapArray);

//Filter the array to only include users who are on team: red
const filterArray = array.filter(user => {
	return user.team === "red";
})
console.log(filterArray);

//Find out the total score of all users using reduce
const total = array.reduce((acc, user) => {
	return acc + user.score
}, 0);
console.log(total);


// (1), what is the value of i? INDEX of the array.
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})



//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})
console.log(answer);

// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.includes('John') // false

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.filter(name => name.includes('John')) // ['Johnathan']

//Creates Array from Object's key- value pairs
Object.entries(obj)


// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
//Solution:
console.log(array.flat(2))


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
//Solution:
console.log(greeting.flatMap(x => x.join(' ')))


//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
//Solution
console.log(greeting.flatMap(x => x.join(' ')).join(' '))

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
//Solution
console.log(trapped.flat(Infinity))
// Infintiy is actually a LARGE number in JavaScipt. It represents the maximum amount of memory that we can hold for a number! Learn more here: https://riptutorial.com/javascript/example/2337/infinity-and--infinity


const ztmMonsters = [
{id: 1, monster: 'Mr. Mouse', level: 1},
{id: 2, monster: 'Mac', level: 30},
{id: 3, monster: 'Denodude', level: 17},
{id: 4, monster: 'Pye', level: 5},
];

// Old Way
const advancedMonsters = ztmMonsters.filter(item => item.level > 15)
console.log(advancedMonsters)
console.log(advancedMonsters[advancedMonsters.length - 1])

//Gives back just the Last
// Using findLast()
const lastMonster = ztmMonsters.findLast(item => item.level > 15);
console.log(lastMonster);
//Gives back the index of last result 
// Using findLastIndex()
const lastMonsterIndex = ztmMonsters.findLastIndex(item => item.level > 15);
console.log(lastMonsterIndex);


const ztmMonstersList = ['Mr. Mouse', 'Mac', 'Denodude', 'Pye'];

//Using reverse()
const reverseMonsters = ztmMonstersList.reverse();
console.log(reverseMonsters) 

//using toReversed()
const reversedMonstersTo = ztmMonstersList.toReversed();
console.log(reversedMonstersTo)

//Using toSorted()
const sortedMonstersTo = ztmMonstersList.toSorted();
console.log(sortedMonstersTo)

//Using toSpliced()
const spliceMonstersTo = ztmMonstersList.toSpliced(2, 1);
console.log(spliceMonstersTo)


// Using with()
//Old Way
ztmMonstersList[1] = 'Gost';
console.log(ztmMonstersList)
const withMonsters = ztmMonstersList.with(1, 'Gost');
console.log(ztmMonstersList) 
console.log(withMonsters)

