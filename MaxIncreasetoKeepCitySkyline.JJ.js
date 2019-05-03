/*
In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there. We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings). Height 0 is considered to be a building as well. 

At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. See the following example.

What is the maximum total sum that the height of the buildings can be increased?
*/

const city = [
	[3, 0, 8, 4],
	[2, 4, 5, 7],
	[9, 2, 6, 3],
	[0, 3, 1, 0]
]

// skyline from top/bottom 9, 4, 8, 7
// skyline from left/right 8, 7, 9, 3


function keepSkyline(city) {
	let counter = 0
	const verticals = findVerticalMax(city)

	for (let i = 0; i < city.length; i++) {
		const xMax = findMax(city[i])
		for (let j = 0; j < city[0].length; j++) {
			const yMax = verticals[j]
			const max = xMax > yMax ? yMax : xMax
			const increaseBy = max - city[i][j]
			counter += increaseBy
		}
	}
	return counter
}

function findVerticalMax(city) {
	const results = []
	for (let i = 0; i < city[0].length; i++) {
		const array = []
		for (let j = 0; j < city.length; j++) {
			array.push(city[j][i])
		}
		results.push(findMax(array))
	}
	return results
}

function findMax(array) {
	return array.reduce((acc, element) => acc > element ? acc : element, -Infinity)
}


const sum = keepSkyline(city)


