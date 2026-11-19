// KIET Student Hub - Shared Data & Interactive Logic

const STORAGE_KEYS = {
  theme: "kiet_hub_theme",
  savedNotes: "kiet_hub_saved_notes",
  lostFound: "kiet_hub_lost_found",
  placements: "kiet_hub_placements"
};

const NOTES_DATA = [
  {
    id: "n1",
    course: "B.Tech",
    branch: "CSE",
    sem: "Semester 3",
    type: "Notes",
    code: "BCS-301",
    title: "Data Structures & Algorithms",
    desc: "Unit-wise handwritten + typed notes covering Trees, AVL, Graphs, and Sorting.",
    topics: ["Asymptotic Notation & Linked Lists", "Stacks, Queues & Recursion", "Trees, BST & AVL Rotations", "Graph Traversals (BFS/DFS) & Dijkstra"],
    updated: "Oct 2026"
  },
  {
    id: "n2",
    course: "B.Tech",
    branch: "CSE (AI & ML)",
    sem: "Semester 4",
    type: "PYQs",
    code: "BCS-401",
    title: "Operating Systems + PYQ Pack",
    desc: "CPU scheduling, Banker's algorithm, paging, segmentation & solved 5-year AKTU PYQs.",
    topics: ["Process States & Scheduling", "Semaphores & Deadlocks", "Virtual Memory & Page Replacement", "File Systems & Disk I/O"],
    updated: "Oct 2026"
  },
  {
    id: "n3",
    course: "B.Tech",
    branch: "IT",
    sem: "Semester 3",
    type: "Notes",
    code: "BCS-303",
    title: "Discrete Structures & Theory of Logic",
    desc: "Posets, lattices, boolean algebra, graph theory & recurrence relations solved.",
    topics: ["Set Theory & Relations", "Hasse Diagrams & Lattices", "Propositional Logic", "Groups & Rings"],
    updated: "Sep 2026"
  },
  {
    id: "n4",
    course: "MCA",
    branch: "MCA Core",
    sem: "Semester 2",
    type: "Notes",
    code: "KCA-201",
    title: "Theory of Automata & Formal Languages",
    desc: "DFA/NFA conversion, Moore/Mealy machines, CFG simplification and Turing Machines.",
    topics: ["Finite Automata & Regular Expressions", "Pumping Lemma", "Pushdown Automata", "Turing Machines"],
    updated: "Sep 2026"
  },
  {
    id: "n5",
    course: "MBA",
    branch: "Finance / HR",
    sem: "Semester 1",
    type: "PYQs",
    code: "KMBN-103",
    title: "Financial Accounting & Analysis",
    desc: "Balance sheet ratios, cash flow statements, and solved AKTU numericals.",
    topics: ["Accounting Standards", "Final Accounts", "Ratio & Cash Flow Analysis", "Cost Volume Profit"],
    updated: "Oct 2026"
  },
  {
    id: "n6",
    course: "B.Pharma",
    branch: "B.Pharma",
    sem: "Semester 1",
    type: "Lab",
    code: "BP-101T",
    title: "Human Anatomy & Physiology I",
    desc: "Labeled diagrams, tissue classification, and sessional viva question bank.",
    topics: ["Cellular Level Organization", "Integumentary & Skeletal System", "Cardiovascular System", "Lymphatic System"],
    updated: "Aug 2026"
  }
];

