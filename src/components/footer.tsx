export function Footer() {
  const today = new Date().getFullYear()
  const end = today > 2026 ? `-${today}` : ''
  return (
    <div className="w-full text-center text-gray-600 p-10 uppercase">
      <p>Copyright &copy; Slaney Electronic Entertaiment 2026{end}</p>
      <p>Made with 💜 in Enniscorthy, County Wexford, Ireland</p>
    </div>
  )
}
