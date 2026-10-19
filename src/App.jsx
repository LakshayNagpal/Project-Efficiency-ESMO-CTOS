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
    arrow: <path d="m9 18 6-6-6-6" />,
    close: (
      <>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
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
        <path d="M8 3H3v5" />
        <path d="M16 3h5v5" />
        <path d="M8 21H3v-5" />
        <path d="M16 21h5v-5" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </>
    ),
    chevronLeft: <path d="m15 18-6-6 6-6" />,
    chevronRight: <path d="m9 18 6-6-6-6" />,
    chart: (
      <>
        <path d="M3 3v18h18" />
        <path d="m7 16 4-5 4 3 5-7" />
      </>
    ),
    building: (
      <>
        <path d="M3 21h18" />
        <path d="M6 21V7l6-4 6 4v14" />
        <path d="M9 10h.01" />
        <path d="M15 10h.01" />
        <path d="M9 14h.01" />
        <path d="M15 14h.01" />
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

const trackConfig = {
  community: {
    kicker: "Community medicine redistribution",
    title: "Patient-linked donations",
    description:
      "Medicine donations redistributed across patients and diagnoses, with a focus on value, shelf life, brands and diagnosis flows.",
    records: "339 records",
    visualizations: communityVisualizations,
    categories: communityCategories,
    metrics: communityMetrics,
    insights: communityInsights,
    featuredId: 26,
    download: "/medicine-visualizations.zip",
    icon: "people",
  },
  pharma: {
    kicker: "Pharma company extension",
    title: "Company-supported donations",
    description:
      "A complementary view of company contributions, medicine allocation, receiver diagnoses, quantity units and short shelf-life operations.",
    records: "203 records",
    visualizations: pharmaVisualizations,
    categories: pharmaCategories,
    metrics: pharmaMetrics,
    insights: pharmaInsights,
    featuredId: 23,
    download: "/pharma-visualizations.zip",
    icon: "building",
  },
};

function App() {
  const [track, setTrack] = useState("community");
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const current = trackConfig[track];
  const activeVisualizations = current.visualizations;
  const activeCategories = current.categories;
  const featured = activeVisualizations.find(
    (item) => item.id === current.featuredId,
  );

  const selectTrack = (nextTrack, shouldScroll = true) => {
    setTrack(nextTrack);
    setCategory("All");
    setQuery("");
    setSelectedId(null);
    if (shouldScroll) {
      requestAnimationFrame(() => {
        document
          .getElementById("insights")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return activeVisualizations.filter((item) => {
      const matchesCategory =
        category === "All" ||
        item.category === category ||
        item.tags.includes(category.toLowerCase());
      const matchesQuery =
        !needle ||
        item.title.toLowerCase().includes(needle) ||
        item.takeaway.toLowerCase().includes(needle) ||
        item.tags.some((tag) => tag.includes(needle));
      return matchesCategory && matchesQuery;
    });
  }, [activeVisualizations, category, query]);

  const selectedIndex = selectedId
    ? activeVisualizations.findIndex((item) => item.id === selectedId)
    : -1;
  const selected =
    selectedIndex >= 0 ? activeVisualizations[selectedIndex] : null;

  const moveModal = (direction) => {
    if (selectedIndex < 0) return;
    const next =
      (selectedIndex + direction + activeVisualizations.length) %
      activeVisualizations.length;
    setSelectedId(activeVisualizations[next].id);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    const onKey = (event) => {
      if (!selectedId) return;
      if (event.key === "Escape") setSelectedId(null);
      if (event.key === "ArrowRight") moveModal(1);
      if (event.key === "ArrowLeft") moveModal(-1);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedId, selectedIndex, track]);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div className="site-shell">
      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Medicine visual story home">
          <span className="brand__mark">
            <Icon name="chart" size={19} />
          </span>
          <span>
            Medicine <strong>Visual Story</strong>
          </span>
        </a>
        <nav className="nav__links" aria-label="Main navigation">
          <a href="#streams">Streams</a>
          <a href="#insights">Insights</a>
          <a href="#gallery">Visualizations</a>
          <a href="#method">Method</a>
        </nav>
        <a
          className="button button--small button--ghost"
          href={current.download}
          download
        >
          <Icon name="download" size={17} />
          Download {track === "community" ? "community" : "Pharma"} charts
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__glow hero__glow--one" />
          <div className="hero__glow hero__glow--two" />
          <div className="hero__grid" />
          <div className="hero__content">
            <p className="eyebrow">
              <span />
              Medicine access, seen from both sides
            </p>
            <h1>
              Two donation streams.
              <br />
              <em>One visual story.</em>
            </h1>
            <p className="hero__lede">
              Explore community-linked medicine redistribution and the Pharma
              company donation extension through 54 high-resolution,
              interpretation-led visualizations.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#streams">
                Choose a data stream
                <Icon name="arrow" size={18} />
              </a>
              <a className="text-link" href="#method">
                Read the methodology
              </a>
            </div>
          </div>

          <div className="hero__metrics" aria-label="Project metrics">
            {[
              { value: "542", label: "combined donation records" },
              { value: "2", label: "donation streams" },
              { value: "54", label: "interactive visualizations" },
              { value: "5+", label: "years of activity" },
            ].map((metric) => (
              <div className="metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="ticker" aria-hidden="true">
          <div className="ticker__track">
            {[...activeVisualizations.slice(0, 10), ...activeVisualizations.slice(0, 10)].map(
              (item, index) => (
                <span key={`${track}-${item.id}-${index}`}>
                  {String(item.id).padStart(2, "0")} · {item.title}
                  <i />
                </span>
              ),
            )}
          </div>
        </section>

        <section className="streams section" id="streams">
          <div className="section-heading">
            <div>
              <p className="eyebrow">The project now has two connected views</p>
              <h2>Choose the donation stream you want to explore.</h2>
            </div>
            <p>
              The two datasets share a common purpose but capture different
              operational models. Switching streams updates the findings,
              featured chart, gallery, filters and downloads.
            </p>
          </div>
          <div className="stream-grid">
            {Object.entries(trackConfig).map(([key, item]) => (
              <button
                className={`stream-card ${track === key ? "is-active" : ""}`}
                key={key}
                onClick={() => selectTrack(key)}
              >
                <div className="stream-card__icon">
                  <Icon name={item.icon} size={24} />
                </div>
                <span>{item.kicker}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <footer>
                  <strong>{item.records}</strong>
                  <span>27 charts</span>
                  <i>
                    Explore
                    <Icon name="arrow" size={16} />
                  </i>
                </footer>
              </button>
            ))}
          </div>
        </section>

        <section className="section dataset-summary" id="insights">
          <div className="dataset-banner">
            <div className="dataset-banner__icon">
              <Icon name={current.icon} size={27} />
            </div>
            <div>
              <span>{current.kicker}</span>
              <h2>{current.title}</h2>
            </div>
            <p>{current.description}</p>
          </div>

          <div className="track-metrics">
            {current.metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>

          <div className="section-heading insights-heading">
            <div>
              <p className="eyebrow">What this stream says</p>
              <h2>Six findings worth carrying forward.</h2>
            </div>
            <p>
              These are descriptive programme findings. They explain how the
              donation stream operates, where value concentrates and which
              data-quality considerations matter.
            </p>
          </div>
          <div className="insights-grid">
            {current.insights.map((insight) => (
              <article className="insight-card" key={insight.number}>
                <span>{insight.number}</span>
                <h3>{insight.title}</h3>
                <p>{insight.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`featured featured--${track}`}>
          <div className="featured__copy">
            <p className="eyebrow">Featured comparison</p>
            <h2>{featured.title}</h2>
            <p>{featured.interpretation}</p>
            <button
              className="button button--primary"
              onClick={() => setSelectedId(featured.id)}
            >
              Open the comparison
              <Icon name="expand" size={18} />
            </button>
          </div>
          <button
            className="featured__visual"
            onClick={() => setSelectedId(featured.id)}
            aria-label={`Click to examine ${featured.title}`}
          >
            <img src={featured.src} alt={featured.title} />
            <span>Click to examine</span>
          </button>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="section-heading section-heading--gallery">
            <div>
              <p className="eyebrow">{current.kicker}</p>
              <h2>{current.title}: the complete visual atlas.</h2>
            </div>
            <p>
              Open any chart to view it in high resolution, read a tailored
              interpretation and download the original PNG.
            </p>
          </div>

          <div className="inline-track-toggle" role="group" aria-label="Dataset">
            <button
              className={track === "community" ? "is-active" : ""}
              onClick={() => selectTrack("community", false)}
            >
              <Icon name="people" size={17} />
              Community donations
            </button>
            <button
              className={track === "pharma" ? "is-active" : ""}
              onClick={() => selectTrack("pharma", false)}
            >
              <Icon name="building" size={17} />
              Pharma donations
            </button>
          </div>

          <div className="gallery-tools">
            <div className="category-pills" role="group" aria-label="Filter charts">
              {activeCategories.map((item) => (
                <button
                  key={item}
                  className={category === item ? "is-active" : ""}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <label className="search">
              <Icon name="search" size={18} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search charts"
                aria-label="Search visualizations"
              />
            </label>
          </div>

          <div className="gallery-count">
            <span>{filtered.length}</span> visualizations
          </div>

          <div className="gallery-grid">
            {filtered.map((item, index) => (
              <article
                className={`chart-card ${index % 7 === 0 ? "chart-card--wide" : ""}`}
                key={`${track}-${item.id}`}
              >
                <button
                  className="chart-card__image"
                  onClick={() => setSelectedId(item.id)}
                  aria-label={`Open ${item.title}`}
                >
                  <img src={item.src} alt={item.title} loading="lazy" />
                  <span className="chart-card__expand">
                    <Icon name="expand" size={19} />
                  </span>
                </button>
                <div className="chart-card__body">
                  <div className="chart-card__meta">
                    <span>{String(item.id).padStart(2, "0")}</span>
                    <span>{item.category}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.takeaway}</p>
                  <button
                    className="chart-card__link"
                    onClick={() => setSelectedId(item.id)}
                  >
                    Read interpretation
                    <Icon name="arrow" size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {!filtered.length && (
            <div className="empty-state">
              <h3>No chart found.</h3>
              <p>Try another search term or reset the category filter.</p>
              <button
                className="button button--ghost"
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

        <section className="method section" id="method">
          <div className="method__headline">
            <p className="eyebrow">How to read the project</p>
            <h2>Two datasets. Shared standards. Different limitations.</h2>
          </div>
          <div className="method__grid">
            <article>
              <span>01</span>
              <h3>Line-item analysis</h3>
              <p>
                Each row is a donation line-item. Counts are not unique
                patients, treatment courses or standardized medicine packs.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Quantity caution</h3>
              <p>
                Quantity units include boxes, packs, tablets, vials and
                fractional packs. Unit-specific context is essential.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Different time windows</h3>
              <p>
                Community records span July 2021–August 2026. Pharma records
                span December 2023–August 2026, with partial boundary years.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Privacy and interpretation</h3>
              <p>
                All charts are aggregate and anonymised. Findings are
                descriptive and do not provide clinical recommendations.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <span className="brand__mark">
            <Icon name="chart" size={18} />
          </span>
          <p>
            Medicine Visual Story
            <small>Community and Pharma company donation streams.</small>
          </p>
        </div>
        <p>542 records · 54 visualizations · 2 connected datasets</p>
      </footer>

      {selected && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <button
            className="modal__backdrop"
            onClick={() => setSelectedId(null)}
            aria-label="Close visualization"
          />
          <div className="modal__panel">
            <div className="modal__topbar">
              <div>
                <span>
                  {String(selected.id).padStart(2, "0")} /{" "}
                  {activeVisualizations.length}
                </span>
                <strong>{selected.category}</strong>
                <em>{current.title}</em>
              </div>
              <div className="modal__actions">
                <a
                  href={selected.src}
                  download={selected.file}
                  className="icon-button"
                  aria-label="Download PNG"
                  title="Download PNG"
                >
                  <Icon name="download" />
                </a>
                <button
                  className="icon-button"
                  onClick={() => setSelectedId(null)}
                  aria-label="Close"
                >
                  <Icon name="close" />
                </button>
              </div>
            </div>

            <div className="modal__content">
              <div className="modal__visual-wrap">
                <img src={selected.src} alt={selected.title} className="modal__visual" />
              </div>
              <aside className="modal__story">
                <p className="eyebrow">{current.kicker}</p>
                <h2>{selected.title}</h2>
                <div className="takeaway">
                  <span>Key takeaway</span>
                  <strong>{selected.takeaway}</strong>
                </div>
                <p>{selected.interpretation}</p>
                <div className="tag-list">
                  {selected.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a
                  className="button button--primary button--full"
                  href={selected.src}
                  download={selected.file}
                >
                  <Icon name="download" size={18} />
                  Download high-resolution PNG
                </a>
                <small>
                  Use ← and → to navigate. Press Esc to close.
                </small>
              </aside>
            </div>

            <button
              className="modal__nav modal__nav--left"
              onClick={() => moveModal(-1)}
              aria-label="Previous visualization"
            >
              <Icon name="chevronLeft" size={28} />
            </button>
            <button
              className="modal__nav modal__nav--right"
              onClick={() => moveModal(1)}
              aria-label="Next visualization"
            >
              <Icon name="chevronRight" size={28} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
