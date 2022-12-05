import React, { Fragment } from 'react'
import ProjectCards from './ProjectCards';

function Projects() {
  return (
    <Fragment>
      <div className="bg-black" style={{ height: 100 }}></div>
      <div className="flex bg-black flex-col h-24 items-center text-center justify-center w-full overflow-clip">
        <h1 className="text-white text-6xl font-round">
          Projects
          </h1>
      </div>
    <ProjectCards project='drumclass' />
    <ProjectCards project='blackbearbakery' />
    <ProjectCards project='restaurantsearch'/>
      <div style={{ height: 200 }}></div>
    </Fragment>
  );
}

export default Projects