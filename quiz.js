// QUIZ — VERB DATA
// ══════════════════════════════════════════════════════════════
const VERBS = [
  {base:"become",past:"became",past_norm:"became",participle:"become",spanish:"convertirse",ing:"becoming",s3:"becomes",type:"irregular"},
  {base:"begin",past:"began",past_norm:"began",participle:"begun",spanish:"empezar",ing:"beginning",s3:"begins",type:"irregular"},
  {base:"bite",past:"bit",past_norm:"bit",participle:"bitten",spanish:"morder",ing:"biting",s3:"bites",type:"irregular"},
  {base:"blow",past:"blew",past_norm:"blew",participle:"blown",spanish:"soplar",ing:"blowing",s3:"blows",type:"irregular"},
  {base:"break",past:"broke",past_norm:"broke",participle:"broken",spanish:"romper",ing:"breaking",s3:"breaks",type:"irregular"},
  {base:"bring",past:"brought",past_norm:"brought",participle:"brought",spanish:"traer",ing:"bringing",s3:"brings",type:"irregular"},
  {base:"build",past:"built",past_norm:"built",participle:"built",spanish:"construir",ing:"building",s3:"builds",type:"irregular"},
  {base:"buy",past:"bought",past_norm:"bought",participle:"bought",spanish:"comprar",ing:"buying",s3:"buys",type:"irregular"},
  {base:"catch",past:"caught",past_norm:"caught",participle:"caught",spanish:"atrapar",ing:"catching",s3:"catches",type:"irregular"},
  {base:"choose",past:"chose",past_norm:"chose",participle:"chosen",spanish:"elegir",ing:"choosing",s3:"chooses",type:"irregular"},
  {base:"come",past:"came",past_norm:"came",participle:"come",spanish:"venir",ing:"coming",s3:"comes",type:"irregular"},
  {base:"cost",past:"cost",past_norm:"cost",participle:"cost",spanish:"costar",ing:"costing",s3:"costs",type:"irregular",stative:true},
  {base:"cut",past:"cut",past_norm:"cut",participle:"cut",spanish:"cortar",ing:"cutting",s3:"cuts",type:"irregular"},
  {base:"do",past:"did",past_norm:"did",participle:"done",spanish:"hacer",ing:"doing",s3:"does",type:"irregular"},
  {base:"draw",past:"drew",past_norm:"drew",participle:"drawn",spanish:"dibujar",ing:"drawing",s3:"draws",type:"irregular"},
  {base:"drink",past:"drank",past_norm:"drank",participle:"drunk",spanish:"beber",ing:"drinking",s3:"drinks",type:"irregular"},
  {base:"drive",past:"drove",past_norm:"drove",participle:"driven",spanish:"conducir",ing:"driving",s3:"drives",type:"irregular"},
  {base:"eat",past:"ate",past_norm:"ate",participle:"eaten",spanish:"comer",ing:"eating",s3:"eats",type:"irregular"},
  {base:"fall",past:"fell",past_norm:"fell",participle:"fallen",spanish:"caer",ing:"falling",s3:"falls",type:"irregular"},
  {base:"feel",past:"felt",past_norm:"felt",participle:"felt",spanish:"sentir",ing:"feeling",s3:"feels",type:"irregular",stative:true},
  {base:"find",past:"found",past_norm:"found",participle:"found",spanish:"encontrar",ing:"finding",s3:"finds",type:"irregular"},
  {base:"fly",past:"flew",past_norm:"flew",participle:"flown",spanish:"volar",ing:"flying",s3:"flies",type:"irregular"},
  {base:"forget",past:"forgot",past_norm:"forgot",participle:"forgotten",spanish:"olvidar",ing:"forgetting",s3:"forgets",type:"irregular"},
  {base:"freeze",past:"froze",past_norm:"froze",participle:"frozen",spanish:"congelar",ing:"freezing",s3:"freezes",type:"irregular"},
  {base:"get",past:"got",past_norm:"got",participle:"gotten",spanish:"obtener",ing:"getting",s3:"gets",type:"irregular"},
  {base:"give",past:"gave",past_norm:"gave",participle:"given",spanish:"dar",ing:"giving",s3:"gives",type:"irregular"},
  {base:"go",past:"went",past_norm:"went",participle:"gone",spanish:"ir",ing:"going",s3:"goes",type:"irregular"},
  {base:"grow",past:"grew",past_norm:"grew",participle:"grown",spanish:"crecer",ing:"growing",s3:"grows",type:"irregular"},
  {base:"have",past:"had",past_norm:"had",participle:"had",spanish:"tener",ing:"having",s3:"has",type:"irregular"},
  {base:"hear",past:"heard",past_norm:"heard",participle:"heard",spanish:"escuchar",ing:"hearing",s3:"hears",type:"irregular",stative:true},
  {base:"hide",past:"hid",past_norm:"hid",participle:"hidden",spanish:"esconder",ing:"hiding",s3:"hides",type:"irregular"},
  {base:"hit",past:"hit",past_norm:"hit",participle:"hit",spanish:"golpear",ing:"hitting",s3:"hits",type:"irregular"},
  {base:"hold",past:"held",past_norm:"held",participle:"held",spanish:"sostener",ing:"holding",s3:"holds",type:"irregular"},
  {base:"hurt",past:"hurt",past_norm:"hurt",participle:"hurt",spanish:"herir",ing:"hurting",s3:"hurts",type:"irregular"},
  {base:"keep",past:"kept",past_norm:"kept",participle:"kept",spanish:"mantener",ing:"keeping",s3:"keeps",type:"irregular"},
  {base:"know",past:"knew",past_norm:"knew",participle:"known",spanish:"saber",ing:"knowing",s3:"knows",type:"irregular",stative:true},
  {base:"leave",past:"left",past_norm:"left",participle:"left",spanish:"dejar/salir",ing:"leaving",s3:"leaves",type:"irregular"},
  {base:"lose",past:"lost",past_norm:"lost",participle:"lost",spanish:"perder",ing:"losing",s3:"loses",type:"irregular"},
  {base:"make",past:"made",past_norm:"made",participle:"made",spanish:"hacer",ing:"making",s3:"makes",type:"irregular"},
  {base:"meet",past:"met",past_norm:"met",participle:"met",spanish:"conocer",ing:"meeting",s3:"meets",type:"irregular"},
  {base:"pay",past:"paid",past_norm:"paid",participle:"paid",spanish:"pagar",ing:"paying",s3:"pays",type:"irregular"},
  {base:"put",past:"put",past_norm:"put",participle:"put",spanish:"poner",ing:"putting",s3:"puts",type:"irregular"},
  {base:"read",past:"read",past_norm:"read",participle:"read",spanish:"leer",ing:"reading",s3:"reads",type:"irregular"},
  {base:"ride",past:"rode",past_norm:"rode",participle:"ridden",spanish:"montar",ing:"riding",s3:"rides",type:"irregular"},
  {base:"run",past:"ran",past_norm:"ran",participle:"run",spanish:"correr",ing:"running",s3:"runs",type:"irregular"},
  {base:"say",past:"said",past_norm:"said",participle:"said",spanish:"decir",ing:"saying",s3:"says",type:"irregular"},
  {base:"see",past:"saw",past_norm:"saw",participle:"seen",spanish:"ver",ing:"seeing",s3:"sees",type:"irregular"},
  {base:"sell",past:"sold",past_norm:"sold",participle:"sold",spanish:"vender",ing:"selling",s3:"sells",type:"irregular"},
  {base:"send",past:"sent",past_norm:"sent",participle:"sent",spanish:"enviar",ing:"sending",s3:"sends",type:"irregular"},
  {base:"sing",past:"sang",past_norm:"sang",participle:"sung",spanish:"cantar",ing:"singing",s3:"sings",type:"irregular"},
  {base:"sit",past:"sat",past_norm:"sat",participle:"sat",spanish:"sentarse",ing:"sitting",s3:"sits",type:"irregular"},
  {base:"sleep",past:"slept",past_norm:"slept",participle:"slept",spanish:"dormir",ing:"sleeping",s3:"sleeps",type:"irregular"},
  {base:"speak",past:"spoke",past_norm:"spoke",participle:"spoken",spanish:"hablar",ing:"speaking",s3:"speaks",type:"irregular"},
  {base:"spend",past:"spent",past_norm:"spent",participle:"spent",spanish:"gastar",ing:"spending",s3:"spends",type:"irregular"},
  {base:"stand",past:"stood",past_norm:"stood",participle:"stood",spanish:"estar de pie",ing:"standing",s3:"stands",type:"irregular"},
  {base:"steal",past:"stole",past_norm:"stole",participle:"stolen",spanish:"robar",ing:"stealing",s3:"steals",type:"irregular"},
  {base:"swim",past:"swam",past_norm:"swam",participle:"swum",spanish:"nadar",ing:"swimming",s3:"swims",type:"irregular"},
  {base:"take",past:"took",past_norm:"took",participle:"taken",spanish:"tomar",ing:"taking",s3:"takes",type:"irregular"},
  {base:"teach",past:"taught",past_norm:"taught",participle:"taught",spanish:"enseñar",ing:"teaching",s3:"teaches",type:"irregular"},
  {base:"tell",past:"told",past_norm:"told",participle:"told",spanish:"contar",ing:"telling",s3:"tells",type:"irregular"},
  {base:"think",past:"thought",past_norm:"thought",participle:"thought",spanish:"pensar",ing:"thinking",s3:"thinks",type:"irregular"},
  {base:"throw",past:"threw",past_norm:"threw",participle:"thrown",spanish:"lanzar",ing:"throwing",s3:"throws",type:"irregular"},
  {base:"understand",past:"understood",past_norm:"understood",participle:"understood",spanish:"entender",ing:"understanding",s3:"understands",type:"irregular",stative:true},
  {base:"wake",past:"woke",past_norm:"woke",participle:"woken",spanish:"despertar",ing:"waking",s3:"wakes",type:"irregular"},
  {base:"wear",past:"wore",past_norm:"wore",participle:"worn",spanish:"llevar puesto",ing:"wearing",s3:"wears",type:"irregular"},
  {base:"win",past:"won",past_norm:"won",participle:"won",spanish:"ganar",ing:"winning",s3:"wins",type:"irregular"},
  {base:"write",past:"wrote",past_norm:"wrote",participle:"written",spanish:"escribir",ing:"writing",s3:"writes",type:"irregular"},
  {base:"ask",past:"asked",past_norm:"asked",participle:"asked",spanish:"preguntar",ing:"asking",s3:"asks",type:"regular"},
  {base:"believe",past:"believed",past_norm:"believed",participle:"believed",spanish:"creer",ing:"believing",s3:"believes",type:"regular",stative:true},
  {base:"call",past:"called",past_norm:"called",participle:"called",spanish:"llamar",ing:"calling",s3:"calls",type:"regular"},
  {base:"change",past:"changed",past_norm:"changed",participle:"changed",spanish:"cambiar",ing:"changing",s3:"changes",type:"regular"},
  {base:"clean",past:"cleaned",past_norm:"cleaned",participle:"cleaned",spanish:"limpiar",ing:"cleaning",s3:"cleans",type:"regular"},
  {base:"climb",past:"climbed",past_norm:"climbed",participle:"climbed",spanish:"escalar",ing:"climbing",s3:"climbs",type:"regular"},
  {base:"cook",past:"cooked",past_norm:"cooked",participle:"cooked",spanish:"cocinar",ing:"cooking",s3:"cooks",type:"regular"},
  {base:"cry",past:"cried",past_norm:"cried",participle:"cried",spanish:"llorar",ing:"crying",s3:"cries",type:"regular"},
  {base:"decide",past:"decided",past_norm:"decided",participle:"decided",spanish:"decidir",ing:"deciding",s3:"decides",type:"regular"},
  {base:"drop",past:"dropped",past_norm:"dropped",participle:"dropped",spanish:"dejar caer",ing:"dropping",s3:"drops",type:"regular"},
  {base:"enjoy",past:"enjoyed",past_norm:"enjoyed",participle:"enjoyed",spanish:"disfrutar",ing:"enjoying",s3:"enjoys",type:"regular"},
  {base:"finish",past:"finished",past_norm:"finished",participle:"finished",spanish:"terminar",ing:"finishing",s3:"finishes",type:"regular"},
  {base:"help",past:"helped",past_norm:"helped",participle:"helped",spanish:"ayudar",ing:"helping",s3:"helps",type:"regular"},
  {base:"invite",past:"invited",past_norm:"invited",participle:"invited",spanish:"invitar",ing:"inviting",s3:"invites",type:"regular"},
  {base:"join",past:"joined",past_norm:"joined",participle:"joined",spanish:"unirse",ing:"joining",s3:"joins",type:"regular"},
  {base:"jump",past:"jumped",past_norm:"jumped",participle:"jumped",spanish:"saltar",ing:"jumping",s3:"jumps",type:"regular"},
  {base:"laugh",past:"laughed",past_norm:"laughed",participle:"laughed",spanish:"reírse",ing:"laughing",s3:"laughs",type:"regular"},
  {base:"like",past:"liked",past_norm:"liked",participle:"liked",spanish:"gustar",ing:"liking",s3:"likes",type:"regular",stative:true},
  {base:"live",past:"lived",past_norm:"lived",participle:"lived",spanish:"vivir",ing:"living",s3:"lives",type:"regular"},
  {base:"look",past:"looked",past_norm:"looked",participle:"looked",spanish:"mirar",ing:"looking",s3:"looks",type:"regular"},
  {base:"love",past:"loved",past_norm:"loved",participle:"loved",spanish:"amar",ing:"loving",s3:"loves",type:"regular",stative:true},
  {base:"move",past:"moved",past_norm:"moved",participle:"moved",spanish:"moverse",ing:"moving",s3:"moves",type:"regular"},
  {base:"need",past:"needed",past_norm:"needed",participle:"needed",spanish:"necesitar",ing:"needing",s3:"needs",type:"regular",stative:true},
  {base:"open",past:"opened",past_norm:"opened",participle:"opened",spanish:"abrir",ing:"opening",s3:"opens",type:"regular"},
  {base:"play",past:"played",past_norm:"played",participle:"played",spanish:"jugar",ing:"playing",s3:"plays",type:"regular"},
  {base:"promise",past:"promised",past_norm:"promised",participle:"promised",spanish:"prometer",ing:"promising",s3:"promises",type:"regular"},
  {base:"remember",past:"remembered",past_norm:"remembered",participle:"remembered",spanish:"recordar",ing:"remembering",s3:"remembers",type:"regular"},
  {base:"return",past:"returned",past_norm:"returned",participle:"returned",spanish:"volver",ing:"returning",s3:"returns",type:"regular"},
  {base:"smile",past:"smiled",past_norm:"smiled",participle:"smiled",spanish:"sonreír",ing:"smiling",s3:"smiles",type:"regular"},
  {base:"start",past:"started",past_norm:"started",participle:"started",spanish:"empezar",ing:"starting",s3:"starts",type:"regular"},
  {base:"stay",past:"stayed",past_norm:"stayed",participle:"stayed",spanish:"quedarse",ing:"staying",s3:"stays",type:"regular"},
  {base:"stop",past:"stopped",past_norm:"stopped",participle:"stopped",spanish:"parar",ing:"stopping",s3:"stops",type:"regular"},
  {base:"study",past:"studied",past_norm:"studied",participle:"studied",spanish:"estudiar",ing:"studying",s3:"studies",type:"regular"},
  {base:"talk",past:"talked",past_norm:"talked",participle:"talked",spanish:"hablar",ing:"talking",s3:"talks",type:"regular"},
  {base:"travel",past:"traveled",past_norm:"traveled",participle:"traveled",spanish:"viajar",ing:"traveling",s3:"travels",type:"regular"},
  {base:"try",past:"tried",past_norm:"tried",participle:"tried",spanish:"intentar",ing:"trying",s3:"tries",type:"regular"},
  {base:"use",past:"used",past_norm:"used",participle:"used",spanish:"usar",ing:"using",s3:"uses",type:"regular"},
  {base:"want",past:"wanted",past_norm:"wanted",participle:"wanted",spanish:"querer",ing:"wanting",s3:"wants",type:"regular",stative:true},
  {base:"watch",past:"watched",past_norm:"watched",participle:"watched",spanish:"ver/mirar",ing:"watching",s3:"watches",type:"regular"},
  {base:"work",past:"worked",past_norm:"worked",participle:"worked",spanish:"trabajar",ing:"working",s3:"works",type:"regular"},
];

