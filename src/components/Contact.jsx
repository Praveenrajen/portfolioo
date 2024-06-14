
export default function Contact(){
    const config={
            email:'praveenrajen04@gmail.com',
            phone:'9751421441',
    }
    return(
        
        <section id='contact' className=" flex flex-col bg-secondary px-5 py-32 text-white ">
        <div className=" flex flex-col items-center">
              <h1 className="text-4xl  border-b-4 border-primary mb-5 w-[135px] font-bold">Contact</h1>
              <p className="pb-5">If you want to discuss more in detail, please contyact me. </p>
              <p className='py-5'><span className='font-bold  '>Email: </span>{config.email}</p>
              <p className='py-2'><span className="font-bold ">Phone: </span>{config.phone}</p>

        
        </div>

        </section>
    )
}
