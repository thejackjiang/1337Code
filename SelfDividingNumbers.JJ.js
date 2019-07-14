function selfDividingNumbers(left, right) {
  const cache = {}

  for (let i = 0; i < right; i++) {
    if (cache[i]) {

    }
  }
}


const mapDispatchToProps = (dispatch) => ({
  getDogs: () => {
    fetchDogs() // returns a promise, we need to .then to get the data 
      .then((data) => {
        const action = getAllDogs(data)
        dispatch(action) //getAllDogs is an action imported from the action file
      })
      .catch(err => console.log(err))
  },
})



/*
1. componentDidMount -> call getDogs from props which is from map dispatch to props

*/





//explicit return 
const myfunk = () => {
  return 5
}

//implicit return 
const myfunk = () => ({
  name: 'jack'
})