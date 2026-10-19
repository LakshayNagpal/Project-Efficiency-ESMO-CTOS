const image = (file) => `/pharma-visualizations/${file}`;

export const pharmaVisualizations = [
  {
    id: 1,
    file: "pharma_viz_01_annual_overview.png",
    title: "Annual Pharma donation activity",
    category: "Overview",
    tags: ["annual", "time", "amount"],
    takeaway: "Pharma donation activity expanded sharply during 2025 and 2026.",
    interpretation:
      "The programme recorded 94 donations in 2025 and 95 in the partial 2026 period, compared with 12 in 2024. Total donated amount rose from about 951,000 in 2025 to 1.36 million through August 2026. The 2023 and 2026 periods are incomplete.",
  },
  {
    id: 2,
    file: "pharma_viz_02_monthly_records_timeline.png",
    title: "Monthly Pharma donation volume",
    category: "Time",
    tags: ["monthly", "time", "records"],
    takeaway: "Donation volume arrived in distinct waves, peaking in April 2026.",
    interpretation:
      "April 2026 recorded 31 donation line-items, the highest monthly total. Other major clusters occurred in March 2025 and February 2026, demonstrating that Pharma donations were not distributed evenly over time.",
  },
  {
    id: 3,
    file: "pharma_viz_03_monthly_amount_timeline.png",
    title: "Monthly Pharma donated amount",
    category: "Time",
    tags: ["monthly", "time", "amount"],
    takeaway: "April 2026 was both the busiest and highest-amount month.",
    interpretation:
      "April 2026 contributed about 432,000, followed by February 2026 at approximately 387,000 and March 2025 at roughly 246,000. The timing of high amounts broadly follows record volume.",
  },
  {
    id: 4,
    file: "pharma_viz_04_companies_by_records.png",
    title: "Donor companies by records",
    category: "Companies",
    tags: ["company", "records", "concentration"],
    takeaway: "Natco supplied 190 of the 203 recorded Pharma donations.",
    interpretation:
      "Natco accounts for 93.6% of all Pharma donation records. Intas contributed six records, Cipla and MSN three each, and Zydus one. The programme is therefore highly dependent on one donor company.",
  },
  {
    id: 5,
    file: "pharma_viz_05_companies_by_amount.png",
    title: "Donor companies by amount",
    category: "Companies",
    tags: ["company", "amount", "concentration"],
    takeaway: "Natco contributed 94.6% of total Pharma donated amount.",
    interpretation:
      "Natco-associated donations total approximately 2.36 million of the 2.50 million overall amount. Intas is the second-largest donor at about 95,000, while other companies contribute substantially smaller totals.",
  },
  {
    id: 6,
    file: "pharma_viz_06_medicines_by_records.png",
    title: "Pharma medicines by records",
    category: "Medicines",
    tags: ["medicine", "records", "ranking"],
    takeaway: "Sorafenib 200 mg represents two-thirds of all Pharma donation records.",
    interpretation:
      "Sorafenib 200 mg appears in 134 records, or 66.0% of the total. Cabozantinib 20 mg is a distant second with 20 records, followed by Regorafenib 40 mg with ten.",
  },
  {
    id: 7,
    file: "pharma_viz_07_medicines_by_amount.png",
    title: "Pharma medicines by donated amount",
    category: "Value",
    tags: ["medicine", "amount", "ranking"],
    takeaway: "Sorafenib leads amount, while Trabectedin gains importance because of its high per-record value.",
    interpretation:
      "Sorafenib 200 mg contributes approximately 1.22 million, or 48.9% of total amount. Trabectedin 1 mg contributes about 315,000 from only six records, demonstrating the impact of high-value, lower-frequency medicines.",
  },
  {
    id: 8,
    file: "pharma_viz_08_medicines_by_quantity.png",
    title: "Pharma medicines by recorded quantity",
    category: "Quantity",
    tags: ["medicine", "quantity", "ranking"],
    takeaway: "Sorafenib 200 mg accounts for 645 of 779 recorded quantity units.",
    interpretation:
      "Sorafenib dominates recorded Qty No. because several entries are tablet-based. Quantity units include boxes, tablets, vials, doses and strips, so the total must not be interpreted as a standardized clinical dose.",
  },
  {
    id: 9,
    file: "pharma_viz_09_medicine_frequency_vs_amount.png",
    title: "Medicine frequency versus amount",
    category: "Medicines",
    tags: ["medicine", "amount", "scatter"],
    takeaway: "Frequent medicines usually contribute more amount, but high-value exceptions remain.",
    interpretation:
      "Sorafenib dominates both dimensions. Trabectedin, Cabozantinib 60 mg and Dexrazoxane sit above what their record counts alone would suggest because their average donated amounts are high.",
  },
  {
    id: 10,
    file: "pharma_viz_10_medicine_amount_concentration.png",
    title: "Pharma medicine amount concentration",
    category: "Value",
    tags: ["medicine", "pareto", "concentration"],
    takeaway: "The five highest-amount medicines contribute 85.0% of total donated amount.",
    interpretation:
      "The top three medicines contribute 70.4%, the top five 85.0% and the top ten 97.6%. Financial contribution is therefore concentrated in a very small medicine portfolio.",
  },
  {
    id: 11,
    file: "pharma_viz_11_brands_by_records.png",
    title: "Primary brands by records",
    category: "Brands",
    tags: ["brand", "records", "concentration"],
    takeaway: "The primary-brand field is strongly concentrated in Natco.",
    interpretation:
      "Natco is recorded as the primary brand/generic label in 178 records, or 87.7%. MSN, Cipla, Caberz and Esentra form a small secondary group.",
  },
  {
    id: 12,
    file: "pharma_viz_12_brands_by_amount.png",
    title: "Primary brands by amount",
    category: "Brands",
    tags: ["brand", "amount", "ranking"],
    takeaway: "Natco-labelled medicines contribute approximately 2.08 million.",
    interpretation:
      "The Natco primary-brand label accounts for about 83.3% of donated amount. Caberz ranks second at roughly 155,000, followed by MSN and Esentra.",
  },
  {
    id: 13,
    file: "pharma_viz_13_receiver_diagnoses_by_records.png",
    title: "Receiver diagnoses by records",
    category: "Diagnoses",
    tags: ["diagnosis", "records", "ranking"],
    takeaway: "Fibromatosis accounts for 126 records—62.1% of all Pharma donations.",
    interpretation:
      "Fibromatosis dominates receiver activity, followed by GIST with 12 records and Synovial Sarcoma with ten. The diagnosis distribution has a pronounced long tail.",
  },
  {
    id: 14,
    file: "pharma_viz_14_receiver_diagnoses_by_amount.png",
    title: "Receiver diagnoses by donated amount",
    category: "Diagnoses",
    tags: ["diagnosis", "amount", "ranking"],
    takeaway: "Fibromatosis receives 46.1% of total Pharma donated amount.",
    interpretation:
      "Fibromatosis-associated donations total approximately 1.15 million. GIST, Ewing Sarcoma, Synovial Sarcoma, Leiomyosarcoma and Liposarcoma form the next tier by amount.",
  },
  {
    id: 15,
    file: "pharma_viz_15_diagnosis_frequency_vs_amount.png",
    title: "Diagnosis frequency versus amount",
    category: "Diagnoses",
    tags: ["diagnosis", "amount", "scatter"],
    takeaway: "Frequency and amount are broadly related, with several high-amount exceptions.",
    interpretation:
      "Fibromatosis dominates both dimensions. Leiomyosarcoma and Liposarcoma carry relatively high amounts for their small record counts, reflecting the cost of the medicines allocated to them.",
  },
  {
    id: 16,
    file: "pharma_viz_16_company_medicine_heatmap.png",
    title: "Company–medicine supply matrix",
    category: "Companies",
    tags: ["company", "medicine", "heatmap"],
    takeaway: "Natco supplies most medicine categories and overwhelmingly supplies Sorafenib.",
    interpretation:
      "The matrix makes company dependency visible. Natco dominates nearly every medicine column, while other companies contribute small, medicine-specific pockets of supply.",
  },
  {
    id: 17,
    file: "pharma_viz_17_diagnosis_medicine_heatmap.png",
    title: "Diagnosis–medicine allocation matrix",
    category: "Diagnoses",
    tags: ["diagnosis", "medicine", "heatmap"],
    takeaway: "Sorafenib donations are overwhelmingly associated with Fibromatosis records.",
    interpretation:
      "The Fibromatosis–Sorafenib cell contains 124 records, dominating the matrix. Other diagnoses receive a more varied mix of Cabozantinib, Regorafenib, Pazopanib, Trabectedin and other medicines.",
  },
  {
    id: 18,
    file: "pharma_viz_18_shelf_life_distribution.png",
    title: "Pharma shelf-life distribution",
    category: "Shelf Life",
    tags: ["expiry", "shelf life", "distribution"],
    takeaway: "The median Pharma donation had only 57 days remaining before expiry.",
    interpretation:
      "Shelf life averages about 80 days, but the distribution is highly right-skewed. Three-quarters of records had 90 days or less remaining, while a few long-dated donations extend beyond one year.",
  },
  {
    id: 19,
    file: "pharma_viz_19_shelf_life_buckets.png",
    title: "Pharma shelf-life record and amount shares",
    category: "Shelf Life",
    tags: ["expiry", "shelf life", "amount"],
    takeaway: "74.9% of records and 73.9% of amount had 90 days or less remaining.",
    interpretation:
      "The 31–60 day bucket alone represents 44.8% of both records and donated amount. Short remaining shelf life is therefore a programme-wide characteristic rather than a small exception.",
  },
  {
    id: 20,
    file: "pharma_viz_20_amount_distribution.png",
    title: "Distribution of Pharma donated amount",
    category: "Value",
    tags: ["amount", "distribution", "outliers"],
    takeaway: "The median record is 8,880, while the average is approximately 12,293.",
    interpretation:
      "Most records cluster around a few common amounts, especially 8,880. A smaller high-value tail reaches 60,000 and raises the average above the median.",
  },
  {
    id: 21,
    file: "pharma_viz_21_quantity_unit_distribution.png",
    title: "Quantity-unit distribution",
    category: "Quantity",
    tags: ["quantity", "unit", "comparison"],
    takeaway: "Boxes dominate records, while tablets dominate the numeric Qty No. total.",
    interpretation:
      "Boxes appear in 190 records, or 93.6%. Tablets occur in only five records but account for 65.5% of numeric quantity because those entries record individual tablets. This demonstrates why quantity units cannot be pooled without context.",
  },
  {
    id: 22,
    file: "pharma_viz_22_year_medicine_heatmap.png",
    title: "Pharma medicine mix by year",
    category: "Time",
    tags: ["time", "medicine", "heatmap"],
    takeaway: "The medicine mix changed rapidly as the programme expanded.",
    interpretation:
      "Sorafenib activity rises sharply in 2025 and 2026. Cabozantinib and Regorafenib become more visible in later periods, while earlier years contain smaller, more varied contributions.",
  },
  {
    id: 23,
    file: "pharma_viz_23_combined_medicine_records_amount.png",
    title: "Medicine record and amount shares",
    category: "Featured",
    tags: ["medicine", "records", "amount", "comparison"],
    takeaway: "Sorafenib is record-heavy; Trabectedin and several Cabozantinib strengths are amount-heavy.",
    interpretation:
      "Both measures use the same percentage scale. Sorafenib represents 66.0% of records but 48.9% of amount. Trabectedin contributes only 3.0% of records but 12.6% of amount.",
  },
  {
    id: 24,
    file: "pharma_viz_24_combined_diagnosis_records_amount.png",
    title: "Diagnosis record and amount shares",
    category: "Featured",
    tags: ["diagnosis", "records", "amount", "comparison"],
    takeaway: "Fibromatosis dominates records more strongly than donated amount.",
    interpretation:
      "Fibromatosis represents 62.1% of records but 46.1% of amount. Several less frequent diagnoses, including Leiomyosarcoma and Liposarcoma, receive a larger value share than their frequency alone suggests.",
  },
  {
    id: 25,
    file: "pharma_viz_25_yearly_medicine_composition.png",
    title: "Annual Pharma medicine composition",
    category: "Time",
    tags: ["time", "medicine", "composition"],
    takeaway: "A small number of medicines explain most annual Pharma activity.",
    interpretation:
      "Sorafenib forms the majority of records in 2025 and 2026. Cabozantinib, Regorafenib and Trabectedin add diversity as the programme grows.",
  },
  {
    id: 26,
    file: "pharma_viz_26_calendar_heatmap.png",
    title: "Pharma calendar activity heatmap",
    category: "Time",
    tags: ["time", "calendar", "heatmap"],
    takeaway: "Pharma donations are concentrated in a few active months.",
    interpretation:
      "The strongest activity occurs in March 2025 and February–April 2026. The pattern indicates batch- or campaign-driven supply rather than a constant monthly stream.",
  },
  {
    id: 27,
    file: "pharma_viz_27_highest_amount_records.png",
    title: "Highest-amount Pharma records",
    category: "Value",
    tags: ["amount", "records", "outliers"],
    takeaway: "The largest individual Pharma donations reach 60,000.",
    interpretation:
      "Dexrazoxane and several Trabectedin records form the upper tail. Labels are anonymised and show only medicine and month.",
  },
].map((item) => ({
  ...item,
  src: image(item.file),
}));

