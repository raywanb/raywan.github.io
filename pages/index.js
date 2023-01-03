
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Front } from './components/front'
import { Project } from './components/project'
import {Navbar} from './components/navbar'
import {Head} from "./components/Head"
import {Profile} from "./components/profile"
import { ProjectSection } from './projectsection'
import { Connect } from './connect'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const props = {link:"https://www.apple.com", picture:"https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/260/958/datas/gallery.jpg", description:"Coool"}
  
  return (
    <>            
      <Navbar></Navbar>
      <Head></Head>
      <Profile></Profile>
      <ProjectSection></ProjectSection>
      <Connect></Connect>
    </>
  )
}
