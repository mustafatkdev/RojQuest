(()=>{
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const load=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}};
const save=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}};
const KU={
"Home":"سەرەتا","Play":"یاری","Study":"خوێندن","Resources":"سەرچاوەکان","Challenges":"ئاستەنگەکان","Leaderboard":"خشتەی پلەبەندی","About":"دەربارە",
"Roj Quest home":"گەڕانەوە بۆ سەرەتا","Enter a display name before starting.":"پێش دەستپێکردن ناوێکی پیشاندراو بنووسە.",
"Play Now":"ئێستا یاری بکە","Think. Code. Conquer.":"بیر بکەرەوە. کۆد بنووسە. سەرکەوە.","YOUR NEXT QUEST STARTS HERE.":"گەشتی داهاتووت لێرە دەست پێ دەکات.",
"Test your programming knowledge, solve challenges, earn XP, and climb the leaderboard.":"زانیاریی بەرنامەسازیی خۆت تاقی بکەرەوە، ئاستەنگەکان چارەسەر بکە، XP بەدەست بهێنە و لە خشتەی پلەبەندیدا بەرز ببەرەوە.",
"Start Your Quest":"گەشتەکەت دەست پێ بکە","Explore Challenges":"ئاستەنگەکان ببینە","Study mode":"دۆخی خوێندن","Learning library":"کتێبخانەی فێربوون",
"All numbers above are real: they are counted from the content in this site and the activity saved in this browser. Nothing is simulated.":"هەموو ژمارەکانی سەرەوە ڕاستەقینەن؛ لە ناوەڕۆکی ماڵپەڕ و چالاکیی تۆمارکراوی ئەم وێبگەڕەوە هەژمار کراون.",
"[ FEATURES ]":"[ تایبەتمەندییەکان ]","What you can do":"چی دەتوانیت بکەیت","Interactive quizzes":"تاقیکردنەوەی کارلێککار","Multiple-choice C questions with code panels and instant explanations.":"پرسیاری C بە چەند هەڵبژاردەیەک، لەگەڵ نموونەی کۆد و ڕوونکردنەوەی خێرا.",
"Timed challenges":"ئاستەنگی کاتدار","Every question has a countdown. Answer faster to earn bonus points.":"هەر پرسیارێک کاتی دیاریکراوی هەیە. زووتر وەڵام بدەوە بۆ خاڵی زیادە.",
"XP and achievements":"XP و دەستکەوتەکان","Level up as you play and unlock badges for streaks and perfect rounds.":"لە کاتی یاریکردندا ئاستت بەرز بکەرەوە و نیشانەی زنجیرەی وەڵامی دروست و خولی بێکەموکوڕی بەدەست بهێنە.",
"Your best runs are ranked so the whole festival can see who leads.":"باشترین ئەنجامەکانت پلەبەندی دەکرێن تاکو هەمووانی ئاهەنگەکە ببینن کێ پێشەنگە.",
"[ PROCESS ]":"[ شێوازی کارکردن ]","How it works":"چۆن کار دەکات","Choose a challenge":"ئاستەنگێک هەڵبژێرە","Pick a topic, a mixed round, or the speed round.":"بابەتێک، خولی تێکەڵ یان خولی خێرا هەڵبژێرە.",
"Answer programming questions":"وەڵامی پرسیارەکانی بەرنامەسازی بدەوە","Read the code, think, and pick one of four answers.":"کۆدەکە بخوێنەرەوە، بیر بکەرەوە و یەکێک لە چوار وەڵامەکە هەڵبژێرە.",
"Earn points and XP":"خاڵ و XP بەدەست بهێنە","Correct answers score points. Fast ones score more.":"وەڵامی دروست خاڵت پێ دەدات؛ وەڵامی خێراتر خاڵی زیاتر.",
"Improve your ranking":"پلەکەت باشتر بکە","Beat your best score and move up the leaderboard.":"لە باشترین ئەنجامی خۆت تێپەڕە و لە خشتەی پلەبەندیدا بەرز ببەرەوە.",
"Explore C questions at your own pace. No timer, score, XP, or leaderboard entry.":"پرسیارەکانی C بە ئارامی بخوێنەوە. کاتژمێر، خاڵ، XP یان تۆمارکردن لە خشتەی پلەبەندی نییە.",
"C quiz questions, choices, and explanations are currently in English.":"پرسیار، هەڵبژاردە و ڕوونکردنەوەکانی تاقیکردنەوەی C ئێستا بە ئینگلیزین.",
"Choose a topic":"بابەتێک هەڵبژێرە","Choose a language":"زمانێک هەڵبژێرە","Find free video lessons and books or reading guides for popular programming languages. Resources open on their original sites.":"وانەی ڤیدیۆیی و کتێب یان ڕێنمایی خوێندنەوەی بێبەرامبەر بۆ زمانە بەناوبانگەکانی بەرنامەسازی بدۆزەرەوە. سەرچاوەکان لە ماڵپەڕی سەرەکیی خۆیان دەکرێنەوە.",
"Choose a language":"زمانێک هەڵبژێرە","[ WATCH ]":"[ بینین ]","Video courses":"کۆرسی ڤیدیۆیی","[ READ ]":"[ خوێندنەوە ]","Books & guides":"کتێب و ڕێنمایی",
"Pick a topic to practise, or take on a mixed round. Questions are shuffled each time.":"بابەتێک بۆ ڕاهێنان هەڵبژێرە یان خولی تێکەڵ بکە. پرسیارەکان هەر جارە دەگۆڕدرێن.",
"Clear leaderboard":"خشتەی پلەبەندی پاک بکەرەوە","About Roj Quest":"دەربارەی ڕۆژ کوێست","Roj Quest is a programming quiz game built for a university festival. It focuses on the C language and runs fully in the browser, with no server or account.":"ڕۆژ کوێست یارییەکی تاقیکردنەوەی بەرنامەسازییە کە بۆ فێستیڤاڵێکی زانکۆیی دروست کراوە. سەرنجی لەسەر زمانی C ـە و بەبێ ڕاژەکار یان هەژمار، تەواو لە وێبگەڕدا کار دەکات.",
"Scoring":"خاڵدان","Easy questions are worth 10 points, medium 20, and hard 30. A correct answer also adds a time bonus of up to 10 points. XP equals the points you score, and every 100 XP is one level.":"پرسیاری ئاسان ١٠ خاڵ، مامناوەند ٢٠ خاڵ و سەخت ٣٠ خاڵە. وەڵامی دروست تا ١٠ خاڵی زیادەی کاتی پێ دەدات. XP بەرامبەرە بە خاڵەکانت و هەر ١٠٠ XP یەک ئاستە.",
"Modes":"دۆخەکان","Topic rounds use the 4 questions of one category with 20 seconds each. Mixed Quest is 10 random questions with 20 seconds each. Speed Round is 10 random questions with only 10 seconds each.":"خولی بابەت ٤ پرسیاری یەک پۆل بەکاردەهێنێت و بۆ هەر یەکە ٢٠ چرکە هەیە. گەشتی تێکەڵ ١٠ پرسیاری هەڕەمەکییە بە ٢٠ چرکە بۆ هەر یەک. خولی خێرا ١٠ پرسیاری هەڕەمەکییە بە تەنها ١٠ چرکە بۆ هەر یەک.",
"Your data":"داتاکانت","No registration is needed. Your name and XP are saved in this browser. When you finish a quiz, your name and score are also sent to the shared leaderboard if the organiser has turned it on. The button below erases only the data saved in this browser.":"پێویست بە تۆمارکردن نییە. ناو و XP ـەکەت لەم وێبگەڕەدا پاشەکەوت دەکرێت. دوای تەواوکردنی تاقیکردنەوە، ئەگەر ڕێکخەری چالاکییەکە خشتەی هاوبەشی چالاک کردبێت، ناو و خاڵەکانت بۆی دەنێردرێن. دوگمەی خوارەوە تەنها داتاکانی ئەم وێبگەڕە دەسڕێتەوە.",
"Reset all saved data":"هەموو داتای پاشەکەوتکراو بسڕەوە","A C programming quiz game for university festivals. Think. Code. Conquer.":"یارییەکی تاقیکردنەوەی بەرنامەسازیی C بۆ فێستیڤاڵە زانکۆییەکان. بیر بکەرەوە. کۆد بنووسە. سەرکەوە.",
"Challenges to play":"ئاستەنگ بۆ یاریکردن","Questions you answered":"پرسیاری وەڵامدراو","Programming topics":"بابەتی بەرنامەسازی","Players on this device":"یاریزان لەم ئامێرەدا",
"Mixed Quest":"گەشتی تێکەڵ","Speed Round":"خولی خێرا","random questions, 20 seconds each.":"پرسیاری هەڕەمەکی، ٢٠ چرکە بۆ هەر یەک.","random questions, only 10 seconds each.":"پرسیاری هەڕەمەکی، تەنها ١٠ چرکە بۆ هەر یەک.","-question bank · 4 per round · 20 seconds each.":"پرسیار · ٤ پرسیار لە هەر خولێکدا · ٢٠ چرکە بۆ هەر یەک.",
"Player profile":"پرۆفایلی یاریزان","Display name":"ناوی پیشاندراو","Enter your name":"ناوت بنووسە","Save name":"ناو پاشەکەوت بکە","Change name":"ناو بگۆڕە","Player":"یاریزان","Total XP":"کۆی XP","Quizzes completed":"تاقیکردنەوەی تەواوکراو","Correct answers":"وەڵامی دروست","Accuracy":"ڕێژەی دروستی","Best score":"باشترین ئەنجام","Current level":"ئاستی ئێستا","XP to next level":"XP بۆ ئاستی داهاتوو","Level":"ئاست","Enter a name to start. No email or password needed.":"بۆ دەستپێکردن ناوێک بنووسە. پێویست بە ئیمەیڵ یان وشەی نهێنی نییە.",
"Choose your quest":"گەشتەکەت هەڵبژێرە","Pick a topic":"بابەتێک هەڵبژێرە","Type a display name first.":"سەرەتا ناوێکی پیشاندراو بنووسە.","Name saved: ":"ناو پاشەکەوت کرا: ","That challenge is unavailable.":"ئەم ئاستەنگە بەردەست نییە.","No questions are available for this challenge.":"هیچ پرسیارێک بۆ ئەم ئاستەنگە بەردەست نییە.",
"Score":"خاڵ","Streak":"زنجیرە","Easy":"ئاسان","Medium":"مامناوەند","Hard":"سەخت","Correct!":"دروستە!","Time is up.":"کات تەواو بوو.","Not quite.":"هەڵەیە.","See results":"ئەنجامەکان ببینە","Next question":"پرسیاری داهاتوو","Next":"دواتر","Previous":"پێشوو","Start":"دەست پێ بکە","Start again":"لە سەرەتاوە دەست پێ بکە","Reveal answer":"وەڵام پیشان بدە","Hide answer":"وەڵام بشارەوە","Answer:":"وەڵام:","Recommended next: ":"پێشنیاری داهاتوو: "," quiz accuracy.":" ڕێژەی دروستی لە تاقیکردنەوەدا.","quiz accuracy":"ڕێژەی دروستی لە تاقیکردنەوەدا","unlocked":"کراوە","Loading…":"باردەکرێت…","Play any topic challenge to start building your practice progress.":"بۆ دەستپێکردنی پێشکەوتنی ڕاهێنان، یارییەکی بابەتی هەڵبژێرە.","Your topic progress":"پێشکەوتنی بابەتەکانت","Study mode itself does not record attempts.":"دۆخی خوێندن خۆی هەوڵەکان تۆمار ناکات.","Not practiced yet":"هێشتا ڕاهێنانی لەسەر نەکراوە"," quiz accuracy":"ڕێژەی دروستی لە تاقیکردنەوەدا"," quiz attempt":" هەوڵی تاقیکردنەوە"," quiz attempts":" هەوڵی تاقیکردنەوە",
"Free ":"بێبەرامبەر "," video courses":" کۆرسی ڤیدیۆیی","Browse beginner-friendly full courses and lessons on YouTube.":"کۆرس و وانەی تەواوی گونجاو بۆ دەستپێککاران لە یوتیوب ببینە.","Browse video courses":"کۆرسە ڤیدیۆییەکان ببینە","Open resource":"سەرچاوەکە بکەرەوە","VIDEO":"ڤیدیۆ","READING":"خوێندنەوە",
"Wikibooks · free online book":"ویکی‌کتێب · کتێبی ئۆنلاینی بێبەرامبەر","LearnCpp.com · free online tutorial":"LearnCpp.com · ڕێنمایی ئۆنلاینی بێبەرامبەر","Allen Downey and Chris Mayfield · free online book":"Allen Downey و Chris Mayfield · کتێبی ئۆنلاینی بێبەرامبەر","Allen Downey · free online book":"Allen Downey · کتێبی ئۆنلاینی بێبەرامبەر","javascript.info · free online book":"javascript.info · کتێبی ئۆنلاینی بێبەرامبەر","Microsoft Learn · free learning guide":"Microsoft Learn · ڕێنمایی فێربوونی بێبەرامبەر","The Go Project · free interactive guide":"The Go Project · ڕێنمایی کارلێککاری بێبەرامبەر","The Rust Project · free online book":"The Rust Project · کتێبی ئۆنلاینی بێبەرامبەر","Community-maintained · free online guide":"بەڕێوەبردنی کۆمەڵگا · ڕێنمایی ئۆنلاینی بێبەرامبەر","Free interactive SQL lessons":"وانەی کارلێککاری SQL بەخۆڕایی",
"Change":"گۆڕین","Finish a quiz":"تاقیکردنەوەیەک تەواو بکە","Answer every question correctly":"هەموو پرسیارەکان بە دروستی وەڵام بدەوە","Get a 5-answer streak":"٥ وەڵامی دروست بەدوای یەکدا بدەوە","Reach level 3":"بگە بە ئاستی ٣",
"Perfect Round":"خولی بێکەموکوڕ","On Fire":"بەهێز","Level 3":"ئاستی ٣","First Quest":"یەکەم گەشت",
"Quest complete":"گەشت تەواو بوو","Perfect round — outstanding work!":"خولێکی بێکەموکوڕ — کارێکی ناوازە!","Great work — you know this material well.":"زۆر باشە — ئەم بابەتە باش دەزانیت.","Good effort — review the explanations to improve.":"هەوڵێکی باشە — ڕوونکردنەوەکان بخوێنەرەوە بۆ باشتر بوون.","Keep practising — every attempt builds your skills.":"بە ڕاهێنان بەردەوام بە — هەر هەوڵێک شارەزاییت زیاد دەکات.",
" correct · ":" دروست · "," incorrect or unanswered · ":" هەڵە یان بێ‌وەڵام · ","% accuracy · longest streak ":"٪ دروستی · درێژترین زنجیرە "," — level up!":" — بەرزبوونەوەی ئاست!"," unlocked":" کراوە","Play again":"دووبارە یاری بکە","Back to topics":"گەڕانەوە بۆ بابەتەکان","View leaderboard":"خشتەی پلەبەندی ببینە","Profile":"پرۆفایل","Review answers":"وەڵامەکان پێداچوونەوە بکە","Your answer:":"وەڵامی تۆ:","Correct answer:":"وەڵامی دروست:","Unanswered":"بێ‌وەڵام",
"Score added to the shared leaderboard.":"خاڵەکە زیاد کرا بۆ خشتەی پلەبەندی هاوبەش.","Could not reach the shared leaderboard. Your score is saved on this device.":"نەتوانرا پەیوەندی بە خشتەی پلەبەندی هاوبەشەوە بکرێت. خاڵەکەت لەم ئامێرەدا پاشەکەوت کرا.",
"Rank":"پلە","Player":"یاریزان","Mode":"دۆخ","Correct":"دروست","Date":"بەروار","No scores yet.":"هێشتا هیچ خاڵێک نییە.","Play a quiz":"تاقیکردنەوەیەک بکە","to take the first place.":"بۆ بوون بە یەکەم.",
"Top 10 scores from all players. Updates every 10 seconds.":"١٠ ئەنجامی سەرەوەی هەموو یاریزانان. هەر ١٠ چرکە نوێ دەبێتەوە.","Top 10 runs saved on this computer. Scores stay in this browser only.":"١٠ ئەنجامی باش کە لەم کۆمپیوتەرە پاشەکەوت کراون. خاڵەکان تەنها لەم وێبگەڕەدا دەمێننەوە.",
"Could not load the shared leaderboard. Check the internet connection.":"نەتوانرا خشتەی پلەبەندی هاوبەش باربکرێت. پەیوەندی ئینتەرنێت بپشکنە.",
"Clear all leaderboard scores?":"هەموو خاڵەکانی خشتەی پلەبەندی بسڕدرێنەوە؟","Leaderboard cleared.":"خشتەی پلەبەندی پاک کرایەوە.","Erase your profile, XP, and all scores on this browser?":"پرۆفایل، XP و هەموو خاڵەکانی ئەم وێبگەڕە بسڕدرێنەوە؟","All data erased.":"هەموو داتاکان سڕدرانەوە.",
"Could not load the shared leaderboard. Check the internet connection.":"نەتوانرا خشتەی پلەبەندی هاوبەش باربکرێت. پەیوەندی ئینتەرنێت بپشکنە.",
"C Fundamentals":"بنەماکانی C","Variables and Data Types":"گۆڕاو و جۆرەکانی داتا","Operators and Expressions":"ئۆپەراتۆر و دەربڕینەکان","If-Else and Switch":"If-Else و Switch","Loops":"بازنەکان","Arrays and Strings":"ئارەی و زنجیرەی پیتەکان","Functions":"فەنکشنەکان","Pointers":"پۆینتەرەکان","Structures":"ستراکچەکان","Output Prediction and Debugging":"پێشبینی دەرئەنجام و دۆزینەوەی هەڵە"
};
let language=load("rq_language","en")==="ku"?"ku":"en";
const tr=text=>language==="ku"?(KU[text]||text):text;
const categoryName=i=>tr(CATEGORIES[i]);
const displayMode=mode=>tr(mode);
function applyLanguage(){
  const kurdish=language==="ku";
  document.documentElement.lang=kurdish?"ku":"en";
  document.documentElement.dir=kurdish?"rtl":"ltr";
  document.body.classList.toggle("lang-ku",kurdish);
  document.title=kurdish?"ڕۆژ کوێست — بیر بکەرەوە. کۆد بنووسە. سەرکەوە.":"Roj Quest — Think. Code. Conquer.";
  $$("#languageToggle").forEach(b=>{b.textContent=kurdish?"English":"کوردی";b.setAttribute("aria-label",kurdish?"Change language to English":"گۆڕینی زمان بۆ کوردی")});
  $$("[data-i18n]").forEach(el=>{el.textContent=tr(el.dataset.i18n)});
  $$("[data-i18n-aria]").forEach(el=>el.setAttribute("aria-label",tr(el.dataset.i18nAria)));
}
function setLanguage(next){
  language=next;save("rq_language",language);applyLanguage();
  if(location.hash==="#play"){
    if(Q)showQ(true);
    else if($("#playBody .result"))renderFinishedResult();
    else renderSetup();
  }else route();
}
$("#languageToggle").onclick=()=>setLanguage(language==="en"?"ku":"en");
const blank={name:"",xp:0,quizzes:0,correct:0,answered:0,best:0,ach:[],topicStats:{}};
let P={...blank,...load("cq_player",{})},S=load("cq_scores",[]),Q=null,timer=null,resultData=null;
P.topicStats=P.topicStats&&typeof P.topicStats==="object"?P.topicStats:{};
const level=()=>Math.floor(P.xp/100)+1,acc=()=>P.answered?Math.round(P.correct/P.answered*100):0;
const commit=()=>{save("cq_player",P);save("cq_scores",S)};
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("on");setTimeout(()=>t.classList.remove("on"),2600)}
const ACH={first:["First Quest","Finish a quiz"],perfect:["Perfect Round","Answer every question correctly"],fire:["On Fire","Get a 5-answer streak"],lvl3:["Level 3","Reach level 3"]};
let studyCat=0,studyIndex=0,studyRevealed=false;
const RESOURCE_LANGUAGES=["C","C++","Java","Python","JavaScript","C#","Go","Rust","PHP","SQL"];
const RESOURCE_LIBRARY={
  "C":{video:"C programming full course beginner",book:"C Programming",publisher:"Wikibooks · free online book",url:"https://en.wikibooks.org/wiki/C_Programming"},
  "C++":{video:"C++ programming full course beginner",book:"Learn C++",publisher:"LearnCpp.com · free online tutorial",url:"https://www.learncpp.com/"},
  "Java":{video:"Java programming full course beginner",book:"Think Java, 2nd Edition",publisher:"Allen Downey and Chris Mayfield · free online book",url:"https://greenteapress.com/wp/think-java-2e/"},
  "Python":{video:"Python programming full course beginner",book:"Think Python, 3rd Edition",publisher:"Allen Downey · free online book",url:"https://greenteapress.com/wp/think-python-3rd-edition/"},
  "JavaScript":{video:"JavaScript full course beginner",book:"The Modern JavaScript Tutorial",publisher:"javascript.info · free online book",url:"https://javascript.info/"},
  "C#":{video:"C sharp programming full course beginner",book:"C# documentation and tutorials",publisher:"Microsoft Learn · free learning guide",url:"https://learn.microsoft.com/en-us/dotnet/csharp/"},
  "Go":{video:"Go programming full course beginner",book:"A Tour of Go",publisher:"The Go Project · free interactive guide",url:"https://go.dev/tour/"},
  "Rust":{video:"Rust programming full course beginner",book:"The Rust Programming Language",publisher:"The Rust Project · free online book",url:"https://doc.rust-lang.org/book/"},
  "PHP":{video:"PHP programming full course beginner",book:"PHP: The Right Way",publisher:"Community-maintained · free online guide",url:"https://phptherightway.com/"},
  "SQL":{video:"SQL database full course beginner",book:"SQLBolt",publisher:"Free interactive SQL lessons",url:"https://sqlbolt.com/"}
};

