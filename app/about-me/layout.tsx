export const metadata = {
  title: 'About Me - Belle Reve Blog',
  description: 'More about me and why I created this blog',
}

export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>{children}</div>
  )
}