// ══════════════════════════════════════════════════════════════
// QUIZ — TENSE CONFIG
// ══════════════════════════════════════════════════════════════
// Templates split by verb type
// 'dyn' = dynamic (action) verbs  'sta' = stative (state) verbs
const TENSES = [
  { id:'sp', label:'Present Simple', structure:'Subject + V1  (he/she/it → V1+s/es)',
    templates:[
      { sta:false, s:'I ___ ({sp}) every day — it\'s part of my routine.',           ans:v=>v.base,  hint:'Daily personal habit (I)',             expl:v=>`Simple present for habits. With I: ${v.base}.` },
      { sta:false, s:'She ___ ({sp}) really well — everyone notices it.',              ans:v=>v.s3,    hint:'Natural talent or habit (she)',           expl:v=>`Third person singular: ${v.base} → ${v.s3}.` },
      { sta:false, s:'He ___ ({sp}) as part of his daily routine.',                   ans:v=>v.s3,    hint:'Regular personal habit (he)',             expl:v=>`Third person singular: ${v.base} → ${v.s3}.` },
      { sta:false, s:'They ___ ({sp}) together every weekend.',                        ans:v=>v.base,  hint:'Regular group activity (they)',           expl:v=>`Plural subject: ${v.base}.` },
      { sta:false, s:'My sister always ___ ({sp}) before breakfast.',                  ans:v=>v.s3,    hint:'Third-person daily routine',             expl:v=>`Third person singular: ${v.base} → ${v.s3}.` },
      { sta:false, s:'We ___ ({sp}) whenever we get the chance.',                      ans:v=>v.base,  hint:'Recurring habit (we)',                    expl:v=>`With we/you/they: ${v.base}.` },
      { sta:true,  s:'She already ___ ({sp}) what the answer is.',                    ans:v=>v.s3,    hint:'A state of knowledge or feeling (she)',   expl:v=>`Stative verb in simple present: ${v.base} → ${v.s3}.` },
      { sta:true,  s:'Everyone ___ ({sp}) that this is the right decision.',           ans:v=>v.s3,    hint:'A general state or opinion (everyone)',   expl:v=>`Third person singular: ${v.base} → ${v.s3}.` },
      { sta:true,  s:'I ___ ({sp}) exactly what you mean.',                           ans:v=>v.base,  hint:'A state of mind or perception (I)',       expl:v=>`Stative verb with I: ${v.base}.` },
      { sta:true,  s:'He ___ ({sp}) it more than anyone else does.',                  ans:v=>v.s3,    hint:'A state or feeling (he)',                 expl:v=>`Third person singular: ${v.base} → ${v.s3}.` },
    ]},
  { id:'pc', label:'Present Continuous', structure:'Subject + am/is/are + V-ing',
    templates:[
      { sta:false, s:'I ___ ({sp}) right now — I\'ll call you back.',                ans:v=>`am ${v.ing}`, hint:'Action at this exact moment (I)',      expl:v=>`am + V-ing: am ${v.ing}.` },
      { sta:false, s:'She ___ ({sp}) at the moment — please don\'t disturb her.',    ans:v=>`is ${v.ing}`, hint:'Ongoing action right now (she)',        expl:v=>`is + V-ing: is ${v.ing}.` },
      { sta:false, s:'Look! He ___ ({sp}) over there right now.',                     ans:v=>`is ${v.ing}`, hint:'Visible action happening now (he)',      expl:v=>`is + V-ing: is ${v.ing}.` },
      { sta:false, s:'They ___ ({sp}) this week as part of the new project.',         ans:v=>`are ${v.ing}`,hint:'Temporary activity this week (they)',    expl:v=>`are + V-ing: are ${v.ing}.` },
      { sta:false, s:'We ___ ({sp}) a lot these days — it keeps us busy.',            ans:v=>`are ${v.ing}`,hint:'Ongoing activity in the present (we)',   expl:v=>`are + V-ing: are ${v.ing}.` },
      { sta:false, s:'My friend ___ ({sp}) more than usual lately.',                  ans:v=>`is ${v.ing}`, hint:'Noticeable change happening now',        expl:v=>`is + V-ing for a current trend: is ${v.ing}.` },
      { sta:true,  s:'I ___ ({sp}) more and more as I learn.',                        ans:v=>`am ${v.ing}`, hint:'A gradual change in state (I) — some stative verbs allow continuous',  expl:v=>`Some stative verbs use continuous to show gradual change: am ${v.ing}.` },
      { sta:true,  s:'She ___ ({sp}) the situation better now that she has more info.',ans:v=>`is ${v.ing}`,hint:'A developing state (she)',               expl:v=>`Gradual development of a state: is ${v.ing}.` },
    ]},
  { id:'pp', label:'Present Perfect', structure:'Subject + have/has + V3 (past participle)',
    templates:[
      { sta:false, s:'I ___ ({sp}) many times, so I know exactly how to do it.',      ans:v=>`have ${v.participle}`, hint:'Accumulated experience (I)',        expl:v=>`have + past participle: have ${v.participle}.` },
      { sta:false, s:'She ___ already ___ ({sp}) — she finished ahead of schedule.',  ans:v=>`has / ${v.participle}`,hint:"'Already' = done before expected (she)", expl:v=>`has already + past participle: has already ${v.participle}.` },
      { sta:false, s:'They ___ ({sp}) recently and the results look great.',           ans:v=>`have ${v.participle}`, hint:'Recent action, result matters now (they)', expl:v=>`have + past participle: have ${v.participle}.` },
      { sta:false, s:'I ___ just ___ ({sp}) — that\'s why I\'m tired.',             ans:v=>`have / ${v.participle}`,hint:"'Just' = completed moments ago (I)",  expl:v=>`have just + past participle: have just ${v.participle}.` },
      { sta:false, s:'We ___ ({sp}) a lot this year and we\'re proud of the results.',ans:v=>`have ${v.participle}`, hint:'Actions in an unfinished period (we)', expl:v=>`have + past participle: have ${v.participle}.` },
      { sta:true,  s:'He ___ never ___ ({sp}) anything like this in his life.',       ans:v=>`has / ${v.participle}`,hint:'Zero experience of a state up to now (he)', expl:v=>`has never + past participle: has never ${v.participle}.` },
      { sta:true,  s:'I ___ always ___ ({sp}) that hard work pays off.',              ans:v=>`have / ${v.participle}`,hint:"'Always' = consistently held belief (I)", expl:v=>`have always + past participle: have always ${v.participle}.` },
    ]},
  { id:'ppc', label:'Present Perfect Continuous', structure:'Subject + have/has been + V-ing',
    templates:[
      { sta:false, s:'I ___ ({sp}) for two hours and I\'m exhausted.',               ans:v=>`have been ${v.ing}`, hint:'Duration up to now (I)',               expl:v=>`have been + V-ing: have been ${v.ing}.` },
      { sta:false, s:'She ___ ({sp}) all morning — she really deserves a break.',     ans:v=>`has been ${v.ing}`,  hint:'Sustained activity, still ongoing (she)', expl:v=>`has been + V-ing: has been ${v.ing}.` },
      { sta:false, s:'How long ___ you ___ ({sp})? You look really tired.',           ans:v=>`have / been ${v.ing}`,hint:'Asking about duration of an activity',   expl:v=>`How long have you been + V-ing: have been ${v.ing}.` },
      { sta:false, s:'They ___ ({sp}) since Monday and still aren\'t finished.',     ans:v=>`have been ${v.ing}`, hint:"'Since' = activity from a past point (they)", expl:v=>`have been + V-ing with since: have been ${v.ing}.` },
      { sta:false, s:'He ___ ({sp}) all week — no wonder he\'s stressed.',           ans:v=>`has been ${v.ing}`,  hint:'Ongoing activity causing a current state (he)', expl:v=>`has been + V-ing: has been ${v.ing}.` },
      { sta:false, s:'We ___ ({sp}) for months and we\'re finally seeing results.',  ans:v=>`have been ${v.ing}`, hint:'Long effort, still ongoing (we)',          expl:v=>`have been + V-ing: have been ${v.ing}.` },
      { sta:true,  s:'I ___ ({sp}) this more and more as I gain experience.',         ans:v=>`have been ${v.ing}`, hint:'Gradual, ongoing change in a state (I) — some stative verbs allow continuous to show development', expl:v=>`Some stative verbs use have been + V-ing to show a gradual, evolving state: have been ${v.ing}.` },
      { sta:true,  s:'She ___ ({sp}) this way since she got the news.',               ans:v=>`has been ${v.ing}`,  hint:'State that started at a past point and continues (she)', expl:v=>`has been + V-ing to express a state lasting from a specific moment: has been ${v.ing}.` },
      { sta:true,  s:'He ___ ({sp}) it for a while, but he\'s not fully sure yet.',  ans:v=>`has been ${v.ing}`,  hint:'Developing or uncertain state over time (he)', expl:v=>`has been + V-ing for a state that is gradually forming: has been ${v.ing}.` },
    ]},
  { id:'past', label:'Past Simple', structure:'Subject + V2  (regular → V+ed, irregular → V2)',
    templates:[
      { sta:false, s:'I ___ ({sp}) yesterday and it went really well.',               ans:v=>v.past,      hint:'Completed action yesterday (I)',         expl:v=>`Past simple: ${v.base} → ${v.past}.` },
      { sta:false, s:'She ___ ({sp}) last week and was pleased with the outcome.',    ans:v=>v.past_norm, hint:'Completed action last week (she)',        expl:v=>`Past simple: ${v.base} → ${v.past_norm}.` },
      { sta:false, s:'When I was younger, I ___ ({sp}) all the time.',               ans:v=>v.past,      hint:'Past habit no longer true',              expl:v=>`Past simple for past habits: ${v.base} → ${v.past}.` },
      { sta:false, s:'Did you ___ ({sp}) yesterday? I was hoping you would.',        ans:v=>v.base,      hint:'Past question (did + base form)',        expl:v=>`Questions: did + base form: ${v.base}.` },
      { sta:false, s:'He ___ ({sp}) last night and felt much better afterwards.',    ans:v=>v.past_norm, hint:'Completed past action (he)',              expl:v=>`Past simple: ${v.base} → ${v.past_norm}.` },
      { sta:false, s:'They ___ ({sp}) for the first time last month.',               ans:v=>v.past,      hint:'Specific completed event (they)',         expl:v=>`Past simple: ${v.base} → ${v.past}.` },
      { sta:true,  s:'I ___ ({sp}) the answer as soon as I heard the question.',     ans:v=>v.past,      hint:'Instant state in the past (I)',           expl:v=>`Past simple for states: ${v.base} → ${v.past}.` },
      { sta:true,  s:'She ___ ({sp}) it was the right choice from the beginning.',   ans:v=>v.past_norm, hint:'A past state of mind (she)',              expl:v=>`Past simple for states: ${v.base} → ${v.past_norm}.` },
      { sta:true,  s:'Nobody ___ ({sp}) what would happen next.',                    ans:v=>v.past_norm, hint:'Past state of knowledge (nobody)',        expl:v=>`Past simple: ${v.base} → ${v.past_norm}.` },
    ]},
  { id:'pac', label:'Past Continuous', structure:'Subject + was/were + V-ing',
    templates:[
      { sta:false, s:'I ___ ({sp}) when you sent me that message.',                  ans:v=>`was ${v.ing}`, hint:'Action in progress when interrupted (I)',  expl:v=>`was + V-ing: was ${v.ing}.` },
      { sta:false, s:'She ___ ({sp}) all afternoon — she barely stopped.',           ans:v=>`was ${v.ing}`, hint:'Ongoing past activity (she)',              expl:v=>`was + V-ing: was ${v.ing}.` },
      { sta:false, s:'While they ___ ({sp}), something unexpected happened.',        ans:v=>`were ${v.ing}`,hint:'Background action interrupted (they)',     expl:v=>`were + V-ing: were ${v.ing}.` },
      { sta:false, s:'I ___ ({sp}) at home when you called.',                       ans:v=>`was ${v.ing}`, hint:'What was happening at a past time (I)',    expl:v=>`was + V-ing: was ${v.ing}.` },
      { sta:false, s:'He ___ ({sp}) when I arrived, so I waited quietly.',           ans:v=>`was ${v.ing}`, hint:'Action in progress on my arrival (he)',   expl:v=>`was + V-ing: was ${v.ing}.` },
      { sta:true,  s:'I ___ ({sp}) more about it as the conversation went on.',      ans:v=>`was ${v.ing}`, hint:'Gradual change of state in the past (I)',  expl:v=>`Some stative verbs allow past continuous for gradual change: was ${v.ing}.` },
      { sta:true,  s:'She ___ ({sp}) it more and more as she thought about it.',     ans:v=>`was ${v.ing}`, hint:'Developing state in the past (she)',       expl:v=>`was + V-ing to show a state that was evolving: was ${v.ing}.` },
    ]},
  { id:'pap', label:'Past Perfect', structure:'Subject + had + V3 (past participle)',
    templates:[
      { sta:false, s:'I ___ already ___ ({sp}) by the time she arrived.',            ans:v=>`had / ${v.participle}`, hint:"'Already' = done before arrival (I)",  expl:v=>`had already + past participle: had already ${v.participle}.` },
      { sta:false, s:'She ___ ({sp}) before, so she knew exactly what to do.',       ans:v=>`had ${v.participle}`,   hint:'Past experience before a past moment',  expl:v=>`had + past participle: had ${v.participle}.` },
      { sta:false, s:'By the time we got there, they ___ ({sp}) — it was too late.', ans:v=>`had ${v.participle}`,   hint:"'By the time' = completed before arrival", expl:v=>`had + past participle: had ${v.participle}.` },
      { sta:false, s:'By the time we finished, we ___ ({sp}) for hours.',            ans:v=>`had ${v.participle}`,   hint:"'By the time' = completed before",        expl:v=>`had + past participle: had ${v.participle}.` },
      { sta:true,  s:'He ___ never ___ ({sp}) that before — it was completely new.', ans:v=>`had / ${v.participle}`, hint:'Zero experience before a past moment (he)', expl:v=>`had never + past participle: had never ${v.participle}.` },
      { sta:true,  s:'I realised I ___ ({sp}) it all along, I just hadn\'t admitted it.', ans:v=>`had ${v.participle}`, hint:'A past state that preceded realisation (I)', expl:v=>`had + past participle for a past state: had ${v.participle}.` },
    ]},
  { id:'papc', label:'Past Perfect Continuous', structure:'Subject + had been + V-ing',
    templates:[
      { sta:false, s:'I ___ ({sp}) for hours before I finally stopped.',             ans:v=>`had been ${v.ing}`, hint:'Duration before a past stopping point (I)',  expl:v=>`had been + V-ing: had been ${v.ing}.` },
      { sta:false, s:'She was tired because she ___ ({sp}) all day.',                ans:v=>`had been ${v.ing}`, hint:'Activity causing a past condition (she)',    expl:v=>`had been + V-ing: had been ${v.ing}.` },
      { sta:false, s:'They ___ ({sp}) for months before they finally finished.',     ans:v=>`had been ${v.ing}`, hint:'Long activity before a past result (they)',  expl:v=>`had been + V-ing: had been ${v.ing}.` },
      { sta:false, s:'How long ___ he ___ ({sp}) before he gave up?',               ans:v=>`had / been ${v.ing}`,hint:'Duration of past activity before it ended',  expl:v=>`How long had he been + V-ing: had been ${v.ing}.` },
      { sta:false, s:'By the time I arrived, she ___ ({sp}) since early morning.',   ans:v=>`had been ${v.ing}`, hint:"'Since' marks the start before arrival",     expl:v=>`had been + V-ing with since: had been ${v.ing}.` },
      { sta:true,  s:'He ___ ({sp}) it for a long time before he finally said something.', ans:v=>`had been ${v.ing}`, hint:'Gradual or suppressed state before a past moment (he)', expl:v=>`had been + V-ing to show a state that evolved before a past event: had been ${v.ing}.` },
      { sta:true,  s:'I could tell she ___ ({sp}) it all along — she just never told me.', ans:v=>`had been ${v.ing}`, hint:'State that existed for a duration before a past discovery (she)', expl:v=>`had been + V-ing for a hidden or ongoing state before a past point: had been ${v.ing}.` },
    ]},
  { id:'fw', label:'Future Simple (will)', structure:'Subject + will + V1 (base)',
    templates:[
      { sta:false, s:'I ___ ({sp}) tomorrow — I already have it planned.',           ans:v=>`will ${v.base}`, hint:'Promise or decision about tomorrow (I)',   expl:v=>`will + base form: will ${v.base}.` },
      { sta:false, s:'She ___ ({sp}) soon — she\'s almost ready.',                  ans:v=>`will ${v.base}`, hint:'Prediction about the near future (she)',   expl:v=>`will + base form: will ${v.base}.` },
      { sta:false, s:'If you ask him, he ___ ({sp}) without hesitation.',            ans:v=>`will ${v.base}`, hint:'First conditional result (he)',             expl:v=>`First conditional: will + base form: will ${v.base}.` },
      { sta:false, s:'They ___ ({sp}) next week — it\'s already been arranged.',    ans:v=>`will ${v.base}`, hint:'Expected future event (they)',              expl:v=>`will + base form: will ${v.base}.` },
      { sta:false, s:'I think we ___ ({sp}) a lot more in the years ahead.',         ans:v=>`will ${v.base}`, hint:'Opinion-based prediction (we)',             expl:v=>`will + base form for predictions: will ${v.base}.` },
      { sta:true,  s:'I\'m sure you ___ ({sp}) the difference immediately.',        ans:v=>`will ${v.base}`, hint:'Prediction about a future state (you)',     expl:v=>`will + base form for a predicted state: will ${v.base}.` },
      { sta:true,  s:'Once you try it, you ___ ({sp}) why everyone loves it.',       ans:v=>`will ${v.base}`, hint:'A future state triggered by an event',      expl:v=>`will + base form: will ${v.base}.` },
    ]},
  { id:'fg', label:'Going to (future)', structure:'Subject + am/is/are + going to + V1',
    templates:[
      { sta:false, s:'I ___ ({sp}) this weekend — I\'ve already made plans.',       ans:v=>`am going to ${v.base}`, hint:'Pre-arranged personal plan (I)',      expl:v=>`am going to + base form: am going to ${v.base}.` },
      { sta:false, s:'She ___ ({sp}) next month — everything is booked.',            ans:v=>`is going to ${v.base}`, hint:'Confirmed future plan (she)',          expl:v=>`is going to + base form: is going to ${v.base}.` },
      { sta:false, s:'They ___ ({sp}) together — they told me yesterday.',           ans:v=>`are going to ${v.base}`,hint:'Group intention already decided (they)', expl:v=>`are going to + base form: are going to ${v.base}.` },
      { sta:false, s:'He ___ ({sp}) soon — look at how he\'s preparing.',           ans:v=>`is going to ${v.base}`, hint:'Prediction from visible evidence (he)', expl:v=>`is going to + base form: is going to ${v.base}.` },
      { sta:false, s:'We ___ ({sp}) next year — we\'ve already started preparing.', ans:v=>`are going to ${v.base}`,hint:'Intention backed by preparation (we)', expl:v=>`are going to + base form: are going to ${v.base}.` },
      { sta:true,  s:'Once you meet her, you ___ ({sp}) why she\'s so respected.',  ans:v=>`are going to ${v.base}`,hint:'A state that will follow from an action', expl:v=>`are going to + base form for a predicted state: are going to ${v.base}.` },
    ]},
  { id:'fc', label:'Future Continuous', structure:'Subject + will be + V-ing',
    templates:[
      { sta:false, s:'I ___ ({sp}) at this time tomorrow, so call me after 5.',      ans:v=>`will be ${v.ing}`, hint:'Activity in progress at a future time (I)',  expl:v=>`will be + V-ing: will be ${v.ing}.` },
      { sta:false, s:'She ___ ({sp}) all morning, so call her after lunch.',         ans:v=>`will be ${v.ing}`, hint:'Ongoing future activity (she)',               expl:v=>`will be + V-ing: will be ${v.ing}.` },
      { sta:false, s:'They ___ ({sp}) when you arrive, so just join them.',          ans:v=>`will be ${v.ing}`, hint:'Activity in progress on your arrival (they)', expl:v=>`will be + V-ing: will be ${v.ing}.` },
      { sta:false, s:'He ___ ({sp}) all next week — his schedule is completely full.',ans:v=>`will be ${v.ing}`,hint:'Continuous activity throughout a future period', expl:v=>`will be + V-ing: will be ${v.ing}.` },
      { sta:false, s:'We ___ ({sp}) together this time next month.',                 ans:v=>`will be ${v.ing}`, hint:'Activity at a specific future point (we)',    expl:v=>`will be + V-ing: will be ${v.ing}.` },
      { sta:true,  s:'As you grow in this role, you ___ ({sp}) it more naturally.',  ans:v=>`will be ${v.ing}`, hint:'A state that will be evolving at a future point', expl:v=>`will be + V-ing for a state gradually developing in the future: will be ${v.ing}.` },
      { sta:true,  s:'By next year, she ___ ({sp}) it as second nature.',             ans:v=>`will be ${v.ing}`, hint:'Future progressive state — naturally developing (she)', expl:v=>`will be + V-ing to express a future state in development: will be ${v.ing}.` },
    ]},
  { id:'fp', label:'Future Perfect', structure:'Subject + will have + V3 (past participle)',
    templates:[
      { sta:false, s:'I ___ ({sp}) by the time you get here.',                       ans:v=>`will have ${v.participle}`, hint:"'By the time' = before you arrive (I)", expl:v=>`will have + past participle: will have ${v.participle}.` },
      { sta:false, s:'She ___ ({sp}) by Friday — she\'s almost done.',              ans:v=>`will have ${v.participle}`, hint:"'By Friday' = future deadline (she)",    expl:v=>`will have + past participle: will have ${v.participle}.` },
      { sta:false, s:'They ___ ({sp}) by next month at the latest.',                 ans:v=>`will have ${v.participle}`, hint:'Completed before a future month (they)', expl:v=>`will have + past participle: will have ${v.participle}.` },
      { sta:false, s:'He ___ ({sp}) by the end of the day — he\'s very efficient.', ans:v=>`will have ${v.participle}`, hint:'Completed before end of day (he)',       expl:v=>`will have + past participle: will have ${v.participle}.` },
      { sta:false, s:'By next year, we ___ ({sp}) together for a long time.',        ans:v=>`will have ${v.participle}`, hint:'Duration completed at a future point (we)', expl:v=>`will have + past participle: will have ${v.participle}.` },
      { sta:true,  s:'By then, you ___ ({sp}) it long enough to feel confident.',    ans:v=>`will have ${v.participle}`, hint:'A state accumulated by a future point',  expl:v=>`will have + past participle for accumulated state: will have ${v.participle}.` },
    ]},
];

