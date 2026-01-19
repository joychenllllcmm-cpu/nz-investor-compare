const S = window.NZ_INVESTOR_DATA;

function el(tag, cls, html){
  const e = document.createElement(tag);
  if(cls) e.className = cls;
  if(html !== undefined) e.innerHTML = html;
  return e;
}

function srcLink(srcKey){
  const map = { bizNews: S.sources.bizNews, aip: S.sources.aip, nztE: S.sources.nztE };
  const url = map[srcKey] || S.sources.bizNews;
  return `<a class="pill" target="_blank" rel="noreferrer" href=" ">Source</a >`;
}

function colorDot(kind){
  const map = { eligibility:"d1", documents:"d2", funds:"d3", timeline:"d4" };
  return `<span class="dot ${map[kind]}"></span>`;
}

function moduleCard(title, kind, items){
  const card = el("div", "card");
  const head = el("div", "card-h", `<div>${colorDot(kind)} ${title}</div><div class="pills"></div>`);
  card.appendChild(head);

  const body = el("div", "card-b");
  const ul = el("ul", "list");
  items.forEach(x=>{
    const li = el("li");
    li.innerHTML = `${x.t} <span class="pills" style="margin-left:8px">${srcLink(x.src)}</span>`;
    ul.appendChild(li);
  });
  body.appendChild(ul);

  // 原文容器（用于零遗漏）
  const details = el("div", "details");
  const dt = el("details", "");
  const sm = el("summary", "", "原文区块");
  const pre = el("div", "small", "零遗漏模式：把官网全文粘贴进 data.js 的 rawText，本区块用于原文展示与核对。");
  dt.appendChild(sm);
  dt.appendChild(pre);
  details.appendChild(dt);
  body.appendChild(details);

  card.appendChild(body);
  return card;
}

function timelineViz(nodes){
  const wrap = el("div", "timeline");
  const row = el("div", "t-row");
  nodes.forEach(n=>{
    const node = el("div", "t-node");
    node.appendChild(el("div", "t", n.t));
    node.appendChild(el("div", "d", n.d));
    row.appendChild(node);
  });
  wrap.appendChild(row);
  return wrap;
}

function fundsBar(path){
  // 资金可视化：以“投资额”为主，其他作为说明
  const f = path.modules.funds.map(x=>x.t).join(" · ");
  const box = el("div", "timeline");
  box.appendChild(el("div", "t", "资金构成概览"));
  box.appendChild(el("div", "d", f));
  const bar = el("div", "bar");
  const inner = el("div");
  inner.style.width = "100%";
  inner.style.background = "linear-gradient(90deg, rgba(52,211,153,.85), rgba(125,211,252,.75), rgba(167,139,250,.65))";
  bar.appendChild(inner);
  box.appendChild(bar);
  return box;
}

function renderPath(path){
  const section = el("section", "section");
  section.id = path.id;

  const head = el("div", "section-head");
  head.appendChild(el("div", "", `<h2 class="section-title">${path.name}</h2><div class="muted">${path.subtitle}</div>`));

  const linkBox = el("div", "pills");
  path.links.forEach(l=>{
    const a = el("a", "pill", l.label);
    a.href = l.url; a.target="_blank"; a.rel="noreferrer";
    linkBox.appendChild(a);
  });
  head.appendChild(linkBox);

  section.appendChild(head);

  const kpis = el("div", "kpis");
  path.kpi.forEach(k=>{
    const c = el("div", "kpi");
    c.appendChild(el("div", "k", k.k));
    c.appendChild(el("div", "v", k.v));
    c.appendChild(el("div", "s", k.s));
    kpis.appendChild(c);
  });
  section.appendChild(kpis);

  const cards = el("div", "cards");
  cards.appendChild(moduleCard("申请人必备条件", "eligibility", path.modules.eligibility));
  cards.appendChild(moduleCard("需要提交的移民材料", "documents", path.modules.documents));
  cards.appendChild(moduleCard("所需各类资金明细", "funds", path.modules.funds));
  // timeline module rendered as a list with sources if provided; here use viz nodes
  const tlCard = el("div", "card");
  tlCard.appendChild(el("div", "card-h", `${colorDot("timeline")} 大概时间流程`));
  const tlBody = el("div", "card-b");
  tlBody.appendChild(timelineViz(path.modules.timeline));
  tlBody.appendChild(el("div", "hr"));
  tlBody.appendChild(fundsBar(path));
  tlCard.appendChild(tlBody);
  cards.appendChild(tlCard);

  section.appendChild(cards);
  return section;
}

