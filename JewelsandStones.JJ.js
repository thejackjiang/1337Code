/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".
*/

function numJewelsInStones(J, S) {
	const cache = {}
	for (let i = 0; i < J.length; i++) {
		const jewel = J[i]
		cache[jewel] = 0
	}

	for (let j = 0; j < S.length; j++) {
		const stone = S[j]
		cache[stone]++
	}

	const count = Object.values(cache).reduce(((acc, ele) => ele ? acc += ele : acc), 0)
	return count
}

const J = "aA"
const S = "aAAbbbb"
numJewelsInStones(J, S)