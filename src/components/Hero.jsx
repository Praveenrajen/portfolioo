import HeroImg from "../assets/hero.png"
import { FaXTwitter} from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineWhatsapp } from "react-icons/md";

export default function Hero(){

    const config={
        subtitle:'Im a Full-Stock Developer',
        social:{
          twitter:'https://x.com/Praveen17636956?t=vwNTmJ4SzlSe0kCHvaYptA&s=09',
          linkedin:'https://www.linkedin.com/in/praveen-rajen-a51230203',
          whatsapp:'https://wa.me/+919751421441',
        }

    }
    return(
        <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
            <div className="w-1/2 flex flex-col" >
                <h1 className=" text-white text-6xl font-hero-font">Hi,<br /> I'm <span className="text-teal-400">Praveen </span>
                 <p className="text-2xl">{config.subtitle}</p>
                </h1>
               
                <div className='flex py-10'>
                <a href={config.social.twitter} className="pr-5 hover:text-white"><FaXTwitter size={30}/></a>
                <a href={config.social.linkedin} className="pr-5  hover:text-white"><AiOutlineLinkedin size={30}/></a>
                <a href={config.social.whatsapp} className="hover:text-white"><MdOutlineWhatsapp size={30}/></a>
                </div>

            </div>
            
            <img className="md:w-1/3 " src={HeroImg} alt="heroimg" />
            
        </section>
    )
}
