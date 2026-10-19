const image = (file) => `/visualizations/${file}`;

export const visualizations = [
  {
    id: 1,
    file: "medicine_viz_01_annual_overview.png",
    title: "Annual activity and recorded value",
    category: "Overview",
    tags: ["time", "annual", "value"],
    takeaway: "2023 had the most donation records, while 2021 carried exceptional recorded value.",
    interpretation:
      "Donation activity rose from 35 records in the partial 2021 period to a peak of 96 records in 2023. The value pattern is different: 2021 contributed about 1.66 million in recorded value, driven by a small number of unusually expensive donations. The partial 2021 and 2026 periods should not be compared directly with complete years.",
  },
  {
    id: 2,
    file: "medicine_viz_02_monthly_records_timeline.png",
    title: "Monthly donation volume",
    category: "Time",
    tags: ["time", "monthly", "records"],
    takeaway: "Donation activity occurred in bursts rather than at a steady monthly rate.",
    interpretation:
      "The largest monthly peak occurred in January 2025 with 31 records. Another major cluster occurred in November 2023 with 24 records. Long low-activity periods between peaks indicate campaign-, inventory- or opportunity-driven donation activity.",
  },
  {
    id: 3,
    file: "medicine_viz_03_monthly_value_timeline.png",
    title: "Monthly recorded value",
    category: "Time",
    tags: ["time", "monthly", "value"],
    takeaway: "The highest-value months were not the busiest months.",
    interpretation:
      "July and August 2021 dominate the value timeline, contributing roughly 933,000 and 574,000 respectively. Later months often contain more records but lower total value. This shows why record count and financial value must be interpreted separately.",
  },
  {
    id: 4,
    file: "medicine_viz_04_top_medicines_by_records.png",
    title: "Most frequently donated medicines",
    category: "Medicines",
    tags: ["medicine", "frequency", "ranking"],
    takeaway: "Pazopanib 400 mg appears in more than one in four donation records.",
    interpretation:
      "Pazopanib 400 mg leads with 94 records, followed by Pazopanib 200 mg and Sorafenib 200 mg with 32 each. The distribution is highly concentrated: a relatively small group of medicines accounts for most operational activity.",
  },
  {
    id: 5,
    file: "medicine_viz_05_top_medicines_by_value.png",
    title: "Highest-value medicines",
    category: "Value",
    tags: ["medicine", "value", "ranking"],
    takeaway: "Pazopanib 400 mg and Sunitinib 12.5 mg together contribute about half of all value.",
    interpretation:
      "Pazopanib 400 mg contributed approximately 1.23 million and Sunitinib 12.5 mg about 1.11 million. Several medicines that are not especially frequent rank highly by value because of high unit prices.",
  },
  {
    id: 6,
    file: "medicine_viz_06_top_medicines_by_quantity.png",
    title: "Medicines by recorded quantity",
    category: "Medicines",
    tags: ["medicine", "quantity", "ranking"],
    takeaway: "Pazopanib 400 mg and Imatinib 400 mg dominate recorded quantity.",
    interpretation:
      "Pazopanib 400 mg recorded about 121.4 quantity units and Imatinib 400 mg 111. Quantity units include boxes, packs and fractional packs, so these totals are operational indicators rather than standardized tablet or dose counts.",
  },
  {
    id: 7,
    file: "medicine_viz_07_medicine_frequency_vs_value.png",
    title: "Medicine frequency versus value",
    category: "Medicines",
    tags: ["medicine", "value", "scatter"],
    takeaway: "High frequency does not automatically imply high value.",
    interpretation:
      "Pazopanib 400 mg is high on both frequency and value. Sunitinib 12.5 mg is a major exception: it appears in only 16 records but contributes over 1.1 million. Bubble size reflects average MRP, helping reveal high-cost, low-frequency medicines.",
  },
  {
    id: 8,
    file: "medicine_viz_08_medicine_value_concentration.png",
    title: "Medicine value concentration",
    category: "Value",
    tags: ["medicine", "pareto", "concentration"],
    takeaway: "The five highest-value medicines account for approximately 65.3% of total value.",
    interpretation:
      "The cumulative curve rises quickly: the top ten medicines account for about 80.7% of total recorded value. Financial impact is therefore concentrated in a small part of the medicine portfolio.",
  },
  {
    id: 9,
    file: "medicine_viz_09_top_donor_diagnoses.png",
    title: "Most common donor diagnoses",
    category: "Diagnoses",
    tags: ["diagnosis", "donor", "ranking"],
    takeaway: "Synovial Sarcoma, GIST, Leiomyosarcoma and Fibromatosis dominate donor records.",
    interpretation:
      "Synovial Sarcoma leads with 70 records, followed by GIST with 61, Leiomyosarcoma with 42 and Fibromatosis with 39. The steep drop after the top four diagnoses indicates strong concentration.",
  },
  {
    id: 10,
    file: "medicine_viz_10_top_receiver_diagnoses.png",
    title: "Most common receiver diagnoses",
    category: "Diagnoses",
    tags: ["diagnosis", "receiver", "ranking"],
    takeaway: "Receiver diagnoses are more dispersed than donor diagnoses.",
    interpretation:
      "Synovial Sarcoma remains the largest receiver category with 57 records, followed by GIST with 42 and Fibromatosis with 35. The longer tail suggests donated medicines are redistributed across a broader diagnosis mix.",
  },
  {
    id: 11,
    file: "medicine_viz_11_donor_receiver_diagnosis_comparison.png",
    title: "Donor and receiver diagnosis comparison",
    category: "Diagnoses",
    tags: ["diagnosis", "comparison", "dumbbell"],
    takeaway: "The donor and receiver diagnosis mix is related but not identical.",
    interpretation:
      "Some diagnoses, including Synovial Sarcoma and GIST, are common on both sides. Others show substantial differences between donor and receiver counts. The chart describes redistribution patterns and should not be interpreted as evidence of clinical interchangeability.",
  },
  {
    id: 12,
    file: "medicine_viz_12_diagnosis_flow_heatmap.png",
    title: "Diagnosis flow heatmap",
    category: "Diagnoses",
    tags: ["diagnosis", "heatmap", "flow"],
    takeaway: "A small number of diagnosis pairings account for much of the flow.",
    interpretation:
      "The strongest cells occur where common diagnoses align, particularly Synovial Sarcoma, GIST and Fibromatosis. Off-diagonal cells show that donations also move between different diagnosis labels. This is a transfer-pattern view, not a clinical recommendation.",
  },
  {
    id: 13,
    file: "medicine_viz_13_line_item_value_distribution.png",
    title: "Distribution of line-item value",
    category: "Value",
    tags: ["value", "distribution", "outliers"],
    takeaway: "A long high-value tail raises the average far above the median.",
    interpretation:
      "The median line-item value is 6,200, while the mean is about 13,526. Most records are modestly valued, but a small number of expensive donations extend the distribution to 580,000.",
  },
  {
    id: 14,
    file: "medicine_viz_14_mrp_vs_total_value.png",
    title: "MRP versus total value",
    category: "Value",
    tags: ["value", "mrp", "scatter"],
    takeaway: "Unit price is a much stronger value driver than recorded quantity.",
    interpretation:
      "MRP and total value have a strong positive relationship, with a Pearson correlation of approximately 0.846. Recorded quantity has a much weaker correlation with value, partly because quantity units are heterogeneous.",
  },
  {
    id: 15,
    file: "medicine_viz_15_shelf_life_distribution.png",
    title: "Shelf-life distribution",
    category: "Shelf Life",
    tags: ["expiry", "shelf life", "distribution"],
    takeaway: "The median medicine had 164 days remaining before expiry.",
    interpretation:
      "Shelf life ranges from 76 to 464 days. Most donations had between three and twelve months remaining. Only a minority fell within the highlighted 90-day window.",
  },
  {
    id: 16,
    file: "medicine_viz_16_shelf_life_buckets.png",
    title: "Shelf-life record and value shares",
    category: "Shelf Life",
    tags: ["expiry", "shelf life", "value"],
    takeaway: "Short-dated donations represent a relatively small share of both records and value.",
    interpretation:
      "Thirty-five records, or 10.3%, had 90 days or less remaining. They accounted for roughly 8.9% of total value. The largest record group lies between 91 and 180 days.",
  },
  {
    id: 17,
    file: "medicine_viz_17_pazopanib400_brand_mix.png",
    title: "Pazopanib 400 mg brand mix",
    category: "Medicines",
    tags: ["pazopanib", "brand", "value"],
    takeaway: "Votrient leads both Pazopanib record count and value.",
    interpretation:
      "Votrient 400 mg – Novartis appears in 37 records and contributes about 874,000 in value. Pazonat 400 mg – Natco appears in 24 records but contributes a much smaller 141,000, highlighting major brand-level price differences.",
  },
  {
    id: 18,
    file: "medicine_viz_18_votrient_vs_other_pazopanib.png",
    title: "Votrient versus other Pazopanib brands",
    category: "Medicines",
    tags: ["pazopanib", "votrient", "comparison"],
    takeaway: "Votrient accounts for 39.4% of Pazopanib records but 70.8% of Pazopanib value.",
    interpretation:
      "Votrient's average MRP is substantially higher than the combined average of other Pazopanib 400 mg brands. Its share of quantity is about 45%, yet its value share exceeds 70%.",
  },
  {
    id: 19,
    file: "medicine_viz_19_year_medicine_heatmap.png",
    title: "Medicine mix by year",
    category: "Time",
    tags: ["time", "medicine", "heatmap"],
    takeaway: "The medicine portfolio changed materially from year to year.",
    interpretation:
      "The heatmap shows different medicines dominating different periods. Pazopanib remains prominent across several years, while other medicines appear in concentrated bursts. Partial 2021 and 2026 periods should be read cautiously.",
  },
  {
    id: 20,
    file: "medicine_viz_20_yearly_medicine_composition.png",
    title: "Annual medicine composition",
    category: "Time",
    tags: ["time", "medicine", "composition"],
    takeaway: "Five medicines explain most annual activity, but their mix changes over time.",
    interpretation:
      "Pazopanib 400 mg contributes consistently, while the shares of Sorafenib, Pazopanib 200 mg, Imatinib and Cabozantinib vary. The remaining medicines collectively form a meaningful 'Other' category.",
  },
  {
    id: 21,
    file: "medicine_viz_21_medicine_value_boxplots.png",
    title: "Value variation within medicines",
    category: "Value",
    tags: ["medicine", "value", "boxplot"],
    takeaway: "Line-item value can vary widely even within the same medicine.",
    interpretation:
      "The logarithmic boxplots reveal broad within-medicine ranges and high-value outliers. Variation reflects differences in quantity, brand and MRP, so a medicine name alone does not determine donation value.",
  },
  {
    id: 22,
    file: "medicine_viz_22_highest_value_records.png",
    title: "Highest-value donation records",
    category: "Value",
    tags: ["value", "outliers", "records"],
    takeaway: "Two Sunitinib 12.5 mg records dominate the upper tail.",
    interpretation:
      "The largest individual record is 580,000 and the second is 435,000. Several Pazopanib 400 mg records cluster around 61,600. Labels are anonymized and show only medicine and month.",
  },
  {
    id: 23,
    file: "medicine_viz_23_diagnosis_value_comparison.png",
    title: "Recorded value by diagnosis",
    category: "Diagnoses",
    tags: ["diagnosis", "value", "comparison"],
    takeaway: "GIST carries the highest donor-associated value; receiver value is more distributed.",
    interpretation:
      "GIST donor records are associated with approximately 1.54 million in recorded value. On the receiver side, GIST and Alveolar Soft Part Sarcoma carry substantial value, reflecting the medicine mix routed to those diagnoses.",
  },
  {
    id: 24,
    file: "medicine_viz_24_data_quality_indicators.png",
    title: "Selected data-quality indicators",
    category: "Quality",
    tags: ["quality", "documentation", "validation"],
    takeaway: "Financial arithmetic is mostly consistent, while photo coverage remains incomplete.",
    interpretation:
      "About 91.4% of rows match Qty × MRP within 0.01, and 89.7% have more than 90 days to expiry. Photo coverage is 44.5%. Exact donor–receiver diagnosis matching occurs in 29.2% of records.",
  },
  {
    id: 25,
    file: "medicine_viz_25_calendar_heatmap.png",
    title: "Calendar activity heatmap",
    category: "Time",
    tags: ["time", "calendar", "heatmap"],
    takeaway: "Donation activity arrives in distinct seasonal clusters.",
    interpretation:
      "Strong clusters appear in July–August 2021, late 2023 and January 2025. The irregular pattern suggests that donations may be driven by specific collection opportunities rather than a constant monthly pipeline.",
  },
  {
    id: 26,
    file: "medicine_viz_26_combined_medicines_records_and_value.png",
    title: "Medicine frequency and value shares",
    category: "Featured",
    tags: ["medicine", "frequency", "value", "comparison"],
    takeaway: "Pazopanib leads both measures, while Sunitinib is value-heavy and Sorafenib is frequency-heavy.",
    interpretation:
      "Both series use the same percentage axis. Pazopanib 400 mg represents 27.7% of records and 26.9% of value. Sunitinib 12.5 mg contributes only 4.7% of records but 24.3% of value. Sorafenib 200 mg shows the opposite pattern.",
  },
  {
    id: 27,
    file: "medicine_viz_27_combined_donor_and_receiver_diagnoses.png",
    title: "Donor and receiver diagnosis mix",
    category: "Featured",
    tags: ["diagnosis", "donor", "receiver", "comparison"],
    takeaway: "Donor records are more concentrated in GIST and Leiomyosarcoma than receiver records.",
    interpretation:
      "Both series use the same count scale. Synovial Sarcoma leads on both sides, while donor GIST and Leiomyosarcoma counts substantially exceed receiver counts. Thyroid, MPNST and several rare diagnoses are relatively more visible among receivers.",
  },
].map((item) => ({
  ...item,
  src: image(item.file),
}));

