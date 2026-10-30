const image = (file) => `/reachout-visualizations/${file}`;

export const reachoutVisualizations = [
  {
    "id": 1,
    "file": "sss_viz_01_cohort_at_a_glance.png",
    "title": "Cohort at a glance",
    "category": "Overview",
    "tags": [
      "cohort",
      "kpi",
      "featured"
    ],
    "takeaway": "53 families reached SSS online: over half already metastatic, one in three previously misdiagnosed, three in four seeking a second opinion.",
    "interpretation": "Eight headline numbers from all 53 outreach records: volume, who made contact, median age, metastatic share, prior misdiagnosis, cancer awareness, mutation testing and second-opinion requests.",
    "points": [
      "53 outreach records were received through the SSS website between Dec 2025 and Jun 2026.",
      "77% (41 of 53) of contacts were made by a caregiver, not the patient.",
      "Median patient age is 39 years (range 11–75); this is an adult cohort with a wide age span.",
      "53% (28 of 53) were already metastatic when they reached SSS, so most families arrive late in the disease course.",
      "32% (17 of 53) report having been misdiagnosed earlier.",
      "Only 25% (13 of 53) had any awareness of cancer before their own diagnosis.",
      "96% had a biopsy but only 34% (18) had a mutation test, a large gap in molecular work-up for a disease where subtype drives treatment.",
      "77% (41) explicitly asked for a second opinion, which is the single most common reason for contact."
    ],
    "caution": null
  },
  {
    "id": 2,
    "file": "sss_viz_02_who_reaches_out_waffle.png",
    "title": "Who reaches out",
    "category": "Patients",
    "tags": [
      "caregiver",
      "waffle"
    ],
    "takeaway": "Three in four first contacts come from a family member, especially for older patients.",
    "interpretation": "Waffle chart: one square per record, split into caregiver-initiated (41) and patient-initiated (12) contacts, coloured by the patient's gender.",
    "points": [
      "Caregivers made 41 of 53 contacts (77%): 20 on behalf of female patients and 21 for male patients.",
      "Only 12 patients (23%) contacted SSS themselves: 5 women and 7 men.",
      "Median patient age is 49 years when a caregiver writes in, versus 31 when the patient writes in.",
      "23 of the 24 patients aged 45 or over were represented by a caregiver.",
      "Implication: SSS communication and counselling material should be designed for family members as much as for patients."
    ],
    "caution": null
  },
  {
    "id": 3,
    "file": "sss_viz_03_age_beeswarm_by_gender.png",
    "title": "Age profile",
    "category": "Patients",
    "tags": [
      "age",
      "gender",
      "beeswarm"
    ],
    "takeaway": "Sarcoma affects every age here, 11 to 75 years; women and metastatic patients present older.",
    "interpretation": "Beeswarm: each dot is a patient, placed by age, split by gender and coloured red (metastatic) or navy (non-metastatic). Vertical bars mark gender medians.",
    "points": [
      "Patients range from 11 to 75 years; mean age 43.8, median 39.",
      "Men are younger: median 35.5 years (n=28) versus 48 for women (n=25).",
      "Red (metastatic) dots cluster at older ages: median age 49.5 for metastatic patients versus 36 for non-metastatic.",
      "Among men there is a dense young group (late teens to mid-30s) and a separate older group above 50.",
      "Sarcoma in this cohort is not confined to children or young adults; every decade from teens to 70s is represented."
    ],
    "caution": null
  },
  {
    "id": 4,
    "file": "sss_viz_04_age_sex_pyramid.png",
    "title": "Age & sex pyramid",
    "category": "Patients",
    "tags": [
      "age",
      "gender",
      "pyramid"
    ],
    "takeaway": "Young adult sarcoma in this cohort is mainly male; older patients are more often women.",
    "interpretation": "Population pyramid by age band (0–17, 18–29, 30–44, 45–59, 60+). Women left, men right; darker segment = metastatic.",
    "points": [
      "The 18–29 band is mostly men: 9 men versus 3 women.",
      "From 45 upwards women are equal or more numerous: 45–59 has 7 women and 4 men; 60+ has 7 women and 6 men.",
      "30–44 is the largest band (15 patients: 7 women, 8 men).",
      "Only 2 patients are under 18 (1 girl, 1 boy).",
      "Metastatic segments grow with age in both sexes; most patients aged 60+ are metastatic."
    ],
    "caution": "Band sizes are small (2–15), so read proportions as indicative."
  },
  {
    "id": 5,
    "file": "sss_viz_05_metastatic_share_by_age.png",
    "title": "Disease stage by age",
    "category": "Patients",
    "tags": [
      "age",
      "metastatic"
    ],
    "takeaway": "Three in four patients aged 60+ were already metastatic when they contacted SSS.",
    "interpretation": "100% stacked bars: share of each age band that is metastatic at outreach, with the cohort average (53%) marked.",
    "points": [
      "Metastatic share by age: 0–17: 1 of 2 (50%); 18–29: 5 of 12 (42%); 30–44: 6 of 15 (40%); 45–59: 6 of 11 (55%); 60+: 10 of 13 (77%).",
      "Patients aged 60+ are the most likely to be metastatic, 24 points above the cohort average.",
      "Patients under 45 are below average (12 of 29, 41%).",
      "Possible reasons to discuss (not proven by these data): later presentation, delayed referral, or more aggressive histologies in older adults."
    ],
    "caution": "0–17 band has only 2 patients."
  },
  {
    "id": 6,
    "file": "sss_viz_06_geography_regions_states.png",
    "title": "Geography",
    "category": "Patients",
    "tags": [
      "geography",
      "india",
      "international"
    ],
    "takeaway": "One website, 19 Indian states and 4 countries: sarcoma families search nationally for expertise.",
    "interpretation": "Left: records by region of India (plus international), split metastatic/non-metastatic. Right: every state or country of residence.",
    "points": [
      "Patients came from 19 Indian states/union territories and 4 other countries (Nepal, Bangladesh, Australia, USA): a national and international reach from one website.",
      "North India supplies the most records (19, 36%), followed by South India (14, 26%) and West India (9, 17%).",
      "Top states: Maharashtra 7, Delhi 6, Uttar Pradesh 5, Tamil Nadu 4; Karnataka, Telangana and Jammu & Kashmir 3 each.",
      "South India stands out for advanced disease: 11 of 14 (79%) southern patients were metastatic, versus 8 of 19 (42%) in North India.",
      "East & North-East India (5) and Central India (2) are under-represented, a possible gap for awareness work."
    ],
    "caution": "Regional splits rest on small numbers; zones are groupings made for readability."
  },
  {
    "id": 7,
    "file": "sss_viz_07_education_occupation_marital.png",
    "title": "Social profile",
    "category": "Patients",
    "tags": [
      "education",
      "occupation"
    ],
    "takeaway": "Nine in ten patients reaching SSS online hold a degree: digital outreach may miss less-educated families.",
    "interpretation": "Three panels: highest education, occupation (grouped) and marital status of patients.",
    "points": [
      "Highly educated cohort: 44 graduates (83%) and 4 postgraduates (8%), so 91% hold a degree.",
      "Homemakers are the largest occupation group (17, 32%), almost all women (16 of 17).",
      "Private-sector employees 10 (19%), students 6 (11%, aged 11–24), engineering/IT 4, retired 3, business/banking 3, health & academia 3, government 2, unemployed 1; 4 not reported.",
      "83% (44) are married.",
      "Implication: online outreach reaches educated, connected families; less-educated and rural patients may not be finding SSS through the website."
    ],
    "caution": "Education reflects who uses the website, not sarcoma risk."
  },
  {
    "id": 8,
    "file": "sss_viz_08_diagnosis_landscape.png",
    "title": "Diagnosis landscape",
    "category": "Disease",
    "tags": [
      "diagnosis",
      "subtypes"
    ],
    "takeaway": "23 different diagnoses in 53 patients: sarcoma's diversity is why expert review matters.",
    "interpretation": "Horizontal bars for all 23 working diagnoses, coloured by tumour family; red tick and label show how many were metastatic.",
    "points": [
      "23 distinct diagnoses in 53 patients; 13 diagnoses appear only once, typical of sarcoma's rarity and heterogeneity.",
      "Fibromatosis (desmoid) is the most common enquiry (12, 23%), and none of the 12 is metastatic.",
      "GIST 6 (4 metastatic), synovial sarcoma 6 (4 metastatic), leiomyosarcoma 4 (3 metastatic).",
      "Excluding fibromatosis, 28 of 41 patients (68%) were metastatic.",
      "Rare entities include DSRCT, ASPS, epithelioid sarcoma, rhabdomyosarcoma and endometrial stromal sarcoma: the kind of cases that need a specialist second opinion."
    ],
    "caution": null
  },
  {
    "id": 9,
    "file": "sss_viz_09_tumour_family_sunburst.png",
    "title": "Tumour families (sunburst)",
    "category": "Disease",
    "tags": [
      "diagnosis",
      "sunburst",
      "family"
    ],
    "takeaway": "Soft-tissue sarcomas are nearly half of all enquiries; one in three involves an intermediate tumour such as fibromatosis.",
    "interpretation": "Two-ring sunburst. Inner ring: tumour family. Outer ring: individual diagnoses within each family.",
    "points": [
      "Soft-tissue sarcomas form nearly half of enquiries (25, 47%).",
      "Intermediate/benign soft-tissue tumours (fibromatosis, DFSP, giant cell tumour, neurofibroma) are 16 (30%).",
      "GIST 6 (11%) and bone sarcomas 5 (9%: osteosarcoma 2, Ewing 2, chondrosarcoma 1).",
      "One carcinoma (renal cell) enquiry shows that some non-sarcoma patients also reach SSS.",
      "Within soft-tissue sarcomas, synovial sarcoma (6) and leiomyosarcoma (4) lead."
    ],
    "caution": null
  },
  {
    "id": 10,
    "file": "sss_viz_10_tumour_site_body_map.png",
    "title": "Where the tumours are (body map)",
    "category": "Disease",
    "tags": [
      "tumour site",
      "body map"
    ],
    "takeaway": "Abdomen and thigh are the commonest sarcoma sites; a painless thigh or abdominal lump needs specialist imaging.",
    "interpretation": "Schematic body map. Bubble size = number of patients by anatomical region; red ring = share metastatic. Labels list the recorded sites.",
    "points": [
      "Abdomen & GI tract is the commonest region (16, 30%: abdomen 8, stomach 3, small intestine 2, abdominal wall 2, left abdomen 1).",
      "Lower limb is second (14, 26%), dominated by the thigh (left 6, right 3).",
      "Together abdomen and legs account for 57% (30 of 53) of tumour sites.",
      "Pelvis/hip/uterus 7; head & neck, trunk & back, upper limb and kidney/retroperitoneum 4 each.",
      "Metastatic share by region: lower limb 8/14, pelvis 4/7, head & neck 3/4, trunk 3/4, kidney/retroperitoneum 3/4, upper limb 2/4, but abdomen only 5/16, partly because most abdominal-wall/abdomen cases are fibromatosis."
    ],
    "caution": "Schematic only; positions show region, not exact site."
  },
  {
    "id": 11,
    "file": "sss_viz_11_workup_by_metastatic_status.png",
    "title": "Diagnostic work-up",
    "category": "Diagnostic gaps",
    "tags": [
      "biopsy",
      "pet-ct",
      "mutation",
      "work-up",
      "featured"
    ],
    "takeaway": "Everyone gets a biopsy, but only one in three gets a mutation test, and mostly after the disease has spread.",
    "interpretation": "Dumbbell chart: percentage of metastatic (red) vs non-metastatic (navy) patients with biopsy, PET-CT, mutation test and all three. Grey bar = whole cohort.",
    "points": [
      "Biopsy is near-universal and equal: 96% in both groups (51 of 53 overall).",
      "PET-CT: 89% of metastatic vs 32% of non-metastatic patients (+57 points); 62% overall.",
      "Mutation testing: 50% of metastatic vs 16% of non-metastatic (+34 points); only 34% overall.",
      "All three investigations: 43% of metastatic patients (12) vs 0% of non-metastatic.",
      "Mutation testing was only ever recorded alongside a biopsy.",
      "Interpretation: molecular testing appears to be used late, after spread, rather than at first diagnosis when it could refine the subtype."
    ],
    "caution": "'No' may mean not done or not reported."
  },
  {
    "id": 12,
    "file": "sss_viz_12_awareness_misdiagnosis_mosaic.png",
    "title": "Awareness and misdiagnosis",
    "category": "Diagnostic gaps",
    "tags": [
      "awareness",
      "misdiagnosis",
      "mosaic"
    ],
    "takeaway": "Patients with no prior cancer awareness were more often misdiagnosed (35% vs 23%).",
    "interpretation": "Mosaic chart: column width = patients with/without prior cancer awareness; red height = share previously misdiagnosed.",
    "points": [
      "75% (40) of patients had no awareness of cancer before their diagnosis.",
      "Among them 35% (14 of 40) report a previous misdiagnosis, versus 23% (3 of 13) among those already aware.",
      "Direction is consistent with low awareness leading to delayed or incorrect diagnosis.",
      "The difference is not statistically significant (Fisher's exact p = 0.51), so it is a hypothesis to test in larger data."
    ],
    "caution": "Not statistically significant; only 13 aware patients."
  },
  {
    "id": 13,
    "file": "sss_viz_13_misdiagnosis_vs_final_change.png",
    "title": "Diagnostic discordance",
    "category": "Diagnostic gaps",
    "tags": [
      "misdiagnosis",
      "discordance"
    ],
    "takeaway": "One in three diagnoses changed between first and final report.",
    "interpretation": "Bubble matrix: patient-reported prior misdiagnosis (rows) vs whether the final diagnosis differs from the initial one (columns).",
    "points": [
      "12 of 17 patients (71%) who reported a misdiagnosis had a final diagnosis different from their first.",
      "5 patients who did not report a misdiagnosis also had their diagnosis revised, so families may under-recognise diagnostic changes.",
      "30 of 36 (83%) who did not report a misdiagnosis kept the same diagnosis.",
      "Overall 17 of 53 diagnoses (32%) were revised between first and final report.",
      "The two questions agree strongly (phi 0.57), which supports the reliability of the self-reported data."
    ],
    "caution": null
  },
  {
    "id": 14,
    "file": "sss_viz_14_initial_to_final_family_alluvial.png",
    "title": "How diagnoses shift (alluvial)",
    "category": "Diagnostic gaps",
    "tags": [
      "alluvial",
      "sankey",
      "diagnosis revision",
      "featured"
    ],
    "takeaway": "Four tumours first called benign or intermediate proved to be malignant sarcoma.",
    "interpretation": "Alluvial (Sankey) flow of all 53 patients from initial to final diagnosis grouped by tumour family. Red ribbons = family changed.",
    "points": [
      "Most patients stay in the same family, but 6 change family.",
      "4 tumours first labelled benign or intermediate became malignant soft-tissue sarcoma: fibromatosis to myxofibrosarcoma, lipoma to liposarcoma, DFSP to high-grade sarcoma, giant cell tumour to UPS.",
      "Soft-tissue sarcoma grows from 23 initial to 26 final diagnoses; intermediate/benign shrinks from 18 (1 benign + 17 intermediate) to 13.",
      "2 records have no final diagnosis reported.",
      "Clinical message: benign-appearing soft-tissue masses need expert pathology review, because down-grading at first diagnosis can delay sarcoma treatment."
    ],
    "caution": null
  },
  {
    "id": 15,
    "file": "sss_viz_15_diagnosis_revision_ledger.png",
    "title": "Diagnosis revision ledger",
    "category": "Diagnostic gaps",
    "tags": [
      "diagnosis revision",
      "ledger"
    ],
    "takeaway": "17 diagnoses revised; 7 of them changes that would usually alter treatment.",
    "interpretation": "List of every one of the 17 revised diagnoses, grouped by clinical significance.",
    "points": [
      "Benign/intermediate to malignant (4): fibromatosis to myxofibrosarcoma; lipoma to liposarcoma; DFSP to high-grade sarcoma; giant cell tumour to UPS.",
      "Sarcoma histotype reclassified (3): rhabdomyosarcoma to leiomyosarcoma; leiomyosarcoma to liposarcoma; myxofibrosarcoma to leiomyosarcoma.",
      "Subtype or grade refined (4): uterine sarcoma to endometrial stromal sarcoma; high-grade osteosarcoma to osteosarcoma; pleomorphic sarcoma to high-grade sarcoma; fibrosarcoma to high-grade sarcoma.",
      "Final diagnosis not reported (1): fibrosarcoma.",
      "Flagged as changed but same label recorded (5): liposarcoma, fibromatosis, synovial sarcoma, ASPS, neurofibroma, probably grade/subtype changes not captured in the label.",
      "7 of 17 revisions (4 upgrades + 3 histotype changes) would usually change treatment, which is the core case for expert second opinion."
    ],
    "caution": "Clinical significance grouping is an interpretation; confirm with the treating team."
  },
  {
    "id": 16,
    "file": "sss_viz_16_years_since_diagnosis.png",
    "title": "Time to outreach",
    "category": "Time to help",
    "tags": [
      "delay",
      "years since diagnosis"
    ],
    "takeaway": "Half of families reach SSS four or more years after diagnosis; earlier signposting is needed.",
    "interpretation": "Histogram of years from first diagnosis to contacting SSS (red = metastatic), with cumulative share line.",
    "points": [
      "Median 4 years, mean 3.8, maximum 15 years from first diagnosis to contact.",
      "49% (26) reached SSS within 3 years; 51% (27) took 4 years or more.",
      "Peaks at 1 year (12 patients) and 4 years (13 patients).",
      "4 patients contacted SSS 11–15 years after diagnosis, so long-term survivors still need support.",
      "Only 1 patient contacted SSS in the same year as diagnosis: SSS is reached late, not at first diagnosis."
    ],
    "caution": "Years calculated as outreach year minus first-diagnosis year."
  },
  {
    "id": 17,
    "file": "sss_viz_17_time_to_outreach_raincloud.png",
    "title": "Who arrives later (raincloud)",
    "category": "Time to help",
    "tags": [
      "delay",
      "raincloud",
      "misdiagnosis"
    ],
    "takeaway": "Misdiagnosed and metastatic patients reach SSS about a year later, a signal worth tracking.",
    "interpretation": "Raincloud plots (distribution + box + dots) of years from diagnosis to outreach, comparing previously misdiagnosed vs not, and metastatic vs non-metastatic.",
    "points": [
      "Previously misdiagnosed patients: median 4 years (mean 4.1) versus 3 years (mean 3.7) for others.",
      "Metastatic patients: median 4 years (mean 4.0) versus 3 years (mean 3.6) for non-metastatic.",
      "Both groups with a worse journey arrive about one year later.",
      "Neither difference is statistically significant (Mann–Whitney p = 0.25 and 0.52).",
      "The long right tail (11–15 years) is mostly non-misdiagnosed patients, i.e. long-term survivors seeking support."
    ],
    "caution": "Not statistically significant at n=53."
  },
  {
    "id": 18,
    "file": "sss_viz_18_treatment_by_metastatic_status.png",
    "title": "Treatment received",
    "category": "Treatment",
    "tags": [
      "treatment",
      "metastatic"
    ],
    "takeaway": "Surgery comes first for everyone; chemotherapy and radiation concentrate in metastatic disease.",
    "interpretation": "Dumbbell chart: share of metastatic vs non-metastatic patients who received surgery, medical therapy, chemotherapy, radiation, or no recorded treatment.",
    "points": [
      "Surgery is the backbone in both groups: 75% metastatic vs 68% non-metastatic (72% overall, 38 patients).",
      "Medical (targeted/systemic) therapy: 64% vs 32%.",
      "Chemotherapy: 54% vs 16% (36% overall).",
      "Radiation: 25% vs 4%; only 8 patients overall (15%), which is low for sarcoma, where radiotherapy is often part of local control.",
      "No treatment recorded: 28% of non-metastatic (7) vs 4% of metastatic (1); 4 of the 8 untreated have fibromatosis, where active surveillance is often appropriate."
    ],
    "caution": null
  },
  {
    "id": 19,
    "file": "sss_viz_19_treatment_combinations_upset.png",
    "title": "Treatment combinations (UpSet)",
    "category": "Treatment",
    "tags": [
      "treatment",
      "upset",
      "combinations"
    ],
    "takeaway": "Eleven treatment combinations in 53 patients: sarcoma care is highly individual.",
    "interpretation": "UpSet chart: each bar is a unique combination of surgery, medical therapy, chemotherapy and radiation (dots below show which); red = metastatic.",
    "points": [
      "11 different treatment combinations among 53 patients, showing how individualised sarcoma care is.",
      "Most common: surgery alone (12), surgery + medical therapy (10), no treatment recorded (8).",
      "Then surgery + chemo + medical (5), all four modalities (4), chemo + medical (4), surgery + chemo (4).",
      "3 of the 4 patients who received every modality, and all 4 on chemo + medical therapy without surgery, are metastatic.",
      "Multi-modality treatment is mostly in metastatic patients (22 of 31); single-modality or no treatment is mostly non-metastatic (16 of 22)."
    ],
    "caution": null
  },
  {
    "id": 20,
    "file": "sss_viz_20_treatment_pathway_alluvial.png",
    "title": "Treatment pathways (alluvial)",
    "category": "Treatment",
    "tags": [
      "treatment",
      "alluvial",
      "pathway"
    ],
    "takeaway": "Metastatic patients branch into more treatment lines at every step.",
    "interpretation": "Five-stage alluvial: disease status, then surgery, chemotherapy, radiation and medical therapy. Ribbon colour = metastatic (red) or not (grey).",
    "points": [
      "Of 53 patients: surgery 38 (72%), chemotherapy 19 (36%), radiation 8 (15%), medical therapy 26 (49%).",
      "Red (metastatic) ribbons widen into the chemo, radiation and medical-therapy branches at each step.",
      "Grey (non-metastatic) ribbons mainly follow surgery, then no chemo and no radiation.",
      "Medical therapy is split almost evenly (26 yes vs 27 no), but 18 of the 26 are metastatic.",
      "Shows treatment intensity rising with disease stage, as expected clinically."
    ],
    "caution": "Shows which treatments were received, not their order in time."
  },
  {
    "id": 21,
    "file": "sss_viz_21_patient_journey_barcode.png",
    "title": "Every patient, every step (barcode)",
    "category": "Treatment",
    "tags": [
      "barcode",
      "journey",
      "matrix",
      "featured"
    ],
    "takeaway": "53 journeys at a glance: metastatic patients carry the heaviest load of tests, treatments and misdiagnosis.",
    "interpretation": "Matrix of 53 anonymised columns (one per patient) and 14 yes/no items (diagnosis, treatment and context), sorted by metastatic status and tumour family.",
    "points": [
      "Left block (metastatic): dense red for PET-CT and mutation testing and dense navy for chemo/medical therapy, a visibly heavier diagnostic and treatment load.",
      "Prior misdiagnosis and diagnosis revision cluster in the metastatic block (13 of 17 misdiagnosed patients are metastatic).",
      "Right block (non-metastatic, mostly fibromatosis): biopsy and surgery only, sparse elsewhere.",
      "Context rows: cancer awareness 13, family history 5, comorbidities 7; caregiver-initiated contact (41) appears in both blocks.",
      "Useful as a poster centrepiece showing each patient's whole journey without identifying anyone."
    ],
    "caution": null
  },
  {
    "id": 22,
    "file": "sss_viz_22_medical_therapy_types.png",
    "title": "Medical therapies",
    "category": "Treatment",
    "tags": [
      "medical therapy",
      "targeted",
      "chemotherapy"
    ],
    "takeaway": "Half the cohort received medical therapy, mainly chemotherapy and targeted agents such as imatinib.",
    "interpretation": "Bars of 26 patients with medical therapy, grouped by therapy type and coloured by tumour family; right panel lists the exact text recorded.",
    "points": [
      "Chemotherapy alone 7 (mostly soft-tissue sarcoma) and targeted + chemotherapy 7 are the leading groups.",
      "Targeted therapy alone 5, 4 of them in GIST (imatinib-type therapy); imatinib was recorded for 4 patients (3 GIST, 1 fibromatosis).",
      "Named regimens include gemcitabine + docetaxel and ifosfamide + doxorubicin, standard sarcoma regimens.",
      "Single cases: immunotherapy (ASPS), denosumab (giant cell tumour) and brachytherapy (epithelioid sarcoma, recorded under medical therapy).",
      "4 records say only 'Yes' with no type, a data-quality gap for future collection.",
      "6 patients had multiple targeted therapies plus chemotherapy, showing multi-line systemic treatment."
    ],
    "caution": "Grouping of free-text therapy details is interpretive."
  },
  {
    "id": 23,
    "file": "sss_viz_23_requests_themes.png",
    "title": "What families ask for",
    "category": "Support",
    "tags": [
      "second opinion",
      "requests",
      "needs"
    ],
    "takeaway": "Three in four families come to SSS asking for a second opinion.",
    "interpretation": "Bars of request themes coded from the free-text 'Help Needed from SSS' field (a record can have several).",
    "points": [
      "Second opinion dominates: 41 of 53 requests (77%).",
      "39 requests name a specific SSS-linked sarcoma specialist, showing trust in named expertise.",
      "Meet/connect with a specialist 8 (15%); disease and treatment guidance 5 (9%).",
      "Specific clinical queries 4 (8%): clinical trials, genetic testing, access to avapritinib, and sending pathology blocks to a tertiary centre.",
      "Administrative help 1; 5 records repeat the support text instead of the request."
    ],
    "caution": "Theme coding of free text is interpretive."
  },
  {
    "id": 24,
    "file": "sss_viz_24_support_components.png",
    "title": "What SSS provided",
    "category": "Support",
    "tags": [
      "support",
      "counselling",
      "psychological"
    ],
    "takeaway": "Every family was counselled and nine in ten were linked to a sarcoma specialist and a peer group.",
    "interpretation": "Bars of support components coded from 'How SSS Helped This Patient', plus a strip showing how many components each record received.",
    "points": [
      "Emotional counselling: 100% (53).",
      "Disease education/guidance 96% (51); specialist connection 92% (49); peer/support group 89% (47); pathology & second-opinion facilitation 74% (39); administrative support 4% (2).",
      "70% (37) received all five core components and 21% (11) four, so 91% received a broad, multi-part package.",
      "37 records share an identical description, suggesting a standard SSS support protocol.",
      "Only 4 patients were not recorded as linked to a specialist."
    ],
    "caution": null
  },
  {
    "id": 25,
    "file": "sss_viz_25_request_to_support_sankey.png",
    "title": "From request to response (Sankey)",
    "category": "Support",
    "tags": [
      "sankey",
      "support",
      "needs",
      "featured"
    ],
    "takeaway": "Whatever families ask for, SSS answers with a bundle: counselling, education, specialist and peer support.",
    "interpretation": "Two-column Sankey linking request themes (left) to support components (right); link width = records sharing both.",
    "points": [
      "Second-opinion requests (41) flow into every major support component, not just a referral.",
      "36 of the 41 second-opinion requesters received the standard five-part package (counselling, education, specialist, peers, pathology/second-opinion facilitation).",
      "Smaller requests (guidance, specific queries, admin) also receive counselling and education.",
      "Message: SSS answers a narrow medical request with holistic, psychosocial plus clinical support."
    ],
    "caution": "Records appear in several links, so link widths are not additive to 53."
  },
  {
    "id": 26,
    "file": "sss_viz_26_association_matrix.png",
    "title": "What travels together (association matrix)",
    "category": "Patterns",
    "tags": [
      "association",
      "phi",
      "correlation"
    ],
    "takeaway": "Metastatic disease travels with PET-CT, chemotherapy and a history of misdiagnosis.",
    "interpretation": "Lower-triangle heatmap of phi coefficients between 16 yes/no indicators; ringed cells have Fisher's exact p < 0.05.",
    "points": [
      "Strongest pairs: metastatic and PET-CT (phi 0.59); previously misdiagnosed and diagnosis revised (0.57); PET-CT and chemotherapy (0.50).",
      "Metastatic status also links with chemotherapy (0.39), mutation test (0.36), prior misdiagnosis (0.33), diagnosis revised (0.33) and medical therapy (0.32).",
      "Cancer awareness links with family history of cancer (0.42): families who have seen cancer know its signs.",
      "Demographic pairs: age 45+ with married (0.41) and with caregiver-initiated contact (0.40).",
      "Diagnosis revision links with radiation (0.39): 6 of the 8 irradiated patients had a revised diagnosis.",
      "Women were slightly less often metastatic (phi −0.24, not significant)."
    ],
    "caution": "120 pairs tested without multiple-comparison correction; exploratory only."
  },
  {
    "id": 27,
    "file": "sss_viz_27_misdiagnosis_by_stage.png",
    "title": "Misdiagnosis and stage",
    "category": "Diagnostic gaps",
    "tags": [
      "misdiagnosis",
      "metastatic",
      "stage",
      "featured"
    ],
    "takeaway": "Metastatic patients were three times as likely to have been misdiagnosed first (46% vs 16%).",
    "interpretation": "Two dot grids (one circle per patient), metastatic vs non-metastatic, with filled red circles for prior misdiagnosis.",
    "points": [
      "46% (13 of 28) of metastatic patients reported a prior misdiagnosis, versus 16% (4 of 25) of non-metastatic.",
      "About 3 times the rate; odds ratio 4.5; Fisher's exact p = 0.022.",
      "Plausible link: a missed or wrong first diagnosis delays correct treatment, allowing spread.",
      "This is the strongest clinically actionable signal in the dataset and supports early expert pathology review."
    ],
    "caution": "Cross-sectional data: order of events and causation cannot be proven."
  },
  {
    "id": 28,
    "file": "sss_viz_28_caregiver_vs_patient_profile.png",
    "title": "Who speaks for whom",
    "category": "Patients",
    "tags": [
      "caregiver",
      "profile"
    ],
    "takeaway": "Caregivers speak for older patients with more advanced disease.",
    "interpretation": "Dumbbell chart comparing patients whose caregiver made contact (n=41) with those who contacted SSS themselves (n=12).",
    "points": [
      "Aged 45+: 56% when a caregiver writes vs 8% when the patient writes; median age 49 vs 31.",
      "Metastatic: 59% vs 33%. Received chemotherapy: 44% vs 8%. Had PET-CT: 66% vs 50%.",
      "Previously misdiagnosed is slightly higher among self-referring patients (42% vs 29%).",
      "Gender (49% vs 42% female) and cancer awareness (24% vs 25%) are similar.",
      "Interpretation: when patients are older or sicker, families take over the search for care."
    ],
    "caution": "Only 12 patient-initiated records."
  },
  {
    "id": 29,
    "file": "sss_viz_29_family_history_comorbidities.png",
    "title": "Background risk",
    "category": "Patterns",
    "tags": [
      "family history",
      "comorbidities"
    ],
    "takeaway": "Most patients had no family history and no prior awareness; sarcoma arrives unannounced.",
    "interpretation": "Left: one square per patient showing family history of cancer and cancer awareness. Right: comorbidities recorded.",
    "points": [
      "Family history of cancer is uncommon: 5 of 53 (9%).",
      "4 of those 5 were already cancer-aware, against 9 of 48 (19%) without a family history.",
      "39 patients (74%) had neither a family history nor prior cancer awareness.",
      "Comorbidities in 7 (13%): hypertension 3, thyroid disorder 2, high cholesterol 1, prior breast cancer with hypertension and diabetes 1.",
      "Patients with comorbidities are older (median 56 vs 38 years).",
      "One patient has a previous breast cancer, a reminder to consider second primaries and survivorship care."
    ],
    "caution": null
  },
  {
    "id": 30,
    "file": "sss_viz_30_about_the_data.png",
    "title": "About the data (methods panel)",
    "category": "Overview",
    "tags": [
      "methods",
      "limitations"
    ],
    "takeaway": "Retrospective analysis of 53 SSS website outreach records (Dec 2025 – Jun 2026).",
    "interpretation": "Text panel with the data source, definitions and limitations.",
    "points": [
      "Use this panel on the poster as the 'Methods/Limitations' box.",
      "Source: SSS website outreach register, 53 records after cleaning and de-duplication.",
      "Records were entered on 4 dates (13 Dec 2025, 29 May 2026, 9 Jun 2026, 12 Jun 2026), so no time-trend analysis was done.",
      "Self-selected sample (people who contacted SSS), so it does not show population prevalence.",
      "Tests and treatments are as reported; statistical tests are exploratory."
    ],
    "caution": null
  },
  {
    "id": 31,
    "file": "sss_viz_31_key_findings.png",
    "title": "Key findings (summary panel)",
    "category": "Overview",
    "tags": [
      "summary",
      "key findings",
      "featured"
    ],
    "takeaway": "Late, often misdiagnosed and caregiver-led: SSS fills the gap with expert second opinions and holistic support.",
    "interpretation": "Seven headline findings in one panel, suitable as the poster's 'Results at a glance' or 'Conclusion' box.",
    "points": [
      "77% of contacts come from caregivers, who speak mostly for older patients.",
      "53% metastatic at outreach, rising to 10 of 13 aged 60+.",
      "17 of 53 diagnoses revised; 4 moved from a benign/intermediate label to malignant sarcoma.",
      "Prior misdiagnosis 46% in metastatic vs 16% in non-metastatic patients (p = 0.02).",
      "PET-CT 89% vs 32% and mutation testing 50% vs 16% in metastatic vs non-metastatic.",
      "Median 4 years from diagnosis to contacting SSS.",
      "77% seek a second opinion; 100% counselled; 92% linked to a specialist."
    ],
    "caution": null
  }
].map((item) => ({ ...item, src: image(item.file) }));