/* routing */
let boardTimer;function route(){clearInterval(boardTimer);
  const v=(location.hash||"#home").slice(1);const view=$("#"+v)?v:"home";
  if(view!=="play"&&Q){clearInterval(timer);timer=null;Q=null}
  $$(".view").forEach(e=>e.classList.toggle("on",e.id===view));
  $$("#links a").forEach(a=>a.classList.toggle("on",a.dataset.view===view));
  if(view==="play"){if(Q)showQ();else renderSetup()}
  else ({home:renderStats,challenges:renderChallenges,study:renderStudy,resources:renderResources,leaderboard:renderBoard,about(){}})[view]();
  window.scrollTo(0,0);
}
window.addEventListener("hashchange",route);

/* home */
function renderStats(){
  const players=new Set(S.map(s=>s.name)).size;
  $("#stats").innerHTML=[[10,"Challenges to play"],[P.answered,"Questions you answered"],[CATEGORIES.length,"Programming topics"],[players,"Players on this device"]].map(([n,l])=>`<div class="stat"><b data-n="${n}">0</b><span>${tr(l)}</span></div>`).join("");
  count();
}
function count(){$$("[data-n]").forEach(e=>{const to=+e.dataset.n,t0=performance.now();(function f(t){const p=Math.min(1,(t-t0)/800);e.textContent=Math.round(to*p);if(p<1)requestAnimationFrame(f)})(t0)})}

