// NEXA Operations Hub — All JavaScript
// Data, Functions, Init

// ── DATA ──
const statusClass={
  'Live':'st-live','Live / Warranty':'st-war','In Development':'st-dev',
  'In QA':'st-qa','In Review':'st-rev','Awaiting Client':'st-wait',
  'On Hold':'st-hold','Not Started':'st-ns'
};
const MONTHS=['','January','February','March','April','May','June','July','August','September','October','November','December'];
const SCORE_BAND=s=>s>=90?{l:'Exceptional',c:'score-exc'}:s>=75?{l:'Strong Performance',c:'score-str'}:s>=60?{l:'Satisfactory',c:'score-sat'}:{l:'Below Expectations',c:'score-bel'};
const CONDUCT_BAND=s=>s>=4.5?'Exemplary':s>=4?'Consistently Good':s>=3?'Meets Standard':s>=2?'Needs Improvement':'Action Required';
const monthlyScores={};
const annualScores={};

const TITLES={dashboard:'Dashboard',team:'Team Directory',projects:'Projects Overview',capacity:'Team Capacity Tracker',onboarding:'Onboarding SOPs',sops:'Processes & SOPs',kpi:'KPI Scorecards',monthly:'Monthly Reviews',annual:'Annual Reviews',escalation:'Escalation Matrix',tools:'Tools & Subscriptions'};
const BADGES={dashboard:'Operations Hub',team:'7 Members',projects:'21 Projects',capacity:'March 2026',onboarding:'4 Roles',sops:'All Roles',kpi:'Interactive Scorecards',monthly:'Delivery & Conduct · All Roles',annual:'Year-End Self-Assessment & Manager Review',escalation:'Escalation Paths',tools:'Team Tech Stack'};
const MEMBER_ROLES = {
  'Mubeena':'pm','Menam':'des','Aman':'dev',
  'Harsh':'dev','Shemoel':'dev','Talha':'int','Muneer':'int'
};
const ROLE_COLORS={
  'PM':'#9354FF','Client':'#1B5FA3','Designer':'#1A8754',
  'Developer':'#B45309','Integration':'#C0392B','All':'#555','QA':'#4A3F8F'
};
const TEAM=[
  {name:'Mubeena',initials:'MB',role:'Project Manager',since:'June 2022',exp:'5+ years',level:'Senior',bio:'Experienced project manager leading NEXA\'s web delivery team. Manages all active projects from brief intake to go-live, ensuring on-time, in-budget delivery across HubSpot, WordPress and custom builds.',skills:[{n:'Project Management',l:95},{n:'Client Communication',l:92},{n:'Forecast / Scheduling',l:90},{n:'QA & Process Design',l:85},{n:'Team Leadership',l:88}],tools:['Forecast','Slack','HubSpot CRM','Google Workspace','Figma (review)'],specialisation:'Project Delivery · Resource Planning · Quality Gates',cv:[{t:'Project Manager',c:'NEXA',d:'Jun 2022 – Present',desc:'Leads 7–10 person web team delivering 20+ concurrent projects. Owns delivery, QA gates, team KPIs and client escalations.'},{t:'Digital Project Coordinator',c:'Creative Agency, Dubai',d:'2020 – 2022',desc:'Coordinated design and development projects for regional clients across web, social and digital campaigns.'}]},
  {name:'Menam',initials:'MN',role:'Web Designer',since:'January 2024',exp:'3 years',level:'Mid',bio:'Detail-oriented web designer with a strong eye for responsive layout and mobile-first design. Works across HubSpot and custom web projects, with growing expertise in AI-assisted design workflows.',skills:[{n:'Responsive Design',l:85},{n:'Figma',l:88},{n:'Mobile-First Design',l:82},{n:'Accessibility (WCAG)',l:75},{n:'AI Design Tools',l:70}],tools:['Figma','Figma AI','Midjourney','Google Fonts'],specialisation:'Responsive Design · Mobile UX · Landing Pages',cv:[{t:'Web Designer',c:'NEXA',d:'Jan 2024 – Present',desc:'Designs responsive websites across HubSpot and custom platforms. Specialises in inner page design and mobile adaptations.'},{t:'Junior UI Designer',c:'Agency, Sharjah',d:'2022 – 2024',desc:'UI design for client websites and landing pages. Developed skills in Figma and responsive design principles.'}]},
  {name:'Aman',initials:'AM',role:'Web Developer',since:'June 2023',exp:'3 years',level:'Mid',bio:'Reliable front-end developer active across the majority of NEXA\'s HubSpot and custom web projects. Works closely with the design and integration team to deliver pixel-accurate, responsive builds on time.',skills:[{n:'HubSpot CMS',l:84},{n:'HTML / CSS / JS',l:86},{n:'Responsive Development',l:85},{n:'WordPress',l:78},{n:'Cross-Browser Testing',l:80}],tools:['HubSpot CMS','WordPress','GitHub','VS Code','PageSpeed Insights','GitHub Copilot'],specialisation:'HubSpot Development · Frontend · Responsive Builds',cv:[{t:'Web Developer',c:'NEXA',d:'Jun 2023 – Present',desc:'Core developer on 10+ concurrent NEXA projects including Presight, Fenton Whelan, Jayasom, Al Marjan and NEXA Website. Delivers homepage and inner page builds across HubSpot and custom platforms.'},{t:'Frontend Developer',c:'Digital Agency',d:'2021 – 2023',desc:'Built and maintained client websites using HTML, CSS, JavaScript and WordPress across diverse industries.'}]},
  {name:'Harsh',initials:'HS',role:'Web Developer',since:'March 2023',exp:'4 years',level:'Mid-Senior',bio:'Full-stack web developer with deep expertise in HubSpot CMS and WordPress. Consistently delivers high-performance builds with strong PageSpeed scores. Champions code quality and developer best practices within the team.',skills:[{n:'HubSpot CMS / HubL',l:90},{n:'WordPress / ACF',l:88},{n:'JavaScript / jQuery',l:82},{n:'Performance Optimisation',l:85},{n:'Git / Version Control',l:88}],tools:['HubSpot CMS','WordPress','GitHub','VS Code','Chrome DevTools','PageSpeed Insights'],specialisation:'HubSpot Development · WordPress · Performance Optimisation',cv:[{t:'Web Developer',c:'NEXA',d:'Mar 2023 – Present',desc:'Develops HubSpot and WordPress websites. Owns QA process on homepage builds and mentors junior developers.'},{t:'Frontend Developer',c:'Tech Agency, Mumbai',d:'2021 – 2023',desc:'Built responsive websites using HTML, CSS, JavaScript and WordPress for clients across finance and e-commerce.'}]},
  {name:'Shemoel',initials:'SH',role:'Web Developer',since:'July 2023',exp:'3 years',level:'Mid',bio:'Versatile developer delivering clean, maintainable code across HubSpot and WordPress platforms. Strong focus on responsive builds and browser cross-compatibility. Active contributor to the NEXA component library.',skills:[{n:'HubSpot CMS',l:85},{n:'WordPress',l:82},{n:'CSS / SASS',l:88},{n:'Cross-Browser Testing',l:85},{n:'GitHub Copilot (AI)',l:78}],tools:['HubSpot CMS','WordPress','GitHub','VS Code','PageSpeed','GitHub Copilot'],specialisation:'HubSpot CMS · Responsive Development · Frontend',cv:[{t:'Web Developer',c:'NEXA',d:'Jul 2023 – Present',desc:'Builds HubSpot and WordPress websites from approved Figma designs. Manages responsive implementation and QA.'},{t:'Web Developer',c:'Digital Agency',d:'2022 – 2023',desc:'Frontend development for SME client websites using WordPress and custom HTML/CSS/JS.'}]},
  {name:'Talha',initials:'TR',role:'Integration Specialist',since:'November 2023',exp:'3 years',level:'Mid',bio:'Backend integration specialist with a focus on HubSpot workflows, CRM configuration and marketing automation. Builds reliable, tested integrations that connect client platforms seamlessly. Also handles landing page development.',skills:[{n:'HubSpot Workflows',l:90},{n:'CRM Setup & Config',l:88},{n:'Zapier / n8n',l:82},{n:'Google Tag Manager',l:80},{n:'API Integrations',l:75}],tools:['HubSpot','Zapier','n8n','Google Tag Manager','GA4','Postman'],specialisation:'HubSpot Automation · CRM Setup · Tracking Implementation',cv:[{t:'Integration Specialist',c:'NEXA',d:'Nov 2023 – Present',desc:'Owns all HubSpot workflow builds, CRM configuration and tracking setup. Manages integrations for 20+ client projects.'},{t:'Marketing Automation Specialist',c:'Martech Agency',d:'2022 – 2023',desc:'Configured HubSpot and Salesforce for B2B clients. Built automated lead nurture workflows and CRM data pipelines.'}]},
  {name:'Muneer',initials:'MU',role:'Integration Specialist',since:'August 2022',exp:'5 years',level:'Senior',bio:'Senior integration specialist and developer with a broad technical background. Delivers complex API integrations, custom backend logic and multi-platform automation workflows. Also contributes to website development on complex builds.',skills:[{n:'API Development',l:88},{n:'HubSpot Integrations',l:90},{n:'n8n / Zapier',l:85},{n:'Website Development',l:80},{n:'CRM Architecture',l:85}],tools:['HubSpot','n8n','Zapier','Postman','Google Tag Manager','GA4','WordPress'],specialisation:'API Integrations · HubSpot Architecture · Backend Development',cv:[{t:'Integration Specialist',c:'NEXA',d:'Aug 2022 – Present',desc:'Leads complex integration projects. Handles API connections, HubSpot CRM architecture and backend automation workflows.'},{t:'Full-Stack Developer',c:'SaaS Company, Dubai',d:'2020 – 2022',desc:'Built REST APIs, third-party integrations and backend services for a B2B SaaS platform with 50k+ users.'}]}
];
const PROJECTS=[
  {client:'Presight',team:['Mubeena','Aman','Harsh','Shemoel'],start:'20 May 2025',end:'28 Feb 2026',type:'HS Website',status:'In QA',notes:'All pages QA & responsive check in progress'},
  {client:'Fenton Whelan',team:['Mubeena','Aman','Harsh','Shemoel'],start:'11 Jun 2024',end:'—',type:'HS Website',status:'In Development',notes:'Inner pages in progress'},
  {client:'Redmills CDM',team:['Muneer'],start:'—',end:'—',type:'Custom Dev',status:'In QA',notes:'Inner page linking and QA progressing'},
  {client:'Redmills Foran',team:['Muneer'],start:'—',end:'TBC',type:'Custom Dev',status:'Awaiting Client',notes:'Waiting for client confirmation to go live'},
  {client:'Leo Developments',team:['Mubeena','Menam','Muneer'],start:'—',end:'5 Dec 2025',type:'Custom Dev',status:'Live',notes:'Development complete. Site pushed live.'},
  {client:'Aafiya Clinic',team:['Mubeena','Muneer','Aman'],start:'—',end:'12 Sep 2025',type:'Custom Dev',status:'Live',notes:'Inner page design and development done'},
  {client:'e7 Group',team:['Mubeena','Muneer','Talha'],start:'—',end:'—',type:'Landing Page',status:'In Development',notes:'Website speed check and optimisation'},
  {client:'Jayasom',team:['Mubeena','Aman','Harsh','Shemoel'],start:'—',end:'—',type:'HS Website',status:'In Development',notes:'Homepage complete. SEO, Performance, Copywriting also scoped.'},
  {client:'Riverside Cogat',team:['—'],start:'—',end:'—',type:'—',status:'On Hold',notes:'Data pending — project on hold'},
  {client:'New Horizon',team:['Mubeena','Aman','Harsh','Shemoel'],start:'—',end:'—',type:'HS Website',status:'Awaiting Client',notes:'Map API created and shared with client. Awaiting response.'},
  {client:'NEXA Website',team:['Mubeena','Aman','Harsh','Shemoel'],start:'11 Jun 2024',end:'—',type:'HS Website',status:'In Development',notes:'Working on new case study template. Awaiting design from designer.'},
  {client:'Human Magic',team:['—'],start:'—',end:'—',type:'—',status:'Not Started',notes:'No data — project not yet kicked off'},
  {client:'Liv New Website',team:['Muneer','Mubeena'],start:'—',end:'—',type:'Custom Dev',status:'On Hold',notes:'On hold — data unavailable'},
  {client:'Titan',team:['Mubeena','Harsh','Shemoel','Aman','Talha'],start:'—',end:'—',type:'HS Website',status:'Not Started',notes:'Not yet started'},
  {client:'Puro',team:['Mubeena','Aman','Harsh','Shemoel'],start:'—',end:'—',type:'HS Website',status:'In Review',notes:'Working on feedback sheet'},
  {client:'Logistics',team:['—'],start:'—',end:'—',type:'—',status:'Not Started',notes:'Pending — no data yet'},
  {client:'Safarak',team:['—'],start:'—',end:'—',type:'—',status:'Not Started',notes:'Pending — no data yet'},
  {client:'Al Ain Farms',team:['—'],start:'—',end:'—',type:'—',status:'Not Started',notes:'Pending — no data yet'},
  {client:'Jodoa Landing Page',team:['Talha Rajput'],start:'—',end:'—',type:'Landing Page',status:'Awaiting Client',notes:'Some comments on hold awaiting response from Scene team'},
  {client:'Core 42',team:['Mubeena','Harsh','Shemoel'],start:'—',end:'25–30 Mar',type:'HS Website',status:'In Development',notes:'Product page in progress'},
  {client:'Al Marjan',team:['Mubeena','Aman','Harsh','Shemoel'],start:'—',end:'24 Jan 2026',type:'HS Website',status:'Live / Warranty',notes:'Post-live warranty in progress until 24 Feb'}
];
const CAPACITY=[
  {name:'Mubeena',initials:'MB',role:'Project Manager',status:'full',statusLabel:'Fully Committed',projects:['All Active Projects (oversight)'],pct:95},
  {name:'Menam',initials:'MN',role:'Web Designer',status:'avail',statusLabel:'Available',projects:['Leo Developments (done)'],pct:30},
  {name:'Aman',initials:'AM',role:'Web Developer',status:'full',statusLabel:'Fully On Projects',projects:['Presight','Fenton Whelan','Al Marjan (warranty)'],pct:90},
  {name:'Harsh',initials:'HS',role:'Web Developer',status:'full',statusLabel:'Fully On Projects',projects:['Presight','Core 42','Jayasom'],pct:90},
  {name:'Shemoel',initials:'SH',role:'Web Developer',status:'full',statusLabel:'Fully On Projects',projects:['Fenton Whelan','Titan','Puro'],pct:88},
  {name:'Talha',initials:'TR',role:'Integration Specialist',status:'part',statusLabel:'Partially Available',projects:['Jodoa LP','e7 Group'],pct:60},
  {name:'Muneer',initials:'MU',role:'Integration Specialist',status:'full',statusLabel:'Fully On Projects',projects:['Redmills CDM','Redmills Foran','Liv'],pct:85}
];
const KPI_DATA={
  des:{name:'Web Designer',sections:[
    {title:'Delivery & Time Management',max:25,kpis:[
      {m:'% of tasks / designs delivered on time',t:'≥ 90%',w:10},{m:'First homepage concept delivery speed',t:'≤ 8 hrs after brief',w:8},{m:'Variance between estimated vs actual hours',t:'≤ 15%',w:7}]},
    {title:'Design Quality & Approvals',max:35,kpis:[
      {m:'% designs approved on 1st or 2nd review',t:'≥ 85%',w:10},{m:'Average revision rounds per design',t:'≤ 2 rounds',w:8},{m:'Design files requiring no dev rework',t:'≥ 90%',w:7},{m:'Internal QA compliance score',t:'100%',w:5},{m:'Usability test score on final designs',t:'≥ 80%',w:5}]},
    {title:'Client Satisfaction',max:20,kpis:[
      {m:'Client satisfaction score (CSAT)',t:'≥ 4.5 / 5',w:10},{m:'Internal QA score',t:'≥ 90%',w:5},{m:'Revision / bug rate across all tasks',t:'≤ 5% of tasks',w:5}]},
    {title:'AI & Innovation',max:16,kpis:[
      {m:'AI tool usage in design workflow',t:'≥ 30% of projects',w:8},{m:'New reusable templates / components created',t:'≥ 5 / quarter',w:4},{m:'Design system contributions',t:'≥ 2 / quarter',w:4}]},
    {title:'Collaboration, Process & Upskilling',max:16,kpis:[
      {m:'Portal upload & handover compliance',t:'100%',w:4},{m:'Meeting attendance',t:'≥ 90%',w:3},{m:'Cross-team collaboration rating',t:'≥ 4 / 5',w:3},{m:'Quarterly upskilling / certification',t:'1 cert / quarter',w:3},{m:'HubSpot certification',t:'≥ 1 / quarter',w:3}]}
  ]},
  dev:{name:'Web Developer',sections:[
    {title:'Delivery & Time Management',max:25,kpis:[
      {m:'% of tasks / builds delivered on time',t:'≥ 90%',w:10},{m:'First homepage build after handoff',t:'≤ 10 working hrs',w:8},{m:'Variance between estimated vs actual hours',t:'≤ 15%',w:7}]},
    {title:'Code Quality & Technical Standards',max:40,kpis:[
      {m:'Coding standards compliance (code QA)',t:'≥ 90%',w:8},{m:'Bugs per feature (QA or production)',t:'≤ 2 per feature',w:7},{m:'Pull request approval rate on 1st review',t:'≥ 85%',w:5},{m:'Pages meeting Core Web Vitals thresholds',t:'≥ 90%',w:6},{m:'Average PageSpeed score (desktop)',t:'≥ 90',w:4},{m:'Average page load time',t:'≤ 3 seconds',w:5},{m:'Site uptime for deployed sites',t:'≥ 99%',w:5}]},
    {title:'Client Satisfaction',max:20,kpis:[
      {m:'Client satisfaction score (CSAT)',t:'≥ 4.5 / 5',w:10},{m:'Internal QA score',t:'≥ 90%',w:5},{m:'Revision / bug rate across all tasks',t:'≤ 5% of tasks',w:5}]},
    {title:'AI, Automation & Innovation',max:17,kpis:[
      {m:'AI tool usage in development workflow',t:'≥ 50% of projects',w:8},{m:'Automation workflow adoption',t:'≥ 30% of integrations',w:5},{m:'Reusable components contributed to library',t:'≥ 5 / quarter',w:4}]},
    {title:'Collaboration, Process & Upskilling',max:16,kpis:[
      {m:'Portal & handover compliance',t:'100%',w:4},{m:'Meeting attendance',t:'≥ 90%',w:3},{m:'Cross-team collaboration rating',t:'≥ 4 / 5',w:3},{m:'Quarterly upskilling / certification',t:'1 cert / quarter',w:3},{m:'HubSpot certification',t:'≥ 1 / quarter',w:3}]}
  ]},
  pm:{name:'Project Manager',sections:[
    {title:'Project Delivery',max:45,kpis:[
      {m:'% of projects delivered on or before deadline',t:'≥ 90%',w:20},{m:'Budget variance (estimated vs actual hours)',t:'≤ 15%',w:15},{m:'Client satisfaction score (CSAT)',t:'≥ 4.5 / 5',w:10}]},
    {title:'Operational Governance',max:25,kpis:[
      {m:'Forecast task coverage (all tasks logged before work)',t:'100%',w:10},{m:'Internal QA gate compliance',t:'100%',w:10},{m:'Brief completion check before project setup',t:'100%',w:5}]},
    {title:'Team Management',max:25,kpis:[
      {m:'Team time logging compliance',t:'≥ 95% of days',w:10},{m:'Handover checklist completion rate',t:'100%',w:10},{m:'At-risk project escalation time',t:'Within 24 hrs',w:5}]},
    {title:'Communication',max:15,kpis:[
      {m:'Weekly client status update delivery',t:'100% by Mon 10am',w:5},{m:'Meeting notes distributed after meeting',t:'≤ 2 hrs',w:5},{m:'Cross-team collaboration rating',t:'≥ 4 / 5',w:5}]}
  ]},
  int:{name:'Integration Specialist',sections:[
    {title:'Delivery & Time Management',max:25,kpis:[
      {m:'% of integration tasks delivered on time',t:'≥ 90%',w:10},{m:'Form & CRM integration setup time',t:'≤ 4 hours',w:8},{m:'Variance between estimated vs actual hours',t:'≤ 15%',w:7}]},
    {title:'Integration Quality',max:40,kpis:[
      {m:'Form submissions tested before staging delivery',t:'100%',w:10},{m:'Tracking events verified before go-live',t:'100%',w:10},{m:'Zero production integration failures',t:'0 failures',w:10},{m:'CRM data accuracy (correct field mapping)',t:'100%',w:10}]},
    {title:'Client Satisfaction',max:20,kpis:[
      {m:'Client satisfaction score (CSAT)',t:'≥ 4.5 / 5',w:10},{m:'Internal QA score',t:'≥ 90%',w:5},{m:'Revision / bug rate on integrations',t:'≤ 5%',w:5}]},
    {title:'AI, Automation & Innovation',max:17,kpis:[
      {m:'Automation tool usage (n8n / Zapier / HubSpot)',t:'≥ 30% of tasks',w:8},{m:'AI-assisted workflow building',t:'≥ 2 / quarter',w:5},{m:'Reusable workflow templates contributed',t:'≥ 3 / quarter',w:4}]},
    {title:'Collaboration & Upskilling',max:10,kpis:[
      {m:'Meeting attendance',t:'≥ 90%',w:3},{m:'HubSpot certification',t:'≥ 1 / quarter',w:4},{m:'Cross-team collaboration rating',t:'≥ 4 / 5',w:3}]}
  ]}
};
const MONTHLY_METRICS = {
  des: {
    name: 'Web Designer',
    deliveryMetrics: [
      {metric:'% tasks delivered on time', target:'≥ 90%'},
      {metric:'Avg time vs estimate variance', target:'≤ 15%'},
      {metric:'First draft speed (homepage)', target:'≤ 8 hrs'},
      {metric:'Design approval rate (1st/2nd review)', target:'≥ 85%'},
      {metric:'Avg revision rounds per design', target:'≤ 2'},
      {metric:'Handoff quality — no dev rework', target:'≥ 90%'},
      {metric:'Internal QA compliance score', target:'100%'},
      {metric:'Usability score on delivered designs', target:'≥ 80%'},
      {metric:'CSAT score (if received)', target:'≥ 4.5 / 5'},
      {metric:'AI tool usage', target:'≥ 30% of projects'},
    ],
    conductSections: [
      {title:'A — Task Management & Delivery', items:[
        {s:'Estimation accuracy — actual hours within 15% of estimate'},
        {s:'Task acceptance speed — acknowledged in Forecast within 4 hrs'},
        {s:'Zero task declinations without research or reasoned alternative'},
      ]},
      {title:'B — Communication & Responsiveness', items:[
        {s:'Email response within 4 working hours'},
        {s:'Slack acknowledgement within 2 working hours'},
        {s:'No requesting already-shared files'},
        {s:'Client-facing communication is professional and solution-oriented'},
      ]},
      {title:'C — Operational Compliance', items:[
        {s:'Forecast tasks logged daily before end of working day'},
        {s:'Timesheets submitted weekly without reminder'},
        {s:'Self-sufficient — PM does not need to chase for updates'},
        {s:'No overpromising to clients or colleagues'},
        {s:'No quoting timelines without PM confirmation'},
      ]},
      {title:'D — Meetings & Attendance', items:[
        {s:'Present and ready at start time of every meeting'},
        {s:'≥ 95% attendance on all scheduled meetings'},
      ]},
      {title:'E — Team & Cross-Department Collaboration', items:[
        {s:'Active contribution to team discussions and knowledge sharing'},
        {s:'Positive competitive contribution to team culture'},
        {s:'Cross-department tasks handled professionally'},
      ]},
      {title:'F — AI & Tool Usage', items:[
        {s:'AI tools actively used in day-to-day workflow (≥ 30% of projects)'},
      ]},
    ]
  },
  dev: {
    name: 'Web Developer',
    deliveryMetrics: [
      {metric:'% tasks delivered on time', target:'≥ 90%'},
      {metric:'Avg time vs estimate variance', target:'≤ 15%'},
      {metric:'First homepage build speed after handoff', target:'≤ 10 hrs'},
      {metric:'Coding QA compliance score', target:'≥ 90%'},
      {metric:'Bugs per feature (QA or production)', target:'≤ 2'},
      {metric:'PageSpeed desktop score (average)', target:'≥ 90%'},
      {metric:'Page load time — avg new builds', target:'≤ 3 seconds'},
      {metric:'Core Web Vitals — % pages in Good range', target:'≥ 90%'},
      {metric:'Site uptime for deployed sites', target:'≥ 99%'},
      {metric:'Internal QA score', target:'≥ 90%'},
      {metric:'CSAT score (if received)', target:'≥ 4.5 / 5'},
      {metric:'AI tool usage', target:'≥ 50% of tasks'},
    ],
    conductSections: [
      {title:'A — Task Management & Delivery', items:[
        {s:'Estimation accuracy — actual hours within 15% of estimate'},
        {s:'Task acceptance speed — acknowledged in Forecast within 4 hrs'},
        {s:'Zero task declinations without research or reasoned alternative'},
      ]},
      {title:'B — Communication & Responsiveness', items:[
        {s:'Email response within 4 working hours'},
        {s:'Slack acknowledgement within 2 working hours'},
        {s:'No requesting already-shared files'},
        {s:'Client-facing communication is professional and solution-oriented'},
      ]},
      {title:'C — Operational Compliance', items:[
        {s:'Forecast tasks logged daily before end of working day'},
        {s:'Timesheets submitted weekly without reminder'},
        {s:'Self-sufficient — PM does not need to chase for updates'},
        {s:'No overpromising to clients or colleagues'},
        {s:'No quoting timelines without PM confirmation'},
      ]},
      {title:'D — Meetings & Attendance', items:[
        {s:'Present and ready at start time of every meeting'},
        {s:'≥ 95% attendance on all scheduled meetings'},
      ]},
      {title:'E — Team & Cross-Department Collaboration', items:[
        {s:'Active contribution to team discussions and knowledge sharing'},
        {s:'Positive competitive contribution to team culture'},
        {s:'Cross-department tasks handled professionally'},
      ]},
      {title:'F — AI & Tool Usage', items:[
        {s:'AI tools actively used in day-to-day workflow (≥ 50% of projects)'},
      ]},
    ]
  },
  pm: {
    name: 'Project Manager',
    deliveryMetrics: [
      {metric:'% projects on track or delivered on time', target:'≥ 90%'},
      {metric:'Budget variance — avg across active projects', target:'≤ 15%'},
      {metric:'Forecast task coverage — all tasks logged before work', target:'100%'},
      {metric:'Internal QA gate compliance rate', target:'100%'},
      {metric:'Handover checklist completion rate', target:'100%'},
      {metric:'Client weekly status update delivery', target:'100% by Mon 10am'},
      {metric:'At-risk project escalations within 24 hours', target:'100%'},
      {metric:'Team Forecast/timesheet compliance (managed team)', target:'≥ 95% daily'},
      {metric:'CSAT scores received (average)', target:'≥ 4.5 / 5'},
    ],
    conductSections: [
      {title:'A — Task & Team Management', items:[
        {s:'Own task completion within estimate (≤ 15% variance)'},
        {s:'Task delegation speed — assigned within 4 hrs of brief receipt'},
        {s:'Self-sufficient — Director does not need to chase for project updates'},
        {s:'No quoting timelines to clients without full scoping'},
        {s:'All client/team commitments realistic, scoped and documented'},
      ]},
      {title:'B — Communication & Responsiveness', items:[
        {s:'Email response within 4 working hours'},
        {s:'Slack acknowledgement within 2 working hours'},
        {s:'No requesting already-shared files'},
        {s:'Client-facing communication is professional and constructive'},
      ]},
      {title:'C — Operational Compliance', items:[
        {s:'Own Forecast tasks updated daily without reminder'},
        {s:'Timesheets submitted weekly without reminder'},
        {s:'Team Forecast compliance checked every morning before 11am'},
      ]},
      {title:'D — Meetings & Attendance', items:[
        {s:'Present and ready at start time of every meeting'},
        {s:'≥ 95% attendance on all scheduled meetings'},
      ]},
      {title:'E — Team & Cross-Department Collaboration', items:[
        {s:'Actively fosters positive, accountable team environment'},
        {s:'Encourages healthy competition and knowledge sharing'},
        {s:'Cross-department requests coordinated and logged in Forecast'},
      ]},
      {title:'F — AI & Tool Adoption', items:[
        {s:'AI tools actively used for planning, communication and reporting'},
      ]},
    ]
  },
  int: {
    name: 'Integration Specialist',
    deliveryMetrics: [
      {metric:'% tasks delivered on time', target:'≥ 90%'},
      {metric:'Avg time vs estimate variance', target:'≤ 15%'},
      {metric:'Form test completion rate', target:'100%'},
      {metric:'Tracking verification rate', target:'100%'},
      {metric:'Production integration failures', target:'Zero'},
      {metric:'CRM data accuracy', target:'100%'},
      {metric:'Internal QA score', target:'≥ 90%'},
      {metric:'CSAT score (if received)', target:'≥ 4.5 / 5'},
      {metric:'AI/automation tool usage', target:'≥ 30% of tasks'},
    ],
    conductSections: [
      {title:'A — Task Management & Delivery', items:[
        {s:'Estimation accuracy — actual hours within 15% of estimate'},
        {s:'Task acceptance speed — acknowledged in Forecast within 4 hrs'},
        {s:'All integrations fully tested before submitting to PM'},
      ]},
      {title:'B — Communication & Responsiveness', items:[
        {s:'Email response within 4 working hours'},
        {s:'Slack acknowledgement within 2 working hours'},
        {s:'No requesting already-shared files'},
      ]},
      {title:'C — Operational Compliance', items:[
        {s:'Forecast tasks logged daily before end of working day'},
        {s:'Timesheets submitted weekly without reminder'},
        {s:'Every integration documented before marking task complete'},
        {s:'No live changes without written PM approval'},
        {s:'Live failures escalated to PM within 30 minutes'},
      ]},
      {title:'D — Meetings & Attendance', items:[
        {s:'Present and ready at start time of every meeting'},
        {s:'≥ 95% attendance on all scheduled meetings'},
      ]},
      {title:'E — Team & Cross-Department Collaboration', items:[
        {s:'Active contribution to team discussions and knowledge sharing'},
        {s:'Positive competitive contribution to team culture'},
        {s:'Cross-department tasks handled professionally'},
      ]},
      {title:'F — AI & Tool Usage', items:[
        {s:'Automation tools actively used (≥ 30% of integration tasks)'},
      ]},
    ]
  }
};
const ANNUAL_SELF_ASSESSMENT = {
  des: {
    name: 'Web Designer',
    questions: [
      {sec:'SECTION 1 — Delivery & Time Management', qs:[
        'Over the past year, what percentage of your tasks were delivered on or before deadline?',
        'How accurate were your time estimates? Give the average variance between estimated and actual hours.',
        'Share two examples where you delivered ahead of schedule and one where you fell behind. What caused the difference?',
      ]},
      {sec:'SECTION 2 — Quality & Revisions', qs:[
        'On average, how many revision rounds do your designs require before approval?',
        'Share two recent designs that were approved within one or two rounds. What made them successful?',
        'Provide an example where a design needed more revisions than expected and explain why.',
      ]},
      {sec:'SECTION 3 — Handoff Quality', qs:[
        'What percentage of your designs were built by developers with zero rework in the last quarter?',
        'Give one example of a clean handoff and one where devs needed changes. What can improve?',
      ]},
      {sec:'SECTION 4 — Design Approval Rate', qs:[
        'What is your current approval rate on first or second review?',
        'Share one project where the approval process went smoothly and one where it did not.',
      ]},
      {sec:'SECTION 5 — Usability & Accessibility', qs:[
        'How often do your designs hit the target usability benchmarks?',
        'What percentage of your work follows WCAG AA guidelines? Show a piece of work that demonstrates this.',
      ]},
      {sec:'SECTION 6 — AI & Innovation', qs:[
        'Which AI tools did you use this year and in what percentage of projects?',
        'How many contributions did you make to the design system or component library this year?',
      ]},
      {sec:'SECTION 7 — Overall Self-Assessment', qs:[
        'Looking at all KPIs, which ones do you consistently meet and which fall below target? Use numbers.',
        'What specific improvements do you want to make next year, and how will you measure progress?',
        'What tools, processes, or support from the team would help you improve your metrics?',
      ]},
    ]
  },
  dev: {
    name: 'Web Developer',
    questions: [
      {sec:'SECTION 1 — Delivery & Time Management', qs:[
        'Over the past year, what percentage of your development tasks were delivered on or before deadline?',
        'How accurate were your time estimates? Give the average variance across your projects.',
        'Share two examples where you delivered ahead of schedule and one where you ran over.',
        'How long did it typically take to deliver a first homepage build after receiving the design handoff?',
      ]},
      {sec:'SECTION 2 — Code Quality & Technical Standards', qs:[
        'What was your average coding standards compliance score during internal QA reviews this year?',
        'How many bugs per feature were reported during QA or production across your projects?',
        'What percentage of your pull requests were approved on first review?',
      ]},
      {sec:'SECTION 3 — Performance & Core Web Vitals', qs:[
        'What were the PageSpeed Insights scores (desktop and mobile) for the sites you launched? List at least three.',
        'How many of your projects met the Core Web Vitals thresholds (LCP, FID/INP, CLS)?',
        'Share one example where you significantly improved the performance of a site.',
      ]},
      {sec:'SECTION 4 — AI, Automation & Innovation', qs:[
        'Which AI tools did you use in your workflow and in what percentage of projects?',
        'Did you build any automation workflows this year? Describe one and the impact it had.',
        'How many reusable components did you contribute to the team library?',
      ]},
      {sec:'SECTION 5 — Overall Self-Assessment', qs:[
        'Looking at all your KPIs from this year, which ones do you consistently meet and which fall below target?',
        'What specific technical improvements do you want to make next year?',
        'What tools, processes, team support, or training would help you perform better next year?',
      ]},
    ]
  },
  pm: {
    name: 'Project Manager',
    questions: [
      {sec:'SECTION 1 — Project Delivery', qs:[
        'What was your on-time project delivery rate this year? Share your best and most challenging month.',
        'What was the average budget variance across your projects? Share your highest and lowest variance projects.',
        'Share one project that ran smoothly and one that experienced significant issues. What did you learn?',
        'How did you handle a situation where a project was at risk of missing its deadline?',
      ]},
      {sec:'SECTION 2 — Operational Governance', qs:[
        'What was your Forecast task coverage rate — were all tasks created before work started?',
        'How consistently did you enforce the internal QA gate before client submissions?',
        'How did you manage change requests this year?',
      ]},
      {sec:'SECTION 3 — Team Management', qs:[
        'How did you manage team capacity and workload across projects this year?',
        'What was your team\'s time logging compliance rate this year?',
        'How did you support the development of your team this year?',
      ]},
      {sec:'SECTION 4 — Overall Self-Assessment', qs:[
        'Which of your KPIs do you consistently meet and which fall below target?',
        'What is the one operational change you would make to improve project delivery next year?',
        'What support, tools, or training would help you deliver better results next year?',
      ]},
    ]
  },
  int: {
    name: 'Integration Specialist',
    questions: [
      {sec:'SECTION 1 — Delivery & Integration Quality', qs:[
        'What percentage of your integration tasks were delivered on or before deadline this year?',
        'What was your production integration failure rate this year? Describe any failures and how they were resolved.',
        'What was your form test completion rate? Give examples of integrations that passed first time and ones that needed rework.',
      ]},
      {sec:'SECTION 2 — Technical Depth', qs:[
        'Which platforms did you work on this year (HubSpot, Zapier, n8n, GA4, custom API)? Rate your depth in each 1–5.',
        'Share the most technically complex integration you delivered this year.',
        'How many automation workflows did you build or configure this year?',
      ]},
      {sec:'SECTION 3 — Process & Documentation', qs:[
        'What percentage of your integrations were fully documented before the Forecast task was marked complete?',
        'Share an example of an integration that had good documentation and explain the benefit.',
      ]},
      {sec:'SECTION 4 — Overall Self-Assessment', qs:[
        'Looking at all your KPIs, which ones do you consistently meet and which fall below target?',
        'What certifications or upskilling did you complete this year?',
        'What tools, processes, or training would help you perform better next year?',
      ]},
    ]
  }
};
const PROC_DATA={
  hs:{
    title:'HubSpot Website',
    color:'#B45309',
    phases:[
      {id:'kickoff',label:'KICKOFF',color:'#9354FF',steps:[
        {n:'01',title:'Brief Intake',owner:'PM',time:'Day 1',gate:false,what:'Receive completed 11-field brief from client. Review all mandatory fields.',who:'PM receives from client',deliver:'Confirmed brief in Forecast',sla:'Flag gaps within 24 hrs',criteria:'All 11 fields complete'},
        {n:'02',title:'Project Setup',owner:'PM',time:'Day 1–2',gate:false,what:'Create project in Forecast with all tasks, hours, assignees and deadlines.',who:'PM',deliver:'Forecast project + tasks',sla:'Set up within 48 hrs of brief',criteria:'All tasks have owner, hours, deadline'},
        {n:'03',title:'Internal Kick-Off',owner:'PM + Team',time:'Day 2–3',gate:true,what:'Run kick-off with design and dev team. Confirm platform, timeline and risks.',who:'PM leads, all team',deliver:'Kick-off notes in Forecast',sla:'Within 3 days of brief',criteria:'Timeline confirmed, risks documented'},
      ]},
      {id:'design',label:'DESIGN',color:'#1A8754',steps:[
        {n:'04',title:'Brief Review',owner:'Designer',time:'Day 3',gate:false,what:'Designer reads full brief. Reviews brand assets, competitor references. Flags gaps to PM.',who:'Designer',deliver:'Design direction note to PM',sla:'Flag gaps within 4 hrs',criteria:'No outstanding gaps before design starts'},
        {n:'05',title:'2 Homepage Concepts',owner:'Designer',time:'Day 3–5',gate:false,what:'Two distinct full-fidelity homepage directions designed in Figma. No wireframes.',who:'Designer',deliver:'2 full Figma concepts',sla:'≤ 8 working hours after brief',criteria:'Both at full fidelity, desktop breakpoint'},
        {n:'06',title:'Internal PM Review',owner:'PM + Designer',time:'Day 5',gate:true,what:'PM reviews both concepts before client sees anything. Designer applies feedback.',who:'PM reviews, Designer revises',deliver:'PM-approved concepts',sla:'PM review within same day',criteria:'PM approval required before client presentation'},
        {n:'07',title:'Client Presentation',owner:'PM',time:'Day 6',gate:false,what:'PM leads client presentation of both concepts. All feedback logged in Forecast.',who:'PM presents, Designer joins if needed',deliver:'Logged client feedback',sla:'Meeting within 1–2 days',criteria:'Feedback documented before meeting ends'},
        {n:'08',title:'Revisions (≤2)',owner:'Designer',time:'Day 7–9',gate:false,what:'Apply client feedback. Max 2 rounds in scope. Round 3+ = change request.',who:'Designer',deliver:'Revised Figma concepts',sla:'≤ 1 business day per round',criteria:'All feedback applied, logged in Forecast'},
        {n:'09',title:'Written Approval',owner:'PM + Client',time:'Day 9',gate:true,what:'Written client approval on chosen concept before inner pages begin.',who:'PM collects, client confirms',deliver:'Written approval (email/Forecast)',sla:'Must be received before Step 10',criteria:'Written approval — no verbal accepted'},
        {n:'10',title:'Inner Pages + Responsive',owner:'Designer',time:'Day 10–16',gate:false,what:'All inner pages at 1440/768/375px. Consistent with approved homepage.',who:'Designer',deliver:'Complete Figma — all pages, all breakpoints',sla:'≤ 4 hrs/page',criteria:'All 3 breakpoints complete per page'},
        {n:'11',title:'Handover to Dev',owner:'Designer + PM',time:'Day 16',gate:true,what:'Complete Design→Dev Handover Checklist 100%. Upload all assets to portal.',who:'Designer completes, PM signs off',deliver:'Signed handover checklist, Figma link, assets',sla:'≤ 2 hrs after approval',criteria:'100% checklist — developer confirms receipt'},
      ]},
      {id:'build',label:'BUILD',color:'#B45309',steps:[
        {n:'12',title:'Staging Setup',owner:'Developer',time:'Day 16–17',gate:false,what:'Set up HubSpot sandbox/cloned portal. Establish module structure. Git from day one.',who:'Developer',deliver:'Staging environment live',sla:'Before any build work starts',criteria:'Staging confirmed working'},
        {n:'13',title:'Homepage Build',owner:'Developer',time:'Day 17–19',gate:false,what:'Build homepage pixel-accurately at all breakpoints. Self-QA before PM submission.',who:'Developer',deliver:'Homepage on staging',sla:'≤ 10 working hours after handoff',criteria:'Matches Figma at all 3 breakpoints'},
        {n:'14',title:'PM Homepage Review',owner:'PM',time:'Day 19',gate:true,what:'PM reviews homepage against Figma. Developer addresses all feedback.',who:'PM reviews, Developer fixes',deliver:'PM-approved homepage',sla:'PM review same day',criteria:'PM sign-off before inner pages start'},
        {n:'15',title:'Inner Pages Build',owner:'Developer',time:'Day 20–26',gate:false,what:'Build all inner pages. Reuse HubSpot modules. Log time in Forecast daily.',who:'Developer',deliver:'All pages on staging',sla:'≤ 3 hrs/page (template)',criteria:'All pages match Figma'},
        {n:'16',title:'Integrations',owner:'Integration Specialist',time:'Day 22–26',gate:false,what:'HubSpot tracking, forms→CRM, GA4, GTM, Meta Pixel, workflows. End-to-end test.',who:'Integration Specialist',deliver:'All integrations tested on staging',sla:'All forms tested before QA',criteria:'Test lead arrives in CRM with correct fields'},
      ]},
      {id:'qa',label:'QA & REVIEW',color:'#4A3F8F',steps:[
        {n:'17',title:'Developer QA',owner:'Developer',time:'Day 26–27',gate:true,what:'Complete full QA checklist: responsive, cross-browser, PageSpeed, integrations, SEO basics.',who:'Developer',deliver:'100% QA checklist',sla:'All items before PM submission',criteria:'PageSpeed ≥90 desktop, ≥75 mobile'},
        {n:'18',title:'PM Full Review',owner:'PM',time:'Day 27–28',gate:true,what:'PM reviews full build against Figma and brief. All issues logged in Forecast.',who:'PM',deliver:'PM approval or punch list',sla:'PM review within 2 days',criteria:'No open issues before client review'},
        {n:'19',title:'Client Review',owner:'PM + Client',time:'Day 28–30',gate:false,what:'PM shares staging with client. Facilitates review. Up to 2 rounds in scope.',who:'PM manages, Developer fixes',deliver:'Client sign-off on staging',sla:'≤ 1 business day per revision round',criteria:'Written client approval on staging'},
      ]},
      {id:'launch',label:'GO-LIVE',color:'#1B5FA3',steps:[
        {n:'20',title:'Pre-Launch Checklist',owner:'Developer + PM',time:'Day 30',gate:true,what:'Complete full Pre-Launch Checklist 100%. Mon–Thu only. PM written sign-off.',who:'Developer completes, PM signs',deliver:'Signed pre-launch checklist',sla:'Must be 100% before go-live',criteria:'Every item checked — no exceptions'},
        {n:'21',title:'Go-Live Execution',owner:'Developer',time:'Day 30',gate:false,what:'Execute DNS/domain changes. Monitor live site for 2 hours. Report issues immediately.',who:'Developer executes, PM oversees',deliver:'Live site confirmed',sla:'Mon–Thu only',criteria:'All pages loading, forms working, tracking firing'},
        {n:'22',title:'Go-Live Confirmation',owner:'PM',time:'Day 30',gate:false,what:'PM sends go-live email to client. AM notified. Project archived in Forecast.',who:'PM sends',deliver:'Client confirmation email + CSAT form',sla:'Same day as go-live',criteria:'CSAT form sent within 24 hours'},
      ]},
      {id:'warranty',label:'WARRANTY',color:'#555',steps:[
        {n:'23',title:'1-Month Warranty',owner:'Developer',time:'30 days',gate:false,what:'Bug fixes at no charge for 1 calendar month. New features = change request.',who:'Developer on call',deliver:'Bugs fixed ≤ 1 business day',sla:'Bug fix ≤ 1 business day',criteria:'Bugs only — not new features or design changes'},
        {n:'24',title:'CSAT Review',owner:'PM',time:'Week 1 post-live',gate:false,what:'Review client CSAT score. Share with team. Flag issues to Partner.',who:'PM reviews, shares with team',deliver:'CSAT documented in team records',sla:'Review within 5 business days',criteria:'CSAT ≥ 4.5/5 target'},
      ]}
    ],
    raci:[
      {phase:'Brief Intake & Setup',pm:'R/A',client:'C',des:'-',dev:'-',int:'-'},
      {phase:'Homepage Design',pm:'A',client:'C',des:'R',dev:'I',int:'-'},
      {phase:'Client Design Presentation',pm:'R/A',client:'C',des:'C',dev:'-',int:'-'},
      {phase:'Homepage Build',pm:'A',client:'I',des:'C',dev:'R',int:'-'},
      {phase:'Integrations Setup',pm:'A',client:'I',des:'-',dev:'C',int:'R'},
      {phase:'Developer QA',pm:'A',client:'-',des:'-',dev:'R',int:'C'},
      {phase:'PM Review',pm:'R/A',client:'-',des:'C',dev:'C',int:'-'},
      {phase:'Client Review',pm:'R/A',client:'R',des:'-',dev:'C',int:'-'},
      {phase:'Go-Live',pm:'A',client:'I',des:'-',dev:'R',int:'C'},
    ]
  },
  wp:{
    title:'WordPress / React / Custom',
    color:'#1B5FA3',
    phases:[
      {id:'kickoff',label:'KICKOFF',color:'#9354FF',steps:[
        {n:'01',title:'Brief Intake',owner:'PM',time:'Day 1',gate:false,what:'Receive 11-field brief. Confirm platform (WordPress/React/custom) with PM and technical lead.',who:'PM',deliver:'Confirmed brief + platform decision',sla:'Platform confirmed before setup',criteria:'All 11 fields complete, tech stack agreed'},
        {n:'02',title:'Tech Stack Agreement',owner:'PM + Developer',time:'Day 1–2',gate:true,what:'For custom/React: agree tech stack with PM. For WordPress: confirm theme approach (custom only).',who:'PM + Senior Developer',deliver:'Tech stack decision documented',sla:'Before any setup begins',criteria:'Written agreement on stack, no off-shelf themes'},
        {n:'03',title:'Project Setup',owner:'PM',time:'Day 2',gate:false,what:'Forecast project, tasks, assignees, deadlines. Share plan within 48 hours.',who:'PM',deliver:'Forecast project',sla:'Within 48 hrs of brief',criteria:'All tasks have owner, hours, deadline'},
      ]},
      {id:'design',label:'DESIGN',color:'#1A8754',steps:[
        {n:'04',title:'Research & Concepts',owner:'Designer',time:'Day 3–6',gate:false,what:'Two full-fidelity homepage concepts. Internal PM review before client sees.',who:'Designer',deliver:'2 Figma concepts, PM-reviewed',sla:'≤ 8 hrs after brief confirmed',criteria:'Both at full fidelity, all 3 breakpoints ultimately'},
        {n:'05',title:'Client Approval',owner:'PM + Client',time:'Day 6–8',gate:true,what:'Written client approval on chosen concept. No inner pages without this.',who:'PM collects',deliver:'Written approval',sla:'Before Step 6',criteria:'Written — email or Forecast comment'},
        {n:'06',title:'Inner Pages + Handover',owner:'Designer',time:'Day 8–14',gate:true,what:'All inner pages at 3 breakpoints. Complete handover checklist. Upload assets.',who:'Designer',deliver:'Figma file, assets, signed checklist',sla:'≤ 4 hrs/page',criteria:'100% handover checklist before dev starts'},
      ]},
      {id:'build',label:'BUILD',color:'#B45309',steps:[
        {n:'07',title:'Environment Setup',owner:'Developer',time:'Day 14–15',gate:false,what:'WordPress: staging subdomain. React/Custom: local/staging server. Git from day one. CI/CD where applicable.',who:'Developer',deliver:'Staging environment + Git repo',sla:'Before any build work',criteria:'WordPress: no off-shelf themes. Custom: tech stack as agreed.'},
        {n:'08',title:'Homepage Build',owner:'Developer',time:'Day 15–17',gate:false,what:'Build homepage pixel-accurately. WordPress: ACF custom fields. React: component library. Self-QA before PM.',who:'Developer',deliver:'Homepage on staging',sla:'≤ 10 working hours after handoff',criteria:'Matches Figma at all 3 breakpoints'},
        {n:'09',title:'PM Homepage Approval',owner:'PM',time:'Day 17',gate:true,what:'PM approves homepage before inner pages begin.',who:'PM',deliver:'Written PM approval',sla:'Same day review',criteria:'PM sign-off required'},
        {n:'10',title:'Inner Pages',owner:'Developer',time:'Day 18–25',gate:false,what:'All inner pages. WordPress: ACF field structure. React: reusable components. Daily Forecast logging.',who:'Developer',deliver:'All pages on staging',sla:'≤ 5 hrs/page custom layout',criteria:'No hardcoded content in theme files'},
        {n:'11',title:'Integrations & Tracking',owner:'Integration Specialist',time:'Day 22–25',gate:false,what:'GA4, GTM, CRM connections, forms, tracking. End-to-end test. Security review for custom builds.',who:'Integration Specialist',deliver:'All integrations tested',sla:'Before QA gate',criteria:'Form submissions arrive in CRM with correct fields'},
      ]},
      {id:'qa',label:'QA & SECURITY',color:'#4A3F8F',steps:[
        {n:'12',title:'Developer QA + Security',owner:'Developer',time:'Day 25–27',gate:true,what:'Full QA checklist. WordPress: deactivate unused plugins, change admin username. Custom: auth, CORS, SSL, env vars.',who:'Developer',deliver:'100% QA checklist',sla:'Before PM review',criteria:'PageSpeed ≥90 desktop. No console errors. Security review complete.'},
        {n:'13',title:'PM Review',owner:'PM',time:'Day 27',gate:true,what:'PM reviews against Figma and brief. All issues in Forecast.',who:'PM',deliver:'PM sign-off',sla:'Within 2 days',criteria:'Zero open critical issues before client review'},
        {n:'14',title:'Client Review',owner:'PM + Client',time:'Day 28–30',gate:false,what:'PM shares staging. Up to 2 client review rounds.',who:'PM manages',deliver:'Client written approval',sla:'≤ 1 business day per round',criteria:'Written client sign-off on staging'},
      ]},
      {id:'launch',label:'GO-LIVE',color:'#1B5FA3',steps:[
        {n:'15',title:'Pre-Launch Gate',owner:'Developer + PM',time:'Day 30',gate:true,what:'Full pre-launch checklist. WordPress: version pins. Custom: CI/CD verified. Mon–Thu only.',who:'Developer + PM',deliver:'Signed pre-launch checklist',sla:'100% before go-live',criteria:'All items — no exceptions'},
        {n:'16',title:'Go-Live + Monitor',owner:'Developer',time:'Day 30',gate:false,what:'Execute go-live. Monitor 2 hours minimum. Report issues to PM immediately.',who:'Developer',deliver:'Live site confirmed',sla:'Mon–Thu only',criteria:'All pages, forms, tracking working on live'},
        {n:'17',title:'Handover + CSAT',owner:'PM',time:'Day 30–31',gate:false,what:'Client CMS credentials, analytics access, training if scoped. Send CSAT form.',who:'PM',deliver:'Client access + CSAT form',sla:'Within 24 hrs of go-live',criteria:'Client can log in and manage their site'},
      ]},
      {id:'warranty',label:'WARRANTY',color:'#555',steps:[
        {n:'18',title:'1-Month Warranty',owner:'Developer',time:'30 days',gate:false,what:'Bug fixes only. New features = change request. WordPress core/plugins pinned.',who:'Developer',deliver:'Bugs fixed ≤ 1 business day',sla:'≤ 1 business day per bug',criteria:'Only scope-agreed functionality — no new features'},
      ]}
    ],
    raci:[
      {phase:'Brief + Tech Stack Decision',pm:'R/A',client:'C',des:'-',dev:'C',int:'-'},
      {phase:'Design Concepts + Approval',pm:'A',client:'C/A',des:'R',dev:'-',int:'-'},
      {phase:'Environment + Homepage Build',pm:'A',client:'-',des:'C',dev:'R',int:'-'},
      {phase:'Inner Pages',pm:'A',client:'-',des:'C',dev:'R',int:'-'},
      {phase:'Integrations + Tracking',pm:'A',client:'-',des:'-',dev:'C',int:'R'},
      {phase:'QA + Security Review',pm:'A',client:'-',des:'-',dev:'R',int:'C'},
      {phase:'Client Review + Sign-Off',pm:'R/A',client:'R/A',des:'-',dev:'C',int:'-'},
      {phase:'Go-Live + Warranty',pm:'A',client:'I',des:'-',dev:'R',int:'C'},
    ]
  },
  lp:{
    title:'Landing Page',
    color:'#C0392B',
    phases:[
      {id:'intake',label:'INTAKE',color:'#9354FF',steps:[
        {n:'01',title:'Intake Confirmation',owner:'PM',time:'Day 1',gate:true,what:'All 8 intake items confirmed: copy, assets, form fields, CRM mapping, thank-you URL, tracking, deadline, design file/brand guidelines.',who:'PM confirms with client',deliver:'Signed intake checklist',sla:'No start date without complete intake',criteria:'ALL 8 items confirmed — hard rule'},
        {n:'02',title:'Forecast Setup',owner:'PM',time:'Day 1',gate:false,what:'Create tasks in Forecast. Assign to designer (custom) or developer (template). Set deadline.',who:'PM',deliver:'Forecast tasks',sla:'Same day as intake confirmation',criteria:'Tasks have owner, hours and deadline'},
      ]},
      {id:'design',label:'DESIGN',color:'#1A8754',steps:[
        {n:'03',title:'Custom Design',owner:'Designer',time:'Day 1–3',gate:false,what:'Custom landing pages only. Single layout — not a full website. PM review before client.',who:'Designer (custom only)',deliver:'Approved Figma layout',sla:'≤ 5 working hours',criteria:'Client written approval before build starts'},
        {n:'04',title:'Template Selection',owner:'Developer',time:'Day 1',gate:false,what:'Template landing pages. Select from NEXA library. Confirm with PM.',who:'Developer (template only)',deliver:'Template confirmed',sla:'Same day',criteria:'Template matches brief requirements'},
      ]},
      {id:'build',label:'BUILD',color:'#B45309',steps:[
        {n:'05',title:'Page Build',owner:'Developer',time:'Day 2–4',gate:false,what:'Build from approved design or template. All copy, images, CTAs from confirmed brief. No placeholder text.',who:'Developer',deliver:'Page on staging',sla:'Template: 4 working days. Custom: 7 working days.',criteria:'No placeholder content anywhere on staging'},
        {n:'06',title:'Form + CRM Setup',owner:'Integration Specialist',time:'Day 2–4',gate:true,what:'Form fields, CRM property mapping, list enrolment, notification emails. End-to-end test — lead must arrive in CRM.',who:'Integration Specialist',deliver:'Tested form + CRM connection',sla:'≤ 4 hours for standard setup',criteria:'Test submission arrives in CRM with all correct fields'},
        {n:'07',title:'Tracking Setup',owner:'Integration Specialist',time:'Day 3–4',gate:true,what:'GA4, GTM, HubSpot tracking, Meta Pixel, LinkedIn Insight Tag as scoped. GTM Preview + GA4 DebugView verified.',who:'Integration Specialist',deliver:'All tracking verified',sla:'Before staging shared with client',criteria:'All events firing in GTM Preview + DebugView'},
      ]},
      {id:'qa',label:'QA',color:'#4A3F8F',steps:[
        {n:'08',title:'QA Checklist',owner:'Developer',time:'Day 4',gate:true,what:'Responsive (desktop/tablet/mobile), cross-browser, PageSpeed ≥90 desktop, form test, tracking verified.',who:'Developer',deliver:'QA checklist complete',sla:'Before PM review',criteria:'PageSpeed ≥90. Form tested. Tracking verified.'},
        {n:'09',title:'PM Review',owner:'PM',time:'Day 4',gate:true,what:'PM reviews against brief and design. All issues fixed before client sees.',who:'PM',deliver:'PM sign-off',sla:'Same day',criteria:'No open issues before client review'},
        {n:'10',title:'Client Review',owner:'PM + Client',time:'Day 5',gate:false,what:'Client reviews on staging. Up to 2 revision rounds. Developer addresses feedback.',who:'PM manages',deliver:'Client written approval',sla:'2 business days client review period. ≤ 1 day revisions.',criteria:'Written client approval on staging'},
      ]},
      {id:'launch',label:'GO-LIVE',color:'#1B5FA3',steps:[
        {n:'11',title:'Go-Live',owner:'Developer + PM',time:'Day 5–7',gate:true,what:'Pre-launch checklist. Mon–Thu only. PM written approval. DNS changes communicated.',who:'Developer executes, PM approves',deliver:'Live page confirmed',sla:'Mon–Thu only',criteria:'Form live, tracking live, page loads in ≤3s'},
      ]}
    ],
    raci:[
      {phase:'Intake Confirmation',pm:'R/A',client:'R',des:'-',dev:'-',int:'-'},
      {phase:'Design / Template Selection',pm:'A',client:'C',des:'R',dev:'C',int:'-'},
      {phase:'Page Build',pm:'A',client:'-',des:'C',dev:'R',int:'-'},
      {phase:'Form + CRM + Tracking',pm:'A',client:'I',des:'-',dev:'C',int:'R'},
      {phase:'QA + PM Review',pm:'R/A',client:'-',des:'-',dev:'R',int:'C'},
      {phase:'Client Review + Go-Live',pm:'R/A',client:'R/A',des:'-',dev:'R',int:'C'},
    ]
  },
  maint:{
    title:'Website Maintenance',
    color:'#555',
    phases:[
      {id:'request',label:'REQUEST',color:'#9354FF',steps:[
        {n:'01',title:'Client Submits Request',owner:'Client → PM',time:'Day 0',gate:false,what:'Client emails maintenance inbox or submits via portal. PM logs within 2 hours.',who:'Client submits, PM logs',deliver:'Logged request in Forecast',sla:'PM acknowledges within 2 hours',criteria:'No request goes unacknowledged'},
        {n:'02',title:'PM Triage',owner:'PM',time:'Day 0',gate:true,what:'PM reviews request against maintenance scope. In-scope: assign with priority. Out-of-scope: send scoping estimate.',who:'PM',deliver:'Task in Forecast with priority label',sla:'Triage within 2 hours',criteria:'In-scope or out-of-scope decision documented'},
      ]},
      {id:'execute',label:'EXECUTE',color:'#B45309',steps:[
        {n:'03',title:'Critical Fix (Site Down)',owner:'Developer',time:'0–2 hrs',gate:false,what:'Site down or broken functionality. PM + Partner notified simultaneously. Fix immediately.',who:'Developer (priority 1)',deliver:'Site restored',sla:'≤ 30 min response. ≤ 2 hrs resolution.',criteria:'Site fully operational'},
        {n:'04',title:'High Fix (Key page broken)',owner:'Developer',time:'0–4 hrs',gate:false,what:'Key page or form broken. PM notified within 1 hour.',who:'Developer',deliver:'Issue resolved',sla:'≤ 1 hr response. ≤ 4 hrs resolution.',criteria:'Page/form working correctly'},
        {n:'05',title:'Standard Task',owner:'Developer',time:'Same day',gate:false,what:'Content update, minor fix. Test on staging if affects functionality. Check live immediately after.',who:'Developer',deliver:'Task complete',sla:'≤ 4 hrs response. ≤ 1 business day.',criteria:'Change correct, surrounding elements unaffected'},
        {n:'06',title:'Low Priority Task',owner:'Developer',time:'1–3 days',gate:false,what:'Cosmetic or non-urgent. Batched with other low-priority tasks.',who:'Developer',deliver:'Task complete',sla:'≤ 4 hrs response. ≤ 3 business days.',criteria:'Change correct'},
      ]},
      {id:'review',label:'REVIEW',color:'#4A3F8F',steps:[
        {n:'07',title:'PM Review (High/Critical)',owner:'PM',time:'After fix',gate:true,what:'PM reviews all Critical and High completions before client is notified.',who:'PM',deliver:'PM sign-off',sla:'Before client notification',criteria:'Fix verified by PM'},
        {n:'08',title:'Client Notification',owner:'PM',time:'After review',gate:false,what:'PM confirms completion with brief description of what was done and when.',who:'PM',deliver:'Client confirmation',sla:'Same day as fix completion',criteria:'Client informed of what was done'},
      ]},
      {id:'report',label:'REPORTING',color:'#1B5FA3',steps:[
        {n:'09',title:'Monthly Report',owner:'PM',time:'5th of month',gate:false,what:'Uptime %, all tasks completed, security updates, plugin updates, PageSpeed scores, recommendations.',who:'PM compiles, Developer provides data',deliver:'Monthly report to client',sla:'By 5th of following month',criteria:'Report covers all items listed in SLA'},
        {n:'10',title:'Renewal Notice',owner:'PM',time:'30 days before',gate:false,what:'AM sends renewal notice 30 days before agreement expiry.',who:'AM / PM',deliver:'Renewal notice',sla:'30 days before expiry',criteria:'Client confirms renewal or end of agreement in writing'},
      ]}
    ],
    raci:[
      {phase:'Request Logging + Triage',pm:'R/A',client:'R',des:'-',dev:'-',int:'-'},
      {phase:'Critical / High Fix',pm:'A',client:'I',des:'-',dev:'R',int:'C'},
      {phase:'Standard / Low Task',pm:'A',client:'-',des:'-',dev:'R',int:'-'},
      {phase:'PM Review (High+)',pm:'R/A',client:'-',des:'-',dev:'C',int:'-'},
      {phase:'Client Notification',pm:'R/A',client:'I',des:'-',dev:'-',int:'-'},
      {phase:'Monthly Report',pm:'R/A',client:'I',des:'-',dev:'C',int:'-'},
    ]
  },
  design:{
    title:'Design Only Project',
    color:'#1A8754',
    phases:[
      {id:'kickoff',label:'KICKOFF',color:'#9354FF',steps:[
        {n:'01',title:'Brief Intake',owner:'PM',time:'Day 1',gate:false,what:'Receive design brief. Confirm scope: is this homepage only, full website design, UI/UX audit, landing page design, or brand refresh?',who:'PM',deliver:'Confirmed scope + Forecast setup',sla:'Brief reviewed within 24 hrs',criteria:'Scope defined, no ambiguity on deliverables'},
        {n:'02',title:'Asset Check',owner:'Designer',time:'Day 1',gate:true,what:'Designer confirms all brand assets available: logo, fonts, colour palette, competitor references, inspiration links.',who:'Designer flags, PM resolves',deliver:'Confirmed asset list',sla:'Flag gaps within 4 hrs of brief receipt',criteria:'No missing assets before design starts'},
      ]},
      {id:'research',label:'RESEARCH',color:'#1A8754',steps:[
        {n:'03',title:'Research & Direction',owner:'Designer',time:'Day 1–2',gate:false,what:'Review client brand, competitors, inspiration. Write 2–3 sentence design direction note shared with PM.',who:'Designer',deliver:'Design direction note to PM',sla:'Before any design work starts',criteria:'PM acknowledges direction before designer proceeds'},
      ]},
      {id:'design',label:'DESIGN',color:'#1A8754',steps:[
        {n:'04',title:'Homepage Concepts (x2)',owner:'Designer',time:'Day 2–4',gate:false,what:'Two distinct full-fidelity homepage concepts. No wireframes. Both at full desktop fidelity.',who:'Designer',deliver:'2 Figma concepts',sla:'≤ 8 hrs after brief confirmed',criteria:'Both at full fidelity — single-concept not permitted'},
        {n:'05',title:'Internal PM Review',owner:'PM + Designer',time:'Day 4',gate:true,what:'PM reviews both concepts. Designer applies all feedback. Never goes to client first.',who:'PM reviews, Designer revises',deliver:'PM-approved concepts',sla:'Same day review',criteria:'PM approval before client sees anything'},
        {n:'06',title:'Client Presentation',owner:'PM',time:'Day 5',gate:false,what:'PM presents both concepts. All client feedback logged in Forecast by PM.',who:'PM leads, Designer joins if needed',deliver:'Logged client feedback',sla:'Meeting within 1–2 days',criteria:'Feedback documented in Forecast before end of meeting'},
        {n:'07',title:'Revisions (≤2 rounds)',owner:'Designer',time:'Day 6–8',gate:false,what:'Apply client feedback. Max 2 rounds in scope. Round 3 = change request.',who:'Designer',deliver:'Revised Figma concepts',sla:'≤ 1 business day per round',criteria:'All feedback applied and documented'},
        {n:'08',title:'Written Approval',owner:'PM + Client',time:'Day 8',gate:true,what:'Written client approval on chosen concept direction.',who:'PM collects',deliver:'Written approval',sla:'Required before inner pages or handover',criteria:'Written — email or Forecast comment. No verbal.'},
        {n:'09',title:'Inner Pages (if scoped)',owner:'Designer',time:'Day 9–14',gate:false,what:'Design all inner pages at 1440/768/375px. Consistent with approved homepage.',who:'Designer',deliver:'All pages in Figma at 3 breakpoints',sla:'≤ 4 hrs/page',criteria:'All 3 breakpoints complete per page'},
        {n:'10',title:'WCAG AA Check',owner:'Designer',time:'Day 14',gate:false,what:'Run colour contrast check on all body text and CTAs. Flag any issues to PM.',who:'Designer',deliver:'Contrast check documented',sla:'Before handover',criteria:'All body text passes WCAG AA contrast ratio'},
      ]},
      {id:'deliver',label:'DELIVER',color:'#1B5FA3',steps:[
        {n:'11',title:'Figma File Organisation',owner:'Designer',time:'Day 14–15',gate:false,what:'Organise Figma: pages for Homepage/Inner/Components/Assets. All layers named. Export all assets.',who:'Designer',deliver:'Organised Figma file',sla:'≤ 2 hrs after final approval',criteria:'No unnamed layers, all components labelled'},
        {n:'12',title:'Handover Package',owner:'Designer + PM',time:'Day 15',gate:true,what:'Complete Design→Dev Handover Checklist if developer involved. Upload all assets to portal. Notify PM.',who:'Designer completes, PM signs',deliver:'Handover checklist + assets in portal',sla:'≤ 2 hrs after Figma organised',criteria:'100% checklist. All assets uploaded.'},
        {n:'13',title:'Client Delivery',owner:'PM',time:'Day 15',gate:false,what:'Share final Figma link with client if design-only (no development). Send CSAT form.',who:'PM',deliver:'Final Figma shared + CSAT form',sla:'Same day as handover complete',criteria:'Client has view access and can see all files'},
      ]}
    ],
    raci:[
      {phase:'Brief + Asset Check',pm:'R/A',client:'C',des:'C',dev:'-',int:'-'},
      {phase:'Research + Design Direction',pm:'C',client:'-',des:'R/A',dev:'-',int:'-'},
      {phase:'Concepts + Internal Review',pm:'A',client:'-',des:'R',dev:'-',int:'-'},
      {phase:'Client Presentation',pm:'R/A',client:'C',des:'C',dev:'-',int:'-'},
      {phase:'Revisions + Approval',pm:'A',client:'A',des:'R',dev:'-',int:'-'},
      {phase:'Inner Pages + QA',pm:'A',client:'-',des:'R',dev:'-',int:'-'},
      {phase:'Handover Package',pm:'A',client:'I',des:'R',dev:'I',int:'-'},
    ]
  }
};
const OB_DEFAULTS = {
  pm: {
    phases:['Day 1 — Orientation','Week 1 — Immersion','Month 1 — Full Ownership'],
    items:[
      ['Welcome & introductions — meet the full team and understand NEXA services',
       'Read through the Operations Hub playbook in full',
       'Active project handover — review all projects in Forecast',
       'Tool access setup — Forecast, Slack, HubSpot, Google Workspace'],
      ['Shadow all active project calls and meetings as observer',
       '1-on-1 meetings with all direct reports',
       'Audit Forecast for all active projects — flag at-risk to Partner by end of Week 1',
       'Read and understand all SOPs, handover checklists, SLAs and go-live rules'],
      ['Take full ownership of all project delivery and client communication',
       'Establish weekly team rituals — Monday standup, Monday 10am client updates',
       'Run first monthly KPI review with each team member',
       'Month 1 debrief with Partner — present project status, team capacity and risks']
    ]
  },
  des:{
    phases:['Day 1 — Setup','Week 1 — Shadowing','Month 1 — Independent Delivery'],
    items:[
      ['Team introductions and NEXA service overview',
       'Figma workspace and design system walkthrough with senior designer',
       'Read the Designer SOP and SLA from the Operations Hub',
       'All tools access confirmed — Figma, Forecast, Slack, Google Drive'],
      ['Review 3 completed NEXA projects in Figma — understand the quality standard',
       'Receive and complete first brief under supervision — focus on process not speed',
       'Practice completing the Design → Developer Handover Checklist on a past project'],
      ['Deliver first independent project from brief to handoff',
       'First monthly KPI review with PM — scores shared and goals set']
    ]
  },
  dev:{
    phases:['Day 1 — Setup','Week 1 — Immersion','Month 1 — Independent Delivery'],
    items:[
      ['Team introductions and codebase overview with senior developer',
       'Local environment and all tools setup — HubSpot sandbox, Git, VS Code',
       'Read the Developer SOP, SLA and both handover checklists from the Operations Hub'],
      ['Review 2 recently launched NEXA projects — code structure and PageSpeed scores',
       'First homepage build from an approved handoff — reviewed by senior developer',
       'Run PageSpeed on all assigned builds and understand how to hit ≥90 desktop'],
      ['Own a full project build end-to-end from handoff to go-live',
       'First monthly KPI review with PM — scores shared and goals set']
    ]
  },
  int:{
    phases:['Day 1 — Setup','Week 1 — Platform Audit','Month 1 — Independent Ownership'],
    items:[
      ['Team introductions and NEXA tech stack overview',
       'All platform access confirmed — HubSpot, Zapier/n8n, GTM, GA4, Forecast',
       'Read the Integration Specialist SOP from the Operations Hub'],
      ['Audit 3 live client HubSpot portals — document what exists and flag issues',
       'First integration task under supervision — all flows tested end-to-end',
       'Practice integration documentation standard on first task'],
      ['Own integrations on 2–3 active projects — all tested and PM-approved',
       'Complete one HubSpot certification if not already held (target: within 30 days)',
       'First monthly KPI review with PM — scores shared and goals set']
    ]
  }
};