const GROUPS_DEF = [
  { label:'Present tenses', ids:['sp','pc','pp','ppc'] },
  { label:'Past tenses',    ids:['past','pac','pap','papc'] },
  { label:'Future tenses',  ids:['fw','fg','fc','fp'] },
];

// ── QUIZ STATE ─────────────────────────────────────────────────────────────────
let sel=null, correct=0, wrong=0, total=0;
let vpool=[], vused=[], qCount=0, answered=false;

// Cache: avoids calling the API twice for the same verb+tense pair
const questionCache = {};



function rndTense(){ pick(TENSES[Math.floor(Math.random()*TENSES.length)]); }

function pick(t){
  sel=t;
  document.querySelectorAll('.tbtn').forEach(b=>b.classList.toggle('active',b.dataset.id===t.id));
  vpool=[...VERBS]; vused=[];
  qCount=0; nextQ();
}

function pickRand(arr){ return arr.splice(Math.floor(Math.random()*arr.length),1)[0]; }

// ── AI QUESTION GENERATOR ─────────────────────────────────────────────────────
// Tracks whether AI generation is available
let aiAvailable = null; // null = not tested yet

async function generateQuestion(verb, tense) {
  const cacheKey = `${verb.base}::${tense.id}`;
  if (questionCache[cacheKey]) return questionCache[cacheKey];

  // If AI already failed once this session, skip straight to templates
  if (aiAvailable === false) return pickTemplate(tense, verb);

  const isStative = !!(verb && verb.stative);
  const verbTypeNote = isStative
    ? `\nIMPORTANT — STATIVE VERB: "${verb.base}" expresses a mental state, emotion, perception, or condition — NOT a physical action. Rules that follow from this:\n  - Do NOT use adverbs of frequency like "regularly", "often", "as part of his job", "every day" — these collocate with actions, not states.\n  - DO use contexts like: knowing/believing/feeling something in a specific situation, opinions, perceptions, preferences, or emotional reactions.\n  - Example of WRONG sentence: "He ${verb.s3} regularly as part of his job." ← nobody says this.\n  - Example of CORRECT sentence: "She already ${verb.s3} what the answer is." ← this is a state, not an action.`
    : `\nNote: "${verb.base}" is a dynamic (action) verb. Use active, real-world everyday contexts such as work, sport, school, travel, or daily routines.`;

  const prompt = `You are an English grammar exercise generator.

Create ONE fill-in-the-blank sentence using this SPECIFIC verb and tense:
- Verb base form: "${verb.base}" (Spanish: ${verb.spanish})
- Verb type: ${isStative ? 'STATIVE (state/emotion/perception — not a physical action)' : 'DYNAMIC (action verb)'}
- Tense: ${tense.label}
- Grammar structure: ${tense.structure}
${verbTypeNote}

Rules:
1. The sentence MUST make natural, real-world sense with the verb "${verb.base}".
2. Use a realistic everyday context (work, school, travel, family, sport, etc.).
3. Replace the correct verb form with ___ (exactly three underscores).
4. The answer must be the grammatically correct form of "${verb.base}" for ${tense.label}.
5. Keep the sentence short and clear (max 15 words).
6. Do NOT mention the Spanish translation inside the sentence.
7. For split answers like "have / eaten", use two ___ separated by a word (e.g. "I ___ just ___ dinner.").

Respond ONLY with a valid JSON object — no markdown, no explanation:
{
  "sentence": "She ___ to work every day.",
  "answer": "drives",
  "hint": "A third-person daily habit (she)",
  "explanation": "'Drives' is the third person singular of 'drive' in simple present, used for habits."
}`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 300,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    if (!data.content || !data.content[0]) throw new Error('Empty response');

    const raw = data.content[0].text.replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(raw);

    aiAvailable = true;
    updateAiIndicator(true);

    const result = {
      s:    parsed.sentence,
      ans:  () => parsed.answer,
      hint: parsed.hint,
      expl: () => parsed.explanation,
      _ai:  true
    };
    questionCache[cacheKey] = result;
    return result;

  } catch(e) {
    // API not available (GitHub Pages, no key, CORS, etc.)
    // Use the pre-written TENSES templates — they're universal and well-written
    if (aiAvailable !== true) {
      aiAvailable = false;
      updateAiIndicator(false);
    }
    return pickTemplate(tense, verb);
  }
}

