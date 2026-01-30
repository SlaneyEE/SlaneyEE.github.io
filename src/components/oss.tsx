import { Header } from './header'
import { ListItem } from './list-iem'
import { Section } from './section'

export function Oss() {
  return (
    <Section id="oss">
      <Header>Open Source</Header>
      <p className="max-w-2xl mx-auto text-lg">
        We are true believers in open source and we plan to contribute to the
        ecosystem. Below is a list of our open source projects released so far:
      </p>
      <div className="mt-8 w-full max-w-3xl mx-auto">
        <ListItem
          title="TOUCH-COOP"
          subtitle="A TypeScript library that enables couch co-op gaming on the web, using mobile devices as controllers."
          buttonText="Learn More"
          url="https://github.com/SlaneyEE/touch-coop"
        />
      </div>
    </Section>
  )
}