const DEFAULT_PLACEMENTS = [
  {
    id: "p1",
    company: "TCS Digital",
    tier: "service",
    package: "7.5 LPA",
    role: "Systems Engineer",
    author: "Raghav Verma (CSE '25)",
    summary: "NQT coding round + 45-min technical/HR panel focusing on DBMS joins & 2 medium array problems.",
    rounds: [
      "Round 1 (TCS NQT): Aptitude + 2 Coding questions (1 Easy string manipulation, 1 Medium sliding window).",
      "Round 2 (Technical + HR): Explained final-year MERN project, wrote SQL query for 2nd highest salary, and basic OOPs."
    ],
    tips: "Be thorough with everything written on your resume; interviewers ask follow-ups on your database schema."
  },
  {
    id: "p2",
    company: "Amazon",
    tier: "product",
    package: "24+ LPA",
    role: "SDE-1 (6M Intern + FTE)",
    author: "Sneha Gupta (IT '25)",
    summary: "Online Assessment with 2 DSA problems (Graphs & DP) followed by 2 technical interviews.",
    rounds: [
      "OA: 2 LeetCode Medium/Hard problems in 70 mins + Leadership Principles work-style survey.",
      "Tech Round 1: Rotten Oranges (BFS) and LRU Cache implementation with time complexity analysis.",
      "Tech Round 2: Lowest Common Ancestor in Binary Tree + Leadership Principles behavioral questions."
    ],
    tips: "Dry-run your code out loud before typing. Always mention space and time complexity."
  },
  {
    id: "p3",
    company: "Capgemini",
    tier: "service",
    package: "4.25 - 5.75 LPA",
    role: "Analyst",
    author: "Ankit Sharma (ECE '24)",
    summary: "Pseudo-code elimination round, gamified aptitude, and core CS/branch basics in interview.",
    rounds: [
      "Round 1: 25 Pseudo-code MCQs (bitwise operators, recursion output) + English communication.",
      "Round 2: Game-based cognitive test.",
      "Round 3: Technical + HR interview covering C basics, SQL Joins, and relocation readiness."
    ],
    tips: "Practice bitwise and recursion trace questions before the test."
  },
  {
    id: "p4",
    company: "Juspay",
    tier: "product",
    package: "21 LPA",
    role: "SDE (Intern + FTE)",
    author: "Devansh Tyagi (CSE '25)",
    summary: "Graph-heavy OA (Tree of Space) followed by a 1-day hackathon-style debugging round.",
    rounds: [
      "OA: 3 Graph/Tree problems (90 mins).",
      "Hackathon Round: Thread-safety optimization on Tree of Space problem with mentor review."
    ],
    tips: "Focus strongly on Trees, Graphs, and concurrency basics."
  }
];

const DEFAULT_LOST_FOUND = [
  {
    id: "lf1",
    type: "lost",
    item: "Noise Smartwatch (Silver Strap)",
    location: "Main Canteen Lawn",
    contact: "Aman (CSE 2nd Yr) - 98112XXXXX",
    time: "2 hours ago",
    claimed: false
  },
  {
    id: "lf2",
    type: "found",
    item: "College ID Card & Bike Key Ring",
    location: "Audi 2 (Submitted at Gate 1 Security)",
    contact: "Security Desk Gate 1",
    time: "Yesterday",
    claimed: false
  },
  {
    id: "lf3",
    type: "lost",
    item: "Blue Casio Scientific Calculator (fx-991EX)",
    location: "Block-B Room 204 after CT-1",
    contact: "Priya (IT 3rd Yr) - 99104XXXXX",
    time: "2 days ago",
    claimed: true
  }
];

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

function showToast(msg) {
  let toast = document.getElementById("hubToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "hubToast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof lucide !== "undefined") lucide.createIcons();

  if (localStorage.getItem(STORAGE_KEYS.theme) === "dark") {
    document.body.classList.add("dark");
  }

  document.getElementById("themeToggle")?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    saveJSON(STORAGE_KEYS.theme, document.body.classList.contains("dark") ? "dark" : "light");
  });

  const menuBtn = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  menuBtn?.addEventListener("click", () => navLinks?.classList.toggle("open"));

  if (document.getElementById("notesGrid")) initAcademicsPage();
  if (document.getElementById("placementsGrid")) initPlacementsPage();
  if (document.getElementById("lfFeed")) initLostFoundPage();
  if (document.getElementById("sgpaRows")) initToolsPage();
});

