(() => {
  const books = window.MERIDIAN_BOOKS || [];
  const categories = window.MERIDIAN_CATEGORIES || [];
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const STORAGE = "meridian-reader-preview-v1";
  let state; try { state=JSON.parse(localStorage.getItem(STORAGE))||{}; } catch { state={}; }
  state.saved=Array.isArray(state.saved)?state.saved:[];
  let activeCategory="All collections", query="", toastTimer;
  const esc = s => String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const save = () => localStorage.setItem(STORAGE,JSON.stringify(state));
  const bookByTitle = text => {
    const q=String(text||"").toLowerCase().replace(/[^a-z0-9\s]/g," ").trim();
    if(!q)return null;
    return books.find(b=>q.includes(b.title.toLowerCase())||b.title.toLowerCase().includes(q)) ||
      books.find(b=>q.includes(b.author.toLowerCase())||b.author.toLowerCase().includes(q));
  };
  function toast(message){const el=$("#toast");el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2400);}
  function cover(b,feature=false){return `<div class="book-cover${feature?" feature-book":""}" style="background:linear-gradient(145deg,${b.color},${shade(b.color)})"><span class="cover-kicker">${esc(b.label)} · MERIDIAN</span><b class="cover-title">${esc(b.title)}</b><i class="cover-author">${esc(b.author.toUpperCase())}</i></div>`;}
  function shade(hex){let x=hex.replace("#","");let n=parseInt(x,16);let r=Math.max(0,((n>>16)&255)-25),g=Math.max(0,((n>>8)&255)-25),b=Math.max(0,(n&255)-25);return `#${[r,g,b].map(v=>v.toString(16).padStart(2,"0")).join("")}`;}
  function bookCard(b){return `<article class="book-card" tabindex="0" role="button" aria-label="View ${esc(b.title)} details" data-book="${esc(b.id)}">${cover(b)}<div class="book-info"><span class="book-category">${esc(b.category)}</span><h3>${esc(b.title)}</h3><p>${esc(b.author)}</p><span class="book-status${b.available?"":" unavailable"}"><i></i>${b.available?"Available to borrow":"Currently borrowed"}</span></div></article>`;}
  function renderCategories(){
    $("#collectionCount").textContent=String(books.length).padStart(2,"0");
    $("#categoryGrid").innerHTML=categories.map(c=>`<article class="category-card" role="button" tabindex="0" data-category="${esc(c.name)}"><span class="cat-no">${c.icon}</span><span class="cat-arrow">↗</span><h3>${esc(c.name)}</h3><p>${esc(c.descriptor)}</p></article>`).join("");
    $("#categoryPills").innerHTML=["All collections",...categories.map(c=>c.name)].map(c=>`<button class="${activeCategory===c?"active":""}" data-pick-category="${esc(c)}">${esc(c)}</button>`).join("");
  }
  function renderFeature(){const picks=[books.find(b=>b.title==="Introduction to Algorithms"),books.find(b=>b.title==="Computer Networking: A Top-Down Approach"),books.find(b=>b.title==="Clean Code")].filter(Boolean);$("#featureBooks").innerHTML=picks.map(b=>`<article tabindex="0" data-book="${esc(b.id)}">${cover(b,true)}</article>`).join("");}
  function filtered(){
    let list=books.filter(b=>activeCategory==="All collections"||b.category===activeCategory);
    const q=query.trim().toLowerCase();
    if(q)list=list.filter(b=>[b.title,b.author,b.category,b.summary,b.year].some(v=>String(v).toLowerCase().includes(q)));
    const availability=$("#availabilityFilter").value;
    if(availability==="available")list=list.filter(b=>b.available);
    if(availability==="unavailable")list=list.filter(b=>!b.available);
    const sort=$("#sortSelect").value;
    if(sort==="title")list.sort((a,b)=>a.title.localeCompare(b.title));
    if(sort==="year")list.sort((a,b)=>b.year-a.year);
    if(sort==="popular")list.sort((a,b)=>b.popularity-a.popularity);
    if(sort==="featured")list.sort((a,b)=>b.popularity-a.popularity);
    return list;
  }
  function renderCatalog(){const list=filtered();$("#catalogGrid").innerHTML=list.map(bookCard).join("");$("#resultCount").textContent=String(list.length).padStart(2,"0");$("#noResults").classList.toggle("hidden",list.length>0);$$("[data-pick-category]").forEach(btn=>btn.classList.toggle("active",btn.dataset.pickCategory===activeCategory));}
  function renderPopular(){const list=[...books].sort((a,b)=>b.popularity-a.popularity).slice(0,4);$("#popularRail").innerHTML=list.map(bookCard).join("");}
  function setCategory(name){activeCategory=name;renderCatalog();$("#collection").scrollIntoView({behavior:"smooth"});}
  function openBook(id){const b=books.find(x=>x.id===id);if(!b)return;const isSaved=state.saved.includes(id);$("#bookDetail").innerHTML=`<div class="detail-top">${cover(b)}<div><span class="detail-kicker">${esc(b.category)} · ${b.year}</span><h2>${esc(b.title)}</h2><p>by ${esc(b.author)}</p></div></div><div class="detail-summary"><h3>A little about this book</h3><p>${esc(b.summary)}</p></div><div class="detail-bottom"><span>${b.available?"● Available to borrow":"● Currently borrowed"} · ${b.available?`${b.copies} copies in this demo collection`:"Join the hold list at the library desk"}</span><button id="saveBookButton" data-save-book="${esc(b.id)}">${isSaved?"♥ Saved to your list":"♡ Save to reading list"}</button></div>`;$("#bookDialog").showModal();}
  function openInfo(kind){const content=kind==="account"?`<div class="eyebrow"><i></i> READER ACCESS</div><h2>Your Meridian card</h2><p>Sign-in is a preview in this front-end demo. Reader accounts and saved lists are stored locally in this browser; a real library sign-in would connect to a secure membership service.</p><p>For this preview, your reading list stays on this device.</p>`:`<div class="eyebrow"><i></i> MEMBERSHIP</div><h2>Make room for more wonder.</h2><p>Meridian membership is shown as a product concept. A connected library service could let readers manage loans, save reading lists, and request books online.</p><p>No account creation or payment processing is connected in this demo.</p>`;$("#infoContent").innerHTML=content+`<button class="button dark-button" id="dismissInfo">Understood <span>→</span></button>`;$("#infoDialog").showModal();}
  function findSuggestions(text){
    const q=text.toLowerCase();
    const category=categories.find(c=>q.includes(c.name.toLowerCase())||c.name.toLowerCase().split(/[ &]+/).filter(w=>w.length>4).some(w=>q.includes(w)));
    let list=books.filter(b=>b.available);
    if(category)list=list.filter(b=>b.category===category.name);
    else {
      const words=q.split(/\W+/).filter(w=>w.length>3&&!['book','books','want','like','love','read','find','some','good','with','about','recommend','recommendation','suggest','tell','please','something','that','this'].includes(w));
      const scored=list.map(b=>({b,score:words.reduce((n,w)=>n+([b.title,b.author,b.category,b.summary].join(" ").toLowerCase().includes(w)?1:0),0)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).map(x=>x.b);
      if(scored.length)list=scored;
    }
    if(!category&&!list.length)list=books.filter(b=>b.available);
    return list.sort((a,b)=>b.popularity-a.popularity).slice(0,3);
  }
  function botAnswer(text){
    const q=text.toLowerCase(),target=bookByTitle(text);
    const wantsAvailability=/available|borrow|in stock|on the shelf|have a copy|copies|can i get|check out|loan/.test(q);
    const wantsSummary=/summar|about|what is|what's|tell me|overview|describe/.test(q);
    if(target&&wantsAvailability){return `<b>${esc(target.title)}</b> is ${target.available?"available to borrow right now in this demo collection":"currently borrowed in this demo collection"}${target.available?` (${target.copies} sample copies listed).`:"."} ${esc(target.summary)}`;}
    if(target&&wantsSummary){return `<b>${esc(target.title)}</b> — ${esc(target.summary)} ${target.available?"It’s available in the sample collection.":"It’s currently listed as borrowed."}`;}
    if(target){return `<b>${esc(target.title)}</b> by ${esc(target.author)} is in <b>${esc(target.category)}</b>. ${target.available?"It’s available in the demo collection.":"It’s currently borrowed."} Ask me for a short summary or try another title.`;}
    if(/available|borrow|in stock|on the shelf|have a copy|copies|can i get|check out|loan/.test(q)){
      const similar=books.filter(b=>b.available&&q.split(/\W+/).some(w=>w.length>3&&[b.title,b.category,b.author].join(" ").toLowerCase().includes(w))).slice(0,3);
      if(similar.length)return `I couldn’t find that exact title. These related books are available in the demo catalog: ${similar.map(b=>`<b>${esc(b.title)}</b> (${esc(b.category)})`).join(" · ")}.`;
      return `I don’t see that exact title in the sample catalog. Try the collection search, or tell me a subject or author and I’ll look for nearby options.`;
    }
    const recs=findSuggestions(q);
    if(recs.length){const header=/recommend|suggest|looking for|want|like|love|mood|something|interested|study|learn/.test(q)?"Here are a few available titles that may fit:":"I can help with titles, availability, quick summaries, or suggestions. To get you started:";return `${header} ${recs.map(b=>`<span class="message-book"><b>${esc(b.title)}</b> — ${esc(b.author)}<br>${esc(b.summary)}</span>`).join("")}`;}
    return `I can check a title’s sample availability, share its short catalog summary, or suggest a few books. Try “Is Dune available?”, “Summarize The Hobbit”, or tell me a subject you enjoy.`;
  }
  function addMessage(text,who,html=false){const box=$("#chatMessages"),div=document.createElement("div");div.className=`message ${who}`;if(html)div.innerHTML=text;else div.textContent=text;box.appendChild(div);box.scrollTop=box.scrollHeight;}
  function ask(text){const cleaned=text.trim();if(!cleaned)return;addMessage(cleaned,"user");$("#chatInput").value="";addMessage(botAnswer(cleaned),"bot",true);}
  function openChat(prompt){$("#concierge").classList.add("open");$("#concierge").setAttribute("aria-hidden","false");if(prompt)ask(prompt);else setTimeout(()=>$("#chatInput").focus(),100);}
  function initChat(){addMessage("Welcome to Meridian. Ask me about a title’s availability, request a quick summary, or tell me what kind of book you’re in the mood for.","bot");}

  renderCategories();renderFeature();renderPopular();renderCatalog();initChat();
  $("#catalogSearch").addEventListener("input",e=>{query=e.target.value;renderCatalog();});
  $("#availabilityFilter").addEventListener("change",renderCatalog);$("#sortSelect").addEventListener("change",renderCatalog);
  $("#heroSearchButton").addEventListener("click",()=>{$("#catalogSearch").value=$("#heroSearch").value;query=$("#heroSearch").value;renderCatalog();$("#collection").scrollIntoView({behavior:"smooth"});});
  $("#heroSearch").addEventListener("keydown",e=>{if(e.key==="Enter")$("#heroSearchButton").click();});
  $("#clearSearch").addEventListener("click",()=>{$("#catalogSearch").value="";query="";renderCatalog();});
  $("#resetFilters").addEventListener("click",()=>{activeCategory="All collections";query="";$("#catalogSearch").value="";$("#availabilityFilter").value="all";$("#sortSelect").value="featured";renderCatalog();});
  document.addEventListener("click",e=>{
    const category=e.target.closest("[data-category]")?.dataset.category;if(category){setCategory(category);return;}
    const pick=e.target.closest("[data-pick-category]")?.dataset.pickCategory;if(pick){setCategory(pick);return;}
    const book=e.target.closest("[data-book]")?.dataset.book;if(book){openBook(book);return;}
    const queryBtn=e.target.closest("[data-query]")?.dataset.query;if(queryBtn){$("#heroSearch").value=queryBtn;$("#heroSearchButton").click();return;}
    const sort=e.target.closest("[data-sort]")?.dataset.sort;if(sort){$("#sortSelect").value=sort;renderCatalog();$("#collection").scrollIntoView({behavior:"smooth"});return;}
    const featured=e.target.closest("[data-category]")?.dataset.category;
    if(e.target.closest("#headerAsk")){openChat();return;}
    if(e.target.closest("#accountButton")){openInfo("account");return;}
    if(e.target.closest("#membershipButton")){openInfo("membership");return;}
    if(e.target.closest("#conciergeFab")){openChat();return;}
    if(e.target.closest("#closeConcierge")){closeChat();return;}
    if(e.target.closest("#closeBookDialog"))$("#bookDialog").close();
    if(e.target.closest("#closeInfoDialog"))$("#infoDialog").close();
    if(e.target.closest("#dismissInfo"))$("#infoDialog").close();
    const saveId=e.target.closest("[data-save-book]")?.dataset.saveBook;if(saveId){state.saved=state.saved.includes(saveId)?state.saved.filter(x=>x!==saveId):[...state.saved,saveId];save();openBook(saveId);toast(state.saved.includes(saveId)?"Saved to your reading list.":"Removed from your reading list.");}
  });
  function closeChat(){$("#concierge").classList.remove("open");$("#concierge").setAttribute("aria-hidden","true");}
  $("#chatForm").addEventListener("submit",e=>{e.preventDefault();ask($("#chatInput").value);});
  $$("[data-prompt]").forEach(b=>b.addEventListener("click",()=>ask(b.dataset.prompt)));
  $("#mobileMenu").addEventListener("click",()=>$(".main-nav").classList.toggle("open"));
  $$(".main-nav a").forEach(a=>a.addEventListener("click",()=>$(".main-nav").classList.remove("open")));
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeChat();if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();$("#catalogSearch").focus();$("#collection").scrollIntoView({behavior:"smooth"});}});
})();
