/* ============================================================
   Property Booking — Construction page: cost estimator + quotes
   ============================================================ */
(function () {
  "use strict";

  const estSize = document.getElementById("est-size");
  if (!estSize) return;

  const estOut = document.getElementById("est-result");
  const estRows = document.getElementById("est-rows");
  const estNote = document.getElementById("est-note");
  let tier = "premium";

  document.querySelectorAll("#tier-seg button").forEach((b) =>
    b.addEventListener("click", () => {
      document.querySelectorAll("#tier-seg button").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      tier = b.dataset.tier;
      update();
    })
  );
  estSize.addEventListener("change", update);

  function update() {
    const size = PLOT_SIZES.find((s) => s.key === estSize.value);
    const t = TIERS.find((x) => x.key === tier);
    const total = size.coveredArea * t.rate;
    window.countUp(estOut, total, (v) => pkr(Math.round(v)));
    estRows.innerHTML = `
      <div><span>Covered area</span><span>${size.coveredArea.toLocaleString()} sq ft</span></div>
      <div><span>Rate (${t.label})</span><span>PKR ${t.rate.toLocaleString()} / sq ft</span></div>
      <div><span>Typical timeline</span><span>${size.timeline}</span></div>`;
    estNote.textContent = t.blurb;
  }
  update();

  /* ---------- Example quotation tables ---------- */
  const wrap = document.getElementById("quote-tables");
  const grey = TIERS.find((t) => t.key === "grey").rate;

  wrap.innerHTML = PLOT_SIZES.map((s) => {
    const greyCost = s.coveredArea * grey;
    const rows = TIERS.filter((t) => t.key !== "grey")
      .map((t) => {
        const total = s.coveredArea * t.rate;
        const finishing = total - greyCost;
        return `<tr>
          <td><b>${t.label}</b><br><small style="color:var(--muted)">${t.blurb}</small></td>
          <td class="num">PKR ${t.rate.toLocaleString()}</td>
          <td class="num">${pkr(finishing)}</td>
          <td class="num"><b>${pkr(total)}</b></td>
        </tr>`;
      })
      .join("");
    return `
      <div class="quote-wrap reveal">
        <h3>${s.label} House <span class="size-badge">${s.coveredArea.toLocaleString()} sq ft covered</span></h3>
        <p>Grey structure example: <b>${pkr(greyCost)}</b> · Typical timeline: ${s.timeline}</p>
        <div style="overflow-x:auto">
        <table class="quote-table">
          <thead><tr><th>Package</th><th class="num">Rate / sq ft</th><th class="num">Finishing cost</th><th class="num">Total estimate</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
        </div>
      </div>`;
  }).join("");

  /* re-observe dynamically added reveals (shared helper from main.js) */
  if (window.observeReveals) window.observeReveals(wrap);
})();