// ---------------- Academics Page ----------------
function initAcademicsPage() {
  const courseEl = document.getElementById("filterCourse");
  const branchEl = document.getElementById("filterBranch");
  const semEl = document.getElementById("filterSem");
  const searchEl = document.getElementById("filterSearch");
  const savedOnlyEl = document.getElementById("filterSavedOnly");
  const grid = document.getElementById("notesGrid");
  const countEl = document.getElementById("notesCount");
  const chips = document.querySelectorAll("#acadChipBar .filter-chip");

  let activeChip = "All";

  const branchOptions = {
    All: ["All", "CSE", "CSE (AI & ML)", "IT", "MCA Core", "Finance / HR", "B.Pharma"],
    "B.Tech": ["All", "CSE", "CSE (AI & ML)", "IT"],
    MCA: ["All", "MCA Core"],
    MBA: ["All", "Finance / HR"],
    "B.Pharma": ["All", "B.Pharma"]
  };

  function updateBranchDropdown() {
    const opts = branchOptions[courseEl.value] || branchOptions.All;
    branchEl.innerHTML = opts.map(o => `<option value="${o}">${o}</option>`).join("");
  }

  function renderNotes() {
    const savedIds = loadJSON(STORAGE_KEYS.savedNotes, []);
    const course = courseEl.value;
    const branch = branchEl.value;
    const sem = semEl.value;
    const query = searchEl.value.trim().toLowerCase();
    const savedOnly = savedOnlyEl && savedOnlyEl.checked;

    const filtered = NOTES_DATA.filter(n => {
      if (course !== "All" && n.course !== course) return false;
      if (branch !== "All" && n.branch !== branch) return false;
      if (sem !== "All" && n.sem !== sem) return false;
      if (activeChip !== "All" && n.type !== activeChip) return false;
      if (savedOnly && !savedIds.includes(n.id)) return false;
      if (query && !(`${n.title} ${n.code} ${n.desc}`.toLowerCase().includes(query))) return false;
      return true;
    });

    if (countEl) countEl.textContent = `${filtered.length} resource(s)`;

    if (!filtered.length) {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;">No notes match your filters. Try resetting to "All".</div>`;
      return;
    }

    grid.innerHTML = filtered.map(n => {
      const isSaved = savedIds.includes(n.id);
      return `
        <article class="card">
          <div>
            <div class="card-top">
              <span class="badge badge-accent">${escapeHTML(n.course)} • ${escapeHTML(n.sem)}</span>
              <span class="badge">${escapeHTML(n.code)} • ${escapeHTML(n.type)}</span>
            </div>
            <h3>${escapeHTML(n.title)}</h3>
            <p>${escapeHTML(n.desc)}</p>
            <div class="card-meta">${escapeHTML(n.branch)} • Updated ${escapeHTML(n.updated)}</div>
          </div>
          <div class="card-actions">
            <button class="btn-action" data-preview="${n.id}">Preview Syllabus</button>
            <button class="btn-secondary ${isSaved ? "saved" : ""}" data-save="${n.id}">
              ${isSaved ? "Saved" : "Save"}
            </button>
          </div>
        </article>
      `;
    }).join("");
  }

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeChip = chip.dataset.chip;
      renderNotes();
    });
  });

  courseEl.addEventListener("change", () => {
    updateBranchDropdown();
    renderNotes();
  });
  branchEl.addEventListener("change", renderNotes);
  semEl.addEventListener("change", renderNotes);
  searchEl.addEventListener("input", renderNotes);
  savedOnlyEl?.addEventListener("change", renderNotes);

  grid.addEventListener("click", e => {
    const saveBtn = e.target.closest("[data-save]");
    if (saveBtn) {
      const id = saveBtn.dataset.save;
      let saved = loadJSON(STORAGE_KEYS.savedNotes, []);
      if (saved.includes(id)) {
        saved = saved.filter(x => x !== id);
        showToast("Removed from saved notes.");
      } else {
        saved.push(id);
        showToast("Bookmarked to saved notes.");
      }
      saveJSON(STORAGE_KEYS.savedNotes, saved);
      renderNotes();
      return;
    }

    const prevBtn = e.target.closest("[data-preview]");
    if (prevBtn) {
      const note = NOTES_DATA.find(x => x.id === prevBtn.dataset.preview);
      if (note) openNoteModal(note);
    }
  });

  updateBranchDropdown();
  renderNotes();
}

function openNoteModal(note) {
  const modal = document.getElementById("noteModal");
  if (!modal) return;
  document.getElementById("modalTitle").textContent = `${note.code}: ${note.title}`;
  document.getElementById("modalMeta").textContent = `${note.course} • ${note.branch} • ${note.sem}`;
  document.getElementById("modalTopics").innerHTML = note.topics
    .map(t => `<li style="margin-bottom:6px;">${escapeHTML(t)}</li>`)
    .join("");

  document.getElementById("modalDownloadBtn").onclick = () => {
    showToast(`Preparing ${note.code} PDF packet...`);
    modal.classList.remove("open");
  };
  modal.classList.add("open");
}

