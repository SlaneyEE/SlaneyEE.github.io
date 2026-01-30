import ProductCard from './card'
import { Header } from './header'
import { Section } from './section'

export function Games() {
  return (
    <Section id="games">
      <Header>Games</Header>
      <p className="max-w-2xl mx-auto text-lg">
        We focus on free-to-play games that appeal to a casual audience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-8">
        <ProductCard
          title="NIHONGO SENSEI"
          image="/img/nihongo-sensei.png"
          subtitle="A game powered by web technologies and IA that helps you learn Japanese!"
          buttonText="Coming Soon"
          href="#"
        />
        <ProductCard
          title="GRID MAYHEM"
          image="/img/grid-mayhem.png"
          subtitle="A frantic puzzle game focused on multiplayer couch co-op and PvP."
          buttonText="Coming Soon"
          href="#"
        />
      </div>
    </Section>
  )
}