/* challenges */
function renderChallenges(){
  const cards=[`<article class="card"><p class="eyebrow">[ MODE_01 ]</p><div class="ic">⚔</div><h3>${tr("Mixed Quest")}</h3><p>10 ${tr("random questions, 20 seconds each.")}</p><p><br><button class="btn primary" data-start="mixed">${tr("Start")}</button></p></article>`,
  `<article class="card"><p class="eyebrow">[ MODE_02 ]</p><div class="ic">⚡</div><h3>${tr("Speed Round")}</h3><p>10 ${tr("random questions, only 10 seconds each.")}</p><p><br><button class="btn primary" data-start="speed">${tr("Start")}</button></p></article>`];
  CATEGORIES.forEach((c,i)=>cards.push(`<article class="card"><p class="eyebrow">[ TOPIC_${String(i+1).padStart(2,"0")} ]</p><div class="ic">${i+1}</div><h3>${categoryName(i)}</h3><p>${QUESTIONS.filter(q=>q.cat===i).length}${tr("-question bank · 4 per round · 20 seconds each.")}</p><p><br><button class="btn" data-start="cat" data-cat="${i}">${tr("Start")}</button></p></article>`));
  $("#challengeGrid").innerHTML=cards.join("");
}
document.addEventListener("click",e=>{const b=e.target.closest("[data-start]");if(b)start(b.dataset.start,+b.dataset.cat)});