// ---------------- Placements Page ----------------
function initPlacementsPage() {
  const grid = document.getElementById("placementsGrid");
  const searchEl = document.getElementById("placementSearch");
  const form = document.getElementById("shareExpForm");
  const chips = document.querySelectorAll("#placementChipBar .filter-chip");
  let activeTier = "all";

  function getExperiences() {
    return loadJSON(STORAGE_KEYS.placements, DEFAULT_PLACEMENTS);
  }

  function renderPlacements() {
    const query = (searchEl?.value || "").trim().toLowerCase();
    const list = getExperiences().filter(item => {
      if (activeTier !== "all" && item.tier !== activeTier) return false;
      if (query && !`${item.company} ${item.role} ${item.summary} ${item.author}`.toLowerCase().includes(query)) return false;
      return true;
    });

    if (!list.length) {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;">No interview experiences matched your filter.</div>`;
      return;
    }

    grid.innerHTML = list.map(p => `
      <article class="card">
        <div>
          <div class="card-top">
            <span class="badge badge-success">${escapeHTML(p.company)} • ${escapeHTML(p.package)}</span>
            <span class="badge">${escapeHTML(p.role)}</span>
          </div>
          <h3>${escapeHTML(p.company)} Interview Roadmap</h3>
          <p>${escapeHTML(p.summary)}</p>
          <div class="card-meta">Shared by ${escapeHTML(p.author)}</div>
        </div>
        <button class="btn-action" data-exp="${p.id}">Read Full Experience</button>
      </article>
    `).join("");
  }

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeTier = chip.dataset.tier;
      renderPlacements();
    });
  });

  searchEl?.addEventListener("input", renderPlacements);

  grid.addEventListener("click", e => {
    const btn = e.target.closest("[data-exp]");
    if (!btn) return;
    const exp = getExperiences().find(x => x.id === btn.dataset.exp);
    if (!exp) return;

    const modal = document.getElementById("expModal");
    document.getElementById("expTitle").textContent = `${exp.company} — ${exp.role} (${exp.package})`;
    document.getElementById("expAuthor").textContent = `Shared by ${exp.author}`;
    document.getElementById("expRounds").innerHTML = exp.rounds
      .map(r => `<li style="margin-bottom:8px;">${escapeHTML(r)}</li>`)
      .join("");
    document.getElementById("expTips").textContent = exp.tips;
    modal.classList.add("open");
  });

  form?.addEventListener("submit", e => {
    e.preventDefault();
    const company = document.getElementById("expCompany").value.trim();
    const pkg = document.getElementById("expPackage").value.trim();
    const tier = document.getElementById("expTier")?.value || "service";
    const role = document.getElementById("expRole").value.trim();
    const author = document.getElementById("expAuthorInput").value.trim();
    const roundText = document.getElementById("expRoundInput").value.trim();
    const tips = document.getElementById("expTipsInput").value.trim();

    if (!company || !role || !roundText) {
      showToast("Please fill Company, Role, and Round details.");
      return;
    }

    const list = getExperiences();
    list.unshift({
      id: "p_" + Date.now(),
      company,
      tier,
      package: pkg || "Undisclosed",
      role,
      author: author || "KIET Student",
      summary: roundText.slice(0, 110) + (roundText.length > 110 ? "..." : ""),
      rounds: roundText.split("\n").filter(Boolean),
      tips: tips || "Stay calm and revise core fundamentals."
    });
    saveJSON(STORAGE_KEYS.placements, list);
    form.reset();
    renderPlacements();
    showToast("Interview experience published!");
  });

  renderPlacements();
}