// ── TITLE / BADGE ADDITIONS ──
TITLES['monthly']='Monthly Reviews';
TITLES['sla']='SLA Playbooks';
TITLES['annual']='Annual Reviews';
BADGES['monthly']='Monthly Check-In';
BADGES['sla']='Designer · Developer · Integration Specialist';
BADGES['annual']='Year-End Appraisal';
TITLES['process']='Website Process';
TITLES['admin']='Admin Panel';
BADGES['process']='Kickoff to Post-Live · 5 Project Types';
BADGES['admin']='Edit Team · KPIs · Onboarding';

// ── FUNCTIONS ──
function sv(id,btn){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.querySelectorAll('.nb').forEach(n=>n.classList.remove('active'));
  const v=document.getElementById('view-'+id);
  if(v)v.classList.add('active');
  if(btn)btn.classList.add('active');
  document.getElementById('ttl').textContent=TITLES[id]||id;
  document.getElementById('tbadge').textContent=BADGES[id]||'';
  window.scrollTo({top:0,behavior:'smooth'});
}

function tc(c){c.classList.toggle('open')}

function st(p,id,btn){
  btn.closest('.rtabs').querySelectorAll('.rtab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  let el=btn.closest('.rtabs').nextElementSibling;
  while(el&&el.classList.contains('rp')){el.classList.remove('active');el=el.nextElementSibling;}
  const panel=document.getElementById(p+'-'+id);
  if(panel)panel.classList.add('active');
}

function openProfile(idx){
  const p=TEAM[idx];
  const skillsHTML=p.skills.map(s=>`<div class="skill-item"><div class="skill-name">${s.n}</div><div class="skill-bar-bg"><div class="skill-bar" style="width:${s.l}%"></div></div></div>`).join('');
  const cvHTML=p.cv.map(e=>`<div class="exp-item"><div class="exp-title">${e.t}</div><div class="exp-co">${e.c}</div><div class="exp-dates">${e.d}</div><div class="exp-desc">${e.desc}</div></div>`).join('');
  const toolsHTML=p.tools.map(t=>`<span class="tag tag-b">${t}</span>`).join('');
  document.getElementById('modal-content').innerHTML=`
    <div class="modal-top">
      <div class="modal-av">${p.initials}</div>
      <div class="modal-info"><div class="modal-name">${p.name}</div><div class="modal-role">${p.role}</div><div class="modal-since">Joined: ${p.since} · ${p.exp} experience · ${p.level}</div></div>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <div class="modal-body">
      <div class="modal-section"><div class="modal-section-title">About</div><div style="font-size:13px;color:var(--g2);line-height:1.6">${p.bio}</div></div>
      <div class="modal-section"><div class="modal-section-title">Specialisation</div><div style="font-size:13px;color:var(--p);font-weight:600">${p.specialisation}</div></div>
      <div class="modal-section"><div class="modal-section-title">Skills & Proficiency</div><div class="skill-grid">${skillsHTML}</div></div>
      <div class="modal-section"><div class="modal-section-title">Tools & Platforms</div><div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:4px">${toolsHTML}</div></div>
      <div class="modal-section"><div class="modal-section-title">Experience</div><div class="exp-timeline">${cvHTML}</div></div>
    </div>`;
  document.getElementById('modal-overlay').classList.add('open');
}

function closeModal(e){if(!e||e.target.id==='modal-overlay')document.getElementById('modal-overlay').classList.remove('open');}

function renderProfiles(){
  const grid=document.getElementById('profile-grid');
  grid.innerHTML=TEAM.map((p,i)=>`
    <div class="profile-card" onclick="openProfile(${i})">
      <div class="pc-top"><div class="pc-av">${p.initials}</div><div><div class="pc-name">${p.name}</div><div class="pc-role">${p.role}</div></div></div>
      <div class="pc-body">
        <div class="pc-bio">${p.bio.substring(0,100)}...</div>
        <div class="pc-tags">${p.skills.slice(0,3).map(s=>`<span class="tag">${s.n}</span>`).join('')}</div>
        <div class="pc-meta">
          <div class="pc-mi"><div class="pc-mi-l">Joined</div><div class="pc-mi-v">${p.since}</div></div>
          <div class="pc-mi"><div class="pc-mi-l">Level</div><div class="pc-mi-v">${p.level}</div></div>
          <div class="pc-mi"><div class="pc-mi-l">Experience</div><div class="pc-mi-v">${p.exp}</div></div>
          <div class="pc-mi"><div class="pc-mi-l">Specialisation</div><div class="pc-mi-v" style="font-size:10.5px">${p.specialisation.split('·')[0]}</div></div>
        </div>
      </div>
    </div>`).join('');
}

function renderProjects(data){
  const tbody=document.getElementById('proj-tbody');
  tbody.innerHTML=data.map(p=>`
    <tr>
      <td class="km">${p.client}</td>
      <td><span style="font-size:11px;color:var(--g3);font-weight:500">${p.type}</span></td>
      <td><span class="st ${statusClass[p.status]||'st-ns'}">${p.status}</span></td>
      <td><div class="team-chips">${p.team.map(t=>`<span class="chip">${t}</span>`).join('')}</div></td>
      <td style="font-size:11.5px;color:var(--g3)">${p.start}</td>
      <td style="font-size:11.5px;color:var(--g3)">${p.end}</td>
      <td style="font-size:11.5px;color:var(--g3);max-width:220px">${p.notes}</td>
    </tr>`).join('');
}

function filterProjects(status,btn){
  document.querySelectorAll('.filt-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('proj-search').value='';
  renderProjects(status==='all'?PROJECTS:PROJECTS.filter(p=>p.status===status));
}

function searchProjects(q){
  const ql=q.toLowerCase();
  document.querySelectorAll('.filt-btn').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.filt-btn')[0].classList.add('active');
  renderProjects(PROJECTS.filter(p=>p.client.toLowerCase().includes(ql)||p.team.join(' ').toLowerCase().includes(ql)||p.type.toLowerCase().includes(ql)||p.status.toLowerCase().includes(ql)));
}

function renderKPI(role){
  const d=KPI_DATA[role];
  const container=document.getElementById('kpi-'+role+'-content');
  let html=`<div class="kpi-header">
    <div class="kpi-hinfo"><div class="kpi-htitle">${d.name} — KPI Scorecard</div><div class="kpi-hsub">Fill in scores 1–5 per metric. Weighted total calculates automatically.</div></div>
    <div class="kpi-htotal"><div class="kpi-score-display" id="kpi-total-${role}">0</div><div class="kpi-score-label">/ 100 points</div><div class="kpi-band" id="kpi-band-${role}">Not scored yet</div></div>
  </div>`;

  d.sections.forEach((sec,si)=>{
    html+=`<div class="kpi-section-header"><div class="kpi-sh-title">${sec.title}</div><div style="display:flex;gap:12px;align-items:center"><div class="kpi-sh-pts">Max: ${sec.max} pts</div><div class="kpi-sh-score" id="sec-${role}-${si}">0 pts</div></div></div>`;
    html+=`<div style="padding:0 4px;margin-bottom:14px">`;
    sec.kpis.forEach((k,ki)=>{
      const key=`${si}-${ki}`;
      html+=`<div class="kpi-row">
        <div><div class="kpi-metric">${k.m}</div><div class="kpi-target">${k.t}</div></div>
        <div class="kpi-wt">${k.w}%</div>
        <select class="kpi-sel" onchange="updateKPI('${role}',${si},${ki},${k.w},this.value)">
          <option value="0">—</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>
        </select>
      </div>`;
    });
    html+=`</div>`;
  });

  html+=`<div class="overall-bands"><div style="font-size:12px;font-weight:600;color:var(--g2);margin-bottom:8px">Overall Rating Guide</div>
    <div class="band-row b-exc"><div class="band-score">90–100</div><div class="band-label">Exceptional</div><div class="band-desc">Exceeds all targets. Eligible for recognition and additional responsibility.</div></div>
    <div class="band-row b-str"><div class="band-score">75–89</div><div class="band-label">Strong Performance</div><div class="band-desc">Meets most targets with some areas of excellence.</div></div>
    <div class="band-row b-sat"><div class="band-score">60–74</div><div class="band-label">Satisfactory</div><div class="band-desc">Meets basic targets. Development plan required.</div></div>
    <div class="band-row b-bel"><div class="band-score">Below 60</div><div class="band-label">Below Expectations</div><div class="band-desc">Performance Improvement Plan (PIP) to be initiated.</div></div>
  </div>`;

  html+=`<div class="kpi-actions"><button class="btn btn-p" onclick="printKPI('${role}')">🖨️ Print Scorecard</button><button class="btn btn-o" onclick="resetKPI('${role}')">↺ Reset Scores</button></div>`;
  container.innerHTML=html;
}

function updateKPI(role,si,ki,weight,val){
  const key=`${si}-${ki}`;
  kpiScores[role][key]={w:weight,v:parseFloat(val)};
  recalcKPI(role);
}

function recalcKPI(role){
  const d=KPI_DATA[role];
  let total=0;
  d.sections.forEach((sec,si)=>{
    let secScore=0;
    sec.kpis.forEach((k,ki)=>{
      const key=`${si}-${ki}`;
      const entry=kpiScores[role][key];
      if(entry&&entry.v>0){secScore+=(entry.v/5)*entry.w;}
    });
    total+=secScore;
    const el=document.getElementById(`sec-${role}-${si}`);
    if(el)el.textContent=Math.round(secScore*10)/10+' pts';
  });
  const t=Math.round(total*10)/10;
  const te=document.getElementById('kpi-total-'+role);
  if(te)te.textContent=t;
  const band=t>=90?'Exceptional':t>=75?'Strong Performance':t>=60?'Satisfactory':t>0?'Below Expectations':'Not scored yet';
  const be=document.getElementById('kpi-band-'+role);
  if(be)be.textContent=band;
}

function resetKPI(role){
  kpiScores[role]={};
  renderKPI(role);
}

function printKPI(role){window.print();}

function setMetricStatus(sel){
  const v = sel.value;
  const col = v==='met'?'var(--grn)':v==='missed'?'var(--red)':'var(--g3)';
  const bg  = v==='met'?'var(--gnb)':v==='missed'?'var(--rdb)':'var(--px)';
  sel.style.color = col;
  sel.style.background = bg;
  sel.style.borderColor = v===''?'var(--pl)':col;
}

function updateMrConduct(role, si, ii, val){
  if(!monthlyScores[role]) monthlyScores[role] = {};
  if(!monthlyScores[role][si]) monthlyScores[role][si] = {};
  monthlyScores[role][si][ii] = parseInt(val)||0;
  recalcMonthly(role);
}

function recalcMonthly(role){
  const scores = monthlyScores[role]||{};
  let all = [];
  Object.values(scores).forEach(sec => Object.values(sec).forEach(v=>{ if(v>0) all.push(v); }));
  const avg = all.length ? all.reduce((a,b)=>a+b,0)/all.length : 0;
  const el = document.getElementById('mr-total-'+role);
  const band = document.getElementById('mr-band-'+role);
  if(el) el.textContent = avg>0 ? avg.toFixed(1) : '—';
  if(band){
    const b = avg>=4.5?'Exemplary':avg>=4?'Consistently Good':avg>=3?'Meets Standard':avg>=2?'Needs Improvement':avg>0?'Action Required':'Not scored';
    band.textContent = b;
    band.style.background = avg>=4?'var(--gnb)':avg>=3?'var(--pl)':avg>0?'var(--rdb)':'var(--brd2)';
    band.style.color = avg>=4?'var(--grn)':avg>=3?'var(--p)':avg>0?'var(--red)':'var(--g3)';
  }
  // Section averages
  const d = MONTHLY_METRICS[role];
  if(d) d.conductSections.forEach((sec,si)=>{
    const secEl = document.getElementById('mrsec-'+role+'-'+si);
    if(!secEl) return;
    const vals = scores[si] ? Object.values(scores[si]).filter(v=>v>0) : [];
    secEl.textContent = vals.length ? (vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(1)+' / 5' : '—';
  });
}

function updateAnnual(role, si, ki, weight, val){
  if(!annualScores[role]) annualScores[role] = {};
  annualScores[role][si+'-'+ki] = {w:parseInt(weight)||0, v:parseInt(val)||0};
  recalcAnnual(role);
}

function recalcAnnual(role){
  const scores = annualScores[role]||{};
  const kd = KPI_DATA[role];
  if(!kd) return;
  let total = 0;
  kd.sections.forEach((sec,si)=>{
    let secPts = 0;
    sec.kpis.forEach((k,ki)=>{
      const e = scores[si+'-'+ki];
      if(e && e.v>0) secPts += (e.v/5)*e.w;
    });
    total += secPts;
    const secEl = document.getElementById('arsec-'+role+'-'+si);
    if(secEl) secEl.textContent = secPts.toFixed(1)+' pts';
  });
  const el = document.getElementById('ar-total-'+role);
  const band = document.getElementById('ar-band-'+role);
  if(el) el.textContent = Math.round(total*10)/10;
  if(band){
    const b = total>=90?'Exceptional':total>=75?'Strong Performance':total>=60?'Satisfactory':total>0?'Below Expectations':'Not scored';
    band.textContent = b;
    band.style.background = total>=90?'var(--pl)':total>=75?'var(--gnb)':total>=60?'var(--blb)':total>0?'var(--rdb)':'var(--brd2)';
    band.style.color = total>=90?'var(--p)':total>=75?'var(--grn)':total>=60?'var(--blu)':total>0?'var(--red)':'var(--g3)';
  }
}

function saveReview(type, member, period, data){
  const key = `nexa_${type}_${member}_${period}`;
  localStorage.setItem(key, JSON.stringify({...data, member, period, savedAt: new Date().toISOString()}));
}

function loadReview(type, member, period){
  const key = `nexa_${type}_${member}_${period}`;
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : null;
}

function deleteReview(type, member, period){
  localStorage.removeItem(`nexa_${type}_${member}_${period}`);
}

function getAllReviews(type, member){
  const results = [];
  for(let i=0; i<localStorage.length; i++){
    const k = localStorage.key(i);
    if(k && k.startsWith(`nexa_${type}_${member}_`)){
      try{ results.push(JSON.parse(localStorage.getItem(k))); }catch(e){}
    }
  }
  return results.sort((a,b) => (b.period > a.period ? 1 : -1));
}

function mrMemberChange(){
  const m = document.getElementById('mr-member').value;
  document.getElementById('mr-load-btn').disabled = !m;
  if(m) renderMrHistory(m);
  else {
    document.getElementById('mr-history-panel').style.display='none';
    document.getElementById('mr-scorecard').style.display='none';
    document.getElementById('mr-empty').style.display='block';
    document.getElementById('mr-compare-panel').style.display='none';
  }
}

function renderMrHistory(member){
  const reviews = getAllReviews('monthly', member);
  const panel = document.getElementById('mr-history-panel');
  const list = document.getElementById('mr-history-list');
  document.getElementById('mr-history-title').textContent = member + ' — Review History';
  panel.style.display = 'block';
  document.getElementById('mr-empty').style.display = reviews.length ? 'none' : 'block';

  if(!reviews.length){
    list.innerHTML = '<div class="rev-history-empty">No saved reviews yet for ' + member + '. Complete a review below and save it to build their history.</div>';
    document.getElementById('mr-compare-btn').style.display = 'none';
    return;
  }
  document.getElementById('mr-compare-btn').style.display = reviews.length >= 2 ? 'block' : 'none';

  // Trend chart
  const trendItems = [...reviews].reverse().slice(-12);
  const maxScore = 5;
  let trendHTML = '<div class="trend-wrap"><div class="trend-title">Conduct Score Trend</div><div class="trend-chart">';
  trendItems.forEach(r => {
    const s = r.conductScore || 0;
    const pct = (s / maxScore) * 100;
    const col = s >= 4 ? 'var(--grn)' : s >= 3 ? 'var(--p)' : 'var(--red)';
    trendHTML += `<div class="trend-bar-wrap"><div class="trend-bar" style="height:${Math.max(pct,4)}%;background:${col}" data-score="${s.toFixed(1)}/5"></div><div class="trend-period">${r.period}</div></div>`;
  });
  trendHTML += '</div></div>';

  let listHTML = trendHTML;
  reviews.forEach(r => {
    const band = CONDUCT_BAND(r.conductScore || 0);
    const score = r.conductScore ? r.conductScore.toFixed(1) : '—';
    const kpiScore = r.kpiScore ? r.kpiScore.toFixed(1) : '—';
    listHTML += `<div class="rev-history-item">
      <div class="rhi-period">${r.period}</div>
      <div class="rhi-score-wrap">
        <span class="rhi-score-badge ${r.conductScore >= 4 ? 'score-str' : r.conductScore >= 3 ? 'score-exc' : 'score-bel'}">
          ${score} / 5
        </span>
        <span class="rhi-band" style="color:${r.conductScore>=4?'var(--grn)':r.conductScore>=3?'var(--p)':'var(--red)'}">${band}</span>
        ${r.wins ? '<span class="rhi-conduct">Wins logged</span>' : ''}
      </div>
      <div class="rhi-actions">
        <button class="rhi-btn" onclick="viewSavedMR('${member}','${r.period}')">View</button>
        <button class="rhi-btn rhi-btn-del" onclick="deleteMR('${member}','${r.period}')">Delete</button>
      </div>
    </div>`;
  });
  list.innerHTML = listHTML;
}

function loadMonthlyReview(){
  const member = document.getElementById('mr-member').value;
  const month = document.getElementById('mr-month').value;
  const year = document.getElementById('mr-year').value;
  if(!member) return;
  const period = MONTHS[parseInt(month)] + ' ' + year;
  const role = MEMBER_ROLES[member] || 'des';
  const existing = loadReview('monthly', member, period);
  renderMrScorecard(member, role, period, existing);
}

function viewSavedMR(member, period){
  const role = MEMBER_ROLES[member] || 'des';
  const data = loadReview('monthly', member, period);
  renderMrScorecard(member, role, period, data);
  document.getElementById('mr-scorecard').scrollIntoView({behavior:'smooth'});
}

function deleteMR(member, period){
  if(!confirm('Delete review for ' + member + ' — ' + period + '? This cannot be undone.')) return;
  deleteReview('monthly', member, period);
  renderMrHistory(member);
}

function renderMrScorecard(member, role, period, existing){
  const d = MONTHLY_METRICS[role];
  document.getElementById('mr-empty').style.display = 'none';
  document.getElementById('mr-scorecard').style.display = 'block';

  // Active header
  document.getElementById('mr-active-header').innerHTML = `
    <div>
      <div class="rev-active-title">Monthly Review — ${member}</div>
      <div class="rev-active-period">${period} · ${d.name}</div>
    </div>
    <div class="rev-active-actions">
      <button class="btn-save" id="mr-save-btn" onclick="saveMrReview('${member}','${period}')">💾 Save Review</button>
      <button class="btn-save" onclick="document.getElementById('mr-scorecard').style.display='none';document.getElementById('mr-empty').style.display='block'">✕ Close</button>
    </div>`;

  // Delivery metrics table
  let html = `<div class="card open" style="margin-bottom:13px">
    <div class="ch" onclick="tc(this.parentElement)"><div class="chl"><div><div class="ct">📊 Delivery Metrics</div><div class="cs">Enter actuals from Forecast, QA records and CSAT forms</div></div></div><div class="chv">▲</div></div>
    <div class="cb"><table class="tbl"><thead><tr><th>Metric</th><th>Target</th><th>Actual (enter value)</th><th>Status</th></tr></thead><tbody>`;

  d.deliveryMetrics.forEach((m,i) => {
    const saved = existing && existing.metrics ? existing.metrics[i] : null;
    const val = saved ? saved.val : '';
    const st = saved ? saved.status : '';
    const stColor = st==='met'?'var(--grn)':st==='missed'?'var(--red)':'var(--g3)';
    const stBg = st==='met'?'var(--gnb)':st==='missed'?'var(--rdb)':'var(--px)';
    html += `<tr>
      <td class="km">${m.metric}</td>
      <td><span class="tb">${m.target}</span></td>
      <td><input type="text" id="mrv-${i}" value="${val}" placeholder="e.g. 94%" style="border:1.5px solid var(--pl);border-radius:6px;padding:4px 8px;font-size:12px;font-family:'Poppins',system-ui,-apple-system,sans-serif;background:var(--px);color:var(--blk);width:120px"></td>
      <td><select id="mrs-${i}" onchange="setMetricStatus(this)" style="border:1.5px solid var(--pl);border-radius:6px;padding:4px 8px;font-size:12px;font-family:'Poppins',system-ui,-apple-system,sans-serif;background:${stBg};color:${stColor};border-color:${stColor==='var(--g3)'?'var(--pl)':stColor}">
        <option value="">— Select —</option>
        <option value="met" ${st==='met'?'selected':''}>✓ Met</option>
        <option value="missed" ${st==='missed'?'selected':''}>✗ Missed</option>
        <option value="na" ${st==='na'?'selected':''}>N/A this month</option>
      </select></td>
    </tr>`;
  });
  html += `</tbody></table></div></div>`;

  // Conduct sections
  html += `<div class="kpi-header"><div class="kpi-hinfo"><div class="kpi-htitle">Professional Conduct Score</div><div class="kpi-hsub">Rate each item 1–5. Overall conduct score calculates automatically.</div></div>
    <div class="kpi-htotal"><div class="kpi-score-display" id="mr-total-${role}">—</div><div class="kpi-score-label">/ 5.0 conduct score</div><div class="kpi-band" id="mr-band-${role}">Not scored</div></div>
  </div>
  <div class="rating-guide" style="margin-bottom:14px">
    <span style="font-size:11.5px;font-weight:600;color:var(--g2);margin-right:4px">Guide:</span>
    <div class="rg"><div class="rdot r1">1</div>Persistent issue</div>
    <div class="rg"><div class="rdot r2">2</div>Occasional lapses</div>
    <div class="rg"><div class="rdot r3">3</div>Meets standard</div>
    <div class="rg"><div class="rdot r4">4</div>Consistently good</div>
    <div class="rg"><div class="rdot r5">5</div>Exemplary</div>
  </div>`;

  let conductScores = {};
  d.conductSections.forEach((sec,si) => {
    html += `<div class="kpi-section-header"><div class="kpi-sh-title">${sec.title}</div><div class="kpi-sh-score" id="mrsec-${role}-${si}">—</div></div><div style="padding:0 4px;margin-bottom:14px">`;
    sec.items.forEach((item,ii) => {
      const savedV = existing && existing.conduct && existing.conduct[si] ? (existing.conduct[si][ii]||0) : 0;
      if(savedV > 0) {
        if(!conductScores[si]) conductScores[si] = {};
        conductScores[si][ii] = savedV;
      }
      html += `<div class="kpi-row"><div class="kpi-metric">${item.s}</div>
        <select class="kpi-sel" onchange="updateMrConduct('${role}',${si},${ii},this.value)">
          <option value="0">—</option>
          ${[1,2,3,4,5].map(n=>`<option value="${n}" ${savedV==n?'selected':''}>${n}</option>`).join('')}
        </select></div>`;
    });
    html += `</div>`;
  });

  // Notes
  const w = existing && existing.wins ? existing.wins : '';
  const ch = existing && existing.challenges ? existing.challenges : '';
  const ac = existing && existing.actions ? existing.actions : '';
  html += `<div class="card" style="margin-top:6px"><div class="ch" onclick="tc(this.parentElement)"><div class="chl"><div><div class="ct">📝 Review Notes &amp; Action Items</div></div></div><div class="chv">▼</div></div>
    <div class="cb"><div style="display:grid;gap:12px">
      <div><div style="font-size:11px;font-weight:600;color:var(--grn);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">Wins &amp; Highlights</div>
        <textarea id="mr-wins" rows="3" placeholder="Strong work, positive feedback, process improvements..." style="width:100%;border:1.5px solid var(--gnb2);border-radius:8px;padding:10px;font-size:12.5px;font-family:'Poppins',system-ui,-apple-system,sans-serif;background:var(--gnb);color:var(--blk);resize:vertical">${w}</textarea></div>
      <div><div style="font-size:11px;font-weight:600;color:var(--red);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">Challenges &amp; Blockers</div>
        <textarea id="mr-challenges" rows="3" placeholder="Issues that affected delivery, quality or collaboration..." style="width:100%;border:1.5px solid #FFBBB7;border-radius:8px;padding:10px;font-size:12.5px;font-family:'Poppins',system-ui,-apple-system,sans-serif;background:var(--rdb);color:var(--blk);resize:vertical">${ch}</textarea></div>
      <div><div style="font-size:11px;font-weight:600;color:var(--amb);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">Action Items for Next Month</div>
        <textarea id="mr-actions" rows="3" placeholder="Specific actions, targets and development areas for next month..." style="width:100%;border:1.5px solid #FCD34D;border-radius:8px;padding:10px;font-size:12.5px;font-family:'Poppins',system-ui,-apple-system,sans-serif;background:var(--amb2);color:var(--blk);resize:vertical">${ac}</textarea></div>
    </div></div>
  </div>
  <div class="kpi-actions" style="margin-top:14px">
    <button class="btn btn-p" onclick="saveMrReview('${member}','${period}')">💾 Save Review</button>
    <button class="btn btn-o" onclick="window.print()">🖨️ Print</button>
  </div>`;

  document.getElementById('mr-scorecard-content').innerHTML = html;

  // Restore saved conduct scores and recalc
  if(existing && existing.conduct) {
    monthlyScores[role] = existing.conduct;
    recalcMonthly(role);
  } else {
    monthlyScores[role] = {};
  }
}

function saveMrReview(member, period){
  const role = MEMBER_ROLES[member] || 'des';
  const d = MONTHLY_METRICS[role];

  // Gather metrics
  const metrics = {};
  d.deliveryMetrics.forEach((_,i) => {
    const valEl = document.getElementById(`mrv-${i}`);
    const stEl = document.getElementById(`mrs-${i}`);
    if(valEl) metrics[i] = {val: valEl.value, status: stEl ? stEl.value : ''};
  });

  // Conduct
  const conduct = monthlyScores[role] || {};

  // Calc conduct score
  let allVals = [];
  Object.values(conduct).forEach(sec => Object.values(sec).forEach(v => { if(v>0) allVals.push(v); }));
  const conductScore = allVals.length ? allVals.reduce((a,b)=>a+b,0)/allVals.length : 0;

  const data = {
    metrics,
    conduct,
    conductScore,
    wins: document.getElementById('mr-wins') ? document.getElementById('mr-wins').value : '',
    challenges: document.getElementById('mr-challenges') ? document.getElementById('mr-challenges').value : '',
    actions: document.getElementById('mr-actions') ? document.getElementById('mr-actions').value : '',
    role
  };

  saveReview('monthly', member, period, data);

  // Visual feedback
  const btn = document.getElementById('mr-save-btn');
  if(btn){ btn.textContent = '✓ Saved!'; btn.classList.add('btn-save-done'); setTimeout(()=>{ btn.textContent = '💾 Save Review'; btn.classList.remove('btn-save-done'); }, 2000); }

  renderMrHistory(member);
}

function arMemberChange(){
  const m = document.getElementById('ar-member').value;
  document.getElementById('ar-load-btn').disabled = !m;
  if(m) renderArHistory(m);
  else {
    document.getElementById('ar-history-panel').style.display='none';
    document.getElementById('ar-scorecard').style.display='none';
    document.getElementById('ar-empty').style.display='block';
    document.getElementById('ar-compare-panel').style.display='none';
  }
}

function renderArHistory(member){
  const reviews = getAllReviews('annual', member);
  const panel = document.getElementById('ar-history-panel');
  const list = document.getElementById('ar-history-list');
  document.getElementById('ar-history-title').textContent = member + ' — Annual Review History';
  panel.style.display = 'block';
  document.getElementById('ar-empty').style.display = reviews.length ? 'none' : 'block';
  document.getElementById('ar-compare-btn').style.display = reviews.length >= 2 ? 'block' : 'none';

  if(!reviews.length){
    list.innerHTML = '<div class="rev-history-empty">No saved annual reviews yet for ' + member + '.</div>';
    return;
  }

  // Trend
  const trendItems = [...reviews].reverse();
  let listHTML = '<div class="trend-wrap"><div class="trend-title">Annual KPI Score Trend (out of 100)</div><div class="trend-chart">';
  trendItems.forEach(r => {
    const s = r.kpiScore || 0;
    const pct = s;
    const band = SCORE_BAND(s);
    const col = s>=90?'var(--p)':s>=75?'var(--grn)':s>=60?'var(--blu)':'var(--red)';
    listHTML += `<div class="trend-bar-wrap"><div class="trend-bar" style="height:${Math.max(pct,4)}%;background:${col}" data-score="${s} pts"></div><div class="trend-period">${r.period}</div></div>`;
  });
  listHTML += '</div></div>';

  reviews.forEach(r => {
    const band = SCORE_BAND(r.kpiScore || 0);
    const score = r.kpiScore ? r.kpiScore.toFixed(1) : '—';
    listHTML += `<div class="rev-history-item">
      <div class="rhi-period">${r.period}</div>
      <div class="rhi-score-wrap">
        <span class="rhi-score-badge ${band.c}">${score} / 100</span>
        <span class="rhi-band" style="color:${r.kpiScore>=90?'var(--p)':r.kpiScore>=75?'var(--grn)':r.kpiScore>=60?'var(--blu)':'var(--red)'}">${band.l}</span>
      </div>
      <div class="rhi-actions">
        <button class="rhi-btn" onclick="viewSavedAR('${member}','${r.period}')">View</button>
        <button class="rhi-btn rhi-btn-del" onclick="deleteAR('${member}','${r.period}')">Delete</button>
      </div>
    </div>`;
  });
  list.innerHTML = listHTML;
}

function loadAnnualReview(){
  const member = document.getElementById('ar-member').value;
  const year = document.getElementById('ar-year').value;
  if(!member) return;
  const role = MEMBER_ROLES[member] || 'des';
  const existing = loadReview('annual', member, year);
  renderArScorecard(member, role, year, existing);
}

function viewSavedAR(member, period){
  const role = MEMBER_ROLES[member] || 'des';
  const data = loadReview('annual', member, period);
  renderArScorecard(member, role, period, data);
  document.getElementById('ar-scorecard').scrollIntoView({behavior:'smooth'});
}

function deleteAR(member, period){
  if(!confirm('Delete annual review for ' + member + ' — ' + period + '?')) return;
  deleteReview('annual', member, period);
  renderArHistory(member);
}

function renderArScorecard(member, role, period, existing){
  const d = ANNUAL_SELF_ASSESSMENT[role];
  const kd = KPI_DATA[role];
  document.getElementById('ar-empty').style.display = 'none';
  document.getElementById('ar-scorecard').style.display = 'block';

  document.getElementById('ar-active-header').innerHTML = `
    <div>
      <div class="rev-active-title">Annual Review — ${member}</div>
      <div class="rev-active-period">Year ${period} · ${d.name}</div>
    </div>
    <div class="rev-active-actions">
      <button class="btn-save" id="ar-save-btn" onclick="saveArReview('${member}','${period}')">💾 Save Review</button>
      <button class="btn-save" onclick="document.getElementById('ar-scorecard').style.display='none';document.getElementById('ar-empty').style.display='block'">✕ Close</button>
    </div>`;

  let html = '';

  // PART B: Self-assessment
  html += `<div class="card open" style="margin-bottom:13px"><div class="ch" onclick="tc(this.parentElement)"><div class="chl"><span class="stag tp">PART B</span><div><div class="ct">Self-Assessment — ${d.name}</div><div class="cs">Completed by team member. Every answer must reference a project name and data.</div></div></div><div class="chv">▲</div></div><div class="cb">
    <div class="alert" style="margin-top:0"><strong>Evidence Rule:</strong> "I always do this" is not evidence. A project name and a number is.</div>`;

  let qIndex = 0;
  d.questions.forEach((sec,si) => {
    html += `<div style="margin-top:16px"><div style="font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--p);margin-bottom:10px">${sec.sec}</div>`;
    sec.qs.forEach((q,qi) => {
      const savedAns = existing && existing.answers && existing.answers[qIndex] ? existing.answers[qIndex] : '';
      html += `<div style="margin-bottom:12px"><div style="font-size:12.5px;font-weight:600;color:var(--blk);margin-bottom:5px">Q${qIndex+1}: ${q}</div>
        <textarea id="arq-${qIndex}" rows="3" placeholder="Answer with specific project names and data..." style="width:100%;border:1.5px solid var(--pl);border-radius:8px;padding:10px;font-size:12px;font-family:'Poppins',system-ui,-apple-system,sans-serif;background:var(--px);color:var(--blk);resize:vertical">${savedAns}</textarea></div>`;
      qIndex++;
    });
    html += `</div>`;
  });
  html += `</div></div>`;

  // PART C: Manager KPI scoring
  html += `<div class="kpi-header"><div class="kpi-hinfo"><div class="kpi-htitle">PART C — Manager KPI Evaluation</div><div class="kpi-hsub">Score each KPI 1–5 after the review meeting. Weighted total out of 100.</div></div>
    <div class="kpi-htotal"><div class="kpi-score-display" id="ar-total-${role}">0</div><div class="kpi-score-label">/ 100 points</div><div class="kpi-band" id="ar-band-${role}">Not scored</div></div>
  </div>
  <div class="rating-guide" style="margin-bottom:14px">
    <span style="font-size:11.5px;font-weight:600;color:var(--g2);margin-right:4px">Guide:</span>
    <div class="rg"><div class="rdot r1">1</div>Far Below</div>
    <div class="rg"><div class="rdot r2">2</div>Below Target</div>
    <div class="rg"><div class="rdot r3">3</div>Meets Target</div>
    <div class="rg"><div class="rdot r4">4</div>Exceeds</div>
    <div class="rg"><div class="rdot r5">5</div>Exceptional</div>
  </div>`;

  kd.sections.forEach((sec,si) => {
    html += `<div class="kpi-section-header"><div class="kpi-sh-title">${sec.title}</div><div style="display:flex;gap:12px;align-items:center"><div class="kpi-sh-pts">Max: ${sec.max} pts</div><div class="kpi-sh-score" id="arsec-${role}-${si}">0 pts</div></div></div><div style="padding:0 4px;margin-bottom:14px">`;
    sec.kpis.forEach((k,ki) => {
      const savedV = existing && existing.kpiScoreData && existing.kpiScoreData[si+'-'+ki] ? existing.kpiScoreData[si+'-'+ki].v : 0;
      if(savedV > 0) {
        if(!annualScores[role]) annualScores[role] = {};
        annualScores[role][si+'-'+ki] = {w:k.w, v:savedV};
      }
      html += `<div class="kpi-row"><div><div class="kpi-metric">${k.m}</div><div class="kpi-target">${k.t}</div></div>
        <div class="kpi-wt">${k.w}%</div>
        <select class="kpi-sel" onchange="updateAnnual('${role}',${si},${ki},${k.w},this.value)">
          <option value="0">—</option>
          ${[1,2,3,4,5].map(n=>`<option value="${n}" ${savedV==n?'selected':''}>${n}</option>`).join('')}
        </select></div>`;
    });
    html += `</div>`;
  });

  // Restore scores
  if(existing && existing.kpiScoreData) {
    annualScores[role] = existing.kpiScoreData;
    recalcAnnual(role);
  }

  // PART D: Manager notes
  const str = existing && existing.strengths ? existing.strengths : '';
  const dev = existing && existing.devAreas ? existing.devAreas : '';
  const sum = existing && existing.summary ? existing.summary : '';
  html += `<div class="card" style="margin-top:6px"><div class="ch" onclick="tc(this.parentElement)"><div class="chl"><span class="stag tp">PART D</span><div><div class="ct">Manager Overall Assessment</div></div></div><div class="chv">▼</div></div><div class="cb">
    <div style="display:grid;gap:12px">
      <div><div style="font-size:11px;font-weight:600;color:var(--grn);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">Key Strengths This Year</div>
        <textarea id="ar-strengths" rows="3" placeholder="Specific strengths backed by examples and data..." style="width:100%;border:1.5px solid var(--gnb2);border-radius:8px;padding:10px;font-size:12.5px;font-family:'Poppins',system-ui,-apple-system,sans-serif;background:var(--gnb);color:var(--blk);resize:vertical">${str}</textarea></div>
      <div><div style="font-size:11px;font-weight:600;color:var(--amb);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">Development Areas for Next Year</div>
        <textarea id="ar-dev" rows="3" placeholder="Specific, measurable development targets..." style="width:100%;border:1.5px solid #FCD34D;border-radius:8px;padding:10px;font-size:12.5px;font-family:'Poppins',system-ui,-apple-system,sans-serif;background:var(--amb2);color:var(--blk);resize:vertical">${dev}</textarea></div>
      <div><div style="font-size:11px;font-weight:600;color:var(--p);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">Overall Performance Summary</div>
        <textarea id="ar-summary" rows="4" placeholder="Narrative summary for team member record..." style="width:100%;border:1.5px solid var(--pl);border-radius:8px;padding:10px;font-size:12.5px;font-family:'Poppins',system-ui,-apple-system,sans-serif;background:var(--px);color:var(--blk);resize:vertical">${sum}</textarea></div>
    </div></div></div>`;

  // PART E: Goals
  const savedGoals = existing && existing.goals ? existing.goals : [{g:'',a:'',d:''},{g:'',a:'',d:''},{g:'',a:'',d:''},{g:'',a:'',d:''}];
  html += `<div class="card" style="margin-top:6px"><div class="ch" onclick="tc(this.parentElement)"><div class="chl"><span class="stag tp">PART E</span><div><div class="ct">Development Goals for Next Year</div></div></div><div class="chv">▼</div></div><div class="cb">
    <table class="tbl" style="margin-top:0"><thead><tr><th>Development Goal</th><th>Action Plan</th><th>Target Date</th></tr></thead><tbody>
    ${savedGoals.map((g,i)=>`<tr>
      <td><input id="arg-${i}-g" type="text" value="${g.g||''}" placeholder="Goal ${i+1}..." style="width:100%;border:1.5px solid var(--pl);border-radius:6px;padding:6px 8px;font-size:12px;font-family:'Poppins',system-ui,-apple-system,sans-serif;background:var(--px);color:var(--blk)"></td>
      <td><input id="arg-${i}-a" type="text" value="${g.a||''}" placeholder="Action plan..." style="width:100%;border:1.5px solid var(--pl);border-radius:6px;padding:6px 8px;font-size:12px;font-family:'Poppins',system-ui,-apple-system,sans-serif;background:var(--px);color:var(--blk)"></td>
      <td><input id="arg-${i}-d" type="text" value="${g.d||''}" placeholder="e.g. Q3 2026" style="width:100%;border:1.5px solid var(--pl);border-radius:6px;padding:6px 8px;font-size:12px;font-family:'Poppins',system-ui,-apple-system,sans-serif;background:var(--px);color:var(--blk)"></td>
    </tr>`).join('')}
    </tbody></table></div></div>`;

  // Signatures
  html += `<div style="background:var(--wht);border:1.5px solid var(--brd);border-radius:var(--rad);padding:14px 18px;margin-top:13px">
    <div style="font-size:11px;font-weight:600;color:var(--p);letter-spacing:1px;text-transform:uppercase;margin-bottom:12px">Signatures</div>
    <div class="gc3">
      <div><div style="font-size:12px;color:var(--g3);margin-bottom:4px">Team Member / Date</div><div style="border-bottom:1.5px solid var(--brd);height:32px"></div></div>
      <div><div style="font-size:12px;color:var(--g3);margin-bottom:4px">Project Manager / Date</div><div style="border-bottom:1.5px solid var(--brd);height:32px"></div></div>
      <div><div style="font-size:12px;color:var(--g3);margin-bottom:4px">Partner / Date</div><div style="border-bottom:1.5px solid var(--brd);height:32px"></div></div>
    </div>
  </div>`;

  html += `<div class="kpi-actions" style="margin-top:14px">
    <button class="btn btn-p" onclick="saveArReview('${member}','${period}')">💾 Save Review</button>
    <button class="btn btn-o" onclick="window.print()">🖨️ Print</button>
  </div>`;

  document.getElementById('ar-scorecard-content').innerHTML = html;
}

function saveArReview(member, period){
  const role = MEMBER_ROLES[member] || 'des';
  const d = ANNUAL_SELF_ASSESSMENT[role];
  let totalQs = 0;
  d.questions.forEach(s => totalQs += s.qs.length);

  const answers = {};
  for(let i=0; i<totalQs; i++){
    const el = document.getElementById('arq-'+i);
    if(el) answers[i] = el.value;
  }

  const goals = [0,1,2,3].map(i => ({
    g: (document.getElementById('arg-'+i+'-g')||{}).value||'',
    a: (document.getElementById('arg-'+i+'-a')||{}).value||'',
    d: (document.getElementById('arg-'+i+'-d')||{}).value||''
  }));

  const kpiData = annualScores[role] || {};
  const kd = KPI_DATA[role];
  let kpiScore = 0;
  kd.sections.forEach((sec,si) => {
    sec.kpis.forEach((k,ki) => {
      const entry = kpiData[si+'-'+ki];
      if(entry && entry.v > 0) kpiScore += (entry.v/5)*entry.w;
    });
  });

  const data = {
    answers, goals, kpiScoreData: kpiData, kpiScore: Math.round(kpiScore*10)/10,
    strengths: (document.getElementById('ar-strengths')||{}).value||'',
    devAreas: (document.getElementById('ar-dev')||{}).value||'',
    summary: (document.getElementById('ar-summary')||{}).value||'',
    role
  };

  saveReview('annual', member, period, data);
  const btn = document.getElementById('ar-save-btn');
  if(btn){ btn.textContent = '✓ Saved!'; btn.classList.add('btn-save-done'); setTimeout(()=>{ btn.textContent = '💾 Save Review'; btn.classList.remove('btn-save-done'); }, 2000); }
  renderArHistory(member);
}

function openCompare(type){
  const member = type==='monthly' ? document.getElementById('mr-member').value : document.getElementById('ar-member').value;
  const reviews = getAllReviews(type, member);
  const panelId = type==='monthly' ? 'mr-compare-panel' : 'ar-compare-panel';
  const aId = type==='monthly' ? 'mr-cmp-a' : 'ar-cmp-a';
  const bId = type==='monthly' ? 'mr-cmp-b' : 'ar-cmp-b';
  const opts = reviews.map(r => `<option value="${r.period}">${r.period}</option>`).join('');
  document.getElementById(aId).innerHTML = opts;
  document.getElementById(bId).innerHTML = opts;
  if(reviews.length >= 2) document.getElementById(bId).selectedIndex = 1;
  document.getElementById(panelId).style.display = 'block';
}

function closeCompare(type){
  document.getElementById(type==='monthly'?'mr-compare-panel':'ar-compare-panel').style.display='none';
}

function runCompare(type){
  const member = type==='monthly' ? document.getElementById('mr-member').value : document.getElementById('ar-member').value;
  const periodA = document.getElementById(type==='monthly'?'mr-cmp-a':'ar-cmp-a').value;
  const periodB = document.getElementById(type==='monthly'?'mr-cmp-b':'ar-cmp-b').value;
  const outId = type==='monthly' ? 'mr-compare-output' : 'ar-compare-output';
  if(periodA === periodB){ document.getElementById(outId).innerHTML = '<div class="alert alert-r"><strong>Select two different periods to compare.</strong></div>'; return; }

  const rA = loadReview(type, member, periodA);
  const rB = loadReview(type, member, periodB);
  if(!rA || !rB){ document.getElementById(outId).innerHTML = '<div class="alert alert-r"><strong>Could not load one or both reviews.</strong></div>'; return; }

  let html = `<div class="cmp-wrap">
    <div class="cmp-header-row">
      <div class="cmp-hcell">Category</div>
      <div class="cmp-hcell">${periodA}</div>
      <div class="cmp-hcell">${periodB} &amp; Change</div>
    </div>`;

  if(type === 'monthly'){
    // Compare conduct scores
    const sA = rA.conductScore || 0, sB = rB.conductScore || 0;
    const delta = sB - sA;
    const dClass = delta > 0 ? 'cmp-delta-pos' : delta < 0 ? 'cmp-delta-neg' : 'cmp-delta-neu';
    const dStr = delta > 0 ? '▲ +' + delta.toFixed(1) : delta < 0 ? '▼ ' + delta.toFixed(1) : '→ No change';
    html += `<div class="cmp-section-row">Overall Conduct</div>
      <div class="cmp-row">
        <div class="cmp-label">Conduct Score</div>
        <div class="cmp-val">${sA.toFixed(1)} / 5 — ${CONDUCT_BAND(sA)}</div>
        <div class="cmp-val">${sB.toFixed(1)} / 5 — ${CONDUCT_BAND(sB)} <span class="${dClass}">(${dStr})</span></div>
      </div>`;

    // Conduct section breakdown
    const role = rA.role || 'des';
    const d = MONTHLY_METRICS[role];
    html += `<div class="cmp-section-row">Conduct Sections Breakdown</div>`;
    d.conductSections.forEach((sec, si) => {
      const secA = rA.conduct && rA.conduct[si] ? Object.values(rA.conduct[si]).filter(v=>v>0) : [];
      const secB = rB.conduct && rB.conduct[si] ? Object.values(rB.conduct[si]).filter(v=>v>0) : [];
      const avgA = secA.length ? secA.reduce((a,b)=>a+b,0)/secA.length : 0;
      const avgB = secB.length ? secB.reduce((a,b)=>a+b,0)/secB.length : 0;
      const d2 = avgB - avgA;
      const dc = d2>0?'cmp-delta-pos':d2<0?'cmp-delta-neg':'cmp-delta-neu';
      const ds = d2>0?'▲ +'+d2.toFixed(1):d2<0?'▼ '+d2.toFixed(1):'→';
      html += `<div class="cmp-row">
        <div class="cmp-label">${sec.title.replace(/^[A-Z] — /,'')}</div>
        <div class="cmp-val">${avgA>0?avgA.toFixed(1)+' / 5':'Not scored'}</div>
        <div class="cmp-val">${avgB>0?avgB.toFixed(1)+' / 5':'Not scored'} <span class="${dc}">(${ds})</span></div>
      </div>`;
    });

    // Notes comparison
    html += `<div class="cmp-section-row">Notes</div>
      <div class="cmp-row" style="align-items:flex-start">
        <div class="cmp-label">Wins / Highlights</div>
        <div style="font-size:11.5px;color:var(--g2)">${rA.wins || '—'}</div>
        <div style="font-size:11.5px;color:var(--g2)">${rB.wins || '—'}</div>
      </div>
      <div class="cmp-row" style="align-items:flex-start">
        <div class="cmp-label">Action Items</div>
        <div style="font-size:11.5px;color:var(--g2)">${rA.actions || '—'}</div>
        <div style="font-size:11.5px;color:var(--g2)">${rB.actions || '—'}</div>
      </div>`;

  } else {
    // Annual: compare KPI scores
    const sA = rA.kpiScore || 0, sB = rB.kpiScore || 0;
    const delta = sB - sA;
    const dClass = delta>0?'cmp-delta-pos':delta<0?'cmp-delta-neg':'cmp-delta-neu';
    const dStr = delta>0?'▲ +'+delta.toFixed(1):delta<0?'▼ '+delta.toFixed(1):'→ No change';
    html += `<div class="cmp-section-row">Overall Score</div>
      <div class="cmp-row">
        <div class="cmp-label">KPI Score</div>
        <div class="cmp-val">${sA.toFixed(1)} / 100 — ${SCORE_BAND(sA).l}</div>
        <div class="cmp-val">${sB.toFixed(1)} / 100 — ${SCORE_BAND(sB).l} <span class="${dClass}">(${dStr})</span></div>
      </div>`;

    // Section breakdown
    const role = rA.role || 'des';
    const kd = KPI_DATA[role];
    html += `<div class="cmp-section-row">KPI Section Breakdown</div>`;
    kd.sections.forEach((sec, si) => {
      let ptsA = 0, ptsB = 0;
      sec.kpis.forEach((k, ki) => {
        const key = si+'-'+ki;
        const eA = rA.kpiScoreData && rA.kpiScoreData[key] ? rA.kpiScoreData[key] : null;
        const eB = rB.kpiScoreData && rB.kpiScoreData[key] ? rB.kpiScoreData[key] : null;
        if(eA && eA.v > 0) ptsA += (eA.v/5)*eA.w;
        if(eB && eB.v > 0) ptsB += (eB.v/5)*eB.w;
      });
      const d2 = ptsB - ptsA;
      const dc = d2>0.1?'cmp-delta-pos':d2<-0.1?'cmp-delta-neg':'cmp-delta-neu';
      const ds = d2>0.1?'▲ +'+d2.toFixed(1):d2<-0.1?'▼ '+d2.toFixed(1):'→';
      html += `<div class="cmp-row">
        <div class="cmp-label">${sec.title}</div>
        <div class="cmp-val">${ptsA.toFixed(1)} / ${sec.max}</div>
        <div class="cmp-val">${ptsB.toFixed(1)} / ${sec.max} <span class="${dc}">(${ds})</span></div>
      </div>`;
    });

    // Manager notes comparison
    html += `<div class="cmp-section-row">Manager Notes</div>
      <div class="cmp-row" style="align-items:flex-start">
        <div class="cmp-label">Strengths</div>
        <div style="font-size:11.5px;color:var(--g2)">${rA.strengths || '—'}</div>
        <div style="font-size:11.5px;color:var(--g2)">${rB.strengths || '—'}</div>
      </div>
      <div class="cmp-row" style="align-items:flex-start">
        <div class="cmp-label">Dev Areas</div>
        <div style="font-size:11.5px;color:var(--g2)">${rA.devAreas || '—'}</div>
        <div style="font-size:11.5px;color:var(--g2)">${rB.devAreas || '—'}</div>
      </div>`;
  }

  html += `</div>`;
  document.getElementById(outId).innerHTML = html;
}

function showProc(key, btn){
  document.querySelectorAll('.proc-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.proc-panel').forEach(p=>p.classList.remove('active'));
  document.getElementById('proc-'+key).classList.add('active');
  document.getElementById('step-detail').classList.remove('open');
  renderProc(key);
}

function renderProc(key){
  const d = PROC_DATA[key];
  const el = document.getElementById('proc-'+key);
  if(el.dataset.rendered) return;
  el.dataset.rendered = '1';

  // Phase flow bar
  let html = `<div class="proc-flow-bar">`;
  d.phases.forEach((ph, pi) => {
    html += `<div class="pfb-phase" style="background:${ph.color}" onclick="scrollToPhase('${key}-${ph.id}')">
      <div class="pfb-num">${pi+1}</div>
      <div class="pfb-label">${ph.label}</div>
      <div class="pfb-arrow">›</div>
    </div>`;
  });
  html += `</div>`;

  // Legend
  html += `<div class="swimlane-legend">
    <span style="font-size:11px;font-weight:700;color:var(--g3);margin-right:6px">OWNER:</span>
    <div class="sl-item"><div class="sl-dot" style="background:#9354FF"></div>PM</div>
    <div class="sl-item"><div class="sl-dot" style="background:#1A8754"></div>Designer</div>
    <div class="sl-item"><div class="sl-dot" style="background:#B45309"></div>Developer</div>
    <div class="sl-item"><div class="sl-dot" style="background:#C0392B"></div>Integration</div>
    <div class="sl-item"><div class="sl-dot" style="background:#1B5FA3"></div>PM + Client</div>
    <div class="sl-item"><div class="sl-dot" style="background:#555"></div>Shared</div>
    <span style="margin-left:10px;font-size:11px;font-weight:700;color:var(--g3)">GATE: ✓ = quality checkpoint — cannot proceed without sign-off</span>
  </div>`;

  // Phase swimlanes
  d.phases.forEach(ph => {
    html += `<div id="${key}-${ph.id}" style="margin-bottom:20px">
      <div style="background:${ph.color};color:#fff;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:8px 16px;border-radius:var(--rs) var(--rs) 0 0">
        ${ph.label}
      </div>
      <div style="display:grid;grid-template-columns:repeat(${ph.steps.length},1fr);border:1.5px solid ${ph.color};border-top:none;border-radius:0 0 var(--rs) var(--rs);overflow:hidden;background:var(--wht)">`;

    ph.steps.forEach((step, si) => {
      const ownerColor = ROLE_COLORS[step.owner.split(' ')[0]] || '#555';
      const isLast = si === ph.steps.length - 1;
      html += `<div class="phase-step ${step.gate?'gate':''}" style="border-right:${isLast?'none':'1.5px solid var(--brd2)'}"
        onclick="showStepDetail('${key}','${ph.id}',${si})">
        <div class="ps-num" style="color:${ph.color}">${step.n}</div>
        <div class="ps-title">${step.title}</div>
        <div class="ps-owner" style="color:${ownerColor}">● ${step.owner}</div>
        <div class="ps-time">${step.time}</div>
        ${step.gate ? '<div style="font-size:9px;font-weight:700;color:var(--p);margin-top:4px;background:var(--pl);padding:1px 5px;border-radius:3px;display:inline-block">⛔ GATE</div>':''}
      </div>`;
    });
    html += `</div></div>`;
  });

  // RACI Matrix
  html += `<div class="card" style="margin-top:8px">
    <div class="ch" onclick="tc(this.parentElement)"><div class="chl"><div><div class="ct">RACI Matrix — Who Does What</div><div class="cs">R=Responsible · A=Accountable · C=Consulted · I=Informed</div></div></div><div class="chv">▼</div></div>
    <div class="cb">
      <table class="raci-table"><thead><tr><th>Phase</th><th>PM</th><th>Client</th><th>Designer</th><th>Developer</th><th>Integration</th></tr></thead><tbody>`;
  d.raci.forEach(row => {
    const fmt = v => {
      if(v==='-') return `<span class="r-dash">—</span>`;
      if(v.includes('R')) return `<span class="r-r">${v}</span>`;
      if(v==='A') return `<span class="r-a">A</span>`;
      if(v==='C') return `<span class="r-c">C</span>`;
      return `<span class="r-i">I</span>`;
    };
    html += `<tr><td>${row.phase}</td><td>${fmt(row.pm)}</td><td>${fmt(row.client)}</td><td>${fmt(row.des)}</td><td>${fmt(row.dev)}</td><td>${fmt(row.int)}</td></tr>`;
  });
  html += `</tbody></table></div></div>`;

  el.innerHTML = html;
}

function scrollToPhase(id){
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
}

function showStepDetail(procKey, phaseId, stepIdx){
  const d = PROC_DATA[procKey];
  const phase = d.phases.find(p=>p.id===phaseId);
  if(!phase) return;
  const step = phase.steps[stepIdx];
  const ownerColor = ROLE_COLORS[step.owner.split(' ')[0]] || '#555';

  document.getElementById('sdp-title').textContent = `Step ${step.n}: ${step.title}`;
  document.getElementById('sdp-meta').textContent = `${phase.label} Phase · Owner: ${step.owner} · ${step.time}`;
  document.getElementById('sdp-body').innerHTML = `
    <div>
      <div class="sdp-col-title">What happens in this step</div>
      <div style="font-size:13px;color:var(--g2);line-height:1.6;margin-bottom:12px">${step.what}</div>
      <div class="sdp-col-title">Who is responsible</div>
      <div style="font-size:13px;color:${ownerColor};font-weight:600;margin-bottom:12px">● ${step.who}</div>
      <div class="sdp-col-title">Deliverable</div>
      <div style="font-size:13px;color:var(--blk);font-weight:500">${step.deliver}</div>
    </div>
    <div>
      <div class="sdp-col-title">SLA / Timeframe</div>
      <div style="display:inline-block;background:var(--p);color:#fff;padding:4px 12px;border-radius:20px;font-size:12.5px;font-weight:600;margin-bottom:12px">${step.sla}</div>
      <div class="sdp-col-title">Quality Gate Criteria</div>
      <div style="background:${step.gate?'var(--rdb)':'var(--gnb)'};border:1.5px solid ${step.gate?'#FFBBB7':'var(--gnb2)'};border-radius:8px;padding:10px 13px;font-size:12.5px;color:var(--blk);font-weight:500;margin-bottom:12px">
        ${step.gate?'⛔ GATE: ':'✓ '} ${step.criteria}
      </div>
      ${step.gate?`<div style="background:var(--px);border-radius:8px;padding:8px 12px;font-size:12px;color:var(--p);font-weight:600">
        This is a quality gate. Work CANNOT proceed to the next step until this criteria is met and sign-off is received.
      </div>`:''}
    </div>`;

  const panel = document.getElementById('step-detail');
  panel.classList.add('open');
  panel.scrollIntoView({behavior:'smooth', block:'nearest'});
}

function closeStepDetail(){
  document.getElementById('step-detail').classList.remove('open');
}

function showAdminTab(id, btn){
  btn.closest('.rtabs').querySelectorAll('.rtab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  let el = btn.closest('.rtabs').nextElementSibling;
  while(el && el.classList.contains('rp')){el.classList.remove('active');el=el.nextElementSibling;}
  document.getElementById('admin-'+id).classList.add('active');
  if(id==='team') renderAdminTeam();
  if(id==='kpi') renderKpiEdit('des');
  if(id==='onboarding') renderObEdit('pm');
}

function showKpiEdit(role, btn){
  if(btn){
    btn.closest('.rtabs').querySelectorAll('.rtab').forEach(t=>t.classList.remove('active'));
    btn.classList.add('active');
    ['des','dev','pm','int'].forEach(r=>{
      const el=document.getElementById('kpi-edit-'+r);
      if(el) el.classList.remove('active');
    });
    document.getElementById('kpi-edit-'+role).classList.add('active');
  }
  renderKpiEdit(role);
}

function renderKpiEdit(role){
  const el = document.getElementById('kpi-edit-'+role);
  if(!el || el.dataset.rendered) return;
  el.dataset.rendered='1';

  // Load from localStorage or use defaults
  const saved = localStorage.getItem('nexa_kpi_'+role);
  const data = saved ? JSON.parse(saved) : KPI_DATA[role];

  let html = '';
  data.sections.forEach((sec,si)=>{
    html += `<div class="card" style="margin-bottom:12px">
      <div class="ch" onclick="tc(this.parentElement)">
        <div class="chl"><div><div class="ct">${sec.title}</div><div class="cs">Max: ${sec.max} pts</div></div></div>
        <div class="chv">▼</div>
      </div>
      <div class="cb" style="padding-top:8px">`;
    sec.kpis.forEach((k,ki)=>{
      html += `<div class="kpi-edit-row">
        <div class="kpi-edit-metric">${k.m}</div>
        <input class="kpi-edit-input" id="kt-${role}-${si}-${ki}" value="${k.t}" placeholder="Target">
        <div class="kpi-edit-weight">${k.w}%</div>
      </div>`;
    });
    html += `</div></div>`;
  });
  el.innerHTML = html;
}

function saveKpiEdits(){
  ['des','dev','pm','int'].forEach(role=>{
    const data = JSON.parse(JSON.stringify(KPI_DATA[role]));
    data.sections.forEach((sec,si)=>{
      sec.kpis.forEach((k,ki)=>{
        const input = document.getElementById(`kt-${role}-${si}-${ki}`);
        if(input) k.t = input.value;
      });
    });
    localStorage.setItem('nexa_kpi_'+role, JSON.stringify(data));
    // Update live KPI_DATA
    KPI_DATA[role] = data;
  });
  showNotice('kpi-notice');
}

function resetKpiEdits(){
  if(!confirm('Reset all KPI targets to defaults?')) return;
  ['des','dev','pm','int'].forEach(r=>{
    localStorage.removeItem('nexa_kpi_'+r);
    const el = document.getElementById('kpi-edit-'+r);
    if(el) { delete el.dataset.rendered; el.innerHTML=''; }
  });
  renderKpiEdit('des');
}

function loadAdminTeam(){
  const saved = localStorage.getItem('nexa_team_custom');
  if(saved){
    adminTeamData = JSON.parse(saved);
    // Also update global TEAM
    TEAM.splice(0, TEAM.length, ...adminTeamData);
  } else {
    adminTeamData = JSON.parse(JSON.stringify(TEAM));
  }
}

function saveAdminTeam(){
  localStorage.setItem('nexa_team_custom', JSON.stringify(adminTeamData));
  TEAM.splice(0, TEAM.length, ...adminTeamData);
  renderProfiles(); // refresh team directory
}

function renderAdminTeam(){
  loadAdminTeam();
  const list = document.getElementById('admin-member-list');
  list.innerHTML = adminTeamData.map((m,i)=>`
    <div class="member-card-admin">
      <div class="mca-av" style="background:${['#9354FF','#1A8754','#B45309','#1B5FA3','#C0392B','#4A3F8F','#555'][i%7]}">${m.initials||m.name.substring(0,2).toUpperCase()}</div>
      <div class="mca-info">
        <div class="mca-name">${m.name}</div>
        <div class="mca-role">${m.role} · ${m.level||''} · Joined ${m.since||'—'}</div>
      </div>
      <div class="mca-actions">
        <button class="btn-edit" onclick="openEditMember(${i})">✏️ Edit</button>
        <button class="btn-del-sm" onclick="deleteMember(${i})">Delete</button>
      </div>
    </div>`).join('');
}

function openAddMember(){
  document.getElementById('member-form-title').textContent = 'Add Team Member';
  document.getElementById('mf-edit-index').value = '-1';
  ['mf-name','mf-since','mf-exp','mf-spec','mf-bio','mf-skills','mf-tools','mf-cv'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.value='';
  });
  document.getElementById('member-form-wrap').style.display='block';
  document.getElementById('member-form-wrap').scrollIntoView({behavior:'smooth'});
}

function openEditMember(idx){
  const m = adminTeamData[idx];
  document.getElementById('member-form-title').textContent = 'Edit — ' + m.name;
  document.getElementById('mf-edit-index').value = idx;
  document.getElementById('mf-name').value = m.name||'';
  document.getElementById('mf-role').value = m.role||'Web Designer';
  document.getElementById('mf-since').value = m.since||'';
  document.getElementById('mf-exp').value = m.exp||'';
  document.getElementById('mf-level').value = m.level||'Mid';
  document.getElementById('mf-spec').value = m.specialisation||'';
  document.getElementById('mf-bio').value = m.bio||'';
  document.getElementById('mf-skills').value = (m.skills||[]).map(s=>s.n||s).join(', ');
  document.getElementById('mf-tools').value = (m.tools||[]).join(', ');
  document.getElementById('mf-cv').value = (m.cv||[]).map(e=>`${e.t} | ${e.c} | ${e.d} | ${e.desc}`).join('\n');
  document.getElementById('member-form-wrap').style.display='block';
  document.getElementById('member-form-wrap').scrollIntoView({behavior:'smooth'});
}

function closeMemberForm(){
  document.getElementById('member-form-wrap').style.display='none';
}

function saveMember(){
  const name = document.getElementById('mf-name').value.trim();
  if(!name){ alert('Name is required'); return; }
  const initials = name.split(' ').map(w=>w[0]).join('').substring(0,2).toUpperCase();
  const skillsRaw = document.getElementById('mf-skills').value.split(',').map(s=>s.trim()).filter(Boolean);
  const toolsRaw = document.getElementById('mf-tools').value.split(',').map(s=>s.trim()).filter(Boolean);
  const cvRaw = document.getElementById('mf-cv').value.split('\n').filter(Boolean).map(line=>{
    const parts = line.split('|').map(p=>p.trim());
    return {t:parts[0]||'',c:parts[1]||'',d:parts[2]||'',desc:parts[3]||''};
  });
  const member = {
    name, initials,
    role: document.getElementById('mf-role').value,
    since: document.getElementById('mf-since').value,
    exp: document.getElementById('mf-exp').value,
    level: document.getElementById('mf-level').value,
    specialisation: document.getElementById('mf-spec').value,
    bio: document.getElementById('mf-bio').value,
    skills: skillsRaw.map((n,i)=>({n, l:90-i*5})),
    tools: toolsRaw,
    cv: cvRaw
  };
  const idx = parseInt(document.getElementById('mf-edit-index').value);
  if(idx >= 0) adminTeamData[idx] = member;
  else adminTeamData.push(member);
  saveAdminTeam();
  renderAdminTeam();
  closeMemberForm();
  showNotice('team-notice');
}

function deleteMember(idx){
  const m = adminTeamData[idx];
  if(!confirm(`Delete ${m.name} from the team directory?`)) return;
  adminTeamData.splice(idx,1);
  saveAdminTeam();
  renderAdminTeam();
}

function showObEdit(role, btn){
  if(btn){
    btn.closest('.rtabs').querySelectorAll('.rtab').forEach(t=>t.classList.remove('active'));
    btn.classList.add('active');
    ['pm','des','dev','int'].forEach(r=>{
      const el=document.getElementById('ob-edit-'+r);
      if(el) el.classList.remove('active');
    });
    document.getElementById('ob-edit-'+role).classList.add('active');
  }
  renderObEdit(role);
}

function renderObEdit(role){
  const el = document.getElementById('ob-edit-'+role);
  if(!el || el.dataset.rendered) return;
  el.dataset.rendered='1';

  const saved = localStorage.getItem('nexa_ob_'+role);
  const data = saved ? JSON.parse(saved) : OB_DEFAULTS[role];

  let html = '';
  data.phases.forEach((phase, pi)=>{
    html += `<div class="card open" style="margin-bottom:12px">
      <div class="ch" onclick="tc(this.parentElement)"><div class="chl"><div>
        <div class="ct"><input value="${phase}" style="font-family:'Poppins',sans-serif;font-size:13px;font-weight:600;border:none;background:transparent;color:var(--blk);width:100%" id="ob-phase-${role}-${pi}" placeholder="Phase name"></div>
      </div></div><div class="chv">▲</div></div>
      <div class="cb">`;
    (data.items[pi]||[]).forEach((item,ii)=>{
      html += `<div style="display:flex;gap:8px;margin-bottom:8px;align-items:flex-start">
        <input value="${item}" style="flex:1;font-family:'Poppins',sans-serif;font-size:12.5px;padding:7px 10px;border:1.5px solid var(--pl);border-radius:6px;background:var(--px);color:var(--blk)" id="ob-item-${role}-${pi}-${ii}" placeholder="Onboarding step...">
        <button onclick="deleteObItem('${role}',${pi},${ii})" style="border:1.5px solid #FFBBB7;background:var(--rdb);color:var(--red);border-radius:6px;padding:6px 10px;cursor:pointer;font-size:12px;font-family:'Poppins',sans-serif">✕</button>
      </div>`;
    });
    html += `<button onclick="addObItem('${role}',${pi})" style="background:var(--px);border:1.5px dashed var(--pl);color:var(--p);border-radius:6px;padding:7px 14px;cursor:pointer;font-size:12px;font-weight:600;font-family:'Poppins',sans-serif;width:100%;margin-top:4px">+ Add Step</button>
      </div></div>`;
  });
  html += `<div style="display:flex;gap:10px;margin-top:10px">
    <button class="btn btn-p" onclick="saveObEdit('${role}')">💾 Save Onboarding</button>
    <button class="btn btn-o" onclick="resetObEdit('${role}')">↺ Reset to Default</button>
  </div>`;
  el.innerHTML = html;
}

function addObItem(role, pi){
  // gather current state, add blank item, re-render
  const data = gatherObData(role);
  if(!data.items[pi]) data.items[pi] = [];
  data.items[pi].push('');
  localStorage.setItem('nexa_ob_'+role, JSON.stringify(data));
  const el = document.getElementById('ob-edit-'+role);
  delete el.dataset.rendered; el.innerHTML='';
  renderObEdit(role);
}

function deleteObItem(role, pi, ii){
  const data = gatherObData(role);
  data.items[pi].splice(ii,1);
  localStorage.setItem('nexa_ob_'+role, JSON.stringify(data));
  const el = document.getElementById('ob-edit-'+role);
  delete el.dataset.rendered; el.innerHTML='';
  renderObEdit(role);
}

function gatherObData(role){
  const saved = localStorage.getItem('nexa_ob_'+role);
  const base = saved ? JSON.parse(saved) : OB_DEFAULTS[role];
  const phases = base.phases.map((_,pi)=>{
    const el=document.getElementById(`ob-phase-${role}-${pi}`);
    return el ? el.value : base.phases[pi];
  });
  const items = base.phases.map((_,pi)=>{
    return (base.items[pi]||[]).map((_2,ii)=>{
      const el=document.getElementById(`ob-item-${role}-${pi}-${ii}`);
      return el ? el.value : '';
    });
  });
  return {phases, items};
}

function saveObEdit(role){
  const data = gatherObData(role);
  localStorage.setItem('nexa_ob_'+role, JSON.stringify(data));
  showNotice('ob-notice');
}

function resetObEdit(role){
  if(!confirm('Reset to default onboarding steps?')) return;
  localStorage.removeItem('nexa_ob_'+role);
  const el = document.getElementById('ob-edit-'+role);
  delete el.dataset.rendered; el.innerHTML='';
  renderObEdit(role);
}

function loadGeneralSettings(){
  const saved = localStorage.getItem('nexa_general');
  if(saved){
    const s = JSON.parse(saved);
    Object.entries(s).forEach(([k,v])=>{
      const el=document.getElementById('gs-'+k);
      if(el) el.value=v;
    });
  } else {
    document.getElementById('gs-company').value='NEXA';
    document.getElementById('gs-dept').value='Web Team';
    document.getElementById('gs-pm').value='Mubeena';
    document.getElementById('gs-reports').value='Partner';
    document.getElementById('gs-version').value='v1.0 2026';
    document.getElementById('gs-csat').value='≥ 4.5 / 5';
  }
}

function saveGeneralSettings(){
  const keys=['company','dept','pm','reports','version','csat'];
  const data={};
  keys.forEach(k=>{ const el=document.getElementById('gs-'+k); if(el) data[k]=el.value; });
  localStorage.setItem('nexa_general', JSON.stringify(data));
  showNotice('team-notice');
}

function exportData(){
  const data={};
  for(let i=0;i<localStorage.length;i++){
    const k=localStorage.key(i);
    if(k&&k.startsWith('nexa_')) data[k]=localStorage.getItem(k);
  }
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download='nexa_playbook_data_'+new Date().toISOString().split('T')[0]+'.json';
  a.click();
}

function clearAllData(){
  if(!confirm('Delete ALL saved data? This cannot be undone.')) return;
  const keys=[];
  for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith('nexa_'))keys.push(k);}
  keys.forEach(k=>localStorage.removeItem(k));
  alert('All data cleared. Refresh the page to reload defaults.');
}

function showNotice(id){
  const el=document.getElementById(id);
  if(!el) return;
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),3000);
}

