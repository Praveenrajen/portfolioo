import AboutImg from "../assets/about.png";
import praveen1 from '../assets/praveen1.png'
export default function AboutMe(){
    const config ={
        line1:'Hi, Myself Praveenkumar. I am a Full Stock Web Developer.I build Responsive weebsites with React.js and TailwindCSS',
        line2:'I am proficient in Frontend Skills like React.js,javascript, TailwindCSS, Css3 and many more.',
        line3:'In bacjend Skills like java,python, node.js.'
    }
    return(
        <section id='about' className="flex flex-col md:flex-row bg-primary px-5  ">
        <div className="md:w-1/2 py-5">
        <img src={AboutImg} alt=""  />
        </div>

        <div className="md:w-1/2 flex justify-center">
            <div className="flex flex-col justify-center text-white p-5">
              <h1 className="text-4xl  border-b-4 mb-5 w-[170px] font-bold">About me</h1>
              <p className="pb-5">{config.line1}</p>
              <p className="pb-5">{config.line2}</p>
              <p > {config.line3}</p>
            </div>
        
        </div>

        </section>
    )
}
