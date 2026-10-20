import { useEffect, useMemo, useState } from "react";
import {
  categories as communityCategories,
  insights as communityInsights,
  keyMetrics as communityMetrics,
  visualizations as communityVisualizations,
} from "./visualizations";
import {
  pharmaCategories,
  pharmaInsights,
  pharmaMetrics,
  pharmaVisualizations,
} from "./pharmaVisualizations";

const Icon = ({ name, size = 20 }) => {
  const paths = {
    chart: (
      <>
        <path d="M3 3v18h18" />
        <path d="m7 16 4-5 4 3 5-7" />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a6 6 0 0 1 12 0v2" />
        <path d="M16 3.2a4 4 0 0 1 0 7.6" />
        <path d="M18 15a6 6 0 0 1 3 5.2V21" />
      </>
    ),
    building: (
      <>
        <path d="M3 21h18" />
        <path d="M6 21V7l6-4 6 4v14" />
        <path d="M9 10h.01M15 10h.01M9 14h.01M15 14h.01" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </>
    ),
    expand: (
      <>
        <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
      </>
    ),
    close: (
      <>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </>
    ),
    left: <path d="m15 18-6-6 6-6" />,
    right: <path d="m9 18 6-6-6-6" />,
    info: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5M12 8h.01" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
};

const datasets = {
  community: {
    short: "Community",
    title: "Community medicine donations",
    subtitle:
      "Patient-linked medicine redistribution, value, diagnosis flows and shelf life.",
    icon: "people",
    records: "339 records",
    visualizations: communityVisualizations,
    categories: communityCategories,
    metrics: communityMetrics,
    insights: communityInsights,
    download: "/medicine-visualizations.zip",
    period: "July 2021–May 2026",
  },
  pharma: {
    short: "Pharma",
    title: "Pharma company donations",
    subtitle:
      "Company contributions, medicine allocation, receiver diagnoses and expiry operations.",
    icon: "building",
    records: "203 records",
    visualizations: pharmaVisualizations,
    categories: pharmaCategories,
    metrics: pharmaMetrics,
    insights: pharmaInsights,
    download: "/pharma-visualizations.zip",
    period: "December 2023–August 2026",
  },
};

function App() {
  const [dataset, setDataset] = useState("community");
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const current = datasets[dataset];

  const changeDataset = (next) => {
    setDataset(next);
    setCategory("All");
    setQuery("");
    setSelectedId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return current.visualizations.filter((item) => {
      const matchesCategory =
        category === "All" ||
        item.category === category ||
        item.tags.includes(category.toLowerCase());
      const matchesQuery =
        !needle ||
        item.title.toLowerCase().includes(needle) ||
        item.takeaway.toLowerCase().includes(needle) ||
        item.interpretation.toLowerCase().includes(needle) ||
        item.tags.some((tag) => tag.includes(needle));
      return matchesCategory && matchesQuery;
    });
  }, [category, current.visualizations, query]);

  const selectedIndex = selectedId
    ? current.visualizations.findIndex((item) => item.id === selectedId)
    : -1;
  const selected =
    selectedIndex >= 0 ? current.visualizations[selectedIndex] : null;

  const moveModal = (direction) => {
    if (selectedIndex < 0) return;
    const next =
      (selectedIndex + direction + current.visualizations.length) %
      current.visualizations.length;
    setSelectedId(current.visualizations[next].id);
  };

  useEffect(() => {
    const handleKey = (event) => {
      if (!selected) return;
      if (event.key === "Escape") setSelectedId(null);
      if (event.key === "ArrowLeft") moveModal(-1);
      if (event.key === "ArrowRight") moveModal(1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selected, selectedIndex, dataset]);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar__brand">
          <span>
            <Icon name="chart" size={19} />
          </span>
          <div>
            <strong>Project Efficiency</strong>
            <small>Sachin Sarcoma Society</small>
          </div>
        </div>

        <div className="sidebar__section">
          <label>Data stream</label>
          <div className="dataset-buttons">
            {Object.entries(datasets).map(([key, item]) => (
              <button
                key={key}
                className={dataset === key ? "is-active" : ""}
                onClick={() => changeDataset(key)}
              >
                <Icon name={item.icon} size={18} />
                <span>
                  <strong>{item.short}</strong>
                  <small>{item.records}</small>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="sidebar__section sidebar__categories">
          <label>Categories</label>
          <div>
            {current.categories.map((item) => (
              <button
                key={item}
                className={category === item ? "is-active" : ""}
                onClick={() => setCategory(item)}
              >
                <span>{item}</span>
                {item === "All" && <small>{current.visualizations.length}</small>}
              </button>
            ))}
          </div>
        </div>

        <div className="sidebar__note">
          <Icon name="info" size={18} />
          <p>
            Descriptive line-item analysis. Quantities use mixed units and
            should not be read as standardised doses.
          </p>
        </div>

        <a className="sidebar__download" href={current.download} download>
          <Icon name="download" size={17} />
          Download all PNGs
        </a>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <p>Sachin Sarcoma Society · {current.short} stream</p>
            <h1>{current.title}</h1>
            <span>{current.subtitle}</span>
          </div>
          <div className="dashboard-header__meta">
            <strong>{current.period}</strong>
            <span>Last updated · 20 Oct 2026</span>
          </div>
        </header>

        <section className="kpi-grid" aria-label="Key metrics">
          {current.metrics.map((metric, index) => (
            <article key={metric.label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{metric.value}</strong>
              <p>{metric.label}</p>
            </article>
          ))}
        </section>

        <section className="insight-strip" aria-label="Key insights">
          {current.insights.slice(0, 3).map((insight) => (
            <article key={insight.number}>
              <span>{insight.number}</span>
              <div>
                <strong>{insight.title}</strong>
                <p>{insight.text}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="visualizations">
          <div className="visualizations__toolbar">
            <div>
              <h2>Visualizations</h2>
              <p>
                {filtered.length} of {current.visualizations.length} charts
              </p>
            </div>
            <label className="dashboard-search">
              <Icon name="search" size={18} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search charts or findings"
                aria-label="Search visualizations"
              />
            </label>
          </div>

          <div className="chart-grid">
            {filtered.map((item) => (
              <article className="dashboard-card" key={`${dataset}-${item.id}`}>
                <button
                  className="dashboard-card__visual"
                  onClick={() => setSelectedId(item.id)}
                  aria-label={`Open ${item.title}`}
                >
                  <img src={item.src} alt={item.title} loading="lazy" />
                  <div className="dashboard-card__overlay">
                    <span>Interpretation</span>
                    <p>{item.takeaway}</p>
                    <strong>
                      Click for details
                      <Icon name="expand" size={16} />
                    </strong>
                  </div>
                </button>
                <footer>
                  <div>
                    <span>{String(item.id).padStart(2, "0")}</span>
                    <small>{item.category}</small>
                  </div>
                  <h3>{item.title}</h3>
                  <button
                    onClick={() => setSelectedId(item.id)}
                    aria-label={`View interpretation for ${item.title}`}
                  >
                    <Icon name="expand" size={18} />
                  </button>
                </footer>
              </article>
            ))}
          </div>

          {!filtered.length && (
            <div className="empty">
              <strong>No visualizations found</strong>
              <p>Clear the search or select another category.</p>
              <button
                onClick={() => {
                  setCategory("All");
                  setQuery("");
                }}
              >
                Reset filters
              </button>
            </div>
          )}
        </section>
      </main>

      {selected && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={selected.title}>
          <button
            className="modal__backdrop"
            onClick={() => setSelectedId(null)}
            aria-label="Close visualization"
          />
          <div className="modal__panel">
            <header>
              <div>
                <span>
                  {String(selected.id).padStart(2, "0")} /{" "}
                  {current.visualizations.length}
                </span>
                <strong>{selected.category}</strong>
              </div>
              <div>
                <a href={selected.src} download={selected.file} aria-label="Download PNG">
                  <Icon name="download" />
                </a>
                <button onClick={() => setSelectedId(null)} aria-label="Close">
                  <Icon name="close" />
                </button>
              </div>
            </header>
            <div className="modal__content">
              <div className="modal__image">
                <img src={selected.src} alt={selected.title} />
              </div>
              <aside>
                <span>{current.short} · {selected.category}</span>
                <h2>{selected.title}</h2>
                <div className="modal__takeaway">
                  <small>Key takeaway</small>
                  <strong>{selected.takeaway}</strong>
                </div>
                <p>{selected.interpretation}</p>
                <div className="modal__tags">
                  {selected.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a href={selected.src} download={selected.file}>
                  <Icon name="download" size={18} />
                  Download high-resolution PNG
                </a>
              </aside>
            </div>
            <button
              className="modal__nav modal__nav--left"
              onClick={() => moveModal(-1)}
              aria-label="Previous visualization"
            >
              <Icon name="left" size={27} />
            </button>
            <button
              className="modal__nav modal__nav--right"
              onClick={() => moveModal(1)}
              aria-label="Next visualization"
            >
              <Icon name="right" size={27} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
