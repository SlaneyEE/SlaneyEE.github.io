import { Header } from './header'
import { Section } from './section'

export function About() {
  return (
    <Section id="about">
      <Header>About</Header>
      <p className="max-w-2xl mx-auto text-lg">
        We are a tiny game development studio based in Ireland with a focus on
        developing free-to-play games using open source web technologies. We
        hope to someday bring our games to gaming platforms such as Steam, Xbox,
        PlayStation, and Nintendo.
      </p>
    </Section>
  )
}
