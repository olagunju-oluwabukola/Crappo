function Timer(){
    const firtsName = 'John';
   const lastName ='Matthew';
   const date = new Date();
   const hours = date.getHours() % 12;
   let timeOfTheDay 
   if(hours < 12){
     timeOfTheDay = 'Good Morning';
   }else if(hours >= 12 && hours < 17) {
     timeOfTheDay = 'Good Evening';
   }
   else{
    timeOfTheDay= ' Good Night';
   }
    return(
        <div>
        <h1>my name is {firtsName} {lastName}</h1>
        <h1>The time is {date.getHours()%12} O'clock. {timeOfTheDay}! </h1>
 
        </div>
        
    )
        
      
    }


export default Timer