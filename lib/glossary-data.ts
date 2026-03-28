export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  longDescription: string;
  relatedTerms: string[];
  category: string;
}

export const GLOSSARY_CATEGORIES = [
  "NFPA Standards",
  "Inspection Types",
  "Fire Suppression",
  "Life Safety",
  "Documentation",
  "Business & Compliance",
] as const;

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "NFPA 25",
    slug: "nfpa-25",
    definition: "The National Fire Protection Association standard for inspection, testing, and maintenance of water-based fire protection systems.",
    longDescription: "NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) is the primary standard governing the ongoing care of sprinkler systems, standpipes, fire pumps, water storage tanks, and water spray systems. It specifies inspection frequencies (daily, weekly, monthly, quarterly, annually, 5-year, and 10-year), testing procedures, maintenance requirements, and documentation obligations. Building owners are responsible for ensuring NFPA 25 compliance, and fire protection contractors perform the work. The standard requires impairment tracking, documentation retention, and written reports. Authorities Having Jurisdiction (AHJs) reference NFPA 25 in their enforcement. FireLog automates compliance scheduling, reporting, and documentation per NFPA 25 requirements.",
    relatedTerms: ["sprinkler-inspection", "fire-pump-testing", "standpipe-inspection", "ahj"],
    category: "NFPA Standards",
  },
  {
    term: "NFPA 72",
    slug: "nfpa-72",
    definition: "The National Fire Alarm and Signaling Code — the standard for fire alarm system installation, inspection, testing, and maintenance.",
    longDescription: "NFPA 72 (National Fire Alarm and Signaling Code) is the comprehensive standard covering fire alarm systems, including detection devices (smoke detectors, heat detectors), notification appliances (horns, strobes), fire alarm control panels, monitoring services, and emergency communications systems. It specifies requirements for system design, installation, inspection, testing, and maintenance. Annual testing of all fire alarm devices is typically required, with sensitivity testing of smoke detectors every 2 years and functional testing of all initiating and notification devices. Documentation must include device location, test results, and any deficiencies. NFPA 72 compliance is essential for occupancy permits and insurance coverage. FireLog tracks fire alarm inspection schedules and generates NFPA 72-compliant reports.",
    relatedTerms: ["fire-alarm-testing", "smoke-detector", "fire-alarm-control-panel", "ahj"],
    category: "NFPA Standards",
  },
  {
    term: "NFPA 96",
    slug: "nfpa-96",
    definition: "The standard for ventilation control and fire protection of commercial cooking operations, including kitchen hood suppression systems.",
    longDescription: "NFPA 96 (Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations) covers the fire safety requirements for commercial kitchens, including exhaust hood and duct systems, fire suppression systems (typically wet chemical), cooking equipment clearances, and cleaning/maintenance requirements. The most well-known NFPA 96 requirement is kitchen hood and duct cleaning frequency — varying from monthly (solid-fuel cooking, high-volume operations) to annually (low-volume cooking) — with semi-annual being the most common. Kitchen hood fire suppression systems must be inspected and tested semi-annually. NFPA 96 compliance is aggressively enforced because kitchen fires are the #1 cause of commercial fires. FireLog manages NFPA 96 inspection scheduling for the 600K+ restaurant market.",
    relatedTerms: ["kitchen-hood-suppression", "ahj", "fire-suppression-system", "inspection-frequency"],
    category: "NFPA Standards",
  },
  {
    term: "NFPA 101",
    slug: "nfpa-101",
    definition: "The Life Safety Code — the standard addressing building features that protect occupants during fire and similar emergencies.",
    longDescription: "NFPA 101 (Life Safety Code) is one of the most widely adopted fire codes in the world, addressing building construction, protection, and occupancy features necessary to minimize danger to life from fire, smoke, fumes, and panic. It covers means of egress (exit paths, exit signs, emergency lighting), building compartmentation, fire detection and alarm systems, suppression systems, and special occupancy requirements (hospitals, schools, high-rises, assembly, etc.). NFPA 101 requires regular testing and maintenance of life safety systems including emergency lighting (annual 90-minute test), exit signs, fire doors (annual inspection per NFPA 80), and fire/smoke dampers. The Life Safety Code is adopted by CMS for healthcare facilities, making compliance mandatory for Medicare/Medicaid reimbursement.",
    relatedTerms: ["emergency-lighting", "means-of-egress", "fire-door-inspection", "ahj"],
    category: "NFPA Standards",
  },
  {
    term: "Sprinkler Inspection",
    slug: "sprinkler-inspection",
    definition: "Regular examination of automatic fire sprinkler systems to verify they are in proper working condition and ready to operate.",
    longDescription: "Sprinkler inspection encompasses the visual examinations and tests performed on automatic fire sprinkler systems per NFPA 25. Inspection frequencies include: weekly (valve positions, gauges in high-risk areas), monthly (gauges, valve positions, waterflow alarm devices), quarterly (alarm and supervisory signal testing, waterflow alarms), annually (sprinkler heads, pipe condition, hangers, obstruction assessment), and 5-year (internal pipe inspection, FDC condition, dry system trip test). The 25-year mark triggers additional requirements for older systems. Each inspection must document findings, identify deficiencies, and note corrective actions. Sprinkler systems protect more commercial property than any other fire suppression method, and proper inspection is essential for both life safety and insurance compliance.",
    relatedTerms: ["nfpa-25", "fire-suppression-system", "inspection-frequency", "deficiency-tracking"],
    category: "Inspection Types",
  },
  {
    term: "Fire Pump Testing",
    slug: "fire-pump-testing",
    definition: "Regular testing of fire pumps to verify they can deliver required water pressure and flow for fire suppression systems.",
    longDescription: "Fire pump testing verifies that the pump can deliver the design water pressure and flow rate needed by the building's fire suppression systems. NFPA 25 requires: weekly no-flow (churn) tests to verify automatic starting and run for 10 minutes, annual flow tests to measure pump performance against its rated capacity curve, and quarterly tests of controller and transfer switch function. The annual flow test must demonstrate the pump meets or exceeds 95% of its rated performance. Test results are plotted against the manufacturer's pump curve to identify degradation. Fire pumps are critical because many buildings rely on them to boost municipal water pressure to adequate levels for sprinkler and standpipe systems. Failed fire pump tests require immediate corrective action and notification to the building owner.",
    relatedTerms: ["nfpa-25", "sprinkler-inspection", "deficiency-tracking", "inspection-frequency"],
    category: "Inspection Types",
  },
  {
    term: "Standpipe Inspection",
    slug: "standpipe-inspection",
    definition: "Testing and inspection of standpipe systems that provide water connections for firefighting on each floor of a building.",
    longDescription: "Standpipe systems are fixed piping systems installed in buildings (typically multi-story) to provide water connections (hose stations or fire department connections) for manual firefighting on each floor. NFPA 25 requires quarterly visual inspections (gauges, valve positions, hose connections), annual flow tests (for automatic and semi-automatic systems), and 5-year hydrostatic tests (200 psi for 2 hours). There are three classes of standpipe: Class I (2.5-inch connections for fire department use), Class II (1.5-inch connections for building occupant use), and Class III (both). High-rise buildings are the primary market for standpipe inspection services. Standpipe deficiencies in high-rises are particularly serious because manual firefighting above ladder reach depends entirely on standpipe performance.",
    relatedTerms: ["nfpa-25", "fire-pump-testing", "high-rise-inspection", "deficiency-tracking"],
    category: "Inspection Types",
  },
  {
    term: "Fire Alarm Testing",
    slug: "fire-alarm-testing",
    definition: "Periodic functional testing of fire alarm system components to verify proper detection, notification, and monitoring.",
    longDescription: "Fire alarm testing involves systematically testing every component of the fire alarm system to verify proper function per NFPA 72. This includes testing initiating devices (smoke detectors, heat detectors, pull stations, duct detectors, waterflow switches), notification appliances (horns, strobes, speakers), the fire alarm control panel, remote annunciators, and monitoring signal transmission to the central station. Annual testing requires functional testing of every device. Smoke detector sensitivity testing is required within 1 year of installation and every 2 years thereafter. Fire alarm testing must be coordinated with the monitoring company, building occupants, and the AHJ (for notification). All test results must be documented including each device location, test method, result (pass/fail), and any deficiencies. FireLog generates device-level test reports automatically.",
    relatedTerms: ["nfpa-72", "smoke-detector", "fire-alarm-control-panel", "ahj"],
    category: "Inspection Types",
  },
  {
    term: "Fire Extinguisher Inspection",
    slug: "fire-extinguisher-inspection",
    definition: "Monthly visual checks and annual maintenance examinations of portable fire extinguishers per NFPA 10.",
    longDescription: "Fire extinguisher inspection and maintenance is governed by NFPA 10 (Standard for Portable Fire Extinguishers). Requirements include monthly visual inspections (accessible, visible, charged, undamaged), annual maintenance examinations (by a trained person, including pull pin, tamper seal, physical damage, weight/pressure, and condition), 6-year internal examination (for stored-pressure extinguishers), and 12-year hydrostatic testing. Fire extinguishers are the most common fire protection device — virtually every commercial building has them — making this the highest-volume inspection service. Despite being straightforward, documentation requirements are specific: each extinguisher must have a tag showing inspection date and technician initials. Fire extinguisher service is often the entry point for new fire protection contractors and a recurring revenue foundation.",
    relatedTerms: ["nfpa-10", "inspection-frequency", "deficiency-tracking", "ahj"],
    category: "Inspection Types",
  },
  {
    term: "Fire Suppression System",
    slug: "fire-suppression-system",
    definition: "Any system designed to detect and suppress or extinguish fires, including sprinklers, clean agents, wet chemical, and dry chemical systems.",
    longDescription: "Fire suppression systems encompass all fixed systems designed to detect and control or extinguish fires. Major types include: wet sprinkler systems (water-filled pipes, most common), dry sprinkler systems (air-filled pipes for cold environments), pre-action systems (require detection activation before water enters pipes, used in sensitive areas), deluge systems (open heads, all activate simultaneously), clean agent systems (FM-200, Novec 1230, Inergen — for data centers and electronics), wet chemical systems (kitchen hood suppression), and dry chemical systems (industrial applications). Each system type has different inspection, testing, and maintenance requirements specified by various NFPA standards (25, 2001, 17, 17A, 96). Fire protection contractors must be qualified and often licensed for each system type they service.",
    relatedTerms: ["sprinkler-inspection", "kitchen-hood-suppression", "clean-agent-system", "nfpa-25"],
    category: "Fire Suppression",
  },
  {
    term: "Kitchen Hood Suppression",
    slug: "kitchen-hood-suppression",
    definition: "Wet chemical fire suppression systems installed in commercial kitchen exhaust hoods to extinguish cooking fires.",
    longDescription: "Kitchen hood fire suppression systems (also called kitchen fire suppression or pre-engineered wet chemical systems) are designed to suppress fires in commercial cooking equipment. Modern systems use wet chemical agents (typically potassium carbonate or potassium acetate) that cool the burning oil and create a foam blanket to prevent reignition. These systems are required by NFPA 96 in all commercial cooking operations. Inspection requirements include semi-annual inspection and functional testing by a trained technician, checking nozzle alignment and coverage, verifying detection link/fusible link integrity, testing manual pull stations, checking agent cylinder pressure, and verifying gas line and electrical shutoff activation. Kitchen hood suppression is a high-margin service due to the semi-annual requirement and the 600K+ restaurant market.",
    relatedTerms: ["nfpa-96", "fire-suppression-system", "inspection-frequency"],
    category: "Fire Suppression",
  },
  {
    term: "Clean Agent System",
    slug: "clean-agent-system",
    definition: "A gaseous fire suppression system that extinguishes fires without leaving residue, designed for protecting sensitive equipment.",
    longDescription: "Clean agent fire suppression systems use gaseous agents to extinguish fires without leaving residue that could damage sensitive equipment. Common agents include FM-200 (HFC-227ea), Novec 1230 (FK-5-1-12), and inert gas systems (Inergen, Argonite). These systems are primarily used in data centers, server rooms, telecom facilities, museums, archives, and other spaces where water-based suppression would cause more damage than the fire. NFPA 2001 (Standard on Clean Agent Fire Extinguishing Systems) governs their design, installation, inspection, and maintenance. Inspection requirements include semi-annual visual inspection, annual functional testing, and periodic enclosure integrity testing (door fan test). The growing data center market (15%+ annual growth) is driving strong demand for clean agent inspection services.",
    relatedTerms: ["nfpa-2001", "fire-suppression-system", "data-center"],
    category: "Fire Suppression",
  },
  {
    term: "Fire Damper Inspection",
    slug: "fire-damper-inspection",
    definition: "Periodic inspection and testing of fire and smoke dampers in HVAC ductwork that prevent fire/smoke spread through buildings.",
    longDescription: "Fire dampers and smoke dampers are passive fire protection devices installed in HVAC ductwork where it penetrates fire-rated walls and floors. Fire dampers close when exposed to heat (via fusible link), while smoke dampers close upon receiving a signal from the fire alarm system. NFPA 80 (Standard for Fire Doors and Other Opening Protectives) requires initial inspection 1 year after installation and every 4 years thereafter (every 6 years in hospitals). Inspection involves accessing each damper, verifying operation (drop test for fire dampers, actuator test for smoke dampers), checking for obstructions, and documenting condition. Damper inspection is a fast-growing service segment because many buildings have never had dampers inspected, and AHJ enforcement is increasing. FireLog tracks damper locations, inspection due dates, and pass/fail status.",
    relatedTerms: ["nfpa-80", "fire-door-inspection", "ahj", "deficiency-tracking"],
    category: "Inspection Types",
  },
  {
    term: "Fire Door Inspection",
    slug: "fire-door-inspection",
    definition: "Annual inspection of fire-rated door assemblies to verify they will function properly to contain fire and smoke spread.",
    longDescription: "Fire door inspection involves examining fire-rated door assemblies (doors, frames, hardware, closers, seals) to verify they will perform their intended function of containing fire and smoke. NFPA 80 requires annual inspection by a qualified person. Common inspection items include: door closes and latches from the fully open position, no visible damage or holes, clearances within tolerance (max 3/4 inch at bottom, 1/8 inch at top and sides), door hardware is functional and rated, self-closing device works properly, gaskets and seals are intact, glass (if present) is fire-rated and undamaged, and no unauthorized modifications. Fire doors are among the most common deficiencies found during fire marshal inspections, making this a high-demand service with strong recurring revenue potential.",
    relatedTerms: ["nfpa-80", "fire-damper-inspection", "ahj", "deficiency-tracking"],
    category: "Inspection Types",
  },
  {
    term: "Emergency Lighting",
    slug: "emergency-lighting",
    definition: "Battery-backed lighting systems that illuminate exit paths during power failures, required in all commercial buildings.",
    longDescription: "Emergency lighting includes illuminated exit signs and emergency egress lighting that activates automatically during power failure. NFPA 101 (Life Safety Code) and the International Building Code require emergency lighting in virtually all commercial buildings. Testing requirements include: monthly 30-second functional test (verify lights activate on power loss), annual 90-minute functional test (full battery duration), and documentation of all test results. The annual 90-minute test is particularly important and frequently failed — batteries degrade over time and many units fail before reaching full duration. Emergency lighting is one of the most commonly cited deficiencies during fire marshal inspections. For fire protection contractors, emergency lighting testing is a straightforward recurring service that can be bundled with other inspections.",
    relatedTerms: ["nfpa-101", "means-of-egress", "inspection-frequency", "deficiency-tracking"],
    category: "Life Safety",
  },
  {
    term: "Means of Egress",
    slug: "means-of-egress",
    definition: "The continuous and unobstructed path of travel from any point in a building to a public way — exit access, exit, and exit discharge.",
    longDescription: "Means of egress is the complete path of travel from any occupied point in a building to a public way (street, alley, yard). NFPA 101 defines three components: exit access (the portion leading to an exit, such as corridors and aisles), the exit itself (a protected path providing a way to the exit discharge, such as enclosed stairwells, exit passageways, or exterior doors), and exit discharge (the path from the exit to the public way). Requirements include minimum width, maximum travel distance to an exit, minimum number of exits per floor, illumination, exit signage, door hardware (panic hardware in assembly occupancies), and prohibition of obstructions. Means of egress violations are among the most serious fire code violations and are frequently cited during inspections. Regular assessment ensures occupant safety and code compliance.",
    relatedTerms: ["nfpa-101", "emergency-lighting", "fire-door-inspection", "ahj"],
    category: "Life Safety",
  },
  {
    term: "AHJ (Authority Having Jurisdiction)",
    slug: "ahj",
    definition: "The organization, office, or individual responsible for enforcing fire codes and approving fire protection systems in a given jurisdiction.",
    longDescription: "The Authority Having Jurisdiction (AHJ) is the entity responsible for enforcing fire codes and standards in a particular geographic area. AHJs include fire marshals, fire prevention bureaus, building departments, insurance carriers, and federal agencies (for their own facilities). The AHJ has the authority to approve equipment, installations, and procedures; interpret code requirements; and grant exceptions or variances. Fire protection contractors must understand their local AHJ's specific requirements because enforcement and interpretation vary significantly between jurisdictions. Some AHJs require specific forms or reporting formats, annual permits, and direct notification of system impairments. Building a strong working relationship with the AHJ is essential for fire protection businesses. FireLog generates reports in formats commonly required by AHJs.",
    relatedTerms: ["nfpa-25", "nfpa-72", "inspection-frequency", "deficiency-tracking"],
    category: "Business & Compliance",
  },
  {
    term: "Inspection Frequency",
    slug: "inspection-frequency",
    definition: "The required intervals at which fire protection systems must be inspected and tested per applicable NFPA standards.",
    longDescription: "Inspection frequency refers to the mandated intervals for inspecting and testing various fire protection systems. Frequencies are defined by NFPA standards and enforced by the AHJ. Common frequencies include: daily (fire pump visual check in some facilities), weekly (valve positions, gauges), monthly (fire extinguisher visual, sprinkler valve positions), quarterly (fire alarm device testing, waterflow alarm testing), semi-annual (kitchen hood suppression, clean agent systems), annual (comprehensive sprinkler inspection, fire alarm testing, fire extinguisher maintenance, fire door inspection, emergency lighting 90-min test), 3-year (fire pump flow test), 5-year (sprinkler internal pipe inspection, standpipe hydrostatic test, dry system trip test), and longer intervals for specialized items. Tracking these overlapping frequencies across multiple buildings and system types is the core scheduling challenge FireLog solves.",
    relatedTerms: ["nfpa-25", "nfpa-72", "sprinkler-inspection", "ahj"],
    category: "Business & Compliance",
  },
  {
    term: "Deficiency Tracking",
    slug: "deficiency-tracking",
    definition: "The process of documenting, prioritizing, and resolving deficiencies found during fire protection inspections.",
    longDescription: "Deficiency tracking is the systematic process of recording, categorizing, communicating, and resolving problems found during fire protection inspections. Deficiencies range from minor (missing extinguisher signage) to critical (inoperable fire pump, blocked exits). NFPA standards require that deficiencies be documented in inspection reports, communicated to the building owner/manager, and corrected in a timely manner. Critical deficiencies (impaired systems) require immediate notification to the AHJ and implementation of a fire watch in some cases. An effective deficiency tracking system includes: initial documentation with photos, severity classification, notification to responsible parties, target resolution date, corrective action performed, and verification of completion. Unresolved deficiencies represent both liability risk and revenue opportunity (repair services). FireLog tracks deficiencies from identification through resolution with automated notifications.",
    relatedTerms: ["ahj", "inspection-frequency", "fire-watch", "impairment"],
    category: "Documentation",
  },
  {
    term: "Fire Watch",
    slug: "fire-watch",
    definition: "A temporary measure requiring continuous surveillance of a building when fire protection systems are impaired or out of service.",
    longDescription: "A fire watch is a temporary measure implemented when a building's fire protection systems are impaired, out of service, or otherwise unable to function as designed. The fire watch involves assigning trained personnel to continuously patrol the affected area, watching for signs of fire and prepared to initiate building evacuation and contact the fire department. Fire watches are required by NFPA 25 when sprinkler systems are impaired for more than 4 hours in a 24-hour period, and by the AHJ whenever fire protection systems are out of service. Fire watch requirements include documented patrol logs, trained personnel with communication devices, knowledge of the building layout and evacuation plan, and notification to the AHJ. Fire watch services can be a revenue opportunity for fire protection companies, though the primary goal is ensuring occupant safety during system impairments.",
    relatedTerms: ["impairment", "deficiency-tracking", "ahj", "nfpa-25"],
    category: "Life Safety",
  },
  {
    term: "Impairment",
    slug: "impairment",
    definition: "A condition where a fire protection system is partially or fully out of service and unable to perform its intended function.",
    longDescription: "An impairment is any condition that renders a fire protection system partially or fully unable to perform its intended function. Impairments can be planned (system shutdown for maintenance, construction, or modification) or unplanned (equipment failure, water supply interruption, power outage). NFPA 25 requires a formal impairment handling procedure including: notification to the building owner, insurance carrier, and AHJ; implementation of alternative protection measures (fire watch, temporary connections); tagging of impaired equipment; setting a target restoration date; and documenting the entire process. The impairment coordinator (typically the building owner's representative) is responsible for ensuring these steps are followed. Failure to manage impairments properly creates significant liability — if a fire occurs during an undocumented impairment, insurance coverage may be affected.",
    relatedTerms: ["fire-watch", "nfpa-25", "deficiency-tracking", "ahj"],
    category: "Documentation",
  },
  {
    term: "Smoke Detector",
    slug: "smoke-detector",
    definition: "A fire detection device that senses smoke particles in the air, triggering the fire alarm system to alert occupants.",
    longDescription: "Smoke detectors are fire detection devices that sense smoke particles and trigger the fire alarm system. Two primary technologies are used: ionization detectors (respond faster to flaming fires with small particles) and photoelectric detectors (respond faster to smoldering fires with larger particles). Many modern detectors are multi-criteria, combining both technologies with CO detection and heat sensing. NFPA 72 requires functional testing annually, sensitivity testing within 1 year of installation and every 2 years thereafter, and replacement if sensitivity is outside the listed range and cannot be adjusted. Smoke detectors are the most numerous fire alarm component in most buildings — a large commercial building may have hundreds or thousands. Proper documentation of each detector's location, test date, and sensitivity reading is essential for compliance. FireLog manages detector inventories and testing schedules at the device level.",
    relatedTerms: ["nfpa-72", "fire-alarm-testing", "fire-alarm-control-panel"],
    category: "Life Safety",
  },
  {
    term: "Fire Alarm Control Panel (FACP)",
    slug: "fire-alarm-control-panel",
    definition: "The central hub of a fire alarm system that receives signals from detection devices, activates notification, and communicates with monitoring.",
    longDescription: "The Fire Alarm Control Panel (FACP) is the brain of the fire alarm system. It receives signals from initiating devices (smoke detectors, pull stations, waterflow switches, etc.), processes them according to programmed logic, activates notification appliances (horns, strobes), controls building systems (elevator recall, HVAC shutdown, door release), and communicates alarm signals to the central monitoring station. FACP inspection and testing per NFPA 72 includes verifying all programming, testing each zone and circuit, verifying backup battery capacity (24 hours standby + 5 or 15 minutes alarm), testing communication paths to the monitoring station, and documenting all test results. The FACP is the most critical single component of the fire alarm system — a malfunctioning panel can render the entire system inoperative. Annual FACP testing requires coordination with the monitoring company to avoid false dispatch.",
    relatedTerms: ["nfpa-72", "fire-alarm-testing", "smoke-detector", "ahj"],
    category: "Fire Suppression",
  },
  {
    term: "NICET Certification",
    slug: "nicet-certification",
    definition: "National Institute for Certification in Engineering Technologies — the primary professional certification for fire protection technicians.",
    longDescription: "NICET (National Institute for Certification in Engineering Technologies) offers the most widely recognized professional certifications for fire protection technicians. Key certification programs include: Fire Alarm Systems (Levels I-IV), Water-Based Systems Layout (Levels I-IV), Inspection and Testing of Water-Based Systems (Levels I-IV), and Special Hazards Suppression Systems (Levels I-IV). NICET certification is increasingly required by AHJs, state licensing boards, and employers. Certification requires passing examinations, demonstrating work experience, and maintaining certification through continuing education. Many jurisdictions require NICET Level II or higher for technicians performing inspections, and Level III or IV for system designers. NICET certification demonstrates competency and professionalism, and is a competitive advantage for fire protection companies.",
    relatedTerms: ["ahj", "inspection-frequency", "fire-alarm-testing", "sprinkler-inspection"],
    category: "Business & Compliance",
  },
];

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return GLOSSARY_TERMS.find((t) => t.slug === slug);
}

export function getGlossaryTermsByCategory(category: string): GlossaryTerm[] {
  return GLOSSARY_TERMS.filter((t) => t.category === category);
}

export function getAllGlossarySlugs(): string[] {
  return GLOSSARY_TERMS.map((t) => t.slug);
}