/* independent, untimed study mode */
function renderStudy(){
  const topicSelect=$("#studyTopic");
  topicSelect.innerHTML=CATEGORIES.map((c,i)=>`<option value="${i}" ${i===studyCat?"selected":""}>${esc(categoryName(i))}</option>`).join("");
  topicSelect.onchange=()=>{studyCat=+topicSelect.value;studyIndex=0;studyRevealed=false;renderStudyCard();renderStudyProgress()};
  renderStudyProgress();
  renderStudyCard();
}
function renderStudyProgress(){
  const rows=CATEGORIES.map((name,i)=>{
    const stats=P.topicStats[i]||{seen:0,correct:0},attempted=Number(stats.seen)||0,correct=Number(stats.correct)||0;
    const accuracy=attempted?Math.round(correct/attempted*100):0;
    return{name:categoryName(i),attempted,accuracy};
  });
  const practiced=rows.filter(r=>r.attempted);
  const weakest=practiced.length?practiced.reduce((a,b)=>a.accuracy<=b.accuracy?a:b):null;
  const suggestion=weakest?`${tr("Recommended next: ")}${weakest.name} (${weakest.accuracy}%${tr(" quiz accuracy.")})`:tr("Play any topic challenge to start building your practice progress.");
  $("#studyProgress").innerHTML=`<h2 class="study-progress-title">${tr("Your topic progress")}</h2><p class="note">${esc(suggestion)} ${tr("Study mode itself does not record attempts.")}</p><div class="topic-progress">${rows.map(r=>`<div class="topic-progress-item"><div class="topic-progress-label"><b>${esc(r.name)}</b><span>${r.attempted?`${r.accuracy}% · ${r.attempted}${tr(r.attempted===1?" quiz attempt":" quiz attempts")}`:tr("Not practiced yet")}</span></div><div class="bar" role="progressbar" aria-label="${esc(r.name)} ${tr("quiz accuracy")}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${r.accuracy}"><i style="width:${r.accuracy}%"></i></div></div>`).join("")}</div>`;
}
function renderStudyCard(){
  const questions=QUESTIONS.filter(q=>q.cat===studyCat);
  if(studyIndex>=questions.length)studyIndex=0;
  const q=questions[studyIndex];
  $("#studyCard").innerHTML=`<p class="eyebrow">${esc(categoryName(studyCat))} · ${studyIndex+1} / ${questions.length}</p><h2 class="study-question" dir="ltr">${esc(q.q)}</h2>${q.code?`<div class="code" dir="ltr"><div class="dots"><i></i><i></i><i></i><span>main.c</span></div><pre><code>${esc(q.code)}</code></pre></div>`:""}<ol class="study-options" type="A" dir="ltr">${q.opts.map(option=>`<li>${esc(option)}</li>`).join("")}</ol>${studyRevealed?`<div class="expl"><b>${tr("Answer:")}</b> ${esc(q.opts[q.ans])}<p dir="ltr">${esc(q.exp)}</p></div>`:""}<div class="row study-actions"><button class="btn" id="studyPrevious" ${studyIndex===0?"disabled":""}>${tr("Previous")}</button><button class="btn primary" id="studyReveal">${studyRevealed?tr("Hide answer"):tr("Reveal answer")}</button><button class="btn" id="studyNext">${studyIndex===questions.length-1?tr("Start again"):tr("Next question")}</button></div>`;
  $("#studyPrevious").onclick=()=>{studyIndex--;studyRevealed=false;renderStudyCard()};
  $("#studyReveal").onclick=()=>{studyRevealed=!studyRevealed;renderStudyCard()};
  $("#studyNext").onclick=()=>{studyIndex=(studyIndex+1)%questions.length;studyRevealed=false;renderStudyCard()};
}

