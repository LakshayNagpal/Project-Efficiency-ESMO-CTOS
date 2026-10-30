import { useEffect, useMemo, useState } from "react";
import {
  categories as communityCategories,
  insights as communityInsights,
  keyMetrics as communityMetrics,
  visualizations as communityCore,
} from "./visualizations";
import { communityInDepth } from "./communityInDepth";
import {
  pharmaCategories,
  pharmaInsights,
  pharmaMetrics,
  pharmaVisualizations,
} from "./pharmaVisualizations";
import {
  reachoutAbstract,
  reachoutCategories,
  reachoutInsights,
  reachoutMetrics,
  reachoutVisualizations,
} from "./reachoutVisualizations";

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
    back: (
      <>
        <path d="M19 12H5" />
        <path d="m12 19-7-7 7-7" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </>
    ),
    pulse: (
      <>
        <path d="M3 12h4l3-8 4 16 3-8h4" />
      </>
    ),
    pill: (
      <>
        <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
        <path d="m8.5 8.5 7 7" />
      </>
    ),
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

const thumb = (src) => `/thumbs${src.replace(/\.png$/, ".webp")}`;

const projects = {
  reachout: {
    route: "digital-reachouts",
    kicker: "Digital Reach-outs",
    title:
      "Digital reach-outs as a window into sarcoma navigation needs, diagnostic gaps and psychological support delivered by patient-led organization",
    summary:
      "What 53 website and email enquiries reveal about who seeks sarcoma help, the diagnostic gaps they face and the navigation and psychological support Sachin Sarcoma Society provides.",
    icon: "pulse",
    stats: [
      ["53", "enquiries"],
      ["31", "visualisations"],
      ["77%", "sought second opinion"],
    ],
    streams: ["reachout"],
  },
  efficiency: {
    route: "project-efficiency",
    kicker: "Project Efficiency by Sachin Sarcoma Society",
    title:
      "Optimizing resource utilization in oncology: A patient-to-patient medication redistribution model to reduce financial toxicity and medication waste",
    summary:
      "How unused cancer medicines are redistributed from patients and pharma companies to patients in need: value, medicines, diagnoses, shelf life and the people behind it.",
    icon: "pill",
    stats: [
      ["542", "donation records"],
      ["₹7.1m", "medicine value"],
      ["81", "visualisations"],
    ],
    streams: ["community", "pharma"],
  },
};

const communityVisualizations = [...communityCore, ...communityInDepth];

const datasets = {
  community: {
    project: "efficiency",
    route: "community",
    short: "Community",
    alias: "Patient to Patient",
    title: "Community medicine donations",
    subtitle:
      "Patient-to-patient medicine redistribution: value, medicines, brands, diagnosis flows, shelf life and the donor network.",
    icon: "people",
    records: "339 records",
    visualizations: communityVisualizations,
    categories: [...communityCategories, "Brands", "People", "In-depth"],
    metrics: communityMetrics,
    insights: communityInsights,
    download: "/medicine-visualizations.zip",
    period: "July 2021–May 2026",
    note: "Descriptive line-item analysis. Quantities use mixed units and should not be read as standardised doses.",
    tile: [
      ["339", "donation line-items"],
      ["₹4.59m", "recorded value"],
      ["54", "visualisations"],
    ],
  },
  pharma: {
    project: "efficiency",
    route: "pharma",
    short: "Pharma",
    alias: "Pharma Companies to Patients",
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
    note: "Descriptive line-item analysis. Quantities use mixed units and should not be read as standardised doses.",
    tile: [
      ["203", "donation records"],
      ["₹2.50m", "donated amount"],
      ["27", "visualisations"],
    ],
  },
  reachout: {
    project: "reachout",
    route: "",
    short: "Digital Reach-outs",
    alias: "Website & email enquiries",
    title: "Digital reach-outs to Sachin Sarcoma Society",
    subtitle:
      "Navigation needs, diagnostic gaps and psychological support across 53 website and email enquiries.",
    icon: "pulse",
    records: "53 enquiries",
    visualizations: reachoutVisualizations,
    categories: reachoutCategories,
    metrics: reachoutMetrics,
    insights: reachoutInsights,
    abstract: reachoutAbstract,
    download: "/reachout-visualizations.zip",
    period: "December 2025–June 2026",
    note: "Retrospective descriptive analysis of a self-selected sample. Statistical tests are exploratory; no patient is identifiable.",
  },
};

