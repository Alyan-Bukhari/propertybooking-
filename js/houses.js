/* ============================================================
   Property Booking — Houses page: filters + EMI calculator
   ============================================================ */
(function () {
  "use strict";

  const grid = document.getElementById("listings-grid");
  if (!grid) return;

  const BED = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6"/><path d="M3 18h18M5 10V7a2 2 0 012-2h10a2 2 0 012 2v3"/></svg>';
  const BATH = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M4 12h16v2a5 5 0 01-5 5H9a5 5 0 01-5-5v-2z"/><path d="M6 12V5a2 2 0 014 0"/></svg>';
  const AREA = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 9h5V4"/></svg>';

  const card = (l) => `
    <article class="card listing-card reveal in">
      <div class="img-wrap">
        <span class="ribbon">${l.tag}</span>
        <span class="verified">Verified</span>
        <img src="${l.img}" alt="${l.title}, ${l.society}" loading="lazy">
      </div>
      <div class="listing-body">
        <span class="size-badge">${l.size}</span>
        <div class="price">${pkr(l.price)}</div>
        <h3>${l.title}</h3>
        <div class="society">📍 ${l.society}</div>
        <div class="specs">
          <span>${BED} ${l.beds} Beds</span>
          <span>${BATH} ${l.baths} Baths</span>
          <span>${AREA} ${l.area}</span>
        </div>
        <div class="listing-actions">
          <a class="btn btn-teal btn-sm" href="tel:${PHONE_TEL}">Call Now</a>
          <a class="btn btn-gold btn-sm" href="contact.html?interest=houses&property=${encodeURIComponent(l.title + ", " + l.society)}">Enquire</a>
        </div>
      </div>
    </article>`;

  const sizeSel = document.getElementById("f-size");
  const priceSel = document.getElementById("f-price");
  const bedSel = document.getElementById("f-beds");
  const sortSel = document.getElementById("f-sort");
  const countEl = document.getElementById("results-count");

  // deep-link from home hero search (?size=…&q=…)
  const params = new URLSearchParams(window.location.search);
  if (params.get("size")) {
    const v = params.get("size");
    [...sizeSel.options].forEach((o) => { if (o.value === v) sizeSel.value = v; });
  }
  let areaQ = (params.get("q") || "").trim().toLowerCase();

  function applyFilters() {
    let list = [...LISTINGS];
    const size = sizeSel.value, price = priceSel.value, beds = bedSel.value;

    if (size !== "any") list = list.filter((l) => l.size === size);
    if (areaQ) list = list.filter((l) => l.society.toLowerCase().includes(areaQ));
    if (beds !== "any") list = list.filter((l) => l.beds >= parseInt(beds, 10));
    if (price !== "any") {
      const [lo, hi] = price.split("-").map(Number);
      list = list.filter((l) => l.price >= lo && l.price <= hi);
    }
    const sort = sortSel.value;
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "beds") list.sort((a, b) => b.beds - a.beds);

    countEl.innerHTML = `Showing <b>${list.length}</b> ${list.length === 1 ? "property" : "properties"}` +
      (areaQ ? ` in <b>${params.get("q")}</b>` : "");
    grid.innerHTML = list.length
      ? list.map(card).join("")
      : `<div class="empty-state"><h3>No matches found</h3><p>Try widening your filters — or tell us what you need on WhatsApp and we'll source it for you.</p><br><a class="btn btn-gold" href="${WHATSAPP}" target="_blank" rel="noopener">Chat on WhatsApp</a></div>`;
  }

  [sizeSel, priceSel, bedSel, sortSel].forEach((el) => el.addEventListener("change", applyFilters));
  document.getElementById("f-reset").addEventListener("click", () => {
    [sizeSel, priceSel, bedSel].forEach((el) => (el.value = "any"));
    sortSel.value = "newest";
    areaQ = "";
    applyFilters();
  });
  applyFilters();

  /* ---------- EMI calculator ---------- */
  const calc = (id) => document.getElementById(id);
  const emiPrice = calc("emi-price"), emiDown = calc("emi-down"),
        emiYears = calc("emi-years"), emiRate = calc("emi-rate");
  const emiOut = calc("emi-result"), emiBreak = calc("emi-breakdown");

  function calcEMI() {
    const price = parseFloat(emiPrice.value) || 0;
    const downPct = parseFloat(emiDown.value) || 0;
    const years = parseFloat(emiYears.value) || 0;
    const annual = parseFloat(emiRate.value) || 0;
    if (!price || !years) return;
    const principal = price * (1 - downPct / 100);
    const r = annual / 100 / 12;
    const n = years * 12;
    const emi = r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    window.countUp(emiOut, emi, (v) => "PKR " + Math.round(v).toLocaleString("en-US"));
    emiBreak.innerHTML = `
      <div><span>Loan amount</span><span>${pkr(principal)}</span></div>
      <div><span>Down payment (${downPct}%)</span><span>${pkr(price * downPct / 100)}</span></div>
      <div><span>Total payable</span><span>${pkr(emi * n + price * downPct / 100)}</span></div>`;
  }
  [emiPrice, emiDown, emiYears, emiRate].forEach((el) => el.addEventListener("input", calcEMI));
  calcEMI();
})();