/* free external video and reading resources */
function renderResources(){
  const select=$("#resourceLanguage");
  select.innerHTML=RESOURCE_LANGUAGES.map(language=>`<option value="${esc(language)}">${esc(language)}</option>`).join("");
  select.value="C";
  select.onchange=()=>drawResources(select.value);
  drawResources(select.value);
}
function drawResources(language){
  const resource=RESOURCE_LIBRARY[language];
  const videoUrl=`https://www.youtube.com/results?search_query=${encodeURIComponent(resource.video)}`;
  $("#videoResources").innerHTML=`<article class="card resource-card"><p class="eyebrow">${esc(language)} · ${tr("VIDEO")}</p><h3>${tr("Free ")}${esc(language)}${tr(" video courses")}</h3><p>${tr("Browse beginner-friendly full courses and lessons on YouTube.")}</p><a class="btn primary resource-link" href="${videoUrl}" target="_blank" rel="noopener noreferrer">${tr("Browse video courses")} <span aria-hidden="true">↗</span></a></article>`;
  $("#bookResources").innerHTML=`<article class="card resource-card"><p class="eyebrow">${esc(language)} · ${tr("READING")}</p><h3>${esc(resource.book)}</h3><p>${esc(tr(resource.publisher))}.</p><a class="btn resource-link" href="${resource.url}" target="_blank" rel="noopener noreferrer">${tr("Open resource")} <span aria-hidden="true">↗</span></a></article>`;
}

