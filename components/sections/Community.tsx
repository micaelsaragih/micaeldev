import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";
import {
  organizations,
  communities,
  activityHighlights,
} from "@/data/community";

export function Community() {
  return (
    <SectionWrapper id="community">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight">
          Komunitas &amp; Aktivitas
        </h2>
        <p className="mt-3 max-w-xl text-text-muted">
          Di luar coding, saya aktif di berbagai organisasi dan komunitas yang
          membantu saya berkembang secara personal dan sosial.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {/* Organizations & Communities */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Organisasi &amp; Komunitas
            </h3>
            <div className="space-y-3">
              {[...organizations, ...communities].map((org) => (
                <Card key={org.name} className="p-4" hover={false}>
                  <h4 className="font-medium">{org.name}</h4>
                  <p className="mt-1 text-sm text-text-muted">
                    {org.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Activity Highlights */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Pengalaman &amp; Aktivitas
            </h3>
            <ul className="space-y-3">
              {activityHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-text-muted"
                >
                  <span
                    className="mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full bg-primary/40"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