// Pick a template appropriate for this verb's type (stative vs dynamic)
function pickTemplate(tense, verb) {
  const isStative = !!(verb && verb.stative);
  const all = tense.templates;
  // Prefer templates marked for this verb type; fall back to untagged ones
  let pool = all.filter(t => t.sta === isStative);
  if (!pool.length) pool = all; // fallback: use any
  return pool[Math.floor(Math.random() * pool.length)];
}

// Show a small badge in the topbar: "✦ AI" (green) or "Templates" (grey)
function updateAiIndicator(isAi) {
  let badge = document.getElementById('ai-badge');
  if (!badge) {
    badge = document.createElement('div');
    badge.id = 'ai-badge';
    badge.style.cssText = 'font-size:11px;font-weight:600;padding:3px 10px;border-radius:99px;letter-spacing:.04em;border:1px solid;';
    const topbar = document.querySelector('.topbar');
    if (topbar) topbar.insertBefore(badge, topbar.querySelector('.voice-picker-wrap') || topbar.firstChild);
  }
  if (isAi) {
    badge.textContent = '✦ AI sentences';
    badge.style.background = 'var(--gl)';
    badge.style.color = 'var(--green)';
    badge.style.borderColor = '#74C69D';
  } else {
    badge.textContent = '◈ Templates';
    badge.style.background = 'var(--s2)';
    badge.style.color = 'var(--t2)';
    badge.style.borderColor = 'var(--bo2)';
  }
}

