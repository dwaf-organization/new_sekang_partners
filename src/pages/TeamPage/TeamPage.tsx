import { LeadersSection } from '@/components/organisms/leaderssection/LeadersSection'
import { TeamHeroSection } from '@/components/organisms/teamherosection/TeamHeroSection'
import { TeamMembersSection } from '@/components/organisms/teammemberssection/TeamMembersSection'
import { leaders, teamHero, teamMembers } from '@/data/team.data'

export function TeamPage() {
  return (
    <main className="min-h-svh bg-white font-primary text-text-inverse">
      <TeamHeroSection hero={teamHero} />
      <LeadersSection leaders={leaders} />
      <TeamMembersSection members={teamMembers} />
    </main>
  )
}
