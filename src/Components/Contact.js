 function Contact({avatar, name, email, phone}){
    //  console.log(detailProps)
    return (
        
            
            <div className="leading-loose mt-5 bg-white shadow-xl px-6">
             
             <img src={avatar} className="h-36" alt="img"/>
             <div>
             <h2 className="font-bold text-xl">{name}</h2>
             <p>Phone: {phone}</p>
             <p>Email:  {email}</p>
             </div>
             
         
        </div>
        
    )

}

export default Contact;