/* setup / profile */
function renderSetup(){
  clearInterval(timer);Q=null;
  const next=P.xp%100;
  $("#playBody").innerHTML=`
  <h1 class="h1s">${tr("Player profile")}</h1>
  <div class="panel">
    <label for="nm">${tr("Display name")}</label><br>
    <div class="row" style="margin-top:8px"><input type="text" id="nm" maxlength="20" placeholder="${tr("Enter your name")}" value="${esc(P.name)}"><button class="btn primary" id="saveName">${P.name?tr("Change name"):tr("Save name")}</button></div>
    ${P.name?`<div class="profile">
      <div><b>${esc(P.name)}</b><small>${tr("Player")}</small></div><div><b>${P.xp}</b><small>${tr("Total XP")}</small></div><div><b>${P.quizzes}</b><small>${tr("Quizzes completed")}</small></div><div><b>${P.correct}</b><small>${tr("Correct answers")}</small></div>
      <div><b>${acc()}%</b><small>${tr("Accuracy")}</small></div><div><b>${P.best}</b><small>${tr("Best score")}</small></div><div><b>${tr("Level")} ${level()}</b><small>${tr("Current level")}</small></div>
      <div><div class="bar"><i style="width:${next}%"></i></div><small>${100-next} ${tr("XP to next level")}</small></div></div>
    <div class="badges">${Object.entries(ACH).map(([k,[n,d]])=>`<span class="ach ${P.ach.includes(k)?"got":""}" title="${tr(d)}">${P.ach.includes(k)?"★ ":""}${tr(n)}</span>`).join("")}</div>`:`<p class="note">${tr("Enter a name to start. No email or password needed.")}</p>`}
  </div>
  <h2 style="margin-top:30px">${tr("Choose your quest")}</h2>
  <div class="row"><button class="btn primary big" data-start="mixed">${tr("Mixed Quest")}</button><button class="btn big" data-start="speed">${tr("Speed Round")}</button><a class="btn ghost big" href="#challenges">${tr("Pick a topic")}</a></div>`;
  $("#saveName").onclick=saveName;$("#nm").onkeydown=e=>{if(e.key==="Enter")saveName()};
}
function saveName(){
  const v=$("#nm").value.trim().slice(0,20);
  if(!v){toast(tr("Type a display name first."));return}
  P.name=v;commit();toast(tr("Name saved: ")+v);renderSetup();
}

