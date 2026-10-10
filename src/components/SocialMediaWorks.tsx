import aiComic from '../assets/social/ai-comic.webp'
import aiWorkspace from '../assets/social/ai-workspace.webp'
import bestSeller30Off from '../assets/social/best-seller-30off.webp'
import brandPeopleRemember from '../assets/social/brand-people-remember.webp'
import brandRefresh from '../assets/social/brand-refresh.webp'
import brandUnderCtrl from '../assets/social/brand-under-ctrl.webp'
import candyVoiceAi from '../assets/social/candy-voice-ai.webp'
import candyWhatsapp from '../assets/social/candy-whatsapp.webp'
import challengeAnt from '../assets/social/challenge-ant.webp'
import cottonCareTips from '../assets/social/cotton-care-tips.webp'
import cottonNapkin from '../assets/social/cotton-napkin.webp'
import didYouKnow from '../assets/social/did-you-know.webp'
import dontShoutBeFound from '../assets/social/dont-shout-be-found.webp'
import fabricReviews from '../assets/social/fabric-reviews.webp'
import finixySpiderman from '../assets/social/finixy-spiderman.webp'
import flashSale from '../assets/social/flash-sale.webp'
import metaspaceSteps from '../assets/social/metaspace-steps.webp'
import onePartner from '../assets/social/one-partner.webp'
import pearTablesetting15Off from '../assets/social/pear-tablesetting-15off.webp'
import spaceMarvelCrow from '../assets/social/space-marvel-crow.webp'
import spaceMarvelTrucks from '../assets/social/space-marvel-trucks.webp'
import thisOrThat from '../assets/social/this-or-that.webp'
import travelfikaCancun from '../assets/social/travelfika-cancun.webp'
import travelfikaCostaRica from '../assets/social/travelfika-costa-rica.webp'
import travelfikaCostaRicaArenal from '../assets/social/travelfika-costa-rica-arenal.webp'
import travelfikaDubai from '../assets/social/travelfika-dubai.webp'
import travelfikaHawaii from '../assets/social/travelfika-hawaii.webp'
import travelfikaJapan from '../assets/social/travelfika-japan.webp'
import travelfikaThailand from '../assets/social/travelfika-thailand.webp'
import velocityPerformance from '../assets/social/velocity-performance.webp'
import whatTheySay from '../assets/social/what-they-say.webp'
import DriftWall, { type DriftWallItem } from './DriftWall'
import { RevealWords } from './RevealWords'

const ITEMS: DriftWallItem[] = [
  { image: cottonNapkin, title: 'Cotton Napkin social post' },
  { image: spaceMarvelCrow, title: 'The Smarter Crow Always Wins social post' },
  { image: aiComic, title: 'AI client comic social post' },
  { image: travelfikaDubai, title: 'Travelfika Dubai social post' },
  { image: cottonCareTips, title: 'Cotton Care Tips social post' },
  { image: aiWorkspace, title: 'Turn Chats into Actions social post' },
  { image: metaspaceSteps, title: 'Get Started with Metaspace social post' },
  { image: travelfikaThailand, title: 'Travelfika Thailand social post' },
  { image: thisOrThat, title: 'This or That placemat social post' },
  { image: finixySpiderman, title: 'Finixy Spider-Man social post' },
  { image: candyVoiceAi, title: 'Voice AI for Every Call social post' },
  { image: travelfikaCancun, title: 'Travelfika Cancun social post' },
  { image: bestSeller30Off, title: 'Best Seller 30% off social post' },
  { image: dontShoutBeFound, title: "Don't Shout. Be Found. social post" },
  { image: challengeAnt, title: 'Challenge ant social post' },
  { image: whatTheySay, title: 'What They Say testimonial social post' },
  { image: brandRefresh, title: 'Your Brand Needs a Refresh social post' },
  { image: onePartner, title: 'One Partner, Everything You Need social post' },
  { image: fabricReviews, title: 'Fabric reviews social post' },
  { image: brandPeopleRemember, title: 'Build a Brand People Remember social post' },
  { image: velocityPerformance, title: 'Velocity & Performance social post' },
  { image: travelfikaCostaRica, title: 'Travelfika Costa Rica social post' },
  { image: flashSale, title: 'Flash Sale 15% off social post' },
  { image: brandUnderCtrl, title: 'Your Brand is Under Ctrl social post' },
  { image: candyWhatsapp, title: 'Grow Faster with WhatsApp Automation social post' },
  { image: travelfikaHawaii, title: 'Travelfika Hawaii social post' },
  { image: pearTablesetting15Off, title: 'Pear table setting 15% off social post' },
  { image: spaceMarvelTrucks, title: 'We keep your business moving social post' },
  { image: didYouKnow, title: 'Did You Know app switching stat social post' },
  { image: travelfikaJapan, title: 'Travelfika Japan social post' },
  { image: travelfikaCostaRicaArenal, title: 'Travelfika Costa Rica Arenal social post' },
]

export function SocialMediaWorks() {
  return (
    <section id="social" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <RevealWords
        text="Social Media Works"
        className="block text-4xl leading-none font-semibold tracking-normal text-white md:text-[48px]"
        style={{ fontFamily: "'Zalando Sans', sans-serif" }}
      />

      <div className="relative left-1/2 mt-12 h-[600px] w-screen -ml-[50vw] overflow-hidden rounded-2xl">
        <DriftWall
          items={ITEMS}
          columns={5}
          tileWidth={240}
          tileHeight={279}
          gap={10}
          tilt={16}
          turn={-6}
          perspective={1200}
          depth={120}
          speed={42}
          direction="up"
          variance={0.45}
          parallax={0.6}
          lift={64}
          fade={0.6}
          dim={0.55}
          overlayColor="#0a0a0d"
          radius={14}
          roll={0}
          pauseOnHover={false}
          style={{ perspectiveOrigin: '25% 50%' }}
        />
      </div>
    </section>
  )
}
