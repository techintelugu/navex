
/* NAVEX — front-end demo. All AI replies are placeholders until a backend is connected. */
const T={
 en:{
  newChat:"New chat",search:"Search conversations",settings:"Settings",
  heading:"What can I help you with?",
  sub:"Ask anything. Learn anything. Create anything.",
  placeholder:"Message NAVEX...",
  note:"NAVEX is a front-end demo. Replies are placeholders, not real AI.",
  demoMode:"Demo mode · no AI connected",
  language:"Language",reduce:"Reduce motion",
  clearAll:"Delete all conversations",done:"Done",collapse:"Collapse sidebar",
  copy:"Copy",copied:"Copied",regen:"Regenerate",rename:"Rename",
  del:"Delete",noChats:"No conversations yet",noMatch:"No matches",
  untitled:"New conversation",demoTag:"Demo response · not real AI",
  attach:"File attachments are coming soon",
  soon:"is coming soon. Showing NAVEX AI for now.",
  confirm:"Delete this conversation?",confirmAll:"Delete all conversations?",
  demoText:"This is a placeholder reply. NAVEX is not connected to an AI service yet. Connect a secure backend in getReply() (script.js) to get real answers.",
  cards:[
   ["Learn Something","Explain difficult topics simply.","Explain how black holes form in simple words."],
   ["Write Anything","Create professional content.","Write a professional email asking for a project deadline extension."],
   ["Generate Ideas","Explore creative possibilities.","Give me 10 creative project ideas for a college student."],
   ["Code Assistant","Understand programming and code.","Explain what a JavaScript closure is with a simple example."]
  ],
  tools:[
   ["NAVEX AI","Everyday assistant"],
   ["NAVEX Tools","Utilities and helpers"],
   ["NAVEX Learn","Study and understand"],
   ["NAVEX Creator","Write and design"],
   ["NAVEX Career","Resumes and interviews"],
   ["NAVEX Explore","Discover and research"]
  ]
 },
 te:{
  newChat:"కొత్త చాట్",search:"సంభాషణలను వెతకండి",
  settings:"సెట్టింగ్‌లు",
  heading:"నేను మీకు ఎలా సహాయం చేయగలను?",
  sub:"ఏదైనా అడగండి. ఏదైనా నేర్చుకోండి. ఏదైనా సృష్టించండి.",
  placeholder:"NAVEXకి సందేశం...",
  note:"NAVEX ఒక ఫ్రంటెండ్ డెమో. సమాధానాలు నమూనాలు మాత్రమే, నిజమైన AI కాదు.",
  demoMode:"డెమో మోడ్ · AI కనెక్ట్ కాలేదు",
  language:"భాష",reduce:"కదలికలను తగ్గించండి",
  clearAll:"అన్ని సంభాషణలను తొలగించండి",
  done:"పూర్తయింది",collapse:"సైడ్‌బార్ మూసివేయండి",
  copy:"కాపీ",copied:"కాపీ అయింది",regen:"మళ్లీ రూపొందించు",
  rename:"పేరు మార్చు",del:"తొలగించు",
  noChats:"ఇంకా సంభాషణలు లేవు",noMatch:"ఫలితాలు లేవు",
  untitled:"కొత్త సంభాషణ",
  demoTag:"డెమో సమాధానం · నిజమైన AI కాదు",
  attach:"ఫైల్ జోడింపులు త్వరలో వస్తాయి",
  soon:"త్వరలో వస్తుంది. ప్రస్తుతం NAVEX AI చూపబడుతుంది.",
  confirm:"ఈ సంభాషణను తొలగించాలా?",
  confirmAll:"అన్ని సంభాషణలను తొలగించాలా?",
  demoText:"ఇది నమూనా సమాధానం. NAVEX ఇంకా AI సేవకు కనెక్ట్ కాలేదు. నిజమైన సమాధానాల కోసం script.jsలోని getReply()కి సురక్షిత బ్యాకెండ్‌ను కనెక్ట్ చేయండి.",
  cards:[
   ["ఏదైనా నేర్చుకోండి","కష్టమైన విషయాలను సులభంగా తెలుసుకోండి.","కృష్ణ బిలాలు ఎలా ఏర్పడతాయో సులభంగా వివరించండి."],
   ["ఏదైనా రాయండి","ప్రొఫెషనల్ కంటెంట్ సృష్టించండి.","ప్రాజెక్ట్ గడువు పొడిగింపు కోరుతూ ప్రొఫెషనల్ ఈమెయిల్ రాయండి."],
   ["ఆలోచనలు పొందండి","సృజనాత్మక అవకాశాలను అన్వేషించండి.","కాలేజీ విద్యార్థికి 10 సృజనాత్మక ప్రాజెక్ట్ ఆలోచనలు ఇవ్వండి."],
   ["కోడ్ సహాయకుడు","ప్రోగ్రామింగ్ మరియు కోడ్ అర్థం చేసుకోండి.","JavaScript క్లోజర్ అంటే ఏమిటో సులభమైన ఉదాహరణతో వివరించండి."]
  ],
  tools:[
   ["NAVEX AI","రోజువారీ సహాయకుడు"],
   ["NAVEX Tools","ఉపయోగకరమైన సాధనాలు"],
   ["NAVEX Learn","నేర్చుకోండి"],
   ["NAVEX Creator","రాయండి, రూపొందించండి"],
   ["NAVEX Career","రెజ్యూమ్‌లు, ఇంటర్వ్యూలు"],
   ["NAVEX Explore","అన్వేషించండి"]
  ]
 }
};

