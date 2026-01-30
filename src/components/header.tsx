export function Header({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-4xl">
      <span className="text-wexford uppercase">{children}</span>
    </h1>
  )
}