// ── INIT ──

// ── PAGE INIT ──
document.getElementById('cur-date').textContent = new Date().toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'long',year:'numeric'});
renderProfiles();
renderProjects(PROJECTS);

const capGrid = document.getElementById('cap-grid');
CAPACITY.forEach(m => {
  const cls = m.status==='full'?'cap-s-full':m.status==='part'?'cap-s-part':m.status==='leave'?'cap-s-leave':'cap-s-avail';
  const fillCls = m.pct<50?'fill-low':m.pct<80?'fill-mid':'fill-high';
  const div = document.createElement('div');
  div.className = 'cap-row';
  div.innerHTML = `
    <div class="cap-person"><div class="cap-av">${m.initials}</div><div><div class="cap-name">${m.name}</div><div class="cap-role">${m.role}</div></div></div>
    <div><span class="cap-status-badge ${cls}">${m.statusLabel}</span></div>
    <div class="cap-proj">${m.projects.map(p=>`<span class="cap-proj-tag">${p}</span>`).join(' ')}</div>
    <div class="cap-bar-wrap"><div class="cap-bar-bg"><div class="cap-bar-fill ${fillCls}" style="width:${m.pct}%"></div></div><div class="cap-pct">${m.pct}%</div></div>`;
  capGrid.appendChild(div);
});

renderKPI('des');
renderProc('hs');

// Load saved data on init
loadAdminTeam();
renderAdminTeam();
loadGeneralSettings();