export const reachoutCategories = [
  "All",
  "Featured",
  "Overview",
  "Patients",
  "Disease",
  "Diagnostic gaps",
  "Time to help",
  "Treatment",
  "Support",
  "Patterns"
];

export const reachoutMetrics = [
  {
    "value": "53",
    "label": "digital enquiries analysed"
  },
  {
    "value": "77%",
    "label": "caregiver-initiated contact"
  },
  {
    "value": "53%",
    "label": "metastatic at contact"
  },
  {
    "value": "32%",
    "label": "previously misdiagnosed"
  }
];

export const reachoutInsights = [
  {
    "number": "01",
    "title": "Late arrival",
    "text": "53% were metastatic at contact; median 4 years from first diagnosis to reaching SSS."
  },
  {
    "number": "02",
    "title": "Diagnostic gaps",
    "text": "32% had a revised diagnosis; four benign or intermediate labels proved to be malignant sarcoma."
  },
  {
    "number": "03",
    "title": "Second opinion is the need",
    "text": "77% asked for a second opinion; SSS counselled 100% and linked 92% to a sarcoma specialist."
  },
  {
    "number": "04",
    "title": "Misdiagnosis and stage",
    "text": "Prior misdiagnosis: 46% of metastatic vs 16% of non-metastatic patients (p = 0.02)."
  },
  {
    "number": "05",
    "title": "Molecular testing gap",
    "text": "96% had a biopsy but only 34% a mutation test, mostly after metastasis."
  },
  {
    "number": "06",
    "title": "Caregivers lead",
    "text": "Caregivers made 77% of contacts, including 23 of 24 for patients aged 45 or over."
  }
];

