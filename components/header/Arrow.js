import React, { Fragment, useEffect, useState } from 'react'

import {motion} from 'framer'
import styles from './Arrow.module.css'

function Arrow() {

  return (
    <div className="flex w-full justify-center">
    <motion.div animate={{y:[0,25,-15,25,0], transition:{type:'spring', bounce:.5, duration:1, repeatDelay:4, repeat:Infinity}}} className={styles.Arrowcontainer}>
      <div className={styles.topArrow}>
        <motion.svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
   width="100" height="100" viewBox="0 0 960 560" enable-background="new 0 0 960 560" >
<g id="Rounded_Rectangle_33_copy_4_1_">
  <motion.path
  initial={{opacity: 0.3, pathLength:0}}
  animate={{opacity:1, pathLength:1, transition:{duration:1.8, repeat: Infinity}}}
  fill='#FFFFFF'
  d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937
    c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937
    c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"/>
</g>
</motion.svg>
</div>
<div className={styles.botArrow}>
      <motion.svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
   width="100" height="100" viewBox="0 0 960 560" enable-background="new 0 0 960 560">
<g id="Rounded_Rectangle_33_copy_4_1_">
  <motion.path
  initial={{opacity: 0, pathLength:0}}
  animate={{opacity:1, pathLength:1, transition:{duration:1.8, delay:.2, repeat: Infinity, }}}
  fill='#FFFFFF'
  d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937
    c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937
    c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"/>
</g>
</motion.svg>
</div>

    </motion.div>
    </div>
   
  )

}

 

export default Arrow