import React, { useReducer } from 'react'
import StarRating from './starRating'
import MyComponent from './option'
import './feedbackForm.css'
// const preSetFeedback = {
//     list: [
//         { title: 'lorem ipsum', flag: false},
//         { title: 'lorem ipsum', flag: false},
//         { title: 'lorem ipsum', flag: false},
//         { title: 'lorem ipsum', flag: false},
//         { title: 'lorem ipsum', flag: false},
//         { title: 'lorem ipsum', flag: false},
//         { title: 'lorem ipsum', flag: false},
//     ]
// }

// function reducer(state,action){
//     switch(action.type){
//         case 'ON_SELECT':
//             return {...state, ...action.payload}
//         default:
//             return state
//     }
// }


function feedbackForm() {

    
    // const[state,dispatch] = useReducer(reducer, initialState)
  return (
    <div className='form'>
        <div>

        <h1>Mentor Feedback Form</h1>
        <h2>How Was Your Experience With Your Mentor</h2>
        </div>
        <div>

      <StarRating/>
        </div>
        <div >
            What Went Wrong
        </div>
    
        <div className='myoptions'>
            <MyComponent/>
        </div>
        <form>
        <input
                                style={{
                                    border: "2px solid #108CFF",
                                    outline: "none",
                                    width: "100%",
                                    height: "100%",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    color: "black",
                                    backgroundColor: "transparent",
                                    padding: "10px",
                                }}
                            />

<button
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (e.target.previousSibling.value === "")
                                        return;
                                    
                                }}
                                style={{
                                    backgroundColor: "#108CFF",
                                    color: "white",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    border: "none",
                                    outline: "none",
                                    padding: "10px",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    marginLeft: "10px",
                                }}
                            >
                                Add
                            </button>
        </form>
    </div>
  )
}

export default feedbackForm
