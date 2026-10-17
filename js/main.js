/* ============================================================
   Property Booking — shared interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Preloader ---------- */
  const preloader = document.getElementById("preloader");
  const hidePreloader = () => preloader && preloader.classList.add("done");
  window.addEventListener("load", () => setTimeout(hidePreloader, 450));
  setTimeout(hidePreloader, 2800); // safety net

  /* ---------- Navbar: glass on scroll + hide on scroll down ---------- */
  const nav = document.querySelector(".nav");
  let lastY = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    if (nav) {
      nav.classList.toggle("scrolled", y > 40);
      if (y > 500 && y > lastY + 4) nav.classList.add("nav-hidden");
      else if (y < lastY - 4 || y < 500) nav.classList.remove("nav-hidden");
    }
    lastY = y;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Hero parallax (subtle, GPU-friendly) ---------- */
  const heroContent = document.querySelector(".hero .container");
  const heroBg = document.querySelector(".hero .hero-bg");
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking || !heroContent) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight * 1.2) {
          heroContent.style.transform = `translateY(${y * 0.28}px)`;
          heroContent.style.opacity = Math.max(0, 1 - y / (window.innerHeight * 0.85));
          if (heroBg) heroBg.style.transform = `translateY(${y * 0.12}px)`;
        }
        ticking = false;
      });
    },
    { passive: true }
  );

  /* ---------- Mobile menu ---------- */
  const burger = document.querySelector(".burger");
  const links = document.querySelector(".nav-links");
  if (burger && links) {
    burger.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      burger.classList.toggle("open", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        burger.classList.remove("open");
        document.body.style.overflow = "";
      })
    );
  }

  /* ---------- Reveal on scroll ---------- */
  window.observeReveals = function (scope) {
    const els = (scope || document).querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
  };
  window.observeReveals(document);

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll("[data-count]");
  const animateCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const dur = 1600;
    const start = performance.now();
    const fmt = (v) =>
      (target % 1 !== 0 ? v.toFixed(1) : Math.round(v).toLocaleString("en-US")) + suffix;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if ("IntersectionObserver" in window && counters.length) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animateCount(e.target);
            cio.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((el) => cio.observe(el));
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");
    if (!q || !a) return;
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((o) => {
        o.classList.remove("open");
        o.querySelector(".faq-a").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Enquiry pre-fill from listing cards ---------- */
  // Links like contact.html?interest=Houses&property=DHA+Phase+9+Town...
  const params = new URLSearchParams(window.location.search);
  const interestSel = document.getElementById("interest");
  const msgBox = document.getElementById("message");
  if (params.get("interest") && interestSel) {
    const want = params.get("interest").toLowerCase();
    [...interestSel.options].forEach((o) => {
      if (o.text.toLowerCase().includes(want) || o.value.toLowerCase() === want)
        interestSel.value = o.value;
    });
  }
  if (params.get("property") && msgBox && !msgBox.value) {
    msgBox.value = `Assalam-o-Alaikum, I'm interested in "${params.get("property")}". Please share details.`;
  }

  /* ---------- Contact form -> WhatsApp ---------- */
  const form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const interest = document.getElementById("interest").value;
      const message = document.getElementById("message").value.trim();
      const text =
        `*New Enquiry — Property Booking*%0A` +
        `%0AName: ${encodeURIComponent(name)}` +
        `%0APhone: ${encodeURIComponent(phone)}` +
        `%0AInterested in: ${encodeURIComponent(interest)}` +
        (message ? `%0AMessage: ${encodeURIComponent(message)}` : "");
      window.open("https://wa.me/923030292114?text=" + text, "_blank");
      const note = document.getElementById("form-note");
      if (note) {
        note.textContent = "Opening WhatsApp with your enquiry… we'll reply shortly, In Sha Allah.";
        note.style.color = "var(--teal)";
        note.style.fontWeight = "600";
      }
    });
  }

  /* ---------- Search widget (home hero) ---------- */
  const searchGo = document.getElementById("search-go");
  if (searchGo) {
    const tabs = document.querySelectorAll(".search-tabs button");
    let mode = "houses";
    tabs.forEach((t) =>
      t.addEventListener("click", () => {
        tabs.forEach((x) => x.classList.remove("active"));
        t.classList.add("active");
        mode = t.dataset.mode;
      })
    );
    searchGo.addEventListener("click", () => {
      const size = document.getElementById("search-size").value;
      const area = document.getElementById("search-area").value;
      if (mode === "houses") {
        const q = new URLSearchParams();
        if (size !== "any") q.set("size", size);
        if (area !== "any") q.set("q", area);
        window.location.href = "houses.html" + (q.toString() ? "?" + q.toString() : "");
      } else if (mode === "construction") {
        window.location.href = "construction.html";
      } else {
        window.location.href = "highrise.html";
      }
    });
  }

  /* ---------- Count-up for estimator result ---------- */
  window.countUp = function (el, target, formatter) {
    const dur = 900;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = formatter(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
})();
