import aiComic from '../assets/social/ai-comic.png'
import aiWorkspace from '../assets/social/ai-workspace.png'
import bestSeller30Off from '../assets/social/best-seller-30off.png'
import brandPeopleRemember from '../assets/social/brand-people-remember.png'
import brandRefresh from '../assets/social/brand-refresh.png'
import brandUnderCtrl from '../assets/social/brand-under-ctrl.png'
import candyVoiceAi from '../assets/social/candy-voice-ai.png'
import candyWhatsapp from '../assets/social/candy-whatsapp.png'
import challengeAnt from '../assets/social/challenge-ant.png'
import cottonCareTips from '../assets/social/cotton-care-tips.png'
import cottonNapkin from '../assets/social/cotton-napkin.png'
import didYouKnow from '../assets/social/did-you-know.png'
import dontShoutBeFound from '../assets/social/dont-shout-be-found.png'
import fabricReviews from '../assets/social/fabric-reviews.png'
import finixySpiderman from '../assets/social/finixy-spiderman.png'
import flashSale from '../assets/social/flash-sale.png'
import metaspaceSteps from '../assets/social/metaspace-steps.png'
import onePartner from '../assets/social/one-partner.png'
import pearTablesetting15Off from '../assets/social/pear-tablesetting-15off.png'
import spaceMarvelCrow from '../assets/social/space-marvel-crow.png'
import spaceMarvelTrucks from '../assets/social/space-marvel-trucks.png'
import thisOrThat from '../assets/social/this-or-that.png'
import travelfikaCancun from '../assets/social/travelfika-cancun.png'
import travelfikaCostaRica from '../assets/social/travelfika-costa-rica.png'
import travelfikaCostaRicaArenal from '../assets/social/travelfika-costa-rica-arenal.png'
import travelfikaDubai from '../assets/social/travelfika-dubai.png'
import travelfikaHawaii from '../assets/social/travelfika-hawaii.png'
import travelfikaJapan from '../assets/social/travelfika-japan.png'
import travelfikaThailand from '../assets/social/travelfika-thailand.png'
import velocityPerformance from '../assets/social/velocity-performance.png'
import whatTheySay from '../assets/social/what-they-say.png'
import { RevealWords } from './RevealWords'
import { VerticalMarquee } from './VerticalMarquee'

const COLUMN_IMAGES: { src: string; alt: string }[][] = [
  [
    { src: cottonNapkin, alt: 'Cotton Napkin social post' },
    { src: cottonCareTips, alt: 'Cotton Care Tips social post' },
    { src: thisOrThat, alt: 'This or That placemat social post' },
    { src: bestSeller30Off, alt: 'Best Seller 30% off social post' },
    { src: whatTheySay, alt: 'What They Say testimonial social post' },
    { src: fabricReviews, alt: 'Fabric reviews social post' },
    { src: flashSale, alt: 'Flash Sale 15% off social post' },
    { src: pearTablesetting15Off, alt: 'Pear table setting 15% off social post' },
  ],
  [
    { src: spaceMarvelCrow, alt: 'The Smarter Crow Always Wins social post' },
    { src: aiWorkspace, alt: 'Turn Chats into Actions social post' },
    { src: finixySpiderman, alt: 'Finixy Spider-Man social post' },
    { src: dontShoutBeFound, alt: "Don't Shout. Be Found. social post" },
    { src: brandRefresh, alt: 'Your Brand Needs a Refresh social post' },
    { src: brandPeopleRemember, alt: 'Build a Brand People Remember social post' },
    { src: brandUnderCtrl, alt: 'Your Brand is Under Ctrl social post' },
    { src: spaceMarvelTrucks, alt: 'We keep your business moving social post' },
  ],
  [
    { src: aiComic, alt: 'AI client comic social post' },
    { src: metaspaceSteps, alt: 'Get Started with Metaspace social post' },
    { src: candyVoiceAi, alt: 'Voice AI for Every Call social post' },
    { src: challengeAnt, alt: 'Challenge ant social post' },
    { src: onePartner, alt: 'One Partner, Everything You Need social post' },
    { src: velocityPerformance, alt: 'Velocity & Performance social post' },
    { src: candyWhatsapp, alt: 'Grow Faster with WhatsApp Automation social post' },
    { src: didYouKnow, alt: 'Did You Know app switching stat social post' },
  ],
  [
    { src: travelfikaDubai, alt: 'Travelfika Dubai social post' },
    { src: travelfikaThailand, alt: 'Travelfika Thailand social post' },
    { src: travelfikaCancun, alt: 'Travelfika Cancun social post' },
    { src: travelfikaCostaRica, alt: 'Travelfika Costa Rica social post' },
    { src: travelfikaHawaii, alt: 'Travelfika Hawaii social post' },
    { src: travelfikaJapan, alt: 'Travelfika Japan social post' },
    { src: travelfikaCostaRicaArenal, alt: 'Travelfika Costa Rica Arenal social post' },
  ],
]

const COLUMNS: { direction: 'up' | 'down'; speed: number }[] = [
  { direction: 'up', speed: 26 },
  { direction: 'down', speed: 34 },
  { direction: 'up', speed: 22 },
  { direction: 'down', speed: 30 },
]

export function SocialMediaWorks() {
  return (
    <section id="social" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <RevealWords
        text="Social Media Works"
        className="block text-4xl leading-none font-semibold tracking-normal text-white md:text-[48px]"
        style={{ fontFamily: "'Zalando Sans', sans-serif" }}
      />

      <div className="mt-12 grid h-[600px] grid-cols-2 gap-4 overflow-hidden rounded-2xl [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:grid-cols-4">
        {COLUMNS.map((column, i) => (
          <VerticalMarquee key={i} direction={column.direction} speed={column.speed}>
            {COLUMN_IMAGES[i].map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="w-full rounded-xl"
              />
            ))}
          </VerticalMarquee>
        ))}
      </div>
    </section>
  )
}