const $=id=>document.getElementById(id);
const S={
 lang:localStorage.getItem("navex-lang")||"en",
 chats:[],active:null,busy:false,q:""
};
const t=k=>T[S.lang][k];
const uid=()=>Math.random().toString(36).slice(2,9);
const el=(tag,cls,txt)=>{
 const e=document.createElement(tag);
 if(cls)e.className=cls;
 if(txt!=null)e.textContent=txt;
 return e
};

/* ---- Backend integration point ----
   Replace with a fetch() to YOUR server (never put API keys in this file). */
async function getReply(messages){
 await new Promise(r=>setTimeout(r,900));
 return {text:t("demoText"),demo:true};
}

function toast(m){
 const x=$("toast");
 x.textContent=m;
 x.classList.add("show");
 clearTimeout(toast.h);
 toast.h=setTimeout(()=>x.classList.remove("show"),1800)
}
const cur=()=>S.chats.find(c=>c.id===S.active);

function applyLang(){
 document.documentElement.lang=S.lang;
 document.querySelectorAll("[data-i18n]").forEach(n=>n.textContent=t(n.dataset.i18n));
 document.querySelectorAll("[data-i18n-ph]").forEach(n=>n.placeholder=t(n.dataset.i18nPh));
 document.querySelectorAll("[data-i18n-aria]").forEach(n=>n.setAttribute("aria-label",t(n.dataset.i18nAria)));
 document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("on",b.dataset.lang===S.lang));
 $("langSel").value=S.lang;
 $("cards").replaceChildren(...t("cards").map(([a,b,p])=>{
  const c=el("button","card");
  c.append(el("b","",a),el("span","",b));
  c.onclick=()=>{
   $("input").value=p;
   fit();
   $("input").focus()
  };
  return c
 }));
 buildMenu();
 renderHistory();
 renderThread();
}

let mode=0;
function buildMenu(){
 const m=$("toolsMenu");
 m.replaceChildren(...t("tools").map(([n,d],i)=>{
  const b=el("button",i===mode?"on":"");
  b.append(n);
  b.append(el("small","",d));
  b.onclick=()=>{
   m.hidden=true;
   if(i>0)toast(`${n} ${t("soon")}`);
   mode=0;
   buildMenu()
  };
  return b
 }));
 $("modeLabel").textContent=t("tools")[mode][0];
}

function renderHistory(){
 const h=$("history");
 h.replaceChildren();
 const list=S.chats.filter(c=>c.title.toLowerCase().includes(S.q.toLowerCase()));
 if(!list.length){
  h.append(el("div","empty",S.chats.length?t("noMatch"):t("noChats")));
  return
 }
 list.forEach(c=>{
  const row=el("div","item"+(c.id===S.active?" on":""));
  const b=el("button","t",c.title||t("untitled"));
  b.onclick=()=>{
   S.active=c.id;
   closeNav();
   renderHistory();
   renderThread()
  };
  const a=el("div","acts");
  const r=el("button","","✎");
  r.title=t("rename");
  r.onclick=()=>startRename(c,row);
  const d=el("button","","🗑");
  d.title=t("del");
  d.onclick=()=>{
   if(confirm(t("confirm"))){
    S.chats=S.chats.filter(x=>x.id!==c.id);
    if(S.active===c.id)S.active=null;
    renderHistory();
    renderThread()
   }
  };
  a.append(r,d);
  row.append(b,a);
  h.append(row);
 });
}

function startRename(c,row){
 const i=el("input");
 i.value=c.title;
 row.replaceChildren(i);
 i.focus();
 i.select();
 const done=ok=>{
  if(ok&&i.value.trim())c.title=i.value.trim();
  renderHistory()
 };
 i.onkeydown=e=>{
  if(e.key==="Enter")done(true);
  if(e.key==="Escape")done(false)
 };
 i.onblur=()=>done(true);
}

