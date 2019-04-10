// we'll need axios
import axios from 'axios'

export const FETCHING_CHARACTERS = 'FETCHING_CHARACTERS'
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS'
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE'
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const getCharacters = ()=>(
    dispatch => {
		console.log('getCharacters')
		dispatch({type: FETCHING_CHARACTERS})
		axios.get('https://swapi.co/api/people')
			.then(res => {
				console.log('res',res)
				
				return dispatch(
					{
						type: 'FETCH_CHARACTERS_SUCCESS',
						payload: res.data
					}
				)
			})
			.catch(err => {
			    let msg
			    switch (err.status){
					case '404':
						msg = 'The page does not exist'
						break;
						
					default:
					msg = "There has been an error loading the page."
			    }
				dispatch(
					{
						type: 'FETCH_CHARACTERS_FAILURE',
						payload: msg
					}
				)
			})
			
			
			
	}
)

export const  myCleverAction = () => dispatch => {
	console.log('myCleverAction')
	axios.get('https://swapi.co/api/people')
	.then(({data}) => {
		console.log('data', data)
	})
	.catch(err => {
		console.log('err', err)
	});
};

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
