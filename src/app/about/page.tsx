import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import {
  AI_ADVENTURE_WRLD_GITHUB_URL,
  AI_HACKATHON_URL,
  PERSONAL_LINKEDIN_URL,
  PERSONAL_GITHUB_URL,
} from 'utils/constants'

const aboutMePhotoDimensions = { width: 220, height: 220 }

export const metadata: Metadata = {
  title: 'About Me',
}

const About = () => (
  <main className="container">
    <article>
      <section>
        <div className="flex justify-center">
          <Image
            className="rounded-full"
            src="/images/profile-picture.jpg"
            width={aboutMePhotoDimensions.width}
            height={aboutMePhotoDimensions.height}
            alt="profile picture"
          />
        </div>
      </section>
      <hr className="w-full border-none bg-gray-950" style={{ height: '1px' }} />
      <section className="">
        <h2 className="">About Me</h2>
        <p className="">
          A Full-Stack Software Engineer, based in London. Connect with me on
          <>
            {' '}
            <a
              href={PERSONAL_LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="text-orange-600 hover:text-neutral-light"
            >
              LinkedIn
            </a>{' '}
          </>
          and take a look at my
          <>
            {' '}
            <a
              href={PERSONAL_GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="text-orange-600 hover:text-neutral-light"
            >
              GitHub
            </a>{' '}
          </>
          repositories.
        </p>
      </section>
      <section>
        <h2 className="">Coding Experience</h2>
        <p className="">
          TypeScript and Python are the langauges I excell with, having used them both commercially
          and personally to build performant and scalable full-stack web applications, with tools
          like React, Node.js and Flask. During my 2.5 years at Qudo, I gained exposure to DevOps
          tools such as Docker, Ansible, and Git CI/CD pipelines.
        </p>
        <p className="">
          As Lead AI developer at GeniusLead, I led a small team of junior team members to build
          bespoke voice applications for Alexa and Google Hub devices. I was also responisble for my
          building my own projects, deploying them to AWS Lambda, the Alexa Store and Google Cloud
          Platform.
        </p>
        <p className="">
          I have also completed a number of online courses, including an Advanced Python course, an
          Intermediate Machine Learning course and a Python for Data Science course. I enjoy coding
          in my free time and have completed a number of projects in various languages. Take a look
          at some of the personal
          <>
            {' '}
            <Link className="" href="/projects">
              projects
            </Link>{' '}
            I have worked on.
          </>
        </p>
      </section>
      <section>
        <h2 className="">Hackathon Win</h2>
        <p className="">
          On the 8th of March 2024 I participated in the largest
          <>
            {' '}
            <a
              href={AI_HACKATHON_URL}
              target="_blank"
              rel="noreferrer"
              className="text-orange-600 hover:text-neutral-light"
            >
              AI Hackathon
            </a>{' '}
          </>
          event in London. The event ran for 3 days, and 600+ applicants joined to compete for a
          total cash pool of £20,000.
        </p>
        <p className="">
          Alongside two other developers, we secured 1st place for the &quot;Most promising AI x
          Crypto Build&quot; bounty, with an AI generated, text-based game generator called
          <>
            {' '}
            <a
              href={AI_ADVENTURE_WRLD_GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="text-orange-600 hover:text-neutral-light"
            >
              AI Adventure World.
            </a>{' '}
          </>
          It was a lot of fun and will be looking for more hackathons to join in the future!
        </p>
      </section>
      <section>
        <h2 className="">Running and Marathon</h2>
        <p className="">
          Since late 2020, I have developed a regular running routine, aspiring to one day complete
          an ultramarathon (&#8805;50km).
        </p>
        <p className="">
          On the 22nd of October 2023, I ran the Battersea Park Marathon and raised £275 for The
          Alzheimer&apos;s Society! To explore my running stats, click{' '}
          <Link className="text-orange-600 hover:text-neutral-light" href="/logs/running">
            here
          </Link>
          .
        </p>
      </section>
    </article>
  </main>
)

export default About