// Pre-fetch next question in background so there's no wait
function prefetch(verb, tense) {
  if (verb && tense) {
    const key = `${verb.base}::${tense.id}`;
    if (!questionCache[key]) generateQuestion(verb, tense);
  }
}

async function nextQ(){
  if(!vpool.length){ vpool=[...vused]; vused=[]; }
  const v = pickRand(vpool); vused.push(v);
  qCount++; answered=false;

  // Show loading card immediately
  const area = document.getElementById('qa');
  area.innerHTML=`
    <div class="qcard">
      <div class="ctop">
        <span class="qbadge">${sel.label}</span>
        <span class="qn">Question ${qCount}</span>
      </div>
      <div class="sbox">${sel.structure}</div>
      <div style="padding:1.5rem 0;display:flex;align-items:center;gap:10px;color:var(--t3);font-size:14px;">
        <span style="display:inline-flex;gap:4px;">
          <span style="width:7px;height:7px;border-radius:50%;background:var(--blum);animation:qdot 1.2s infinite .0s both"></span>
          <span style="width:7px;height:7px;border-radius:50%;background:var(--blum);animation:qdot 1.2s infinite .2s both"></span>
          <span style="width:7px;height:7px;border-radius:50%;background:var(--blum);animation:qdot 1.2s infinite .4s both"></span>
        </span>
        Generating a sentence for <strong style="color:var(--text);margin-left:4px">${v.base}</strong>…
      </div>
      <div class="vref">Verb: <strong>${v.base}</strong> → ${v.past} → ${v.participle} &nbsp;|&nbsp; ${v.spanish}</div>
    </div>`;

  // Fetch question (may be instant if cached)
  const tmpl = await generateQuestion(v, sel);
  renderQ(v, tmpl);

  // Silently pre-fetch the next verb's question
  if(vpool.length) prefetch(vpool[Math.floor(Math.random()*vpool.length)], sel);
}

