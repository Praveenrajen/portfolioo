import websiteImg from '../assets/ecommerce-websites.jpg'
import webiteImg1 from '../assets/food-ecommerce.jpg'
import websiteImg3 from '../assets/website-blog.jpg'
export default function Projects() {
  const config = {
    projects: [
      {
        image: websiteImg,
        description: 'Spotify clone build with react.js',
        link: 'https://github.com/Praveenrajen/cuddly-tribble'
      },
      {
        image: webiteImg1,
        description: 'Swiggy clone build with react.js',
        link: 'https://github.com/Praveenrajen/friendly-winner.git '
      },
      {
        image: websiteImg3,
        description: 'Ai clone build with react.js',
        link: 'https://github.com/Praveenrajen/friendly-winner.git '
      },
    ]
  }
  return (
    <section id='projects' className=" flex py-20 px-5 flex-col justify-center bg-secondary text-white">
      <div className="w-full ">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold">Projects</h1>
          <p>these are my projects built with React.js, javascript, css.</p>
        </div>
      </div>

      <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-10'>
          {config.projects.map((project) => (
            
              <div className='relative'>
                <img className='h-[300px] w-[500px]' src={project.image} alt="" />
                <div className='absolute left-0 right-0 bottom-[0px] top-[0px] bg-secondary opacity-0 duration-500 hover:opacity-100 '>
                  <p className='text-center px-5 py-5'>{project.description}</p>
                  <div className='flex justify-center'>
                    <a className='button ' target='_blank' href={project.link}>View project</a>
                  </div>
                </div>
              </div>
            
          ))}


        </div>
      </div>

    </section>
  )
}