import { TeamSection } from '@/components/organisms/teamsection/TeamSection'
import { teamMembers } from '@/data/home.data'

export function TeamPage() {
  return (
    <main className="min-h-svh bg-white font-primary text-text-inverse">
      <TeamSection members={teamMembers} />
    </main>
  )
}