function renderQ(v, tmpl){
  const area=document.getElementById('qa');
  let ans, expl;
  try { ans = typeof tmpl.ans==='function' ? tmpl.ans(v) : tmpl.ans; } catch(e){ ans='—'; }
  try { expl = typeof tmpl.expl==='function' ? tmpl.expl(v) : tmpl.expl; } catch(e){ expl=''; }

  let raw = tmpl.s.replace(/\{sp\}/g, v.spanish);
  let sent;
  if(ans.includes(' / ')){
    const parts = raw.split('___');
    sent = parts[0]+'<span class="blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'
         +(parts[1]||'').replace('___','<span class="blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>')
         +(parts[2]||'');
  } else {
    sent = raw.replace('___','<span class="blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>');
  }

  document.getElementById('prog').style.width=Math.min(100,Math.round(qCount/VERBS.length*100))+'%';

  area.innerHTML=`
    <div class="qcard">
      <div class="ctop">
        <span class="qbadge">${sel.label}</span>
        <span class="qn">Question ${qCount}</span>
      </div>
      <div class="sbox">${sel.structure}</div>
      <div class="qtext">${sent}</div>
      <div class="vref">Verb: <strong>${v.base}</strong> → ${v.past} → ${v.participle} &nbsp;|&nbsp; ${v.spanish}</div>
      <div class="irow">
        <input class="ainp" id="ans" placeholder="Type the complete verb form…" autocomplete="off" spellcheck="false"/>
        <button class="ckbtn" id="cbtn" onclick="doCheck()">Check</button>
      </div>
      <div id="fb"></div>
    </div>
    <button class="nxtbtn" id="nbtn" onclick="nextQ()">Next question →</button>`;

  area._v=v; area._tmpl=tmpl; area._ans=ans; area._expl=expl;
  const inp=document.getElementById('ans');
  inp.focus();
  inp.addEventListener('keydown',e=>{ if(e.key==='Enter'&&!answered) doCheck(); });
}

