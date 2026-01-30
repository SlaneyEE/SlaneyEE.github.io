interface Section {
  children: React.ReactNode
  id: string
}

export function Section({
  children,
  id,
}: { children: React.ReactNode; id: string }) {
  return (
    <section className="w-full text-center text-gray-400 mb-50 px-5 scroll-mt-30 uppercase" id={id}>
      {children}
    </section>
  )
}
