import { PageHeader, ProjectGallery } from 'components'
import { type Metadata } from 'next'

const diceImageFolder = '/images/blender/dice'

export const metadata: Metadata = {
  title: '3D Modelling',
}

export default function threeD() {
  return (
    <article>
      <PageHeader
        title="3D Modelling"
        description="A collection of 3D model renders I've created using the 3D modelling software, Blender." //, with the most recent images displayed at the top of the page."
      />

      <section>
        <h3 className="text-2xl font-semibold">Dice</h3>
        <ProjectGallery
          screenshotURIs={[
            `${diceImageFolder}/action_dice.webp`,
            `${diceImageFolder}/mysterious_dice.webp`,
            `${diceImageFolder}/dynamic_dice_test.webp`,
            `${diceImageFolder}/test_v7_composite.webp`,
            `${diceImageFolder}/dice_sunset_v3.webp`,
            `${diceImageFolder}/dice_party_v3.webp`,
          ]}
          isBlenderImage={true}
        />
        <p className="text-xl">
          This model went through a couple of iterations before I settled on the final design.
          Getting the right combination of lighting and materials for the dice was also challenging
          as I wanted the dice to appear as realistic as possible. By experimented with different
          lighting, backgrounds, camera angles and materials, I was able to achieve a look that I
          was happy with. I rendered many images of the dice, but have only included a few of my
          favorites here.
        </p>
        <p className="text-xl">
          My favourite thing about this project was trying to give the dice character and
          personality, especially in the images where the dice are on the ground . By placing two
          die close together and rotating them such that the dots on the die are facing the
          direction of the camera, they appear to be looking out beyond the scene, which I thought
          was a fun touch.
        </p>
      </section>

      <section className="text-red-950">*** more images coming soon! ***</section>
    </article>
  )
}