function norm(s){ return s.trim().toLowerCase().replace(/\s+/g,' '); }

function doCheck(){
  if(answered) return;
  const area=document.getElementById('qa');
  const ans=area._ans, expl=area._expl;
  const inp=document.getElementById('ans');
  const val=inp.value.trim(); if(!val){ inp.focus(); return; }
  answered=true; inp.disabled=true; document.getElementById('cbtn').disabled=true;

  const u=norm(val), c=norm(ans);
  const ok = u===c || u===c.replace(' / ',' ')
    || u.replace(/'/g,'')===c.replace(/'/g,'')
    || u===c.replace("n't",' not') || c===u.replace("n't",' not');

  total++; if(ok) correct++; else wrong++;
  document.getElementById('sc').textContent='✓ '+correct;
  document.getElementById('sw').textContent='✗ '+wrong;
  document.getElementById('sp2').textContent=total?Math.round(correct/total*100)+' %':'— %';

  document.getElementById('fb').innerHTML = ok
    ? `<div class="fb ok">✓ Correct! Well done.<div class="expl">${expl}</div></div>`
    : `<div class="fb no">✗ Not quite. Correct answer: <span class="cans">${ans}</span><div class="expl">${expl}</div></div>`;
  document.getElementById('nbtn').style.display='block';
}

// ── Init: build tense grid once DOM is ready ─────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  const grpsEl = document.getElementById('groups');
  let n = 1;
  GROUPS_DEF.forEach(g => {
    const gd = document.createElement('div');
    const lb = document.createElement('div'); lb.className = 'glabel'; lb.textContent = g.label;
    gd.appendChild(lb);
    const grid = document.createElement('div'); grid.className = 'tgrid';
    g.ids.forEach(id => {
      const t = TENSES.find(x => x.id === id);
      const btn = document.createElement('button');
      btn.className = 'tbtn'; btn.dataset.id = id;
      btn.innerHTML = `<span class="tn">${String(n).padStart(2,'0')}</span>${t.label}`;
      btn.onclick = () => pick(t);
      grid.appendChild(btn); n++;
    });
    gd.appendChild(grid); grpsEl.appendChild(gd);
  });
});

