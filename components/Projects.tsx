import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <motion.section 
      className="projects"
      initial={{ 
        y: "100%",
        opacity: 0 
      }}
      animate={{
        y: "0%",
        opacity: 1, 
        transition: {
          delay: -2.5,
          duration: 4,
          ease: 'easeOut'
        }
      }}
    >
      <article className="projects__project">
        <div className="container container--medium d--grid five--cols gap--medium">
          <h4 className='sticky'>2023</h4>
          <div className="col-2">
            <h2 className="mb--medium">Coins</h2>
            <p className="c--low-opacity">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Qui, officiis. 
            </p>
          </div>
          <a href="" className="col-1-5">Live Preview</a>
        </div>
      </article>
      <article className="projects__project" style={{backgroundColor: "slategray"}}>
        <div className="container container--medium d--grid five--cols gap--medium">
          <h4 className='sticky'>2023</h4>
          <div className="col-2">
            <h2 className="mb--medium">Teste</h2>
            <p className="c--low-opacity">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Qui, officiis. 
            </p>
          </div>
          <a href="" className="col-1-5">Live Preview</a>
        </div>
      </article>
      <article className="projects__project" style={{backgroundColor: "skyblue"}}>
        <div className="container container--medium d--grid five--cols gap--medium">
          <h4 className='sticky'>2023</h4>
          <div className="col-2">
            <h2 className="mb--medium">Teste</h2>
            <p className="c--low-opacity">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Qui, officiis. 
            </p>
          </div>
          <a href="" className="col-1-5">Live Preview</a>
        </div>
      </article>
      <article className="projects__project" style={{backgroundColor: "slateblue"}}>
        <div className="container container--medium d--grid five--cols gap--medium">
          <h4>2023</h4>
          <div className="col-2">
            <h2 className="mb--medium">Teste</h2>
            <p className="c--low-opacity">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Qui, officiis. 
            </p>
          </div>
          <a href="" className="col-1-5">Live Preview</a>
        </div>
      </article>
    </motion.section>
  )
}

export { Projects }