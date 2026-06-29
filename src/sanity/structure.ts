import type { StructureResolver } from "sanity/structure";

// Each section is a singleton: one fixed document, edited in place.
const SECTIONS: { id: string; title: string }[] = [
  { id: "nav", title: "Navigation" },
  { id: "hero", title: "Hero" },
  { id: "govt", title: "Government strip" },
  { id: "about", title: "About / Mission" },
  { id: "cofounder", title: "Co-Founder" },
  { id: "founder", title: "Founder story" },
  { id: "rtr", title: "RTR Network" },
  { id: "maharashtra", title: "Maharashtra strategy" },
  { id: "economy", title: "Highway economy" },
  { id: "emergency", title: "Emergency response" },
  { id: "roadsafety", title: "Road safety / MoRTH" },
  { id: "vendor", title: "Vendor network" },
  { id: "missionBand", title: "Mission band" },
  { id: "contact", title: "Contact / Get involved" },
  { id: "form", title: "Registration form" },
  { id: "footer", title: "Footer" },
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Tiger Roadveer")
    .items([
      // Page sections (singletons)
      ...SECTIONS.map(({ id, title }) =>
        S.listItem()
          .id(id)
          .title(title)
          .child(S.document().schemaType(id).documentId(id).title(title))
      ),
      S.divider(),
      // Blog (collection — full CRUD)
      S.listItem()
        .id("posts")
        .title("Blog posts")
        .child(
          S.documentTypeList("post")
            .title("Blog posts")
            .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
        ),
    ]);