function renderAll(){
  const root = document.getElementById("content");
  root.innerHTML = "";
  S.pathways.forEach(p=>root.appendChild(renderPath(p)));
}

function compareRows(){
  return S.pathways.map(p=>{
    const fundsText = p.modules.funds.map(x=>x.t).join(" / ");
    const coreTags = p.modules.eligibility.slice(0,6).map(x=>x.t);
    const nodes = p.modules.timeline.map(x=>x.t).join(" → ");
    return {
      id:p.id,
      group:p.group,
      name:p.name,
      min:p.kpi.find(x=>x.k==="最低投资额")?.v || "",
      path:p.kpi.find(x=>x.k==="路径性质")?.v || (p.group==="aip" ? "Resident（AIP）":"Work → Resident"),
      term:(p.group==="aip" ? (p.kpi.find(x=>x.k==="投资期")?.v || "") : "Visa valid up to 4 years"),
      stay:(p.group==="aip" ? (p.kpi.find(x=>x.k==="到境要求")?.v || "") : "Work/Resident 条件以 INZ Pathway 为准"),
      tags:coreTags,
      funds:fundsText,
      nodes,
      link:(p.group==="aip" ? S.sources.aip : S.sources.bizNews)
    };
  });
}

function renderCompare(){
  const tbody = document.querySelector("#compareTable tbody");
  tbody.innerHTML = "";
  compareRows().forEach(r=>{
    const tr = document.createElement("tr");
    tr.dataset.group = r.group;
    tr.dataset.id = r.id;
    tr.innerHTML = `
      <td><strong>${r.name}</strong></td>
      <td>${r.min}</td>
      <td>${r.path}</td>
      <td>${r.term}</td>
      <td>${r.stay}</td>
      <td>${r.tags.map(t=>`<div class="tag">${t}</div>`).join("")}</td>
      <td>${r.funds}</td>
      <td>${r.nodes}</td>
      <td><a class="pill" target="_blank" rel="noreferrer" href="${r.link}">Open</a ></td>
    `;
    tbody.appendChild(tr);
  });
}

function setupFilters(){
  const sel = document.getElementById("focusSelect");
  sel.addEventListener("change", ()=>{
    const v = sel.value;
    document.querySelectorAll("#compareTable tbody tr").forEach(tr=>{
      if(v==="all") tr.style.display = "";
      if(v==="biv") tr.style.display = (tr.dataset.group==="biv") ? "" : "none";
      if(v==="aip") tr.style.display = (tr.dataset.group==="aip") ? "" : "none";
    });
  });

  const diffBtn = document.getElementById("diffBtn");
  let on = false;
  diffBtn.addEventListener("click", ()=>{
    on = !on;
    document.querySelectorAll("#compareTable tbody tr").forEach(tr=>{
      tr.classList.toggle("hl", on);
    });
  });
}

function setupGlobalSearch(){
  const box = document.getElementById("globalSearch");
  box.addEventListener("input", ()=>{
    const q = box.value.trim().toLowerCase();
    const sections = document.querySelectorAll(".section");
    sections.forEach(s=>{
      const txt = s.innerText.toLowerCase();
      s.style.display = txt.includes(q) ? "" : "none";
    });
  });
}

function setupExpandCollapse(){
  const expandBtn = document.getElementById("expandBtn");
  const collapseBtn = document.getElementById("collapseBtn");
  expandBtn.addEventListener("click", ()=>document.querySelectorAll("details").forEach(d=>d.open=true));
  collapseBtn.addEventListener("click", ()=>document.querySelectorAll("details").forEach(d=>d.open=false));
}

function setupPrint(){
  document.getElementById("printBtn").addEventListener("click", ()=>{
    document.body.classList.toggle("print");
  });
}

renderAll();
renderCompare();
setupFilters();
setupGlobalSearch();
setupExpandCollapse();
setupPrint();
