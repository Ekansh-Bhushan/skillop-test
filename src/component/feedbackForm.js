import React from 'react'
import StarRating from './starRating'

function feedbackForm() {

    const preSetSkills = [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
    ];
  return (
    <div className='form'>
        <div>

        <h1>Mentor Feedback Form</h1>
        <h2>How Was Your Experience With Your Mentor</h2>
        </div>
        <div>

      <StarRating/>
        </div>
        <div>
            What Went Wrong
        </div>


    </div>
  )
}

export default feedbackForm
