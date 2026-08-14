import React, { useState, useEffect } from 'react';
import Card from './Card';

const Testimonials = ({ reviews }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const len = (reviews && reviews.length) || 0;

 function rightslider()
 {
  if(activeIndex-1<0)
  {
    setActiveIndex(reviews.length-1);//if zero is coming then go to last index
  }
  else
  {
    setActiveIndex(activeIndex-1);//if zero is not coming then this will work
  }
 }
 function leftslider()
 {
  if(activeIndex+1>reviews.length-1)
  {
    setActiveIndex(0);//if zero is coming then go to last index card
  }
  else
  {
    setActiveIndex(activeIndex+1);//if zero is not coming then this will work
  }
 }
 function surprisehandler()
 {
  setActiveIndex(Math.floor(Math.random() * reviews.length));
 }
//maths.random has only two values 0 and 1 in which 0 is inclusive while the 1 is exclusive
// reviews.length is 4
  // Auto-rotate every 3 seconds; pauses while `isPaused` is true
  // useEffect(() => {
  //   if (isPaused || len === 0) return undefined;
  //   console.log('Auto-rotate started');
  //   const id = setInterval(() => {
  //     setActiveIndex((i) => {
  //       const nextIndex = (i + 1) % len;
  //       console.log('rotating to', nextIndex);
  //       return nextIndex;
  //     });
  //   }, 1000);
  //   return () => {
  //     clearInterval(id);
  //     console.log('Auto-rotate stopped');
  //   };
  // }, [len, isPaused]);

  // if (!reviews || reviews.length === 0) return null;
  return (
    <div>
      <Card
        review={reviews[activeIndex]}
        onNext={rightslider}
        onPrev={leftslider}
        onSurprise={surprisehandler}
     />
    </div>
  );
};

export default Testimonials;