export const reachoutAbstract = [
  {
    "heading": "Background",
    "text": "Sarcomas are rare, span more than 70 histological subtypes and are often misdiagnosed outside specialist centres. In low- and middle-income countries (LMICs) such as India, most patients begin care at local hospitals, and families frequently search online for sarcoma expertise. Sachin Sarcoma Society (SSS), a patient-led organization, analysed enquiries received through its digital channels to define navigation needs, diagnostic gaps and the support delivered."
  },
  {
    "heading": "Methods",
    "text": "We retrospectively analysed all website and email enquiries recorded in the SSS outreach register over 12 months (n=53 after removal of one duplicate). Variables included demographics, contact initiator, geography, initial and final diagnosis, metastatic status, investigations (biopsy, PET-CT, mutation testing), treatments received, cancer awareness, prior misdiagnosis, stated needs and SSS support provided. Free-text needs and support fields were thematically coded. Data were summarised descriptively; associations with metastatic status were explored with Fisher's exact test."
  },
  {
    "heading": "Results",
    "text": "Fifty-three individuals (28 male, 25 female; median age 39 years, range 11–75) from 19 Indian states/union territories (92%) and four other countries (8%) contacted SSS. Contact was caregiver-initiated in 77%, rising to 23 of 24 patients aged ≥45 years. Twenty-three diagnoses were represented: fibromatosis/desmoid 23%, GIST 11% and synovial sarcoma 11%. Care began at a local hospital in 98%, 75% were unaware the condition was cancer, and the median interval from first diagnosis to contact was 4 years. Overall, 53% were metastatic (77% of those aged ≥60). Prior misdiagnosis was reported by 32% and the final diagnosis differed from the initial one in 32%; four lesions first labelled benign or intermediate (lipoma, fibromatosis, DFSP, giant cell tumour) were reclassified as malignant sarcomas. Twelve of 17 misdiagnosed patients had undergone surgery before contacting SSS. Prior misdiagnosis was more frequent in metastatic than non-metastatic patients (46% vs 16%; OR 4.5; p=0.02). Although 96% had a biopsy, only 34% had mutation testing (50% metastatic vs 16% non-metastatic). A second opinion was the leading request (77%). SSS provided emotional counselling (100%), disease education (96%), sarcoma-specialist linkage (92%), peer support-group inclusion (89%) and pathology/second-opinion facilitation (74%); 70% received all five components."
  },
  {
    "heading": "Conclusion",
    "text": "Digital reach-outs to a patient-led organization reveal late, caregiver-driven searches for sarcoma expertise, frequent diagnostic revision (often after surgery had already been performed) including benign-to-malignant reclassification, and under-use of molecular testing. A structured navigation model combining psychological support, education, specialist linkage, peer support and second-opinion facilitation can bridge local care and specialist sarcoma services in LMICs. Early expert pathology review and sarcoma awareness among families and first-contact clinicians are priorities."
  }
];
