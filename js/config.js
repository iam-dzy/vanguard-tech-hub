/* ===== EDIT THIS BLOCK TO CUSTOMISE THE SITE ===== */
const CONFIG={
 name:"Vanguard Tech Hub",
 whatsapp:"233208026225",          // international format, no + or spaces
 phone:"+233 20 802 6225",         // replace
 email:"vanguardtechhub@gmail.com",         // replace
 location:"Accra, Ghana",
 hours:null,                       // e.g. "Mon–Fri 8am–6pm" once confirmed
 consultLabel:"Get a Consultation",// change to "Get a Free Consultation" only if you offer it
 formEndpoint:"https://vanguardtech.app.n8n.cloud/webhook/client-intake",                  // paste a Formspree/Web3Forms URL here to receive form submissions by email
 social:{facebook:"",instagram:"",linkedin:""},
 testimonials:[],                  // add only genuine ones
 waMessages:{general:"Hello Vanguard Tech Hub, I found your website and would like to inquire about your services.",ai:"Hello Vanguard Tech Hub, I am interested in AI automation for my business. I would like to discuss tasks I can automate.",cctv:"Hello Vanguard Tech Hub, I am interested in CCTV installation or maintenance.",net:"Hello Vanguard Tech Hub, I need assistance with a networking project.",cloud:"Hello Vanguard Tech Hub, I would like to discuss your cloud solutions."},
 services:[
 {id:"IT Support",ic:"IT",d:"Troubleshooting, Windows setup, upgrades and software help for homes and offices.",b:["Hardware and software fixes","Windows installation","Remote support where suitable"],wa:"general"},
 {id:"Networking",ic:"NW",d:"Routers, switches, Wi-Fi, LAN cabling and small-office networks.",b:["Wi-Fi coverage fixes","LAN setup","Device configuration"],wa:"net"},
 {id:"CCTV and Security",ic:"CC",d:"CCTV supply, installation, DVR/NVR setup, cabling, upgrades and repairs.",b:["Camera installation","Remote viewing where supported","Maintenance"],wa:"cctv"},
 {id:"Cloud Solutions",ic:"CL",d:"AWS setup, cloud servers, remote access, monitoring and cost control.",b:["Core setup available now","Advanced architectures may need extra expertise or resources","Cost-conscious design"],wa:"cloud"},
 {id:"Cybersecurity",ic:"CS",d:"Basic security assessments, system hardening, network security and awareness guidance. Testing only with written authorisation.",b:["Hardening","Recommendations","Staff guidance"],wa:"general"},
 {id:"AI Automation",ic:"AI",d:"Workflows, chatbots, WhatsApp and lead follow-up automation.",b:["Save repetitive time","Faster replies","Human approval for key steps"],wa:"ai"},
 {id:"IT Consultation",ic:"IC",d:"Infrastructure planning, technology advice and ongoing support arrangements.",b:["Right-sized recommendations","Installation and setup","Optional monthly support"],wa:"general"}],
 flows:[
 {t:"Website lead automation",s:["Website inquiry","Validate","Save to Google Sheets","Notify business","Send confirmation"],p:"Leads get lost in chats and inboxes.",g:"Never miss or re-type an inquiry."},
 {t:"Appointment reminders",s:["Appointment record","Scheduled reminder","Customer notified","Status updated"],p:"No-shows waste time.",g:"Fewer missed appointments."},
 {t:"Support automation",s:["Customer inquiry","Categorise","AI suggested reply","Human approves","Send"],p:"Repeated questions slow your team.",g:"Faster, consistent replies with a human in control."},
 {t:"Business reporting",s:["Collect data","Organise","Generate report","Send summary"],p:"Reports are built by hand.",g:"Regular summaries without manual work."}],
 packages:[
 {n:"Starter Automation",f:["One simple repetitive task","Form, sheet or notification link","Basic documentation"],price:null},
 {n:"Business Automation",f:["Multi-step workflows","Lead capture and follow-up","App integrations","Error handling and documentation"],price:null},
 {n:"Custom AI Automation",f:["Tailored AI-assisted workflows","Chatbot or support integrations","Advanced monitoring options"],price:null}],
 projects:[
 {t:"Small-office Wi-Fi and LAN",o:"Reliable coverage for a 6-person office",s:"Router config, switch, structured cabling",tech:"Router, switch, Cat6",tag:"Networking"},
 {t:"4-camera CCTV with remote viewing",o:"Secure a small shop",s:"NVR setup, camera cabling, phone access",tech:"IP cameras, NVR",tag:"CCTV"},
 {t:"Starter cloud server",o:"Host a small business app",s:"AWS instance, secure access, cost alerts",tech:"AWS EC2",tag:"Cloud"},
 {t:"Lead capture to Google Sheets",o:"Stop losing website inquiries",s:"Form → validate → sheet → notify",tech:"n8n, Google Sheets",tag:"AI Automation"}],
 faqs:[
 ["Where do you work?","We are based in Accra and can discuss projects elsewhere in Ghana. Remote support is available for many software issues."],
 ["How much does it cost?","Final pricing depends on your requirements. Send details and we will give a written quote."],
 ["Are automation tools free?","Some tools have free tiers or can be self-hosted, but hosting, AI usage, WhatsApp provider fees and maintenance can add running costs. We explain these before you decide."],
 ["Can you guarantee results?","Outcomes depend on your systems and requirements, so we agree scope and expectations up front."],
 ["How is my data handled?","We ask only for what is needed to respond and use access that is limited to the task. Sensitive AI actions can require human approval."],
 ["Do you offer ongoing support?","Optional monthly support arrangements are available. They are never mandatory."]]
};
/* ===== END CONFIG ===== */
