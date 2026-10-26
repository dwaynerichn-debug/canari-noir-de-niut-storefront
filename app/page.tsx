
"use client";

import { useState } from "react";

const collections = [
  {
    name: "THE ESSENTIALS",
    description: "Elevated everyday streetwear.",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "THE STREET EDIT",
    description: "Oversized silhouettes. Unmistakable presence.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "BEYOND THE ORDINARY",
    description: "Distinctive style, made to stand apart.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
  },
];

const products = [
  {
    id: 1,
    name: "Noir Oversized Tee",
    category: "T-Shirts",
    price: 2500,
    description: "Elevated everyday essentials.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 2,
    name: "Imperial Street Hoodie",
    category: "Hoodies",
    price: 5500,
    description: "A statement in understated luxury.",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 3,
    name: "Urban Cargo Trousers",
    category: "Trousers",
    price: 4500,
    description: "Utility-inspired. City-ready.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 4,
    name: "Signature Denim",
    category: "Trousers",
    price: 5000,
    description: "A timeless streetwear silhouette.",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 5,
    name: "Street Sneakers",
    category: "Footwear",
    price: 6500,
    description: "Designed for everyday movement.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 6,
    name: "Canary Signature Cap",
    category: "Accessories",
    price: 1800,
    description: "The finishing touch.",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=85",
  },
];

const categories = [
  "All",
  "T-Shirts",
  "Hoodies",
  "Trousers",
  "Footwear",
  "Accessories",
];

const gold = "#D6B56D";
const ivory = "#F5F0E6";
const muted = "#A8A39A";

