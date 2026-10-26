
"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Noir Oversized Tee",
    category: "T-Shirts",
    price: 2500,
    description: "Everyday essentials. Elevated.",
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
    name: "Noir Denim",
    category: "Trousers",
    price: 5000,
    description: "A timeless streetwear silhouette.",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 5,
    name: "Signature Street Sneakers",
    category: "Footwear",
    price: 6500,
    description: "Built for everyday movement.",
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
const panel = "#171717";

const buttonStyle = {
  background: gold,
  color: "#101010",
  border: "1px solid " + gold,
  padding: "13px 18px",
  fontSize: "11px",
  fontWeight: 700 as const,
  letterSpacing: "1.5px",
  cursor: "pointer",
  textTransform: "uppercase" as const,
};

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [bag, setBag] = useState<Record<number, number>>({});

  const visibleProducts =
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

  const total = bagItems.reduce(
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
    <main
      style={{
        minHeight: "100vh",
        background: "#0A0A0A",
        color: ivory,
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <header
        style={{
          padding: "22px 6%",
          borderBottom: "1px solid #29251D",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <a
          href="/"
          style={{
            color: gold,
            textDecoration: "none",
            fontSize: 16,
            fontWeight: 800,
            letterSpacing: 2,
          }}
        >
          CANARI NOIR DE NIUT
        </a>

        <nav
          style={{
            display: "flex",
            gap: 22,
            alignItems: "center",
            fontSize: 12,
            letterSpacing: 1,
          }}
        >
          <a href="/" style={{ color: ivory, textDecoration: "none" }}>
            HOME
          </a>
          <a
            href="/shop"
            style={{ color: gold, textDecoration: "none" }}
          >
            SHOP
          </a>
          <a
            href="#shopping-bag"
            style={{ color: ivory, textDecoration: "none" }}
          >
            BAG ({bagCount})
          </a>
        </nav>
      </header>

      <section
        style={{
          padding: "75px 6% 55px",
          textAlign: "center",
          background:
            "radial-gradient(ellipse at top, #302719 0%, #11100D 42%, #0A0A0A 75%)",
        }}
      >
        <p
          style={{
            color: gold,
            fontSize: 11,
            letterSpacing: 4,
            fontWeight: 700,
          }}
        >
          THE COLLECTION
        </p>

        <h1
          style={{
            fontSize: "clamp(35px, 6vw, 68px)",
            letterSpacing: 3,
            lineHeight: 1.1,
            margin: "20px 0",
            fontWeight: 500,
          }}
        >
          DRESS BEYOND <span style={{ color: gold }}>ORDINARY.</span>
        </h1>

        <p
          style={{
            maxWidth: 520,
            margin: "0 auto",
            color: muted,
            fontSize: 14,
            lineHeight: 1.9,
          }}
        >
          Luxury meets street culture. Discover statement pieces
          designed for individuality.
        </p>
      </section>

      <section style={{ padding: "20px 6% 70px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 18,
            flexWrap: "wrap",
            marginBottom: 30,
          }}
        >
          <div>
            <p
              style={{
                color: gold,
                fontSize: 10,
                letterSpacing: 2,
                marginBottom: 8,
              }}
            >
              DISCOVER YOUR STYLE
            </p>
            <h2 style={{ fontSize: 23, fontWeight: 500, margin: 0 }}>
              Shop the collection
            </h2>
          </div>

          <span style={{ color: muted, fontSize: 12 }}>
            {visibleProducts.length} pieces
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: 9,
            flexWrap: "wrap",
            marginBottom: 32,
          }}
        >
          {categories.map((category) => {
            const selected = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  padding: "10px 15px",
                  background: selected ? gold : "transparent",
                  color: selected ? "#111" : ivory,
                  border: `1px solid ${selected ? gold : "#444"}`,
                  cursor: "pointer",
                  fontSize: 11,
                  letterSpacing: 0.5,
                }}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: 24,
          }}
        >
          {visibleProducts.map((product) => (
            <article
              key={product.id}
              style={{
                background: panel,
                border: "1px solid #292929",
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
                    margin: "0 0 10px",
                    textTransform: "uppercase",
                  }}
                >
                  {product.category}
                </p>

                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    margin: "0 0 9px",
                  }}
                >
                  {product.name}
                </h3>

                <p
                  style={{
                    color: muted,
                    fontSize: 12,
                    lineHeight: 1.6,
                    minHeight: 36,
                  }}
                >
                  {product.description}
                </p>

                <p style={{ color: ivory, fontSize: 15 }}>
                  {money(product.price)}
                </p>

                <button
                  onClick={() => addToBag(product.id)}
                  style={{ ...buttonStyle, width: "100%" }}
                >
                  Add to bag
                </button>

                {(bag[product.id] ?? 0) > 0 && (
                  <p
                    style={{
                      color: gold,
                      fontSize: 12,
                      textAlign: "center",
                      marginBottom: 0,
                    }}
                  >
                    In your bag: {bag[product.id]}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="shopping-bag"
        style={{
          padding: "55px 6%",
          background: "#13120F",
          borderTop: "1px solid #383022",
        }}
      >
        <p
          style={{
            color: gold,
            fontSize: 10,
            letterSpacing: 3,
          }}
        >
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
          <div style={{ maxWidth: 650 }}>
            {bagItems.map((product) => (
              <div
                key={product.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 15,
                  padding: "18px 0",
                  borderBottom: "1px solid #333",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: 1, minWidth: 130 }}>
                  <p style={{ margin: "0 0 7px" }}>
                    {product.name}
                  </p>
                  <span style={{ color: gold, fontSize: 13 }}>
                    {money(product.price)}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <button
                    aria-label={`Remove one ${product.name}`}
                    onClick={() => changeQuantity(product.id, -1)}
                    style={{
                      ...buttonStyle,
                      padding: "7px 12px",
                    }}
                  >
                    −
                  </button>

                  <span>{bag[product.id]}</span>

                  <button
                    aria-label={`Add one ${product.name}`}
                    onClick={() => changeQuantity(product.id, 1)}
                    style={{
                      ...buttonStyle,
                      padding: "7px 12px",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}

            <h3 style={{ marginTop: 25 }}>
              Subtotal: <span style={{ color: gold }}>{money(total)}</span>
            </h3>

            <p
              style={{
                color: muted,
                fontSize: 12,
                lineHeight: 1.8,
              }}
            >
              Delivery costs are not included. This is a demonstration
              shopping bag; checkout and payment processing are not
              connected yet.
            </p>

            <button
              onClick={() => setBag({})}
              style={{
                background: "transparent",
                color: ivory,
                border: "1px solid #666",
                padding: "12px 18px",
                cursor: "pointer",
                fontSize: 11,
                letterSpacing: 1,
              }}
            >
              CLEAR BAG
            </button>
          </div>
        )}
      </section>

      <footer
        style={{
          padding: "30px 6%",
          textAlign: "center",
          borderTop: "1px solid #29251D",
        }}
      >
        <p
          style={{
            color: gold,
            fontSize: 12,
            letterSpacing: 3,
          }}
        >
          CANARI NOIR DE NIUT
        </p>
        <p
          style={{
            color: muted,
            fontSize: 10,
            letterSpacing: 2,
          }}
        >
          RISE ABOVE THE ORDINARY.
        </p>
        <p style={{ color: "#777", fontSize: 11 }}>
          © {new Date().getFullYear()} CANARI NOIR DE NIUT
        </p>
      </footer>
    </main>
  );
}