/* quiz */
function start(mode,cat){
  if(!P.name){location.hash="play";if(location.hash==="#play")renderSetup();toast(tr("Enter a display name before starting."));return}
  if(!["mixed","speed","cat"].includes(mode)||(mode==="cat"&&(!Number.isInteger(cat)||!CATEGORIES[cat]))){toast(tr("That challenge is unavailable."));return}
  let qs,sec=20;
  if(mode==="cat")qs=shuffle(QUESTIONS.filter(q=>q.cat===cat)).slice(0,4);else qs=shuffle(QUESTIONS).slice(0,10);
  if(!qs.length){toast(tr("No questions are available for this challenge."));return}
  resultData=null;
  if(mode==="speed")sec=10;
  qs=qs.map(q=>{const order=shuffle(q.opts.map((_,i)=>i));return{...q,order,right:order.indexOf(q.ans)}});
  Q={mode,cat,qs,sec,i:0,score:0,correct:0,streak:0,best:0,left:sec,done:false,newAch:[],review:[]};
  if(location.hash!=="#play"){location.hash="play";return}
  $$(".view").forEach(e=>e.classList.toggle("on",e.id==="play"));
  showQ();
}
function showQ(preserveState=false){
  clearInterval(timer);timer=null;
  const q=Q.qs[Q.i];
  if(!preserveState){Q.done=false;Q.left=Q.sec;Q.startedAt=Date.now()}
  const title=Q.mode==="cat"?categoryName(Q.cat):tr(Q.mode==="speed"?"Speed Round":"Mixed Quest");
  $("#playBody").innerHTML=`<div class="panel">
   <div class="qhead"><span>${title} · ${Q.i+1}/${Q.qs.length}</span><span>${tr("Score")} ${Q.score}</span><span>${tr("Streak")} ${Q.streak}</span><span class="timer" id="tm">${Q.sec}</span></div>
   <div class="bar"><i style="width:${Q.i/Q.qs.length*100}%"></i></div>
   <p style="margin:14px 0 0"><span class="badge">${categoryName(q.cat)}</span><span class="badge ${q.diff}">${tr(q.diff)}</span><span class="badge">${q.pts} pts</span></p>
   ${language==="ku"?`<p class="note">${tr("C quiz questions, choices, and explanations are currently in English.")}</p>`:""}
   <p class="q" dir="ltr">${esc(q.q)}</p>
   ${q.code?`<div class="code"><div class="dots"><i></i><i></i><i></i><span>main.c</span></div><pre><code>${esc(q.code)}</code></pre></div>`:""}
   <div class="opts" dir="ltr">${q.order.map((o,k)=>`<button class="opt" data-k="${k}"><kbd>${"ABCD"[k]}</kbd>${esc(q.opts[o])}</button>`).join("")}</div>
   <div id="fb"></div></div>`;
  $$(".opt").forEach(b=>b.onclick=()=>answer(+b.dataset.k));
  if(Q.done){renderAnswerFeedback(Q.answerK);return}
  const round=Q,index=Q.i,t0=Q.startedAt;let roundTimer;
  roundTimer=setInterval(()=>{if(Q!==round||round.i!==index||round.done){clearInterval(roundTimer);if(timer===roundTimer)timer=null;return}round.left=Math.max(0,round.sec-(Date.now()-t0)/1000);const tm=$("#tm");if(!tm)return;tm.textContent=Math.ceil(round.left);tm.classList.toggle("low",round.left<=5);if(round.left<=0)answer(-1)},100);
  timer=roundTimer;
}
function renderAnswerFeedback(k){
  const q=Q.qs[Q.i],ok=k===q.right,last=Q.i===Q.qs.length-1;
  $$(".opt").forEach((b,i)=>{b.disabled=true;if(i===q.right)b.classList.add("right");else if(i===k)b.classList.add("wrong")});
  $("#fb").innerHTML=`<div class="expl"><b>${tr(ok?"Correct!":k<0?"Time is up.":"Not quite.")}</b> <span dir="ltr">${esc(q.exp)}</span></div><p><button class="btn primary" id="nx">${tr(last?"See results":"Next question")}</button></p>`;
  $("#nx").onclick=()=>{Q.i++;last?finish():showQ()};
}
function answer(k){
  if(!Q||Q.done||!Number.isInteger(k)||k< -1||k>=Q.qs[Q.i].order.length)return;
  Q.done=true;clearInterval(timer);timer=null;
  Q.answerK=k;
  const q=Q.qs[Q.i],ok=k===q.right;P.answered++;
  const topic=P.topicStats[q.cat]||(P.topicStats[q.cat]={seen:0,correct:0});
  topic.seen++;if(ok)topic.correct++;
  Q.review.push({question:q.q,code:q.code,chosen:k<0?null:q.opts[q.order[k]],correct:q.opts[q.order[q.right]],explanation:q.exp});
  if(ok){const bonus=Math.floor(Q.left/Q.sec*10);Q.score+=q.pts+bonus;Q.correct++;Q.streak++;Q.best=Math.max(Q.best,Q.streak);P.correct++}else Q.streak=0;
  renderAnswerFeedback(k);
  $("#nx").focus();
}
function finish(){
  const n=Q.qs.length,oldLvl=level();
  P.xp+=Q.score;P.quizzes++;P.best=Math.max(P.best,Q.score);
  const entry={name:P.name,score:Q.score,correct:Q.correct,total:n,mode:Q.mode==="cat"?CATEGORIES[Q.cat]:Q.mode==="speed"?"Speed Round":"Mixed Quest",date:new Date().toLocaleDateString()};S.push(entry);pushScore(entry);
  S.sort((a,b)=>b.score-a.score);S=S.slice(0,100);
  const give=k=>{if(!P.ach.includes(k)){P.ach.push(k);Q.newAch.push(ACH[k][0])}};
  give("first");if(Q.correct===n)give("perfect");if(Q.best>=5)give("fire");if(level()>=3)give("lvl3");
  commit();
  resultData={mode:Q.mode,cat:Q.cat,correct:Q.correct,total:n,score:Q.score,best:Q.best,newAch:[...Q.newAch],review:Q.review,oldLvl};
  renderFinishedResult();
  Q=null;
}
function renderFinishedResult(){
  if(!resultData)return;
  const r=resultData,title=r.mode==="cat"?categoryName(r.cat):tr(r.mode==="speed"?"Speed Round":"Mixed Quest");
  const performance=r.correct===r.total?tr("Perfect round — outstanding work!"):r.correct>=Math.ceil(r.total*.75)?tr("Great work — you know this material well."):r.correct>=Math.ceil(r.total*.5)?tr("Good effort — review the explanations to improve."):tr("Keep practising — every attempt builds your skills.");
  const reviewHtml=r.review.map((item,i)=>`<article class="review-item"><h3 dir="ltr">${i+1}. ${esc(item.question)}</h3>${item.code?`<pre dir="ltr"><code>${esc(item.code)}</code></pre>`:""}<p><b>${tr("Your answer:")}</b> ${item.chosen===null?`<span class="review-wrong">${tr("Unanswered")}</span>`:`<span dir="ltr" class="${item.chosen===item.correct?"review-right":"review-wrong"}">${esc(item.chosen)}</span>`}</p><p><b>${tr("Correct answer:")}</b> <span dir="ltr" class="review-right">${esc(item.correct)}</span></p><p class="review-expl" dir="ltr">${esc(item.explanation)}</p></article>`).join("");
  $("#playBody").innerHTML=`<div class="panel result"><p class="tag">${tr("Quest complete")} · ${esc(title)}</p><div class="big">${r.correct}/${r.total}</div><p class="lead" style="margin:auto" dir="ltr">${r.correct}${tr(" correct · ")}${r.total-r.correct}${tr(" incorrect or unanswered · ")}${Math.round(r.correct/r.total*100)}${tr("% accuracy · longest streak ")}${r.best}</p><p>${performance}</p>
   <p dir="ltr">+${r.score} XP · ${tr("Level")} ${level()}${level()>r.oldLvl?tr(" — level up!"): ""}</p>
   ${r.newAch.length?`<div class="badges" style="justify-content:center">${r.newAch.map(a=>`<span class="ach got">★ ${tr(a)} ${tr("unlocked")}</span>`).join("")}</div>`:""}
   <div class="row" style="justify-content:center"><button class="btn primary" id="again">${tr("Play again")}</button><a class="btn" href="#challenges">${tr("Back to topics")}</a><a class="btn ghost" href="#leaderboard">${tr("View leaderboard")}</a><button class="btn ghost" id="prof">${tr("Profile")}</button></div>
   <details class="review"><summary>${tr("Review answers")} (${r.total})</summary>${reviewHtml}</details></div>`;
  $("#again").onclick=()=>start(r.mode,r.cat);$("#prof").onclick=renderSetup;
}