const goldButtonStyle = {
  display: "inline-block",
  background: gold,
  color: "#111",
  border: `1px solid ${gold}`,
  padding: "13px 18px",
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: 1.5,
  cursor: "pointer",
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [bag, setBag] = useState<Record<number, number>>({});

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  const bagItems = products.filter(
    (product) => (bag[product.id] ?? 0) > 0
  );

  const bagCount = Object.values(bag).reduce(
    (sum, quantity) => sum + quantity,
    0
  );

  const subtotal = bagItems.reduce(
    (sum, product) =>
      sum + product.price * (bag[product.id] ?? 0),
    0
  );

  const money = (amount: number) =>
    `KSh ${amount.toLocaleString("en-KE")}`;

  function addToBag(id: number) {
    setBag((current) => ({
      ...current,
      [id]: (current[id] ?? 0) + 1,
    }));
  }

  function changeQuantity(id: number, change: number) {
    setBag((current) => {
      const next = { ...current };
      const quantity = (next[id] ?? 0) + change;

      if (quantity <= 0) {
        delete next[id];
      } else {
        next[id] = quantity;
      }

      return next;
    });
  }

  return (
    <main>
      <div className="announcement">
        A NEW STANDARD IN STREETWEAR · FIRST DROP COMING SOON
      </div>

      <header className="navbar">
        <a className="wordmark" href="#" aria-label="Canari Noir de Niut home">
          <span className="wordmark-main">CANARI NOIR</span>
          <span className="wordmark-sub">DE NIUT</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#collections">COLLECTIONS</a>
          <a href="#shop">SHOP</a>
          <a href="#story">OUR STORY</a>
          <a href="#newsletter">CONTACT</a>
        </nav>

        <a className="bag-link" href="#shopping-bag">
          BAG ({bagCount}) <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" />

        <div className="hero-content">
          <p className="eyebrow">INDEPENDENT FASHION HOUSE · EST. 2026</p>

          <h1>
            RISE ABOVE
            <br />
            <span>THE ORDINARY.</span>
          </h1>

          <p className="hero-description">
            Luxury meets street culture.
            <br />A new expression of individuality begins here.
          </p>

          <a className="gold-button" href="#shop">
            DISCOVER THE COLLECTION <span aria-hidden="true">↗</span>
          </a>

          <p className="hero-note">
            BUILT FOR INDIVIDUALITY. DESIGNED TO STAND APART.
          </p>
        </div>

        <div className="hero-index">
          <span>01</span>
          <span className="index-line" />
          <span>THE BEGINNING</span>
        </div>
      </section>

      <section className="brand-strip" id="story">
        <span>INDIVIDUALITY</span>
        <span className="strip-star">✳</span>
        <span>AMBITION</span>
        <span className="strip-star">✳</span>
        <span>SELF-EXPRESSION</span>
      </section>

      <section className="collections section-padding" id="collections">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE CANARI UNIVERSE</p>
            <h2>
              Beyond the <span>ordinary.</span>
            </h2>
          </div>
          <p className="section-intro">
            More than what you wear. A statement of who you are.
          </p>
        </div>

        <div className="collection-grid">
          {collections.map((collection, index) => (
            <a
              className="collection-card"
              href="#shop"
              key={collection.name}
            >
              <div className="collection-image-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="collection-image"
                />
                <span className="collection-number">0{index + 1}</span>
                <span className="collection-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="collection-details">
                <div>
                  <h3>{collection.name}</h3>
                  <p>{collection.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="coming-soon">
          OUR FIRST COLLECTION IS IN THE MAKING.
        </p>
      </section>

      {/* SHOP — integrated directly into the homepage */}
      <section
        id="shop"
        style={{
          background: "#0A0A0A",
          color: ivory,
          padding: "75px 6%",
          scrollMarginTop: 20,
        }}
      >
        <div style={{ marginBottom: 32 }}>
          <p
            className="eyebrow"
            style={{ color: gold, letterSpacing: 3 }}
          >
            THE FIRST EDIT
          </p>

          <h2
            style={{
              fontSize: "clamp(30px, 5vw, 48px)",
              fontWeight: 500,
              margin: "12px 0",
            }}
          >
            Find your <span style={{ color: gold }}>signature.</span>
          </h2>

          <p style={{ color: muted, lineHeight: 1.8, maxWidth: 500 }}>
            Statement streetwear. Distinctive essentials. A new
            standard in personal style.
          </p>
        </div>

        <div
          aria-label="Filter products by category"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 32,
          }}
        >
          {categories.map((category) => {
            const selected = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={selected}
                style={{
                  padding: "10px 15px",
                  background: selected ? gold : "transparent",
                  color: selected ? "#111" : ivory,
                  border: `1px solid ${selected ? gold : "#48443D"}`,
                  cursor: "pointer",
                  fontSize: 11,
                  letterSpacing: 0.7,
                }}
              >
                {category}
              </button>
            );
          })}
        </div>

        <p style={{ color: muted, fontSize: 12, marginBottom: 20 }}>
          {filteredProducts.length} pieces
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
            gap: 22,
          }}
        >
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              style={{
                background: "#151515",
                border: "1px solid #302C25",
                minWidth: 0,
              }}
            >
              <div
                style={{
                  aspectRatio: "4 / 5",
                  overflow: "hidden",
                  background: "#222",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              <div style={{ padding: 18 }}>
                <p
                  style={{
                    color: gold,
                    fontSize: 10,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  {product.category}
                </p>

                <h3 style={{ fontSize: 16, fontWeight: 500 }}>
                  {product.name}
                </h3>

                <p style={{ color: muted, fontSize: 12, lineHeight: 1.7 }}>
                  {product.description}
                </p>

                <p style={{ fontSize: 15 }}>{money(product.price)}</p>

                <button
                  type="button"
                  onClick={() => addToBag(product.id)}
                  style={{ ...goldButtonStyle, width: "100%" }}
                >
                  ADD TO BAG
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SHOPPING BAG */}
      <section
        id="shopping-bag"
        style={{
          background: "#14120F",
          color: ivory,
          padding: "65px 6%",
          borderTop: "1px solid #393124",
          scrollMarginTop: 20,
        }}
      >
        <p className="eyebrow" style={{ color: gold, letterSpacing: 3 }}>
          YOUR SELECTION
        </p>

        <h2 style={{ fontSize: 30, fontWeight: 500 }}>
          Shopping bag ({bagCount})
        </h2>

        {bagItems.length === 0 ? (
          <p style={{ color: muted, lineHeight: 1.8 }}>
            Your bag is waiting for something extraordinary.
          </p>
        ) : (
          <div style={{ maxWidth: 700 }}>
            {bagItems.map((product) => (
              <div
                key={product.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                  flexWrap: "wrap",
                  padding: "18px 0",
                  borderBottom: "1px solid #38342D",
                }}
              >
                <div style={{ flex: 1, minWidth: 150 }}>
                  <p style={{ marginBottom: 8 }}>{product.name}</p>
                  <span style={{ color: gold, fontSize: 13 }}>
                    {money(product.price)}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <button
                    type="button"
                    aria-label={`Remove one ${product.name}`}
                    onClick={() => changeQuantity(product.id, -1)}
                    style={goldButtonStyle}
                  >
                    −
                  </button>

                  <span>{bag[product.id]}</span>

                  <button
                    type="button"
                    aria-label={`Add one ${product.name}`}
                    onClick={() => changeQuantity(product.id, 1)}
                    style={goldButtonStyle}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}

            <h3 style={{ marginTop: 25 }}>
              Subtotal: <span style={{ color: gold }}>{money(subtotal)}</span>
            </h3>

            <p style={{ color: muted, fontSize: 12, lineHeight: 1.8 }}>
              Delivery is not included. Checkout and payment processing
              will be connected in a later development step.
            </p>

            <button
              type="button"
              onClick={() => setBag({})}
              style={{
                background: "transparent",
                color: ivory,
                border: "1px solid #777",
                padding: "12px 18px",
                cursor: "pointer",
                fontSize: 11,
                letterSpacing: 1.5,
              }}
            >
              CLEAR BAG
            </button>
          </div>
        )}
      </section>

      <section className="statement">
        <p className="eyebrow">A DIFFERENT KIND OF STANDARD</p>
        <h2>
          Wear your
          <br />
          <span>individuality.</span>
        </h2>
        <p>
          Created for those who choose their own path and refuse to blend in.
        </p>
        <a className="text-link" href="#newsletter">
          GET TO KNOW US <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className="footer" id="newsletter">
        <div className="footer-top">
          <a className="wordmark footer-wordmark" href="#">
            <span className="wordmark-main">CANARI NOIR</span>
            <span className="wordmark-sub">DE NIUT</span>
          </a>
          <p>RISE ABOVE THE ORDINARY.</p>
        </div>
        <div className="footer-bottom">
          <span>© 2026 CANARI NOIR DE NIUT</span>
          <span>INDEPENDENT SPIRIT. DISTINCTIVE DESIGN.</span>
        </div>
      </footer>
    </main>
  );
}

