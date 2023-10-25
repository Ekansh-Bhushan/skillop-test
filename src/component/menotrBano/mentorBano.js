import { Circle } from 'rc-progress'
import React from 'react'

function mentorBano() {

    function increaseCircularProgress(currentProgress, steps) {
        if (steps <= 0) {
          throw new Error("Number of steps must be greater than 0");
        }
      
        // Calculate the increment for each step
        const increment = 0.25 / steps;
      
        // Increase the progress in each step
        for (let i = 0; i < steps; i++) {
          currentProgress += increment;
          currentProgress %= 1; // Ensure progress stays within the range [0, 1)
        }
      
        return currentProgress;
      }
      
      // Example usage
      const currentProgress = 0.2; // Initial progress (between 0 and 1)
      const steps = 4;
      const newProgress = increaseCircularProgress(currentProgress, steps);
      console.log("New progress:", newProgress);
      
  return (
    <>
      <div>
        Become a Mentor
      </div>
      <div style={{ margin: 20, height: 130, widows: 130, width: 200 }}>
        <Circle
          percent={25}
          strokeColor="cyan"
          strokeWidth={9}
          trailWidth={8}
          strokeLinecap="square"
        />
      </div>
      <div>
        You are One step away from becoming a Mentor... 
      </div>
      
      


    </>
  )
}

export default mentorBano