const parseRoute = () => {
  const parts = window.location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  if (parts[0] === projects.reachout.route) return { view: "dashboard", dataset: "reachout" };
  if (parts[0] === projects.efficiency.route) {
    if (parts[1] === "community" || parts[1] === "pharma") {
      return { view: "dashboard", dataset: parts[1] };
    }
    return { view: "hub" };
  }
  return { view: "home" };
};

const go = (hash) => {
  window.location.hash = hash;
};

const datasetHash = (key) => {
  const item = datasets[key];
  const project = projects[item.project];
  return item.route ? `#/${project.route}/${item.route}` : `#/${project.route}`;
};

function Brand() {
  return (
    <div className="brand">
      <span>
        <Icon name="chart" size={19} />
      </span>
      <div>
        <strong>Sachin Sarcoma Society</strong>
        <small>Research dashboards</small>
      </div>
    </div>
  );
}

function Stats({ items }) {
  return (
    <dl className="tile-stats">
      {items.map(([value, label]) => (
        <div key={label}>
          <dt>{value}</dt>
          <dd>{label}</dd>
        </div>
      ))}
    </dl>
  );
}

function Home() {
  return (
    <div className="landing">
      <header className="landing__top">
        <Brand />
      </header>
      <main className="landing__main">
        <section className="landing__intro">
          <p>Sachin Sarcoma Society · Patient-led research</p>
          <h1>Two projects, one mission: closing the gaps in sarcoma care.</h1>
          <span>
            Choose a project to explore its interactive dashboard. Hover over any chart for the key
            takeaway; click it for the full interpretation.
          </span>
        </section>
        <section className="project-tiles" aria-label="Projects">
          {Object.entries(projects).map(([key, project], index) => (
            <a key={key} className={`project-tile project-tile--${key}`} href={`#/${project.route}`}>
              <div className="project-tile__head">
                <span className="project-tile__icon">
                  <Icon name={project.icon} size={22} />
                </span>
                <small>Project {String(index + 1).padStart(2, "0")}</small>
              </div>
              <p className="project-tile__kicker">{project.kicker}</p>
              <h2>{project.title}</h2>
              <p className="project-tile__summary">{project.summary}</p>
              <Stats items={project.stats} />
              <strong className="project-tile__cta">
                Open dashboard
                <Icon name="arrow" size={18} />
              </strong>
            </a>
          ))}
        </section>
      </main>
      <footer className="landing__footer">
        Data are anonymised. Charts are descriptive; see each dashboard for methods and limitations.
      </footer>
    </div>
  );
}

function Hub() {
  const project = projects.efficiency;
  return (
    <div className="landing">
      <header className="landing__top">
        <Brand />
        <a className="back-link" href="#/">
          <Icon name="back" size={17} />
          All projects
        </a>
      </header>
      <main className="landing__main">
        <section className="landing__intro landing__intro--hub">
          <p>{project.kicker}</p>
          <h1>{project.title}</h1>
          <span>
            Project Efficiency redistributes unused, in-date cancer medicines to patients who need them,
            reducing out-of-pocket costs and medicine waste. Medicines come from two sources: patients and
            families, and pharma companies. Choose a stream.
          </span>
        </section>
        <section className="project-tiles project-tiles--streams" aria-label="Donation streams">
          {project.streams.map((key, index) => {
            const item = datasets[key];
            return (
              <a key={key} className={`project-tile project-tile--${key}`} href={datasetHash(key)}>
                <div className="project-tile__head">
                  <span className="project-tile__icon">
                    <Icon name={item.icon} size={22} />
                  </span>
                  <small>Stream {String(index + 1).padStart(2, "0")}</small>
                </div>
                <p className="project-tile__kicker">{item.alias}</p>
                <h2>{item.short}</h2>
                <p className="project-tile__summary">{item.subtitle}</p>
                <Stats items={item.tile} />
                <strong className="project-tile__cta">
                  Open {item.short} dashboard
                  <Icon name="arrow" size={18} />
                </strong>
              </a>
            );
          })}
        </section>
      </main>
    </div>
  );
}

