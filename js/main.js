const $=s=>document.querySelector(s),esc=t=>String(t).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const waLink=(k,extra)=>`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent((CONFIG.waMessages[k]||CONFIG.waMessages.general)+(extra?"\n\n"+extra:""))}`;
document.querySelectorAll("[data-cta]").forEach(a=>a.textContent=CONFIG.consultLabel);
document.querySelectorAll("[data-wa]").forEach(a=>a.href=waLink(a.dataset.wa));
$("#yr").textContent=new Date().getFullYear();$("#fLoc").textContent=CONFIG.location;
$("#menuBtn").onclick=e=>{const o=$("#links").classList.toggle("open");e.target.setAttribute("aria-expanded",o)};
$("#links").onclick=e=>{if(e.target.tagName==="A")$("#links").classList.remove("open")};
$("#svcGrid").innerHTML=CONFIG.services.map(s=>`<article class="card"><div class="ic" aria-hidden="true">${s.ic}</div><h3>${esc(s.id)}</h3><p>${esc(s.d)}</p><ul>${s.b.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><p><span class="tag">Request a Quote</span></p><div class="row" style="margin:0"><a class="btn" href="#contact" data-svc="${esc(s.id)}">Request This Service</a><a class="btn ghost" target="_blank" rel="noopener" href="${waLink(s.wa)}">WhatsApp</a></div></article>`).join("");
$("#flows").innerHTML=CONFIG.flows.map(f=>`<article class="card"><h3>${esc(f.t)}</h3><div class="flow">${f.s.map((x,i)=>(i?'<span class="arr" aria-hidden="true">→</span>':"")+`<span class="node${/AI|Categor/.test(x)?" ai":""}">${esc(x)}</span>`).join("")}</div><p><strong>Problem:</strong> ${esc(f.p)}</p><p><strong>Benefit:</strong> ${esc(f.g)}</p></article>`).join("");
$("#pkgs").innerHTML=CONFIG.packages.map(p=>`<article class="card"><h3>${esc(p.n)}</h3><ul>${p.f.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><p><strong>${p.price?"GH₵ "+esc(p.price):"Request a Quote"}</strong><br><small>Final scope depends on your needs. Optional monthly support available.</small></p></article>`).join("");
$("#projGrid").innerHTML=CONFIG.projects.map(p=>`<article class="card"><span class="tag">Demo Project · ${esc(p.tag)}</span><h3 style="margin-top:10px">${esc(p.t)}</h3><p><strong>Objective:</strong> ${esc(p.o)}</p><p><strong>Solution:</strong> ${esc(p.s)}</p><p><strong>Technologies:</strong> ${esc(p.tech)}</p></article>`).join("");
$("#faqList").innerHTML=CONFIG.faqs.map(f=>`<details><summary>${esc(f[0])}</summary><p style="margin-top:8px">${esc(f[1])}</p></details>`).join("");
$("#contactInfo").innerHTML=`📍 ${esc(CONFIG.location)}<br>📞 ${esc(CONFIG.phone)}<br>✉️ ${esc(CONFIG.email)}${CONFIG.hours?"<br>🕒 "+esc(CONFIG.hours):""}`;
const opts=CONFIG.services.map(s=>`<option>${esc(s.id)}</option>`).join("");
const field=(id,l,t,req,extra="")=>`<label for="${id}">${l}${req?" *":""}<input id="${id}" name="${id}" type="${t}" ${req?"required":""} ${extra}><span class="err" data-for="${id}"></span></label>`;
const base=(p,ai)=>field(p+"cname","Full name","text",1,'autocomplete="name"')+field(p+"cphone","Phone number","tel",1,'autocomplete="tel"')+field(p+"cemail","Email address","email",1,'autocomplete="email"')+(ai?`<label for="${p}biz">Business type *<input id="${p}biz" name="${p}biz" required placeholder="e.g. salon, clinic, shop"><span class="err" data-for="${p}biz"></span></label>`:`<label for="${p}service">Service required *<select id="${p}service" name="${p}service" required><option value="">Choose…</option>${opts}</select><span class="err" data-for="${p}service"></span></label>`);
const tail=p=>`<input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true"><div class="msg" role="status" aria-live="polite"></div><button class="btn" type="submit">Send request</button>`;
$("#contactForm").innerHTML=base("c")+`<label for="cmsg">Message *<textarea id="cmsg" name="cmsg" rows="4" required></textarea><span class="err" data-for="cmsg"></span></label>`+tail();
$("#autoForm").innerHTML=base("a",1)+`<label for="atask">Task or process to automate *<textarea id="atask" name="atask" rows="3" required></textarea><span class="err" data-for="atask"></span></label>`+field("atools","Current tools used (if known)","text",0)+`<label for="apref">Preferred contact method<select id="apref" name="apref"><option>WhatsApp</option><option>Phone call</option><option>Email</option></select></label>`+field("abudget","Approximate budget in GH₵ (optional)","text",0)+tail();
document.addEventListener("click",e=>{const a=e.target.closest("[data-svc]");if(a){$("#cservice").value=a.dataset.svc}});
document.querySelectorAll("form").forEach(f=>{
 const msg=f.querySelector(".msg"),btn=f.querySelector("button");let busy=false;
 f.addEventListener("submit",async e=>{e.preventDefault();if(busy)return;msg.className="msg";let ok=true;const d={};
  f.querySelectorAll("input:not(.hp),select,textarea").forEach(el=>{const err=f.querySelector(`[data-for="${el.id}"]`);let m="";const v=el.value.trim();d[el.id]=v;
   if(el.required&&!v)m="This field is required.";else if(el.type==="email"&&v&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))m="Enter a valid email address.";else if(el.type==="tel"&&v&&!/^[+\d][\d\s()-]{7,}$/.test(v))m="Enter a valid phone number.";
   if(err)err.textContent=m;el.setAttribute("aria-invalid",!!m);if(m)ok=false});
  if(!ok){msg.className="msg bad";msg.textContent="Please fix the highlighted fields.";return}
  if(f.website&&f.website.value)return;
  const text=Object.entries(d).filter(([k,v])=>v).map(([k,v])=>`${k.slice(1)}: ${v}`).join("\n");
  const kind=f.dataset.kind,wa=waLink(kind==="AI Automation"?"ai":"general","Inquiry details:\n"+text);
  if(!CONFIG.formEndpoint){msg.className="msg info";msg.innerHTML=`Your request has not been sent yet because online form delivery is not set up. <a href="${wa}" target="_blank" rel="noopener">Send it via WhatsApp</a> instead.`;return}
  busy=true;btn.disabled=true;btn.textContent="Sending…";
  try{const r=await fetch(CONFIG.formEndpoint,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({type:kind,...d})});
   if(!r.ok)throw 0;msg.className="msg ok";msg.textContent="Thank you. Your request was sent and we will reply soon.";f.reset();btn.textContent="Sent"}
  catch{msg.className="msg bad";msg.innerHTML=`We could not send your request. Please try again or <a href="${wa}" target="_blank" rel="noopener">use WhatsApp</a>.`;btn.disabled=false;btn.textContent="Send request";busy=false}
 })});