function msgNode(m,idx,chat){
 const n=el("div","msg "+m.role);
 if(m.role==="user"){
  n.append(el("div","bub",m.text));
  return n
 }
 if(m.demo)n.append(el("span","tag",t("demoTag")));
 n.append(el("div","bub",m.text));
 const tl=el("div","tools");
 const cp=el("button","","⧉ "+t("copy"));
 cp.onclick=async()=>{
  try{
   await navigator.clipboard.writeText(m.text);
   toast(t("copied"))
  }catch{
   toast("Copy not available")
  }
 };
 tl.append(cp);
 if(m.demo&&idx===chat.messages.length-1){
  const rg=el("button","","↻ "+t("regen"));
  rg.onclick=()=>respond(chat,true);
  tl.append(rg)
 }
 n.append(tl);
 return n;
}

function renderThread(){
 const c=cur(),th=$("thread"),has=c&&c.messages.length;
 $("welcome").hidden=!!has;
 th.hidden=!has;
 th.replaceChildren();
 if(has){
  c.messages.forEach((m,i)=>th.append(msgNode(m,i,c)));
  if(S.busy)th.append(typing());
  scroll()
 }
}

function typing(){
 const n=el("div","msg ai");
 n.id="typing";
 const d=el("div","dots");
 d.append(el("i"),el("i"),el("i"));
 n.append(d);
 return n
}
function scroll(){
 const s=$("stage");
 s.scrollTop=s.scrollHeight
}

async function respond(c,regen){
 if(S.busy)return;
 S.busy=true;
 if(regen)c.messages.pop();
 renderThread();
 try{
  const r=await getReply(c.messages);
  c.messages.push({role:"ai",text:r.text,demo:!!r.demo})
 }
 catch{
  c.messages.push({role:"ai",text:"Something went wrong. Try again.",demo:false})
 }
 S.busy=false;
 renderThread();
 updateSend();
}

function send(){
 const v=$("input").value.trim();
 if(!v||S.busy)return;
 let c=cur();
 if(!c){
  c={id:uid(),title:"",messages:[]};
  S.chats.unshift(c);
  S.active=c.id
 }
 if(!c.title)c.title=v.slice(0,40);
 c.messages.push({role:"user",text:v});
 $("input").value="";
 fit();
 updateSend();
 renderHistory();
 respond(c);
}

function fit(){
 const i=$("input");
 i.style.height="auto";
 i.style.height=Math.min(i.scrollHeight,180)+"px";
 updateSend()
}
function updateSend(){
 $("send").disabled=!$("input").value.trim()||S.busy
}
const closeNav=()=>$("app").classList.remove("open");

$("input").addEventListener("input",fit);
$("input").addEventListener("keydown",e=>{
 if(e.key==="Enter"&&!e.shiftKey&&!e.isComposing){
  e.preventDefault();
  send()
 }
});
$("send").onclick=send;
$("attach").onclick=()=>toast(t("attach"));
$("newChat").onclick=()=>{
 S.active=null;
 closeNav();
 renderHistory();
 renderThread();
 $("input").focus()
};
$("search").oninput=e=>{
 S.q=e.target.value;
 renderHistory()
};
$("menuBtn").onclick=()=>$("app").classList.add("open");
$("scrim").onclick=closeNav;
$("collapseBtn").onclick=()=>$("app").classList.toggle("collapsed");
$("modeBtn").onclick=e=>{
 e.stopPropagation();
 $("toolsMenu").hidden=!$("toolsMenu").hidden
};
document.addEventListener("click",()=>$("toolsMenu").hidden=true);
document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>setLang(b.dataset.lang));
$("langSel").onchange=e=>setLang(e.target.value);

function setLang(l){
 S.lang=l;
 localStorage.setItem("navex-lang",l);
 applyLang()
}
$("settingsBtn").onclick=()=>{
 $("modal").hidden=false;
 closeNav()
};
$("closeModal").onclick=()=>$("modal").hidden=true;
$("modal").onclick=e=>{
 if(e.target.id==="modal")$("modal").hidden=true
};
document.addEventListener("keydown",e=>{
 if(e.key==="Escape"){
  $("modal").hidden=true;
  $("toolsMenu").hidden=true;
  closeNav()
 }
});
$("reduceMotion").onchange=e=>document.body.classList.toggle("reduce",e.target.checked);
$("clearAll").onclick=()=>{
 if(confirm(t("confirmAll"))){
  S.chats=[];
  S.active=null;
  renderHistory();
  renderThread();
  $("modal").hidden=true
 }
};
applyLang();
    