/* shared leaderboard (Supabase REST, no library needed) */
const CFG=window.RQ_CONFIG||{},cloudOn=()=>!!(CFG.SUPABASE_URL&&CFG.SUPABASE_ANON_KEY);
const hdr=()=>({apikey:CFG.SUPABASE_ANON_KEY,Authorization:"Bearer "+CFG.SUPABASE_ANON_KEY,"Content-Type":"application/json"});
const scoresUrl=()=>CFG.SUPABASE_URL.replace(/\/rest\/v1\/?$/i,"").replace(/\/+$/,"")+"/rest/v1/scores";
async function pushScore(e){
  if(!cloudOn())return;
  try{const r=await fetch(scoresUrl(),{method:"POST",headers:{...hdr(),Prefer:"return=minimal"},body:JSON.stringify({name:e.name,score:e.score,correct:e.correct,total:e.total,mode:e.mode})});
    if(!r.ok)throw 0;toast(tr("Score added to the shared leaderboard."))}
  catch{toast(tr("Could not reach the shared leaderboard. Your score is saved on this device."))}
}
/* leaderboard / reset */
const rowsHtml=rows=>rows.length?`<table><thead><tr><th>${tr("Rank")}</th><th>${tr("Player")}</th><th>${tr("Mode")}</th><th>${tr("Correct")}</th><th>${tr("Score")}</th><th>${tr("Date")}</th></tr></thead><tbody>${rows.map((s,i)=>`<tr><td>${i+1}</td><td>${esc(s.name)}</td><td>${esc(displayMode(s.mode))}</td><td>${s.correct}/${s.total}</td><td><b>${s.score}</b></td><td>${esc(s.date||new Date(s.created_at).toLocaleDateString())}</td></tr>`).join("")}</tbody></table>`:`<div class="panel">${tr("No scores yet.")} <a href="#play" style="color:var(--cy)">${tr("Play a quiz")}</a> ${tr("to take the first place.")}</div>`;
async function renderBoard(){
  const on=cloudOn();
  $("#boardLead").textContent=tr(on?"Top 10 scores from all players. Updates every 10 seconds.":"Top 10 runs saved on this computer. Scores stay in this browser only.");
  $("#clearBoard").style.display=on?"none":"";
  if(!on){$("#board").innerHTML=rowsHtml(S.slice(0,10));return}
  const draw=async()=>{try{const r=await fetch(scoresUrl()+"?select=name,score,correct,total,mode,created_at&order=score.desc,created_at.asc&limit=10",{headers:hdr()});if(!r.ok)throw 0;const rows=await r.json();if(location.hash==="#leaderboard")$("#board").innerHTML=rowsHtml(rows)}catch{$("#board").innerHTML=`<div class="panel">${tr("Could not load the shared leaderboard. Check the internet connection.")}</div>`}};
  $("#board").innerHTML=`<div class="panel">${tr("Loading…")}</div>`;await draw();boardTimer=setInterval(draw,10000);
}
$("#clearBoard").onclick=()=>{if(confirm(tr("Clear all leaderboard scores?"))){S=[];commit();renderBoard();toast(tr("Leaderboard cleared."))}};
$("#resetAll").onclick=()=>{if(confirm(tr("Erase your profile, XP, and all scores on this browser?"))){P={...blank};S=[];commit();toast(tr("All data erased."));location.hash="home"}};
applyLanguage();
route();
})();
