import { type Metadata } from 'next'

import { DiceModelViewer, PageHeader, ProjectGallery } from 'components'

const diceImageFolder = '/images/blender/dice'

export const metadata: Metadata = {
  title: '3D Modelling',
}

export default function threeD() {
  return (
    <article>
      <PageHeader
        title="3D Modelling"
        description="A collection of 3D model renders I've created using the 3D modelling software, Blender."
      />

      <section>
        <h3 className="text-3xl font-semibold">Dice</h3>

        <div className="my-8">
          <DiceModelViewer />
        </div>

        <ProjectGallery
          screenshotURIs={[
            `${diceImageFolder}/action_dice.webp`,
            `${diceImageFolder}/mysterious_dice.webp`,
            `${diceImageFolder}/test_v8_composite.webp`,
            `${diceImageFolder}/blue_and_yellow.webp`,
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
          My favourite part of this project was trying to personify the dice and give them a sense
          of character—especially in the shots where they're lying on the ground together. By
          placing two dice close together and rotating them so the dots face the camera, they appear
          to be gazing out beyond the scene, as if admiring the view.
        </p>
      </section>

      <section className="text-xl text-red-950">*** more images coming soon! ***</section>
    </article>
  )
}