export const pharmaCategories = [
  "All",
  "Featured",
  "Overview",
  "Companies",
  "Medicines",
  "Brands",
  "Diagnoses",
  "Value",
  "Quantity",
  "Shelf Life",
  "Time",
];

export const pharmaMetrics = [
  { value: "203", label: "Pharma donation records" },
  { value: "5", label: "donor companies" },
  { value: "₹2.50m", label: "donated amount" },
  { value: "57", label: "median shelf-life days" },
];

export const pharmaInsights = [
  {
    number: "01",
    title: "One-company dependence",
    text: "Natco contributes 93.6% of records and 94.6% of donated amount.",
  },
  {
    number: "02",
    title: "Sorafenib dominates",
    text: "Sorafenib 200 mg accounts for 66.0% of records and 48.9% of amount.",
  },
  {
    number: "03",
    title: "Fibromatosis is the main destination",
    text: "Fibromatosis represents 62.1% of receiver records and 46.1% of amount.",
  },
  {
    number: "04",
    title: "Short shelf life is systemic",
    text: "74.9% of records had 90 days or less remaining at donation.",
  },
  {
    number: "05",
    title: "Amount is concentrated",
    text: "The top five medicines contribute 85.0% of total donated amount.",
  },
  {
    number: "06",
    title: "Activity accelerated",
    text: "2025–26 account for 189 of the 203 Pharma donation records.",
  },
];
