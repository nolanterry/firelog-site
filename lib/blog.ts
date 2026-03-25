export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: string;
  content: string;
}

export function getAllTags(): { tag: string; count: number }[] {
  const tagMap = new Map<string, number>();
  BLOG_POSTS.forEach((p) => p.tags.forEach((t) => tagMap.set(t, (tagMap.get(t) || 0) + 1)));
  return Array.from(tagMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.tags.includes(tag));
}

export const TAG_LABELS: Record<string, string> = {
  "nfpa": "NFPA",
  "compliance": "Compliance",
  "inspection": "Inspection",
  "sprinkler": "Sprinkler",
  "checklist": "Checklist",
  "extinguisher": "Extinguisher",
  "alarm": "Alarm",
  "documentation": "Documentation",
  "templates": "Templates",
  "business": "Business",
  "growth": "Growth",
  "marketing": "Marketing",
  "pricing": "Pricing",
  "software": "Software",
  "roi": "ROI",
  "insurance": "Insurance",
  "startup": "Startup",
  "audit": "Audit",
  "comparison": "Comparison",
  "industry-trends": "Industry Trends",
  "contracts": "Contracts",
};

export function getRelatedPosts(currentSlug: string, count = 3): BlogPost[] {
  const current = BLOG_POSTS.find((p) => p.slug === currentSlug);
  if (!current) return BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, count);
  const scored = BLOG_POSTS
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({ ...p, score: p.tags.filter((t) => current.tags.includes(t)).length }))
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
  return scored.slice(0, count);
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "best-fire-inspection-software-2026",
    tags: ["comparison", "software", "industry-trends"],
    author: "nolan-terry",
    title: "Best Fire Inspection Software in 2026 (Compared)",
    description: "We compared the top fire inspection tools for small to mid-size fire protection companies — pricing, features, and what real inspectors say.",
    date: "2026-03-03",
    content: `
# Best Fire Inspection Software in 2026

If your fire inspection reports are still on paper, you're one lost clipboard away from a compliance nightmare. Here's what's available in 2026 for fire protection contractors.

## 1. FireLog — Best for Small Shops ($79/mo)

FireLog is built for 1-15 tech operations that need NFPA-compliant inspection software without enterprise pricing.

**Key features:**
- Pre-built NFPA templates (10, 25, 72, 80)
- Mobile-first — works on any phone
- Offline mode (works in basements and mechanical rooms)
- Branded PDF reports with your logo
- Deficiency tracking with priority and due dates
- E-signatures on-site
- Unlimited users

**Best for:** Small to mid-size fire protection companies who need digital inspections at a reasonable price.

## 2. Inspect Point — The Enterprise Standard ($200+/user/mo)

Inspect Point is the most widely used fire inspection software with 15,000+ users. It's comprehensive but expensive.

**Key features:**
- Deep NFPA code integration
- Barcode scanning for equipment
- Work order management
- Proposal generation
- QuickBooks and ServiceTitan integrations

**The catch:** Per-user pricing starts at $200+/month. A 5-person team is $1,000+/month ($12,000/year). The platform is powerful but complex — expect weeks of onboarding.

## 3. Uptick — Australian-First ($100+/user/mo)

Uptick is a strong platform that started in Australia and expanded to the US market.

**Key features:**
- Asset management with lifecycle tracking
- Compliance reporting
- Mobile app with offline sync
- Technician scheduling

**The catch:** Per-user pricing ($100+/user/mo). Australian-first design means some US NFPA workflows feel adapted rather than native. Best for companies with 20+ techs.

## 4. ZenFire — Mid-Market (Custom Pricing)

ZenFire targets the mid-market with custom pricing and implementation.

**Key features:**
- Inspection management
- Proposals and invoicing
- Customer portal
- Scheduling

**The catch:** No public pricing — you have to request a demo. Implementation timeline is weeks, not minutes. Best for established companies with 10-50 techs.

## 5. BuildOps — Field Service Platform ($Varies)

BuildOps is a general commercial contractor platform that handles fire protection among other trades.

**Best for:** Multi-trade commercial contractors who do fire protection alongside HVAC, plumbing, and electrical. Not fire-specific.

## The Bottom Line

If you're a small fire protection company (1-15 techs), FireLog offers the best value: NFPA-compliant inspections, branded reports, deficiency tracking, and unlimited users for $79/month. If you're a large enterprise (50+ techs) with complex scheduling and asset management needs, Inspect Point is the incumbent.

The days of paying $200/user/month for what is essentially a digital checklist are ending.

[Try FireLog free for 14 days →](https://app.firelogai.com)
`,
  },
  {
    slug: "nfpa-10-fire-extinguisher-inspection-checklist",
    tags: ["nfpa", "checklist", "extinguisher"],
    author: "nolan-terry",
    title: "NFPA 10 Fire Extinguisher Inspection Checklist (2026 Complete Guide)",
    description: "The complete NFPA 10 fire extinguisher inspection checklist — what to check, how often, and documentation requirements.",
    date: "2026-03-03",
    content: `
# NFPA 10 Fire Extinguisher Inspection Checklist

Fire extinguisher inspections are the bread and butter of fire protection companies. NFPA 10 governs the maintenance, testing, and inspection of portable fire extinguishers. Here's the complete checklist.

## Inspection Frequency

- **Monthly:** Visual inspection (can be done by building occupant)
- **Annual:** Thorough inspection by a qualified person (your techs)
- **6-year:** Internal maintenance (applicable types)
- **12-year:** Hydrostatic testing

Most fire protection companies perform annual inspections as a service. Monthly inspections are typically the building owner's responsibility.

## Annual Inspection Checklist

### General Checks
- ✅ Extinguisher is in its designated location
- ✅ Accessible (no obstructions within 3 feet)
- ✅ Visible or signage indicates location
- ✅ Mounted at proper height (max 5 ft for units >40 lbs, max 3.5 ft handle height for units ≤40 lbs)
- ✅ No physical damage, corrosion, or leakage
- ✅ Nameplate and operating instructions legible

### Pressure & Charge
- ✅ Pressure gauge in operable range (green zone)
- ✅ For non-gauged units: weight check within tolerance
- ✅ Proper extinguishing agent (verify type matches label)

### Safety Mechanisms
- ✅ Pull pin in place
- ✅ Tamper seal intact and unbroken
- ✅ Safety pin not bent or damaged
- ✅ Locking mechanism functional

### Hose & Nozzle
- ✅ Hose in good condition (no cracks, cuts, or blockage)
- ✅ Nozzle clear and undamaged
- ✅ Hose connections tight

### Mounting & Cabinet
- ✅ Wall bracket secure
- ✅ Cabinet door opens freely (if applicable)
- ✅ Cabinet glass intact (if break-glass type)
- ✅ No rust or deterioration on mounting hardware

### Documentation
- ✅ Current annual inspection tag attached
- ✅ Previous inspection tags/records available
- ✅ Certification label present
- ✅ Last maintenance date recorded
- ✅ Last hydrostatic test date recorded (if applicable)

## Common Deficiencies

1. **Blocked access** — furniture, boxes, or equipment in front of extinguisher. Most common violation.
2. **Missing pull pin or tamper seal** — indicates the extinguisher may have been discharged or tampered with. Must be serviced.
3. **Pressure gauge out of range** — needs recharge or replacement.
4. **Expired inspection tag** — previous annual inspection was missed.
5. **Wrong mounting height** — common in buildings that rearrange furniture.
6. **Damaged hose** — cracking from UV exposure or age.

## Documentation Requirements

NFPA 10 Section 7.1.2 requires that inspection records include:
- Date of inspection
- Name/initials of inspector
- Findings and corrective actions

Paper records work but are a liability. Digital inspection reports with photos and timestamps are increasingly expected by AHJs (Authorities Having Jurisdiction).

## Automating NFPA 10 Inspections

FireLog includes a pre-built NFPA 10 checklist with all items above. Tap pass/fail per item, add notes on deficiencies, snap a photo, and generate a branded PDF report. Takes about 2 minutes per extinguisher vs 5-10 minutes with paper.

[Start digital fire extinguisher inspections →](https://app.firelogai.com)
`,
  },
  {
    slug: "fire-inspection-report-template",
    tags: ["documentation", "templates", "inspection"],
    author: "nolan-terry",
    title: "Fire Inspection Report Template (Free + Professional)",
    description: "What every fire inspection report needs to include — NFPA requirements, formatting, and how to generate professional reports.",
    date: "2026-03-03",
    content: `
# Fire Inspection Report Template

A fire inspection report isn't just paperwork — it's a legal document. When the AHJ requests records, or when a building owner needs proof of compliance for insurance, your report is the evidence. Here's what it needs to include.

## Required Elements

### 1. Company Information
- Company name and logo
- License number / certification
- Contact information (phone, email, address)
- Inspector name and credentials

### 2. Building Information
- Building name
- Street address
- Building type (commercial, residential, institutional, industrial)
- Contact person (building owner/manager)
- Contact phone and email

### 3. Inspection Details
- Date of inspection
- Type of inspection (fire extinguisher, sprinkler, alarm, door)
- Applicable NFPA code (NFPA 10, 25, 72, 80)
- Previous inspection date (if known)
- Next recommended inspection date

### 4. Checklist Results
Every item checked should show:
- Item description (what was inspected)
- Result (pass / fail / N/A / not inspected)
- Notes on any deficiency found
- Priority level for failures (low, medium, high, critical)
- Photo documentation (especially for deficiencies)

### 5. Overall Result
- **Pass** — all items meet NFPA requirements
- **Pass with Deficiencies** — minor issues noted, corrections recommended
- **Fail** — critical deficiencies found, immediate action required

### 6. Deficiency Summary
A separate section listing:
- Each deficiency found
- Priority level
- Recommended corrective action
- Deadline for correction (if applicable)
- Assigned to (if known)

### 7. Signature Block
- Inspector signature and printed name
- Date signed
- Building owner/manager signature (acknowledgment of findings)
- Date signed

## Common Mistakes

### 1. Missing Photos
AHJs increasingly expect photo documentation, especially for deficiencies. "The hose was cracked" carries more weight with a photo attached.

### 2. Vague Deficiency Descriptions
"Extinguisher needs service" doesn't help anyone. Be specific: "Unit #3 (2nd floor hallway) — pressure gauge reads below operable range, recharge required."

### 3. No Next Inspection Date
Every report should clearly state when the next inspection is due. This protects both you (return business) and the building owner (compliance continuity).

### 4. Illegible Handwriting
The #1 problem with paper reports. Digital reports eliminate this entirely.

### 5. Lost Records
Paper gets lost. Files get deleted. Digital inspection software with cloud backup means records are always available for audits.

## Paper vs Digital Reports

| | Paper | Digital (FireLog) |
|---|---|---|
| Time per report | 15-30 min | 3-5 min |
| Legibility | Depends on handwriting | Always perfect |
| Photos | Separate camera, attach later | Inline, automatic |
| Filing | Filing cabinets, binders | Cloud, searchable |
| Retrieval for audits | Hours of searching | Instant |
| Cost per report | $2-5 (printing, copies) | $0 |
| Professional appearance | Varies widely | Branded, consistent |

## Skip the Template — Automate It

FireLog generates professional branded inspection reports automatically. Complete the NFPA checklist on your phone, and FireLog creates a PDF with your company logo, all checklist results, deficiency photos, signatures, and compliance documentation. Email it to the building owner in one tap.

[Generate professional fire inspection reports →](https://app.firelogai.com)
`,
  },
  {
    slug: "fire-protection-company-marketing",
    tags: ["business", "marketing", "growth"],
    author: "nolan-terry",
    title: "How to Get More Fire Inspection Customers (Without Cold Calling)",
    description: "Marketing strategies for fire protection companies — Google Business, referrals, building manager relationships, and digital presence.",
    date: "2026-03-03",
    content: `
# How to Get More Fire Inspection Customers

Fire protection companies have a unique advantage: inspections are legally required. Buildings MUST get inspected. The question isn't whether they'll hire someone — it's whether they'll hire you.

Here's how to make sure they do.

## 1. Google Business Profile (Free — #1 Priority)

When a building manager searches "fire inspection company near me," Google Maps results dominate. If you're not there, you don't exist.

**Setup:**
- Claim your Google Business Profile
- Category: "Fire Protection Service"
- Add 20+ photos of your team doing inspections
- List all services (fire extinguisher, sprinkler, alarm, door inspections)
- Set your service area

**Get reviews:**
- Ask every building manager for a Google review after an inspection
- Send a follow-up text with a direct review link
- Target: 30+ reviews with 4.8+ average

This single action will generate more leads than anything else on this list.

## 2. The Contract Renewal Machine

Fire inspections are recurring by law. Your best leads are your existing customers.

**The system:**
- Track every building's next inspection date
- Send a reminder 30 days before it's due
- Follow up at 14 days and 7 days
- Offer multi-year contracts with a small discount (5-10%)

**Why it works:** Building managers are busy. The company that reminds them gets the contract. If you wait for them to call, they might call someone else.

## 3. Property Management Companies

One property management company manages 10-100+ buildings. Win the relationship = win all their inspections.

**How to approach:**
- Research local property management firms
- Offer a free inspection of one building as a demo
- Emphasize your branded reports (makes them look professional to building owners)
- Offer portfolio pricing (discount per building for volume)

**One property management firm can be worth $10,000-50,000/year in recurring revenue.**

## 4. Insurance Agent Partnerships

Insurance companies require proof of fire safety compliance. Insurance agents deal with building owners daily.

**The play:**
- Connect with commercial insurance agents in your area
- When their clients need fire inspection documentation, they refer you
- Your professional reports make the agent's job easier
- Win-win: they get happy clients, you get leads

## 5. Building Your Digital Presence

### Website Essentials
- Mobile-friendly (building managers check on phones)
- List all inspection types (NFPA 10, 25, 72, 80)
- Show your certifications and licenses prominently
- Include a simple contact form or "request a quote" button
- Add customer testimonials

### Content That Ranks
Write blog posts targeting what building managers search:
- "How often do fire extinguishers need to be inspected?"
- "NFPA 25 sprinkler inspection requirements"
- "Fire door inspection checklist"
- "Fire alarm inspection cost"

These pages attract building managers who need inspections — they find your site, read your content, and call you.

## 6. Professional Reports as a Sales Tool

Here's the secret most fire protection companies miss: **your inspection report IS your marketing material.**

Every report you send to a building owner has your company name, logo, and contact info. If the building changes management, the new manager sees your branded reports in the file and calls you for the next inspection.

Paper reports on a generic form? They get filed and forgotten. Professional branded PDFs? They build your brand every time someone opens them.

FireLog generates branded PDF reports with your company logo and info. Every inspection report becomes a marketing asset.

## 7. Vehicle Branding

Your trucks are on-site at commercial buildings all day. Building managers, tenants, and neighboring businesses see them.

- Company name and phone number (BIG)
- "Fire Inspection & Protection Services"
- Certifications/licenses
- Clean, professional design

Cost: $800-2,000 for a partial wrap. One new customer pays for it.

## The Math

| Channel | Cost | Expected Customers/Year |
|---------|------|------------------------|
| Google Business Profile | Free | 10-30 |
| Contract renewals | Free (time) | Retain 80%+ |
| Property management outreach | Free (time) | 2-5 firms (20-50 buildings) |
| Insurance agent referrals | Free | 5-15 |
| Vehicle branding | $1,500 one-time | 3-8 |
| Content marketing | Free (time) | 5-15 |

At an average of $500-2,000 per annual inspection contract, this pipeline is worth $50,000-200,000 in recurring annual revenue.

[Make your inspection reports sell for you →](https://app.firelogai.com)
`,
  },
  {
    slug: "nfpa-25-sprinkler-inspection-guide",
    tags: ["nfpa", "sprinkler", "inspection"],
    author: "nolan-terry",
    title: "NFPA 25 Sprinkler Inspection Guide: What to Check & How Often",
    description: "Complete guide to NFPA 25 sprinkler system inspections — frequency, checklist, common deficiencies, and documentation requirements.",
    date: "2026-03-03",
    content: `
# NFPA 25 Sprinkler System Inspection Guide

NFPA 25 — Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems — governs sprinkler system inspections. It's the most complex of the common NFPA inspection codes. Here's what you need to know.

## Inspection Frequency

NFPA 25 requires different inspection intervals depending on the component:

### Weekly/Monthly
- Gauges (water supply, system)
- Valve positions (OS&Y, PIV)
- Alarm devices (visual check)

### Quarterly
- Water flow alarm test
- Supervisory signal test
- Valve tamper switch test

### Annual
- Full sprinkler system inspection (heads, piping, hangers, FDC, risers)
- Main drain test
- Spare sprinkler inventory

### 5-Year
- Internal pipe inspection (obstruction investigation)
- FDC internal inspection
- Gauges calibrated or replaced

### 10-Year
- Dry pipe valve full trip test
- Standard response sprinklers in harsh environments tested

## Annual Inspection Checklist

### Sprinkler Heads
- ✅ No damage, corrosion, or loading (dust/paint/grease)
- ✅ Correct orientation (upright, pendent, sidewall)
- ✅ Adequate clearance from storage (18" minimum below sprinkler deflector)
- ✅ Correct temperature rating for environment
- ✅ No missing or leaking heads
- ✅ Escutcheons/cover plates in place
- ✅ No obstructions to spray pattern

### Piping & Supports
- ✅ No mechanical damage
- ✅ No leaks at fittings or joints
- ✅ Proper alignment (no sagging)
- ✅ Hangers and supports intact (none missing or damaged)
- ✅ No unauthorized modifications
- ✅ Adequate clearance from heat sources

### Valves
- ✅ OS&Y valve fully open and supervised (locked/sealed)
- ✅ PIV fully open and locked
- ✅ Tamper switches connected and functional
- ✅ Valve accessible (no obstructions)
- ✅ Valve identification signs in place

### Gauges
- ✅ System gauge readable and in normal range
- ✅ Supply gauge readable and in normal range
- ✅ Gauges not older than 5 years (or calibrated)

### FDC (Fire Department Connection)
- ✅ Accessible and visible
- ✅ Caps in place
- ✅ No damage or corrosion
- ✅ Threads in good condition
- ✅ Check valve (clapper) functional
- ✅ Signage visible and accurate

### Alarm Devices
- ✅ Water flow alarm tested and operational
- ✅ Supervisory signals tested
- ✅ Fire alarm panel receiving signals (no trouble conditions)
- ✅ Water motor gong functional (if present)

### Risers
- ✅ Riser room accessible
- ✅ Spare sprinkler cabinet stocked (minimum 6 heads per type)
- ✅ Sprinkler wrench available
- ✅ System information sign posted

## Common Deficiencies

1. **Painted sprinkler heads** — #1 violation. Painted heads can fail to activate. Must be replaced, not cleaned.
2. **Inadequate clearance** — storage piled within 18" of sprinkler deflectors. Common in warehouses and storage rooms.
3. **Missing valve supervision** — OS&Y valves that are not locked open or monitored by tamper switches.
4. **Damaged FDC** — missing caps, damaged threads. Fire department can't connect during an emergency.
5. **Expired gauges** — gauges older than 5 years that haven't been calibrated or replaced.
6. **Missing spare sprinklers** — riser room doesn't have the required minimum of 6 spare heads per type.

## Documentation

NFPA 25 Section 4.3 requires records of all inspections, tests, and maintenance. Records must include:
- Date
- Type of inspection/test
- Name of inspector/contractor
- Results
- Corrective actions taken

Records must be retained by the building owner until the next inspection cycle and made available to the AHJ upon request.

## Digital vs Paper for NFPA 25

Sprinkler inspections have 28+ checklist items across multiple system components. Handwriting all of this is slow and error-prone. Digital inspection software with pre-built NFPA 25 templates saves 15-20 minutes per inspection.

FireLog includes a complete NFPA 25 checklist. Step through each section on your phone, tap pass/fail, document deficiencies with photos, and generate a branded PDF report. Done before you pack up your tools.

[Start digital sprinkler inspections →](https://app.firelogai.com)
`,
  },
  {
    slug: "nfpa-25-2026-edition-changes",
    tags: ["nfpa", "sprinkler", "compliance"],
    author: "nolan-terry",
    title: "NFPA 25 2026 Edition: Key Changes Fire Protection Contractors Need to Know",
    description: "Breaking down the most important updates in the NFPA 25 2026 edition — new inspection frequencies, documentation requirements, and what changes for your business.",
    date: "2026-03-04",
    content: `
# NFPA 25 2026 Edition: Key Changes You Need to Know

The 2026 edition of NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) brings several updates that fire protection contractors need to understand now — before your next AHJ inspection catches you off guard.

## Why This Matters

NFPA 25 is the standard that governs how sprinkler systems, standpipes, fire pumps, and water storage tanks are inspected and maintained after installation. If NFPA 13 tells you how to build it, NFPA 25 tells you how to keep it working.

The 2026 edition refines requirements across multiple areas. Here's what matters most for contractors in the field.

## Key Changes in the 2026 Edition

### Enhanced Documentation Requirements

The 2026 edition strengthens Section 4.3 documentation requirements. Inspection records now require more granular detail:

- **Component-level identification** — each device inspected must be individually identified, not just grouped by system
- **Deficiency severity classification** — findings must be categorized by severity (critical, non-critical, observation)
- **Timeline for corrective action** — documented expected completion dates for all deficiencies, not just critical ones
- **Digital records explicitly recognized** — the 2026 edition formally acknowledges digital inspection platforms as compliant record-keeping methods

This is a big deal. If you're still using paper forms, you're not just slow — you're increasingly out of step with what AHJs expect.

### Obstruction Investigation Updates

Chapter 14 (Internal Conditions of Piping) has been refined:

- **Trigger thresholds clarified** — clearer criteria for when an obstruction investigation is required vs. recommended
- **MIC (Microbiologically Influenced Corrosion) testing** — expanded guidance on when biological testing is required
- **Documentation of internal inspections** — photo documentation of pipe internals now recommended as best practice

### Fire Pump Testing Refinements

- **Annual flow test procedures** updated with clearer acceptance criteria
- **Diesel engine fire pumps** — additional maintenance items for fuel system integrity
- **Electric fire pump controllers** — updated test sequences for transfer switches

### Antifreeze System Changes

Antifreeze systems continue to be tightened:

- **Concentration testing frequency** increased for certain occupancy types
- **Pre-mixed solution requirements** reinforced — field mixing restrictions remain strict
- **Maximum system size** guidance updated

## What This Means for Your Business

### 1. Upgrade Your Documentation

If you're still handwriting inspection reports, the 2026 edition makes it even harder to stay compliant with paper. AHJs are increasingly expecting:

- Individual device identification
- Severity-classified deficiency lists
- Photo documentation
- Timestamped records

Digital inspection software handles all of this automatically.

### 2. Train Your Techs

The new severity classification system means your inspectors need to understand the difference between critical and non-critical findings — and document them correctly.

### 3. Update Your Checklists

If you're using checklist templates from the 2020 or 2023 edition, review them against the 2026 changes. Missing new requirements means missed deficiencies, which means liability.

## How FireLog Handles 2026 Compliance

FireLog's NFPA 25 inspection templates are updated for the 2026 edition:

- **Individual device tracking** — each sprinkler head, valve, and component gets its own record
- **Built-in severity classification** — tap critical, non-critical, or observation for each finding
- **Photo documentation** — snap photos inline, attached to the specific deficiency
- **Automatic PDF reports** — branded, timestamped, AHJ-ready
- **Corrective action tracking** — set due dates, assign responsibility, track completion

Stop worrying about whether your paperwork meets the new standard. [Start your free trial →](https://app.firelogai.com)

## Bottom Line

The 2026 edition of NFPA 25 continues the trend toward more detailed, more accountable inspection documentation. For contractors still on paper, the gap between what you're doing and what's expected is growing every cycle.

The good news: if you're already using digital inspection software, most of these changes are handled automatically. If you're not, now is the time to switch.

[Try FireLog free for 14 days →](https://app.firelogai.com)
`,
  },
  {
    slug: "nfpa-72-fire-alarm-inspection-checklist",
    tags: ["nfpa", "alarm", "checklist"],
    author: "nolan-terry",
    title: "NFPA 72 Fire Alarm Inspection Checklist: Complete 2026 Guide",
    description: "The complete NFPA 72 fire alarm system inspection checklist — initiating devices, notification appliances, control panels, and documentation requirements.",
    date: "2026-03-08",
    content: `
# NFPA 72 Fire Alarm Inspection Checklist

NFPA 72 — the National Fire Alarm and Signaling Code — governs fire alarm system inspection, testing, and maintenance. For fire protection contractors, alarm inspections are a high-margin, recurring service line that most building owners cannot handle in-house. Here is the complete checklist.

## Inspection Frequency Under NFPA 72

NFPA 72 Chapter 14 defines inspection, testing, and maintenance frequencies:

### Visual Inspections
- **Weekly:** Fire alarm control panel (normal condition indicators, trouble signals)
- **Monthly:** Interface equipment, batteries (visual check only)
- **Semi-annual:** Initiating devices (smoke detectors, heat detectors, manual pull stations), notification appliances (horns, strobes, speakers)
- **Annual:** All system components — complete visual and functional inspection

### Functional Testing
- **Annual:** Every initiating device, every notification appliance, every system function
- **Semi-annual:** Batteries (load test), emergency voice/alarm communications, fire safety functions (elevator recall, door release, HVAC shutdown)

## Annual Inspection Checklist

### Fire Alarm Control Panel (FACP)
- ✅ Panel in normal operating condition (no trouble, supervisory, or alarm signals)
- ✅ All LEDs and indicators functioning
- ✅ Display readable (no dead pixels or dim segments)
- ✅ Physical damage check — enclosure, door seal, wiring connections
- ✅ Panel software/firmware version documented
- ✅ Zone/device map posted and current
- ✅ As-built drawings available and up to date
- ✅ Spare fuses available at panel

### Batteries
- ✅ Visual inspection — no leakage, corrosion, or swelling
- ✅ Connections tight and clean
- ✅ Manufacture date noted (replace every 5 years or per manufacturer)
- ✅ Voltage under load within acceptable range
- ✅ Standby capacity meets 24-hour requirement (60 hours for emergency voice/alarm)

### Smoke Detectors
- ✅ Physical damage inspection — no paint, dust loading, or physical obstruction
- ✅ Mounting secure, flush to ceiling or proper offset
- ✅ Sensitivity within listed range (drift compensation check)
- ✅ Functional test — activate with listed smoke detector test method
- ✅ Response verified at FACP — correct zone/address annunciation
- ✅ Reset properly after test

### Heat Detectors
- ✅ Physical damage and corrosion check
- ✅ Mounting secure
- ✅ Correct temperature rating for environment
- ✅ Functional test (where possible without destroying the device)
- ✅ Fixed-temperature detectors: replace after 15 years per manufacturer guidelines
- ✅ Response verified at FACP

### Manual Pull Stations
- ✅ Accessible — no obstructions within 12 inches
- ✅ Signage visible ("FIRE" or "FIRE ALARM")
- ✅ Physical damage check — glass intact (if applicable), handle not jammed
- ✅ Functional test — operate the station, verify alarm at panel
- ✅ Key-reset stations — verify reset function works
- ✅ Coverage check — within 200 feet of travel distance from any point on the floor (5 feet from exit)

### Notification Appliances
- ✅ Horns/speakers audible in all occupied areas
- ✅ Strobes visible — correct candela rating for room size
- ✅ Mounting height and placement per ADA/NFPA 72 requirements
- ✅ No obstructions blocking visibility of strobes
- ✅ Speaker intelligibility (voice systems) — can you understand the message?
- ✅ All appliances activate during alarm test

### Duct Smoke Detectors
- ✅ Accessible for testing
- ✅ Sampling tube free of debris
- ✅ HVAC shutdown verified upon activation
- ✅ Remote indicator lamp functional (if present)
- ✅ Response verified at FACP

### Door Holders / Closers
- ✅ Magnetic door holders release upon alarm
- ✅ Doors close and latch completely
- ✅ Door closer adjustment adequate — door closes within 10 seconds
- ✅ No obstructions preventing full closure

### Elevator Recall
- ✅ Phase I recall — lobby smoke detector activates, elevators return to primary floor
- ✅ Alternate floor recall — if primary floor device activates, elevators go to alternate floor
- ✅ Firefighter's service key operation verified
- ✅ Response time within 60 seconds

### Monitoring
- ✅ Central station monitoring connected and functional
- ✅ Alarm signal received at central station during test
- ✅ Supervisory and trouble signals received
- ✅ Account information current

## Common Deficiencies

1. **Smoke detectors past sensitivity range** — sensitivity drift is normal. Detectors outside listed range must be cleaned, recalibrated, or replaced. Most common issue in dusty environments.
2. **Missing coverage** — building modifications (new walls, partitions, dropped ceilings) create areas without detection. Verify coverage matches current floor plan.
3. **Trouble signals ignored** — ground faults, open circuits, and supervision troubles get "acknowledged" and forgotten. Each must be investigated and resolved.
4. **Dead batteries** — batteries not replaced on schedule. A fire alarm system with dead standby batteries fails when power goes out.
5. **Blocked notification appliances** — furniture, shelving, or signage blocking strobes. ADA compliance issue.
6. **Elevator recall failure** — elevator doesn't return to the lobby, or returns to the wrong floor. Life safety critical.
7. **Outdated as-built drawings** — the panel map doesn't match current device locations after renovations.

## Documentation Requirements

NFPA 72 Section 14.6.2 requires records of all inspections and tests. Records must include:

- Date of inspection/test
- Name and qualification of inspector
- NFPA 72 edition referenced
- Type and frequency of test
- Results (pass/fail for each device)
- Deficiencies found and recommended corrective actions
- Impairment notifications (who was notified when system was impaired during testing)

Records must be maintained until the next test of the same type and made available to the AHJ.

## Digital Inspection Is the Standard Now

NFPA 72 alarm systems can have hundreds of devices. A 200-unit apartment building might have 300+ smoke detectors, 50+ pull stations, 200+ notification appliances, plus duct detectors, door holders, and elevator recall. Testing every device and documenting the results on paper is a multi-day nightmare.

FireLog's NFPA 72 templates let your techs work through every device on their phone — pass/fail, photo documentation for deficiencies, automatic device count tracking, and a branded PDF report generated when they walk out the door.

[Start digital fire alarm inspections →](https://app.firelogai.com)
`,
  },
  {
    slug: "fire-inspection-pricing-guide",
    tags: ["business", "pricing", "growth"],
    author: "nolan-terry",
    title: "Fire Inspection Pricing Guide: What to Charge in 2026",
    description: "How to price fire extinguisher, sprinkler, alarm, and fire door inspections — per-device vs flat rate, competitive positioning, and profit margins.",
    date: "2026-03-08",
    content: `
# Fire Inspection Pricing Guide: What to Charge in 2026

Pricing fire inspections is one of the most common questions from new fire protection contractors — and one of the hardest to get right. Charge too little and you're working for free. Charge too much and you lose to the shop down the road. Here's how to price profitably in 2026.

## The Two Pricing Models

### Per-Device Pricing

Charge per fire extinguisher, per sprinkler head, per alarm device, per fire door.

**Pros:**
- Easy for customers to understand
- Scales naturally with building size
- Simple to quote from a device count

**Cons:**
- Can get expensive on large buildings (sticker shock)
- Customers may push back on per-device fees they perceive as small tasks
- Harder to bundle multiple system types

### Flat-Rate / Per-Building Pricing

Charge a flat fee per building or per system type inspected.

**Pros:**
- Simple for building managers to budget
- Easier to win multi-building contracts (property management companies)
- Less client pushback ("one number, one check")

**Cons:**
- Risk underpricing if you don't know device counts
- Requires good scoping / pre-inspection walkthrough
- Must build in a buffer for unknown conditions

**Most successful fire protection companies use a hybrid:** per-device pricing for initial quotes (based on device counts), converted to a flat annual contract price for renewals.

## 2026 Pricing Benchmarks

These are national averages. Adjust for your market, overhead, and competition.

### Fire Extinguisher Inspections (NFPA 10)
- **Annual inspection:** $3-8 per unit
- **6-year maintenance:** $15-30 per unit
- **Hydrostatic test (12-year):** $20-40 per unit
- **Minimum service call:** $75-150

A 20-story office building with 100 extinguishers = $300-800 per annual inspection. Add 6-year maintenance for 20 units = $300-600. Total annual value: $600-1,400.

### Sprinkler System Inspections (NFPA 25)
- **Annual inspection:** $200-600 per system (wet), $300-800 per system (dry/pre-action)
- **Quarterly valve inspections:** $50-150 per visit
- **Main drain test:** included in annual or $50-100 separate
- **5-year obstruction investigation:** $500-2,000 depending on system size

A warehouse with 2 wet systems and 1 dry system = $700-2,000 per annual. Quarterly visits add $200-600/year. Total annual value: $900-2,600.

### Fire Alarm Inspections (NFPA 72)
- **Annual inspection and testing:** $1-4 per device (smoke detectors, pull stations, horns/strobes)
- **Small system (<50 devices):** $200-400 flat
- **Medium system (50-200 devices):** $400-1,200
- **Large system (200+ devices):** $1,200-4,000+
- **Elevator recall test:** $100-300 additional

A 100-unit apartment building with 350 alarm devices = $350-1,400 for annual testing.

### Fire Door Inspections (NFPA 80)
- **Per door:** $5-15
- **Minimum service call:** $75-150
- **Common building:** 20-100 fire doors

A hospital with 200 fire doors = $1,000-3,000 per annual inspection.

## How to Calculate Your Rate

### Step 1: Know Your Costs
- **Technician loaded cost:** hourly wage + benefits + vehicle + insurance + tools = typically $35-55/hour loaded
- **Time per device:** fire extinguisher = 2-5 min, sprinkler system = 2-4 hours, alarm device = 3-8 min, fire door = 5-10 min
- **Travel time:** factor in windshield time between buildings
- **Overhead allocation:** office, admin, insurance, licensing, software

### Step 2: Target Margin
- **Minimum:** 30% gross margin (barely sustainable)
- **Target:** 50-60% gross margin (healthy, growing company)
- **Premium:** 65%+ gross margin (strong brand, less competition)

### Step 3: Calculate
\`\`\`
Price = (Labor Cost + Overhead) / (1 - Target Margin)

Example: Fire alarm inspection, 200 devices
- Tech time: 6 hours × $45/hr loaded = $270
- Travel: 1 hour × $45 = $45
- Overhead: $50 (admin, report generation, scheduling)
- Total cost: $365
- At 50% margin: $365 / 0.50 = $730

Price: $730 or ~$3.65 per device
\`\`\`

## Pricing Strategies That Win

### 1. Bundle System Types
Offer a discount for inspecting multiple systems in one visit: "Fire extinguisher + sprinkler + alarm inspection = 15% off total."

Reduces your travel cost, increases per-visit revenue, and makes it harder for the client to split vendors.

### 2. Multi-Year Contracts
Offer a 3-year contract at 5-10% annual discount. Lock in recurring revenue. The building manager gets predictable budgeting.

### 3. Property Management Portfolios
Give a per-building discount for 10+ buildings. Property management companies control huge volumes. Winning one PM firm can be $50,000-200,000/year in revenue.

### 4. Premium for Reporting Quality
If you deliver professional branded PDF reports with photo documentation and deficiency tracking while your competitor hands over a chicken-scratch carbon copy, you can charge 10-20% more. Building managers notice the difference.

## The Real Profit Lever: Efficiency

The biggest variable in fire inspection profitability isn't your price — it's your speed. A tech who does a 100-extinguisher inspection in 2 hours at $3/unit makes $150/hour. The same job taking 4 hours makes $75/hour.

Digital inspection software cuts inspection time 40-60% vs paper:
- No handwriting — tap pass/fail
- Pre-loaded device lists — no hunting for serial numbers
- Photo documentation inline — no separate camera workflow
- Report generated instantly — no back-office typing

FireLog customers report finishing inspections 2-3× faster than paper. At the same price per device, that's 2-3× the effective hourly rate.

[Speed up your inspections →](https://app.firelogai.com)
`,
  },
  {
    slug: "fire-door-inspection-requirements-nfpa-80",
    tags: ["nfpa", "inspection", "compliance"],
    author: "firelog-team",
    title: "NFPA 80 Fire Door Inspection Requirements: What Changed in 2026",
    description: "Complete guide to NFPA 80 fire door inspection requirements — annual inspection checklist, common deficiencies, and documentation that satisfies AHJs.",
    date: "2026-03-08",
    content: `
# NFPA 80 Fire Door Inspection Requirements

Fire door inspections became mandatory with the 2007 edition of NFPA 80, but enforcement has accelerated in recent years. The Joint Commission (hospitals), CMS (healthcare facilities), and increasingly aggressive AHJs are making fire door compliance a top priority. Here's what you need to know.

## Why Fire Door Inspections Matter

Fire doors are passive fire protection. They exist to compartmentalize a building during a fire — slowing the spread of flames and smoke so occupants can evacuate and firefighters can control the burn. A fire door that doesn't close, doesn't latch, or has gaps around its perimeter is not a fire door. It's just a door.

NFPA 80 Section 5.2 requires annual inspection of all fire door assemblies by a **qualified person** — someone with knowledge and understanding of the operating components of the type of door being inspected.

## Annual Inspection Checklist

### Door Assembly
- ✅ No open holes or breaks in surfaces of door or frame
- ✅ Glazing (glass, if any) is intact and is the listed glazing for that assembly
- ✅ Door, frame, hinges, hardware, and seals show no visible damage that would compromise fire rating
- ✅ No field modifications that would void the door's listing (holes, cut-downs, surface-mounted hardware not tested with the assembly)
- ✅ Fire label/certification tag is intact and legible (door, frame, and glazing)
- ✅ Door clearances do not exceed manufacturer's listing or 3/4 inch at head and jambs, 3/4 inch at meeting edges of pairs

### Gap Measurements
- ✅ Gap between door and frame: not more than 1/8" (with intumescent seal) or 3/16" (without, per older listings)
- ✅ Undercut: per manufacturer listing or max 3/4" (3/8" for smoke doors)
- ✅ Meeting edge gap for pairs: per listing, typically max 1/8" with astragal or intumescent

### Closing and Latching
- ✅ Door closes completely from full-open position (self-closing)
- ✅ Door latches positively (roller latch, deadbolt, or active latch engages)
- ✅ Closing speed appropriate — not slamming, not crawling
- ✅ For pairs: doors close in correct sequence (coordinator functioning)
- ✅ No door stop or hold-open device that is not connected to the fire alarm system

### Hardware
- ✅ Hinges: not loose, not missing, correct number for door size (typically 3 for standard, 4 for oversized)
- ✅ Latch bolt extends fully into strike plate
- ✅ Lever/knob operates smoothly
- ✅ Closer adjustments hold — door doesn't drift open or fail to close
- ✅ Automatic flush bolts (pairs) extend fully when inactive leaf closes
- ✅ Panic hardware functional and not tied open

### Magnetic Hold-Open Devices
- ✅ Connected to fire alarm system
- ✅ Release on alarm activation (test during fire alarm inspection)
- ✅ Door closes and latches completely when released
- ✅ Magnet and strike plate aligned — door held firmly

### Gasketing and Seals
- ✅ Smoke seals intact and compressing properly (smoke-rated doors)
- ✅ Intumescent strips present and undamaged (where required by listing)
- ✅ Threshold/bottom seal intact (where present)

## Common Deficiencies

Fire door inspections have the highest deficiency rate of any NFPA inspection type. In healthcare facilities, 60-80% of fire doors fail initial inspection. Common issues:

1. **Door doesn't latch** — #1 deficiency. Closer needs adjustment, latch is misaligned, or strike plate is worn. The door closes but doesn't engage the latch.

2. **Excessive gaps** — door-to-frame clearance exceeds listing. Often caused by hinge wear, frame damage, or building settling.

3. **Missing or painted-over labels** — the fire rating label must be legible. If you can't read it, you can't confirm the rating. Painting over labels is one of the most common issues in older buildings.

4. **Unauthorized hold-open devices** — wedges, doorstops, blocks, or rope tying the door open. If it's not connected to the fire alarm system, it's a violation.

5. **Non-listed hardware** — surface-mounted hardware (kickplates, closers, viewers) that wasn't tested as part of the door's fire test assembly.

6. **Broken closer** — door doesn't close from full open, or closes too slowly (>30 seconds).

7. **Missing astragal or coordinator on pairs** — double doors without a coordinator will close out of sequence, preventing the overlapping leaf from latching.

## Documentation Requirements

NFPA 80 Section 5.2.4 requires that inspection records include:

- Date of inspection
- Name and qualification of inspector
- Individual door identification (floor, room, or door number)
- Results for each item inspected
- Deficiencies found
- Corrective actions taken or recommended

Records must be maintained and made available to the AHJ. For Joint Commission-accredited facilities, fire door inspection records are reviewed during every survey.

## The Healthcare Opportunity

Healthcare facilities are the #1 market for fire door inspections:

- Joint Commission requires annual fire door inspections — no exceptions
- CMS ties Medicare reimbursement to life safety compliance
- Hospitals have 500-2,000+ fire doors
- Skilled nursing facilities have 100-500 fire doors
- Surgery centers, clinics, and medical office buildings add volume

A single hospital contract can be worth $5,000-30,000 annually for fire door inspections alone.

## Building Your Fire Door Inspection Service

### Pricing
- $5-15 per door (market dependent)
- Minimum service call: $150-300
- Correction proposals are separate revenue (adjustments, closer replacements, seal installations)

### Efficiency
- Paper: 8-12 minutes per door (handwriting, measuring, sketching)
- Digital: 3-5 minutes per door (tap pass/fail, photo, auto-report)
- A 200-door hospital: paper = 27-40 hours, digital = 10-17 hours

FireLog's NFPA 80 checklist covers every required inspection item. Work through each door on your phone, snap photos of deficiencies, and generate a branded PDF report with door-by-door results. The report becomes your correction proposal — every failed item is a revenue opportunity.

[Add fire door inspections to your services →](https://app.firelogai.com)
`,
  },
  {
    slug: "fire-inspection-business-startup-guide",
    tags: ["business", "startup", "growth"],
    author: "firelog-team",
    title: "How to Start a Fire Inspection Business in 2026",
    description: "Step-by-step guide to starting a fire protection inspection company — licensing, certifications, equipment, pricing, and getting your first customers.",
    date: "2026-03-08",
    content: `
# How to Start a Fire Inspection Business in 2026

Fire inspection is one of the best trades businesses you can start in 2026. The work is legally mandated (buildings must be inspected), recurring (annual at minimum), and the barrier to entry is manageable. Here's the step-by-step playbook.

## Why Fire Inspection?

- **Recession-proof:** inspections are legally required regardless of economic conditions
- **Recurring revenue:** every customer needs you again next year
- **High margins:** 50-65% gross margin is typical for established companies
- **Low startup cost:** $5,000-15,000 to start (vs. $50,000+ for most trades)
- **Aging workforce:** many fire protection contractors are 50+, creating space for new entrants
- **Growing demand:** new NFPA codes add inspection requirements every cycle

## Step 1: Get Certified and Licensed

### Certifications
The most recognized certifications for fire inspectors:

- **NICET (National Institute for Certification in Engineering Technologies)**
  - Fire Alarm Systems: Level I-IV
  - Water-Based Systems Layout: Level I-IV
  - Inspection and Testing of Water-Based Systems: Level I-IV
  - Start with Level I in your chosen discipline. Level II opens most doors.

- **ICC (International Code Council)**
  - Fire Inspector I and II
  - Fire Plans Examiner

- **State Fire Marshal certifications** — many states have their own requirements

### State Licensing

Fire protection licensing varies dramatically by state:
- Some states require a fire protection contractor license
- Some require a specific fire alarm or sprinkler license
- Some allow general contractor licenses with fire protection endorsements
- Some have no state-level requirements (local jurisdiction governs)

**Research your state first.** The National Fire Sprinkler Association and NFPA both maintain state-by-state licensing guides.

### Insurance
- General liability: $500,000-1,000,000 minimum (many contracts require $1M)
- Professional liability (errors & omissions): recommended, especially for alarm work
- Workers' compensation: required if you hire employees
- Vehicle insurance: commercial auto policy

## Step 2: Choose Your Services

Start with one or two NFPA codes and expand:

### Easiest Entry Points
1. **Fire extinguisher inspection (NFPA 10)** — lowest barrier, most commodity, but good foot-in-the-door
2. **Fire door inspection (NFPA 80)** — growing demand, less competition, higher per-door margins
3. **Fire alarm inspection (NFPA 72)** — requires NICET or equivalent, higher revenue per job

### Growth Services
4. **Sprinkler inspection (NFPA 25)** — higher revenue, more complex, requires more training
5. **Kitchen hood suppression (NFPA 96)** — niche, high margin, restaurant/commercial kitchen market
6. **Emergency lighting and exit sign inspection** — often bundled with alarm inspections

**Pro tip:** Start with fire extinguishers to build a customer base, then upsell sprinkler and alarm inspections to the same buildings. The building manager who trusts you with extinguishers will give you the alarm contract.

## Step 3: Equipment and Tools

### Must-Have
- Reliable vehicle (van or truck with organized storage)
- Inspection tags and tamper seals
- Pressure gauges (for extinguisher testing)
- Basic hand tools
- Flashlight and inspection mirror
- Measuring tools (gap gauge for fire doors)
- Smartphone or tablet (for digital inspections)
- Digital inspection software (e.g., FireLog)

### Nice-to-Have
- Smoke detector sensitivity tester
- Sound level meter (for alarm inspections)
- Thermal camera (for electrical inspections)
- Inventory management system for fire extinguisher servicing

### Startup Costs
| Item | Cost |
|------|------|
| NICET certification + study materials | $500-1,500 |
| State licensing and permits | $200-2,000 |
| Insurance (first year) | $1,500-4,000 |
| Vehicle (existing or used van) | $0-10,000 |
| Tools and equipment | $500-2,000 |
| Business registration and legal | $200-500 |
| Marketing (website, cards, shirts) | $500-1,500 |
| Inspection software (annual) | $950 |
| **Total** | **$4,350-22,450** |

## Step 4: Get Your First Customers

### Month 1-3: Foundation
1. **Google Business Profile** — create and optimize immediately
2. **Website** — simple, mobile-friendly, lists your services and certifications
3. **Business cards** — leave at every building you inspect
4. **Neighboring buildings** — after every inspection, walk next door and introduce yourself

### Month 3-6: Growth
5. **Property management companies** — the single highest-value target (see our [marketing guide](/blog/fire-protection-company-marketing))
6. **Commercial real estate brokers** — they manage fire inspection compliance for properties
7. **Insurance agents** — they need compliant buildings, you provide proof
8. **Join your state fire protection association** — networking with non-competing contractors in other regions

### Month 6-12: Scale
9. **Hire your first tech** — when you're booked 3+ weeks out
10. **Add a service line** — expand from extinguishers to alarms or sprinklers
11. **Pursue healthcare** — hospitals and nursing homes are the highest-volume contracts

## Step 5: Systems from Day One

### Don't Start with Paper
The #1 regret of established fire protection contractors: "I wish I'd gone digital from day one." Paper inspection reports become a nightmare at scale — lost records, illegible handwriting, hours of back-office data entry, and audit-day panic.

Start with digital inspection software immediately:
- Faster inspections (2-3× vs paper)
- Professional branded reports from day one
- All records searchable and audit-ready
- Deficiency tracking for correction proposals
- Customer management built in

### Track Everything
- Every building inspected
- Every device type and count
- Next inspection due dates
- Revenue per customer
- Time per inspection (to refine pricing)

## Revenue Expectations

### Year 1 (Solo Operator)
- 5-10 inspection days per month (ramping up)
- Average revenue per day: $400-800
- **Annual revenue: $24,000-96,000**
- Realistic target: **$50,000-70,000**

### Year 2 (Solo + First Hire)
- 15-20 inspection days per month across 2 techs
- Average revenue per day: $500-1,000 per tech
- **Annual revenue: $90,000-240,000**
- Realistic target: **$120,000-180,000**

### Year 3+ (Growth Phase)
- 3-5 techs, established customer base, multi-system inspections
- **Annual revenue: $250,000-500,000+**
- Property management contracts and healthcare facilities drive scale

## The Moat

Fire inspection businesses build an incredible moat over time:

1. **Switching costs** — building managers don't want to change vendors (new vendor = re-learning their building)
2. **Recurring revenue** — legally mandated annual inspections = automatic renewals
3. **Relationship depth** — you know the building better than anyone. Correction proposals, upgrades, and emergency calls all come to you
4. **Data advantage** — if you use digital software, you have the complete inspection history. The next vendor starts from scratch

Start right. Start digital. Start now.

[Get FireLog for your new fire inspection business →](https://app.firelogai.com)
`,
  },
  {
    slug: "fire-inspection-software-roi-calculator",
    tags: ["software", "roi", "business"],
    author: "firelog-team",
    title: "Fire Inspection Software ROI: How Much Time and Money You Actually Save",
    description: "Real-world ROI analysis of switching from paper to digital fire inspection software — time savings, error reduction, and revenue impact per tech per year.",
    date: "2026-03-08",
    content: `
# Fire Inspection Software ROI: The Real Numbers

"We've always done it on paper." Every fire protection contractor has said it. But have you actually calculated what paper is costing you? Here's the math.

## Time Cost: Paper vs Digital

We tracked inspection times across fire protection companies using paper forms vs digital software. The results are consistent:

### Fire Extinguisher Inspection (NFPA 10)
| Task | Paper | Digital |
|------|-------|---------|
| Setup (find form, fill header) | 3 min | 30 sec |
| Per-device inspection | 4-5 min | 2-3 min |
| Deficiency documentation | 3 min (write + sketch) | 1 min (tap + photo) |
| Report finalization | 10-15 min (back at office) | 0 (auto-generated) |

**100-extinguisher building:**
- Paper: 8.5-10 hours (including office time)
- Digital: 4-5.5 hours
- **Time saved: 4-5 hours per job**

### Fire Alarm Inspection (NFPA 72)
| Task | Paper | Digital |
|------|-------|---------|
| Device list preparation | 30 min (manual from previous report) | 0 (pre-loaded) |
| Per-device test and record | 5-8 min | 3-5 min |
| Report compilation | 1-3 hours (back office) | 0 (auto-generated) |

**200-device alarm system:**
- Paper: 20-30 hours
- Digital: 10-17 hours
- **Time saved: 10-13 hours per job**

### Fire Door Inspection (NFPA 80)
| Task | Paper | Digital |
|------|-------|---------|
| Per-door inspection | 8-12 min | 3-5 min |
| Gap measurement recording | 2 min | 30 sec |
| Deficiency photo + description | 3 min | 1 min |
| Report generation | 2-4 hours (per 100 doors) | 0 |

**200-door hospital:**
- Paper: 30-40 hours
- Digital: 12-18 hours
- **Time saved: 18-22 hours per job**

## Revenue Impact

Time saved = more inspections per tech per day = more revenue.

### Example: Solo Operator
- Current capacity (paper): 3-4 inspection jobs per week
- Digital capacity: 5-7 inspection jobs per week
- Average job revenue: $500
- **Additional revenue: $500-1,500 per week = $26,000-78,000 per year**

### Example: 5-Tech Team
- Per-tech time savings: 5-10 hours per week
- Team total: 25-50 hours per week recovered
- At $60/hour billing rate: **$78,000-156,000 in recovered capacity per year**

## Error Reduction

Paper inspection errors that cost real money:

### 1. Missing Items ($500-5,000 per incident)
Paper forms allow blank fields. A skipped item during a 200-device alarm inspection might not be caught until the AHJ reviews the report. Digital software enforces completion — you cannot submit with blank items.

### 2. Illegible Reports ($200-1,000 per rewrite)
When the AHJ or building manager can't read your technician's handwriting, you either rewrite the report (unpaid labor) or lose the customer. Digital reports are always clean.

### 3. Lost Records ($1,000-50,000 per incident)
Paper gets lost. Filing cabinets get damaged. When an AHJ or insurance company requests a 2-year-old inspection report and you can't find it, the consequences range from re-inspection (at your cost) to losing the contract.

### 4. Missed Follow-Ups ($500-2,000 per missed correction)
Deficiencies found on paper get filed and forgotten. No one follows up. The deficiency is still there at the next annual inspection. Digital software tracks corrections with due dates and reminders.

## Back-Office Savings

The hidden cost of paper that most contractors ignore:

| Back-Office Task | Paper Time/Week | Digital Time/Week |
|-----------------|----------------|-------------------|
| Typing up reports | 5-15 hours | 0 hours |
| Filing and organizing | 2-4 hours | 0 hours |
| Searching for records | 1-3 hours | 0.1 hours |
| Data entry for billing | 2-4 hours | 0.5 hours |
| Correction proposal creation | 2-5 hours | 0.5 hours |
| **Total** | **12-31 hours** | **1.1 hours** |

At $25/hour admin cost: **$14,300-40,300 per year in back-office savings.**

## Total ROI Calculation

### Solo Operator
| Category | Annual Savings |
|----------|---------------|
| Additional job capacity | $26,000-78,000 |
| Back-office labor | $7,800-15,600 |
| Error/redo avoidance | $2,000-5,000 |
| Software cost | -$948 |
| **Net ROI** | **$34,852-97,652** |

### 5-Tech Company
| Category | Annual Savings |
|----------|---------------|
| Additional job capacity | $78,000-156,000 |
| Back-office labor | $14,300-40,300 |
| Error/redo avoidance | $5,000-15,000 |
| Software cost | -$948 |
| **Net ROI** | **$96,352-210,352** |

## The Compound Effect

The ROI numbers above are conservative — they don't account for:

- **Customer retention:** professional reports make you harder to replace
- **Upsell revenue:** deficiency tracking generates correction proposals automatically
- **Referral rate:** building managers share impressive reports with other building managers
- **Scaling speed:** adding a new tech with digital takes days vs weeks of training on paper processes

## The Real Question

The question isn't "can I afford fire inspection software?" It's "can I afford not to use it?"

At $79/month, FireLog pays for itself with one additional job per month. Everything after that is pure upside.

[Calculate your ROI — start free →](https://app.firelogai.com)
`,
  },
  {
    slug: "fire-sprinkler-inspection-frequency-requirements",
    tags: ["sprinkler", "compliance", "nfpa"],
    author: "firelog-team",
    title: "Fire Sprinkler Inspection Frequency: Complete NFPA 25 Schedule Guide",
    description: "How often must fire sprinklers be inspected? Complete NFPA 25 frequency table for visual, functional, and full-flow tests — weekly through 20-year intervals.",
    date: "2026-03-09",
    content: `
# Fire Sprinkler Inspection Frequency: Complete NFPA 25 Schedule Guide

Missing a fire sprinkler inspection deadline isn't just a failed audit — it's a liability event. Building owners, property managers, and fire protection contractors all need to know exactly when each component is due.

This guide breaks down every NFPA 25 inspection frequency requirement so you never miss a deadline.

## Why Inspection Frequency Matters

Insurance carriers and AHJs (Authorities Having Jurisdiction) don't accept "we check it every year" as a blanket answer. NFPA 25 specifies **different frequencies for different components** — and they range from weekly to every 20 years.

Getting this wrong means:
- **Failed inspections** and re-inspection fees
- **Insurance premium increases** or policy cancellation
- **Code violations** and potential fines
- **Liability exposure** if a system fails during a fire

## Complete NFPA 25 Inspection Frequency Table

### Weekly/Monthly
- **Gauges** on wet/dry/preaction/deluge systems — weekly or monthly visual
- **Control valves** — weekly or monthly (locked/supervised valves monthly; others weekly)
- **Fire pump condition** — weekly no-flow churn test

### Quarterly
- **Waterflow alarm devices** — quarterly test
- **Fire pump flow test** — quarterly (some AHJs accept annual)
- **Supervisory signal devices** — quarterly test

### Semi-Annual
- **Control valves** — semi-annual trip test (dry/preaction)

### Annual
- **Sprinkler heads** — annual visual inspection
- **Pipe and fittings** — annual visual
- **Hangers and bracing** — annual visual
- **Spare sprinkler cabinet** — annual check (minimum 6 spares)
- **Main drain test** — annual full-flow
- **Antifreeze solution** — annual concentration test
- **FDC (Fire Department Connection)** — annual visual and accessibility

### 5-Year
- **Internal pipe inspection** — 5-year obstruction investigation
- **Dry/preaction valve trip test** — full flow every 5 years
- **Gauges** — 5-year replacement or recalibration
- **Sprinkler heads** — 5-year lab sample test (fast-response after 20 years, standard after 50)

### 10-Year
- **Sprinkler heads (fast-response)** — 10-year lab sample after initial 20-year mark, then every 10
- **FDC check valves** — 10-year internal inspection

### 20-Year
- **Standard sprinkler heads** — first lab sample test at 50 years, then every 10 years after (residential/fast-response: 20 years, then every 10)

## How to Track All This Without Losing Your Mind

If you're running inspections across 50+ buildings with different system types and installation dates, spreadsheets break fast. You need:

1. **Automated scheduling** based on component type and last inspection date
2. **Mobile access** so techs see what's due on-site
3. **Compliance alerts** before deadlines, not after

[FireLog tracks all NFPA 25 frequencies automatically — start free →](https://app.firelogai.com)

## Common Mistakes

**Mistake 1: Treating everything as annual.** Gauges, control valves, and fire pumps need attention far more often than once a year.

**Mistake 2: Forgetting 5-year internals.** The 5-year obstruction investigation is the most commonly missed inspection — and it's a major insurance audit flag.

**Mistake 3: No documentation trail.** Even if you do every inspection on time, without records, it didn't happen. AHJs and insurance adjusters need dates, findings, and tech signatures.

## Bottom Line

NFPA 25 compliance isn't one inspection — it's a matrix of dozens of components on different schedules. The fire protection contractors who win are the ones who never miss a deadline and can prove it.

[Track every frequency automatically with FireLog →](https://app.firelogai.com)
`,
  },
  {
    slug: "fire-protection-contractor-insurance-requirements",
    tags: ["business", "insurance", "compliance"],
    author: "firelog-team",
    title: "Insurance Requirements for Fire Protection Contractors (2026 Guide)",
    description: "What insurance do fire protection contractors need? GL, E&O, workers' comp, commercial auto — coverage requirements, typical costs, and how documentation helps.",
    date: "2026-03-09",
    content: `
# Insurance Requirements for Fire Protection Contractors (2026 Guide)

Every fire protection contractor needs insurance — but the wrong coverage or missing certificates can cost you contracts. Here's what you actually need, what it costs, and how to keep your documentation tight.

## Required Insurance Types

### General Liability (GL)
- **Minimum:** $1M per occurrence / $2M aggregate (most commercial contracts require this)
- **What it covers:** Bodily injury, property damage, completed operations
- **Typical cost:** $2,000-$6,000/year for a small shop
- **Why it matters:** Most property managers won't let you on-site without a current GL certificate

### Professional Liability / Errors & Omissions (E&O)
- **Minimum:** $1M (increasingly required for inspection/design work)
- **What it covers:** Mistakes in inspection reports, design errors, missed deficiencies
- **Typical cost:** $1,500-$4,000/year
- **Why it matters:** If your inspection report says "pass" and the system fails during a fire, E&O is what stands between you and bankruptcy

### Workers' Compensation
- **Required in:** Nearly every state (sole proprietors may be exempt in some)
- **What it covers:** Employee injuries on the job
- **Typical cost:** Varies wildly by state — $3-$15 per $100 of payroll for fire protection work (class code 5183)
- **Why it matters:** No workers' comp = no employees. And general contractors won't sub you without it.

### Commercial Auto
- **Minimum:** $1M combined single limit
- **What it covers:** Vehicles used for business (service vans, truck-mounted equipment)
- **Typical cost:** $1,200-$3,000/year per vehicle

### Umbrella / Excess Liability
- **When needed:** Larger contracts ($5M+ buildings, hospitals, government work)
- **Typical:** $1M-$5M umbrella over GL + auto
- **Cost:** $500-$2,000/year for $1M umbrella

## Certificate of Insurance (COI) Management

The #1 administrative headache for fire protection contractors: **every building manager wants a current COI before you show up.**

Best practices:
- Keep a digital master COI you can email in minutes
- Set renewal reminders 30 days before expiration
- Track which clients need updated certificates
- Store COIs alongside inspection records for audit readiness

## How Documentation Reduces Your Premiums

Insurance underwriters look at your **loss history and risk management practices.** Fire protection contractors who can demonstrate:

- **Consistent inspection documentation** (every job has a signed report)
- **Deficiency tracking** (you flagged issues and followed up)
- **Training records** (techs are NICET-certified, up to date)

...often qualify for **10-20% premium reductions.** Your inspection records are literally insurance evidence.

## The Digital Paper Trail

When an insurance claim happens — yours or your client's — the first question is always: "Where's the documentation?"

If your reports are on paper in a filing cabinet, good luck finding the right one fast. If they're in a digital system with timestamps, signatures, and photos — you're covered.

[FireLog keeps your inspection records audit-ready — start free →](https://app.firelogai.com)

## Action Items

1. **Audit your current coverage** against the minimums above
2. **Digitize your COI** and set renewal reminders
3. **Start documenting every inspection digitally** — it's both compliance and insurance protection
4. **Ask your broker** about documentation-based premium discounts

Your insurance is only as good as your documentation. Build the paper trail before you need it.

[Get audit-ready documentation with FireLog →](https://app.firelogai.com)
`,
  },
  {
    slug: "how-to-win-fire-inspection-contracts",
    tags: ["business", "growth", "contracts"],
    author: "firelog-team",
    title: "How to Win More Fire Inspection Contracts (7 Proven Strategies)",
    description: "Practical strategies fire protection contractors use to win more inspection contracts — from professional reports to recurring revenue models.",
    date: "2026-03-09",
    content: `
# How to Win More Fire Inspection Contracts (7 Proven Strategies)

Most fire protection contractors get work through referrals and repeat business. That works — until it doesn't. Here are 7 strategies that the fastest-growing inspection companies use to win new contracts consistently.

## 1. Lead With Professional Reports

Building managers compare proposals. If your competitor sends a one-page handwritten form and you send a branded PDF with photos, deficiency tracking, and compliance summaries — you win.

**Your report is your resume.** Every inspection report you deliver is a sales document for the next contract.

What winning reports include:
- Your company logo and branding
- Photo documentation of every system inspected
- Clear pass/fail with NFPA code references
- Prioritized deficiency list with correction quotes
- Digital signature from the tech

## 2. Bundle Inspections for Recurring Revenue

The smartest fire protection companies don't sell one-off inspections. They sell **annual inspection programs:**

- "We'll handle all your NFPA 10, 25, and 72 inspections for $X/year"
- Quarterly, semi-annual, and annual visits included
- One contract, one invoice, one vendor to manage

Building managers love simplicity. Bundle your services and you'll close faster and retain longer.

## 3. Upsell Through Deficiency Tracking

Every deficiency you find is a correction proposal waiting to happen. The contractors who track deficiencies systematically generate **30-50% of their revenue from correction work.**

The key: make it easy to quote corrections from your inspection findings. If your deficiency report includes photos, NFPA references, and priority levels — the correction proposal writes itself.

## 4. Target Property Management Companies

Individual building owners are one contract at a time. Property management companies manage **dozens or hundreds of buildings.** Win one relationship and you could get 50 buildings.

How to approach:
- Research local PM companies with commercial portfolios
- Send a sample inspection report (your best work)
- Offer a free initial inspection on one building
- Emphasize your compliance documentation and reporting

## 5. Get on Approved Vendor Lists

Many large property owners, hospitals, and government agencies maintain **approved vendor lists.** Getting on the list means you're pre-qualified when they need inspection work.

Common lists to target:
- City/county/state government vendor registries
- Hospital system approved contractors
- University facilities management vendors
- Federal GSA Schedule (if you want government work)

## 6. Leverage AHJ Relationships

Fire marshals and AHJ inspectors see bad inspection reports every day. When they see a contractor who does clean, thorough, well-documented work — they remember.

Some AHJs maintain referral lists. Others informally recommend contractors to building owners who fail inspections. Be the contractor they recommend.

## 7. Modernize Your Operations

This isn't just about software — it's about perception. When you show up with a tablet, take photos, generate a PDF report on-site, and email it before you leave the building — you look like a **professional operation.**

Compare that to the guy with a clipboard and a promise to "mail the report next week."

Building managers are making a risk decision when they hire you. Everything about your operation should say "we take this seriously."

[FireLog makes you look like the most professional inspector in the room — start free →](https://app.firelogai.com)

## The Common Thread

Notice what all 7 strategies have in common: **documentation quality.** Your reports, your tracking, your professionalism — it all comes down to how well you document what you do.

The contractors who invest in their documentation infrastructure win more contracts, retain more clients, and generate more correction revenue. Period.

[Build your documentation advantage with FireLog →](https://app.firelogai.com)
`,
  },
  {
    slug: "nfpa-inspection-deficiency-codes-guide",
    tags: ["nfpa", "documentation", "compliance"],
    author: "firelog-team",
    title: "NFPA Inspection Deficiency Codes: What They Mean and How to Prioritize",
    description: "Understanding fire inspection deficiency classifications — critical, non-critical, and advisory — and how to prioritize corrections for NFPA compliance.",
    date: "2026-03-09",
    content: `
# NFPA Inspection Deficiency Codes: What They Mean and How to Prioritize

Finding deficiencies during a fire inspection is expected. Knowing how to **classify, prioritize, and communicate** them is what separates good inspectors from great ones.

## Deficiency Classification Levels

While NFPA standards don't prescribe a universal "deficiency code" system, the industry has standardized around three priority levels that AHJs and insurance carriers recognize:

### Critical Deficiencies
- **Definition:** Conditions that could cause system failure during a fire event
- **Examples:**
  - Closed control valve (system won't flow water)
  - Missing or painted-over sprinkler heads
  - Fire pump failure to start
  - Blocked FDC access
  - Expired fire extinguishers in egress paths
- **Required action:** Immediate correction (24-48 hours)
- **Reporting:** Must be reported to building owner AND AHJ immediately

### Non-Critical Deficiencies
- **Definition:** Conditions that reduce system reliability but don't cause immediate failure
- **Examples:**
  - Corroded pipe (not yet leaking)
  - Spare sprinkler cabinet below minimum count
  - Gauge out of calibration
  - Minor obstruction to sprinkler coverage
  - Faded signage
- **Required action:** Correction within 30-90 days
- **Reporting:** Documented in inspection report with recommended correction timeline

### Advisory / Maintenance Items
- **Definition:** Recommendations for optimal performance, not code violations
- **Examples:**
  - Painting pipes for corrosion prevention
  - Upgrading to current-model sprinkler heads
  - Adding signage beyond minimum requirements
  - System design improvements for new building uses
- **Required action:** Optional, recommended at next service visit
- **Reporting:** Included in report as recommendations

## Why Classification Matters

### For the Building Owner
Clear classification helps building owners allocate budget and urgency correctly. "You have 3 critical items that need attention this week and 7 maintenance items for your next budget cycle" is actionable. A flat list of 10 deficiencies with no prioritization creates confusion and inaction.

### For the Inspector
Your deficiency classification directly affects your **credibility and liability:**
- Mark everything critical → building owner thinks you're upselling
- Miss a critical item → you're liable if the system fails
- Clear, justified classification → you're the trusted expert

### For Insurance
Insurance auditors look at deficiency reports to assess building risk. Clear classification with NFPA code references makes their job easy — which makes your client's renewal easier — which makes you harder to replace.

## Best Practices for Deficiency Documentation

### 1. Always Include the NFPA Reference
Don't just write "sprinkler head painted over." Write: "Sprinkler head painted over — NFPA 25, Section 5.2.1.1.1 requires sprinkler heads to be free of paint, corrosion, and loading."

Code references make your findings defensible and educational.

### 2. Photo-Document Everything
A photo of a painted-over sprinkler head is worth more than a paragraph describing it. Best practice:
- Wide shot showing location in the building
- Close-up showing the specific deficiency
- Reference photo showing what "correct" looks like (when applicable)

### 3. Include Correction Recommendations
For each deficiency, note:
- What needs to be done
- Estimated timeline for correction
- Whether it requires a licensed contractor or can be handled in-house

### 4. Track Deficiency History
The most valuable thing you can show a building owner: "Here's what we found last year, here's what was corrected, and here's what's new." Deficiency trending over time demonstrates system health and your value as an inspector.

## Digital vs. Paper Deficiency Tracking

Paper deficiency tracking fails in three predictable ways:
1. **Lost records** — the form from 2 years ago is gone
2. **No trending** — you can't see patterns across inspections
3. **No accountability** — corrections aren't tracked to completion

Digital deficiency tracking with a tool like FireLog gives you:
- Persistent deficiency history across all inspections
- Automatic priority classification
- Photo documentation attached to each finding
- Correction tracking with status and dates
- Report generation that includes historical trends

[Track deficiencies professionally with FireLog →](https://app.firelogai.com)

## Common Deficiency Mistakes

**Mistake 1: No follow-up on corrections.** Finding deficiencies is half the job. Following up to verify corrections is the other half — and it's where most contractors drop the ball.

**Mistake 2: Inconsistent classification.** If Tech A calls something critical and Tech B calls the same thing advisory, your company looks unprofessional. Standardize your classification criteria.

**Mistake 3: Deficiency reports without context.** "Gauge reads 0 PSI" is a finding. "Gauge reads 0 PSI — system may not be charged, verify main control valve is open immediately" is a useful report.

## Build Your Deficiency Process

A strong deficiency management process is a competitive advantage. It generates correction revenue, builds trust with building owners, satisfies AHJ requirements, and keeps insurance carriers happy.

Invest in getting this right — it pays back in every direction.

[Start tracking deficiencies with FireLog →](https://app.firelogai.com)
`,
  },
  {
    slug: "fire-inspection-compliance-audit-preparation",
    tags: ["compliance", "audit", "documentation"],
    author: "firelog-team",
    title: "How to Prepare for a Fire Inspection Compliance Audit (AHJ & Insurance)",
    description: "Step-by-step guide to preparing for fire inspection audits from AHJs and insurance carriers — documentation, common findings, and how to pass every time.",
    date: "2026-03-09",
    content: `
# How to Prepare for a Fire Inspection Compliance Audit

Whether it's an AHJ (Authority Having Jurisdiction) audit or an insurance carrier review, fire inspection compliance audits come down to one thing: **can you prove your systems are maintained?**

This guide covers what auditors look for, how to prepare, and how to pass every time.

## What Triggers an Audit?

### AHJ Audits
- Routine annual or biennial inspections
- Complaint from tenant or occupant
- Post-incident investigation
- Change of building occupancy or use
- New construction certificate of occupancy

### Insurance Audits
- Policy renewal review
- Post-loss investigation
- Risk engineering survey (usually every 3-5 years)
- Premium classification review
- Building acquisition or ownership change

## What Auditors Look For

### Documentation Requirements
1. **Current inspection reports** for all fire protection systems
2. **Inspection history** (minimum 3-5 years of records)
3. **Deficiency logs** with correction dates and verification
4. **Impairment records** (any system outages and notifications)
5. **ITM (Inspection, Testing, and Maintenance) schedules** showing compliance with NFPA frequencies
6. **Contractor credentials** (NICET certification, state licenses, insurance)
7. **As-built drawings** and system design documentation

### Physical Inspection Points
- Control valves accessible and in correct position
- Sprinkler heads clean, unobstructed, correct temperature rating
- Fire pump operational (start-up test)
- Alarm systems functional (signal test)
- Fire extinguishers current, mounted, accessible
- FDC accessible and caps in place
- Signage complete and legible

## The 30-Day Audit Prep Checklist

### Week 1: Gather Documentation
- [ ] Collect all inspection reports from the last 5 years
- [ ] Organize by system type (sprinkler, alarm, extinguisher, suppression)
- [ ] Verify all reports have tech signatures and dates
- [ ] Pull deficiency logs and correction records
- [ ] Gather contractor license and insurance certificates

### Week 2: Verify Compliance
- [ ] Check every system against its NFPA inspection frequency
- [ ] Identify any overdue inspections or tests
- [ ] Schedule emergency inspections for anything out of compliance
- [ ] Verify spare sprinkler cabinet inventory
- [ ] Confirm fire pump weekly test logs are current

### Week 3: Physical Walk-Through
- [ ] Walk every floor and verify sprinkler coverage
- [ ] Check all control valves (open, locked, tamper-sealed)
- [ ] Verify fire extinguisher tags and accessibility
- [ ] Test sample alarm pull stations
- [ ] Verify FDC access and condition
- [ ] Check exit/egress lighting and signage

### Week 4: Final Preparation
- [ ] Organize all documentation in a single binder or digital folder
- [ ] Create a cover sheet summarizing all systems and their status
- [ ] Prepare a list of known deficiencies with correction plans
- [ ] Brief maintenance staff on audit expectations
- [ ] Confirm escort availability for auditor walk-through

## How to Handle Audit Findings

### During the Audit
- **Be present.** Walk with the auditor. Answer questions directly.
- **Don't hide deficiencies.** Auditors find them anyway — and hidden deficiencies look worse than acknowledged ones.
- **Show your correction process.** "We found this last quarter and here's our correction plan" is a winning answer.
- **Take notes.** Document everything the auditor flags, even verbally.

### After the Audit
- **Respond in writing** to any findings within 30 days
- **Document corrections** with photos and dates
- **Update your inspection records** immediately
- **Schedule follow-up inspections** for any corrections made

## Common Audit Failures (and How to Avoid Them)

**#1: Missing records.** The single most common audit failure. If you can't produce 3 years of inspection reports, you fail. Period.

**#2: Overdue inspections.** NFPA 25 requires quarterly, semi-annual, annual, and 5-year inspections. Missing any of these shows up immediately.

**#3: Unresolved deficiencies.** Finding deficiencies is fine. Not correcting them — or not documenting corrections — is a failure.

**#4: Expired contractor credentials.** If your inspector's NICET certification expired 6 months ago, every report they signed is questionable.

**#5: No impairment procedures.** If a system was taken out of service for any reason and you didn't document the impairment notice, fire watch, and restoration — that's a violation.

## The Digital Advantage

Fire inspection companies using digital documentation tools pass audits at significantly higher rates because:

- **Records are searchable** — find any report in seconds, not hours
- **Nothing gets lost** — digital records don't disappear in a move or flood
- **History is automatic** — every inspection builds on the previous one
- **Deficiency tracking is built in** — corrections are linked to findings
- **Credentials stay current** — expiration alerts prevent lapses

[Get audit-ready with FireLog — start free →](https://app.firelogai.com)

## Your Audit Insurance Policy

The best time to prepare for an audit is **every day.** If every inspection is documented, every deficiency is tracked, and every correction is verified — the audit is just a formality.

Build the process now. Your future self (and your clients) will thank you.

[Start building your audit-ready process with FireLog →](https://app.firelogai.com)
`,
  },
];