export const categories = [
  "All",
  "Featured",
  "Overview",
  "Medicines",
  "Diagnoses",
  "Value",
  "Shelf Life",
  "Time",
  "Quality",
];

export const keyMetrics = [
  { value: "339", label: "donation records" },
  { value: "43", label: "medicine labels" },
  { value: "₹4.59m", label: "recorded value" },
  { value: "164", label: "median shelf-life days" },
];

export const insights = [
  {
    number: "01",
    title: "A concentrated portfolio",
    text: "The five highest-value medicines contribute 65.3% of total recorded value.",
  },
  {
    number: "02",
    title: "Pazopanib anchors the programme",
    text: "Pazopanib 400 mg accounts for 27.7% of records and 26.9% of total value.",
  },
  {
    number: "03",
    title: "Price outweighs volume",
    text: "MRP is strongly associated with total value, while recorded quantity is not.",
  },
  {
    number: "04",
    title: "Shelf life is generally adequate",
    text: "Only 10.3% of records had 90 days or less remaining at donation.",
  },
  {
    number: "05",
    title: "Documentation can improve",
    text: "Photo links are present for 44.5% of records.",
  },
  {
    number: "06",
    title: "Activity arrives in bursts",
    text: "Monthly donation volume is clustered rather than evenly distributed.",
  },
];