// ---------------- Lost & Found Page ----------------
function initLostFoundPage() {
  const feedEl = document.getElementById("lfFeed");
  const filterTypeEl = document.getElementById("lfFilterType");
  const searchEl = document.getElementById("lfSearch");
  const form = document.getElementById("lfForm");

  function getItems() {
    return loadJSON(STORAGE_KEYS.lostFound, DEFAULT_LOST_FOUND);
  }

  function renderFeed() {
    const typeFilter = filterTypeEl?.value || "all";
    const query = (searchEl?.value || "").trim().toLowerCase();
    const items = getItems().filter(item => {
      if (typeFilter !== "all" && item.type !== typeFilter) return false;
      if (query && !`${item.item} ${item.location} ${item.contact}`.toLowerCase().includes(query)) return false;
      return true;
    });

    if (!items.length) {
      feedEl.innerHTML = `<div class="empty-state">No listings found for this filter.</div>`;
      return;
    }

    feedEl.innerHTML = items.map(item => `
      <div class="feed-item ${item.claimed ? "claimed" : ""}">
        <div class="feed-content">
          <span class="badge ${item.type === "lost" ? "badge-danger" : "badge-success"}">${item.type.toUpperCase()}</span>
          ${item.claimed ? `<span class="badge badge-amber">RESOLVED</span>` : ""}
          <h4>${escapeHTML(item.item)}</h4>
          <p><strong>Spot:</strong> ${escapeHTML(item.location)}</p>
          <p><strong>Contact:</strong> ${escapeHTML(item.contact)} • <small>${escapeHTML(item.time)}</small></p>
        </div>
        <div style="display:flex; flex-direction:column; gap:6px;">
          <button class="btn-secondary" data-claim="${item.id}">${item.claimed ? "Reopen" : "Mark Resolved"}</button>
          <button class="btn-secondary" data-delete="${item.id}" style="color:var(--red);">Delete</button>
        </div>
      </div>
    `).join("");
  }

  form?.addEventListener("submit", e => {
    e.preventDefault();
    const type = document.getElementById("lfType").value;
    const item = document.getElementById("lfItem").value.trim();
    const location = document.getElementById("lfLocation").value.trim();
    const contact = document.getElementById("lfContact").value.trim();

    if (!item || !location || !contact) {
      showToast("Please fill in item, location, and contact info.");
      return;
    }

    const items = getItems();
    items.unshift({
      id: "lf_" + Date.now(),
      type,
      item,
      location,
      contact,
      time: "Just now",
      claimed: false
    });
    saveJSON(STORAGE_KEYS.lostFound, items);
    form.reset();
    renderFeed();
    showToast("Notice posted to campus feed!");
  });

  feedEl.addEventListener("click", e => {
    const claimBtn = e.target.closest("[data-claim]");
    if (claimBtn) {
      const items = getItems().map(x => x.id === claimBtn.dataset.claim ? { ...x, claimed: !x.claimed } : x);
      saveJSON(STORAGE_KEYS.lostFound, items);
      renderFeed();
      return;
    }

    const delBtn = e.target.closest("[data-delete]");
    if (delBtn) {
      const items = getItems().filter(x => x.id !== delBtn.dataset.delete);
      saveJSON(STORAGE_KEYS.lostFound, items);
      renderFeed();
      showToast("Listing removed.");
    }
  });

  filterTypeEl?.addEventListener("change", renderFeed);
  searchEl?.addEventListener("input", renderFeed);
  renderFeed();
}

