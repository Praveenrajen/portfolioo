import resumeImg from "../assets/resume.jpg";
import praveen1 from '../assets/praveen1.png'
export default function Resume(){
    const config={
        link:'file:///C:/Users/User/Downloads/praveen_Resume.pdf ' ,
    }
    return(
        <section id='resume' className=" flex flex-col  md:flex-row bg-primary px-5  ">
        <div className="md:w-1/2 py-5 flex justify-center md:justify-end">
        <img className="w-[300px] " src={resumeImg}  alt=""  />
        </div>

        <div className="md:w-1/2 flex justify-center">
            <div className="flex flex-col justify-center text-white p-5">
              <h1 className="text-4xl  border-b-4 mb-5 w-[135px] font-bold">Resume</h1>
              <p className="pb-5"> you can view my resume <a className="button" href={config.link}>Download</a> </p>
            
            </div>
        
        </div>

        </section>
    )
}