function Dashboard({ datasetKey }) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const current = datasets[datasetKey];
  const project = projects[current.project];
  const backHash = project.streams.length > 1 ? `#/${project.route}` : "#/";

  useEffect(() => {
    setCategory("All");
    setQuery("");
    setSelectedId(null);
  }, [datasetKey]);

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
        (item.points || []).some((point) => point.toLowerCase().includes(needle)) ||
        item.tags.some((tag) => tag.includes(needle));
      return matchesCategory && matchesQuery;
    });
  }, [category, current.visualizations, query]);

  const selectedIndex = selectedId
    ? current.visualizations.findIndex((item) => item.id === selectedId)
    : -1;
  const selected = selectedIndex >= 0 ? current.visualizations[selectedIndex] : null;

  const moveModal = (direction) => {
    if (selectedIndex < 0) return;
    const next =
      (selectedIndex + direction + current.visualizations.length) % current.visualizations.length;
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
  }, [selected, selectedIndex, datasetKey]);

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
            <strong>{current.project === "efficiency" ? "Project Efficiency" : "Digital Reach-outs"}</strong>
            <small>Sachin Sarcoma Society</small>
          </div>
        </div>

        <a className="sidebar__back" href={backHash}>
          <Icon name="back" size={16} />
          {project.streams.length > 1 ? "Project overview" : "All projects"}
        </a>

        {project.streams.length > 1 && (
          <div className="sidebar__section">
            <label>Data stream</label>
            <div className="dataset-buttons">
              {project.streams.map((key) => {
                const item = datasets[key];
                return (
                  <button
                    key={key}
                    className={datasetKey === key ? "is-active" : ""}
                    onClick={() => {
                      go(datasetHash(key));
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <Icon name={item.icon} size={18} />
                    <span>
                      <strong>{item.short}</strong>
                      <small>{item.alias}</small>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

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
          <p>{current.note}</p>
        </div>

        <a className="sidebar__download" href={current.download} download>
          <Icon name="download" size={17} />
          Download all PNGs
        </a>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <p>
              {project.kicker}
              {project.streams.length > 1 ? ` · ${current.short} (${current.alias})` : ""}
            </p>
            <h1>{current.title}</h1>
            <span>{current.subtitle}</span>
          </div>
          <div className="dashboard-header__meta">
            <strong>{current.period}</strong>
            <span>Last updated · 30 Oct 2026</span>
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

        {current.abstract && (
          <section className="project-details" aria-label="Project details">
            <div className="project-details__head">
              <h2>About the project</h2>
              <p>{project.title}</p>
            </div>
            <div className="project-details__grid">
              {current.abstract.map((part) => (
                <details key={part.heading} open={part.heading === "Background" || part.heading === "Conclusion"}>
                  <summary>{part.heading}</summary>
                  <p>{part.text}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        <section className="visualizations">
          <div className="visualizations__toolbar">
            <div>
              <h2>Visualizations</h2>
              <p>
                {filtered.length} of {current.visualizations.length} charts · hover for the takeaway,
                click for the full interpretation
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
              <article className="dashboard-card" key={`${datasetKey}-${item.id}`}>
                <button
                  className="dashboard-card__visual"
                  onClick={() => setSelectedId(item.id)}
                  aria-label={`Open ${item.title}`}
                >
                  <img src={thumb(item.src)} alt={item.title} loading="lazy" decoding="async" />
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
                  {selectedIndex + 1} / {current.visualizations.length}
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
                <span>
                  {current.short} · {selected.category}
                </span>
                <h2>{selected.title}</h2>
                <div className="modal__takeaway">
                  <small>Key takeaway</small>
                  <strong>{selected.takeaway}</strong>
                </div>
                <p>{selected.interpretation}</p>
                {selected.points?.length > 0 && (
                  <ul className="modal__points">
                    {selected.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
                {selected.caution && (
                  <p className="modal__caution">
                    <strong>Caution:</strong> {selected.caution}
                  </p>
                )}
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

function App() {
  const [route, setRoute] = useState(parseRoute);

  useEffect(() => {
    const onHash = () => {
      setRoute(parseRoute());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    const titles = {
      home: "Sachin Sarcoma Society | Research dashboards",
      hub: "Project Efficiency | Sachin Sarcoma Society",
    };
    document.title =
      route.view === "dashboard"
        ? `${datasets[route.dataset].title} | Sachin Sarcoma Society`
        : titles[route.view];
  }, [route]);

  if (route.view === "hub") return <Hub />;
  if (route.view === "dashboard") return <Dashboard datasetKey={route.dataset} />;
  return <Home />;
}

export default App;