// ---------------- Tools Page ----------------
function initToolsPage() {
  document.getElementById("calcAttendanceBtn")?.addEventListener("click", () => {
    const total = parseInt(document.getElementById("totalClasses").value, 10);
    const attended = parseInt(document.getElementById("attendedClasses").value, 10);
    const target = parseFloat(document.getElementById("targetPercent")?.value || "75");
    const resultDiv = document.getElementById("attendanceResult");

    if (isNaN(total) || isNaN(attended) || total <= 0 || attended < 0 || attended > total) {
      resultDiv.className = "result-box danger";
      resultDiv.textContent = "Please enter valid numbers (attended cannot exceed total).";
      resultDiv.classList.remove("hidden");
      return;
    }

    const pct = (attended / total) * 100;
    const frac = target / 100;

    if (pct >= target) {
      const canSkip = Math.floor((attended - frac * total) / frac);
      resultDiv.className = "result-box success";
      resultDiv.innerHTML = `<strong>Current: ${pct.toFixed(1)}%</strong><br>Safe above ${target}%. You can miss up to <strong>${canSkip}</strong> upcoming class(es).`;
    } else {
      const need = Math.ceil((frac * total - attended) / (1 - frac));
      resultDiv.className = "result-box warning";
      resultDiv.innerHTML = `<strong>Current: ${pct.toFixed(1)}%</strong><br>Short of ${target}%. Attend the next <strong>${need}</strong> consecutive class(es) to recover.`;
    }
    resultDiv.classList.remove("hidden");
  });

  document.getElementById("calcInternalBtn")?.addEventListener("click", () => {
    const ct1 = parseFloat(document.getElementById("ct1Marks").value);
    const ct2 = parseFloat(document.getElementById("ct2Marks").value);
    const ta = parseFloat(document.getElementById("taMarks").value);
    const res = document.getElementById("internalResult");

    if ([ct1, ct2, ta].some(isNaN) || ct1 < 0 || ct1 > 30 || ct2 < 0 || ct2 > 30 || ta < 0 || ta > 10) {
      res.className = "result-box danger";
      res.textContent = "Enter CT-1 & CT-2 between 0–30, and Teacher Assessment between 0–10.";
      res.classList.remove("hidden");
      return;
    }

    const ctScaled = ((ct1 + ct2) / 2) * (20 / 30);
    const internalOutOf30 = Math.round((ctScaled + ta) * 10) / 10;
    const statusClass = internalOutOf30 >= 22 ? "success" : internalOutOf30 >= 15 ? "warning" : "danger";

    res.className = `result-box ${statusClass}`;
    res.innerHTML = `<strong>Estimated Internal: ${internalOutOf30} / 30</strong><br>CT Contribution: ${ctScaled.toFixed(1)}/20 + TA: ${ta}/10.`;
    res.classList.remove("hidden");
  });

  const rowsContainer = document.getElementById("sgpaRows");
  const addRowBtn = document.getElementById("addSubjectRow");
  const calcSgpaBtn = document.getElementById("calcSgpaBtn");
  const sgpaResult = document.getElementById("sgpaResult");

  function addSubjectRow(name = "", credits = "4", grade = "9") {
    const row = document.createElement("div");
    row.className = "subject-row";
    row.innerHTML = `
      <input type="text" placeholder="Subject (e.g. DSA)" value="${escapeHTML(name)}">
      <input type="number" class="sub-credit" min="1" max="6" step="0.5" value="${credits}" placeholder="Credits">
      <select class="sub-grade">
        <option value="10" ${grade === "10" ? "selected" : ""}>A+ (10)</option>
        <option value="9" ${grade === "9" ? "selected" : ""}>A (9)</option>
        <option value="8" ${grade === "8" ? "selected" : ""}>B+ (8)</option>
        <option value="7" ${grade === "7" ? "selected" : ""}>B (7)</option>
        <option value="6" ${grade === "6" ? "selected" : ""}>C (6)</option>
        <option value="5" ${grade === "5" ? "selected" : ""}>D (5)</option>
        <option value="0" ${grade === "0" ? "selected" : ""}>F (0)</option>
      </select>
      <button type="button" class="btn-secondary remove-row" title="Remove">×</button>
    `;
    rowsContainer.appendChild(row);
  }

  addSubjectRow("Data Structures", "4", "9");
  addSubjectRow("COA", "4", "8");
  addSubjectRow("Discrete Math", "3", "9");

  addRowBtn?.addEventListener("click", () => addSubjectRow());

  rowsContainer.addEventListener("click", e => {
    if (e.target.classList.contains("remove-row") && rowsContainer.children.length > 1) {
      e.target.closest(".subject-row").remove();
    }
  });

  calcSgpaBtn?.addEventListener("click", () => {
    let totalCredits = 0;
    let weightedPoints = 0;
    rowsContainer.querySelectorAll(".subject-row").forEach(row => {
      const c = parseFloat(row.querySelector(".sub-credit").value);
      const g = parseFloat(row.querySelector(".sub-grade").value);
      if (!isNaN(c) && c > 0) {
        totalCredits += c;
        weightedPoints += c * g;
      }
    });

    if (totalCredits === 0) {
      sgpaResult.className = "result-box danger";
      sgpaResult.textContent = "Add at least one subject with valid credits.";
      sgpaResult.classList.remove("hidden");
      return;
    }

    const sgpa = (weightedPoints / totalCredits).toFixed(2);
    const pct = ((sgpa - 0.75) * 10).toFixed(1);
    sgpaResult.className = "result-box success";
    sgpaResult.innerHTML = `<strong>Estimated SGPA: ${sgpa} / 10</strong> (Total Credits: ${totalCredits})<br>Approx. Percentage (AKTU): ~${pct}%`;
    sgpaResult.classList.remove("hidden");
  });
}

document.addEventListener("click", e => {
  if (e.target.classList.contains("modal-backdrop") || e.target.closest("[data-close-modal]")) {
    document.querySelectorAll(".modal-backdrop.open").forEach(m => m.classList.remove("open"));
  }
});
