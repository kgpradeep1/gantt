import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DxGanttModule } from 'devextreme-angular';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DxGanttModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'gantt';



tasks:any;
dependencies:any;
resources:any;
resourceAssignments:any;
ngOnInit(): void {
  this.cloud();
}
onchange(data:any){
console.log(data);
if(data==1){
this.cloud()
}else if(data==2){
this.security()
}else if(data==3){
this.isms()
}
}
security(){
    this.tasks= [
   {
                    "id": 1,
                    "parentId": null,
                    "title": "OWASP Vulnerabilities Research, Analysis and Planning",
                    "start": new Date("2025-04-28T03:29:50.000Z"),
                    "end": new Date("2025-05-06T16:29:50.000Z"),
                    "progress": 1
                },
                {
                    "id": 2,
                    "parentId": null,
                    "title": "PEN Testing - Research and Analysis of the methodology, tools and Infrastructure",
                    "start": new Date("2025-05-12T03:29:50.000Z"),
                    "end": new Date("2025-05-20T16:29:50.000Z"),
                    "progress": 1
                },
                {
                    "id": 3,
                    "parentId": 2,
                    "title": "PEN Testing - Setting up the hardware",
                    "start": new Date("2025-05-16T03:29:50.000Z"),
                    "end": new Date("2025-05-20T16:29:50.000Z"),
                    "progress": 1
                },
                {
                    "id": 4,
                    "parentId": 2,
                    "title": "PEN Testing - Pre-Test Preparation",
                    "start": new Date("2025-05-21T03:29:50.000Z"),
                    "end": new Date("2025-05-30T16:29:50.000Z"),
                    "progress": 0.9
                },
                {
                    "id": 5,
                    "parentId": 2,
                    "title": "PEN Testing - Phase 1: Reconnaissance",
                    "start": new Date("2025-06-02T03:29:50.000Z"),
                    "end": new Date("2025-06-06T16:29:50.000Z"),
                    "progress": 0
                },
                {
                    "id": 6,
                    "parentId": null,
                    "title": "PEN Testing - Self learning, course",
                    "start": new Date("2025-06-09T03:29:50.000Z"),
                    "end": new Date("2025-06-13T16:29:50.000Z"),
                    "progress": 0
                },
                {
                    "id": 7,
                    "parentId": 2,
                    "title": "PEN Testing - Phase 2: Exploitation (Manual & Automated)",
                    "start": new Date("2025-06-16T03:29:50.000Z"),
                    "end": new Date("2025-06-20T16:29:50.000Z"),
                    "progress": 0
                },
                {
                    "id": 8,
                    "parentId": 2,
                    "title": "PEN Testing - Phase 3: Reporting & Compliance (ISO 27001)",
                    "start": new Date("2025-06-23T03:29:50.000Z"),
                    "end": new Date("2025-06-27T16:29:50.000Z"),
                    "progress": 0
                },
                {
                    "id": 9,
                    "parentId": 2,
                    "title": "PEN Testing - Phase 4: Remediation & Retesting",
                    "start": new Date("2025-06-30T03:29:50.000Z"),
                    "end": new Date("2025-07-11T16:29:50.000Z"),
                    "progress": 0
                },
                {
                    "id": 20,
                    "parentId": null,
                    "title": "Cryptographic Practices - Salt and Pepper hashing of User password",
                    "start": new Date("2025-04-26T03:29:50.000Z"),
                    "end": new Date("2025-05-05T16:29:50.000Z"),
                    "progress": 1
                },
                {
                    "id": 21,
                    "parentId": null,
                    "title": "Cryptographic Practices - Storing Application secrets securely",
                    "start": new Date("2025-05-09T03:29:50.000Z"),
                    "end": new Date("2025-06-06T16:29:50.000Z"),
                    "progress": 0.85
                },
                {
                    "id": 11,
                    "parentId": null,
                    "title": "Authentication and Authorization - User Password management",
                    "start": new Date("2025-06-09T03:29:50.000Z"),
                    "end": new Date("2025-06-13T16:29:50.000Z"),
                    "progress": 0.1
                },
                {
                    "id": 12,
                    "parentId": null,
                    "title": "Rate limiting for Login API - Prevent Brute force attacks",
                    "start": new Date("2025-06-16T03:29:50.000Z"),
                    "end": new Date("2025-06-18T16:29:50.000Z"),
                    "progress": 0
                },
                {
                    "id": 22,
                    "parentId": null,
                    "title": "OWASP Vulnerabilities Scanning - Authentication & Authorization",
                    "start": new Date("2025-08-11T03:29:50.000Z"),
                    "end": new Date("2025-08-22T16:29:50.000Z"),
                    "progress": 0
                },
                {
                    "id": 13,
                    "parentId": null,
                    "title": "Input Validation & Injection",
                    "start": new Date("2025-08-25T03:29:50.000Z"),
                    "end": new Date("2025-09-05T16:29:50.000Z"),
                    "progress": 0
                },
                {
                    "id": 14,
                    "parentId": null,
                    "title": "Logging, Monitoring & Security Misconfig",
                    "start": new Date("2025-09-08T03:29:50.000Z"),
                    "end": new Date("2025-09-19T16:29:50.000Z"),
                    "progress": 0
                },
                {
                    "id": 15,
                    "parentId": null,
                    "title": "Cryptographic Practices",
                    "start": new Date("2025-09-22T03:29:50.000Z"),
                    "end": new Date("2025-10-03T16:29:50.000Z"),
                    "progress": 0
                },
                {
                    "id": 16,
                    "parentId": null,
                    "title": "Dependency & Component Security",
                    "start": new Date("2025-10-06T03:29:50.000Z"),
                    "end": new Date("2025-10-10T16:29:50.000Z"),
                    "progress": 0
                },
                {
                    "id": 17,
                    "parentId": null,
                    "title": "Insecure Design",
                    "start": new Date("2025-10-06T03:29:50.000Z"),
                    "end": new Date("2025-10-10T16:29:50.000Z"),
                    "progress": 0
                },
                {
                    "id": 18,
                    "parentId": null,
                    "title": "SSRF and Unsafe Requests",
                    "start": new Date("2025-10-13T03:29:50.000Z"),
                    "end": new Date("2025-10-24T16:29:50.000Z"),
                    "progress": 0
                }
  ]
  this.dependencies= [
    {
      "id": "dep_2_3",
      "predecessorId": 2,
      "successorId": 3,
      "type": 0
    },
    {
      "id": "dep_3_4",
      "predecessorId": 3,
      "successorId": 4,
      "type": 0
    },
    {
      "id": "dep_4_5",
      "predecessorId": 4,
      "successorId": 5,
      "type": 0
    },
    {
      "id": "dep_5_6",
      "predecessorId": 5,
      "successorId": 6,
      "type": 0
    },
    {
      "id": "dep_6_7",
      "predecessorId": 6,
      "successorId": 7,
      "type": 0
    },
    {
      "id": "dep_7_8",
      "predecessorId": 7,
      "successorId": 8,
      "type": 0
    },
    {
      "id": "dep_8_9",
      "predecessorId": 8,
      "successorId": 9,
      "type": 0
    }
  ]
  this.resources= [
    {
      "id": 1,
      "text": "Ranjini"
    },
    {
      "id": 2,
      "text": "Veeresh"
    },
    {
      "id": 3,
      "text": "Rohith"
    }
  ]
  this.resourceAssignments = [
  { id: 1, taskId: 1, resourceId: 1 },  // Ranjini - OWASP Research
  { id: 2, taskId: 2, resourceId: 2 },  // Veeresh - PEN Testing analysis
  { id: 3, taskId: 3, resourceId: 3 },  // Rohith - Hardware setup
  { id: 4, taskId: 4, resourceId: 2 },  // Veeresh - Pre-Test Prep
  { id: 5, taskId: 5, resourceId: 3 },  // Rohith - Reconnaissance
  { id: 6, taskId: 6, resourceId: 1 },  // Ranjini - Self learning
  { id: 7, taskId: 7, resourceId: 3 },  // Rohith - Exploitation
  { id: 8, taskId: 8, resourceId: 2 },  // Veeresh - Reporting & Compliance
  { id: 9, taskId: 9, resourceId: 2 },  // Veeresh - Remediation
  { id: 10, taskId: 20, resourceId: 1 }, // Ranjini - Salt & Pepper
  { id: 11, taskId: 21, resourceId: 2 }, // Veeresh - App secrets
  { id: 12, taskId: 11, resourceId: 3 }, // Rohith - Password management
  { id: 13, taskId: 12, resourceId: 1 }, // Ranjini - Rate limiting
  { id: 14, taskId: 22, resourceId: 2 }, // Veeresh - OWASP Scanning
  { id: 15, taskId: 13, resourceId: 1 }, // Ranjini - Input Validation
  { id: 16, taskId: 14, resourceId: 3 }, // Rohith - Monitoring
  { id: 17, taskId: 15, resourceId: 2 }, // Veeresh - Crypto practices
  { id: 18, taskId: 16, resourceId: 1 }, // Ranjini - Component security
  { id: 19, taskId: 17, resourceId: 3 }, // Rohith - Insecure design
  { id: 20, taskId: 18, resourceId: 2 }  // Veeresh - SSRF
];
}
cloud(){
  this.tasks=[{
      "id": 1,
      "parentId": 0,
      "title": "Database Migration from VPS4 to Azure",
      "start": "2025-05-25T15:00:00.000Z",
      "end": "2025-06-12T16:00:00.000Z",
      "progress": 50,
      "color": "#1f77b4",
      "resources": "Deepan",
      "predecessors": null
    },
    {
      "id": 2,
      "parentId": 0,
      "title": "Email - Request for Collaboration on Runbook for DATALYZER - APM0001767 to AWS",
      "start": "2025-05-26T15:00:00.000Z",
      "end": "2025-06-06T16:00:00.000Z",
      "progress": 100,
      "color": "#2ca02c",
      "resources": "Deepan and Naveen",
      "predecessors": null
    },
    {
      "id": 3,
      "parentId": 0,
      "title": "Qualis SaaS project",
      "start": "2025-03-04T11:00:00.000Z",
      "end": "2025-06-06T16:00:00.000Z",
      "progress": 80,
      "color": "#ff7f0e",
      "resources": "Yashas, Rohith and Deepan",
      "predecessors": [2]
    }]
this.dependencies=[
   {
      "id": 1,
      "predecessorId": 2,
      "successorId": 3,
      "type": 0
    }
]
this.resources=[
   {
      "id": 1,
      "text": "Deepan"
    },
    {
      "id": 2,
      "text": "Naveen"
    },
    {
      "id": 3,
      "text": "Yashas"
    },
    {
      "id": 4,
      "text": "Rohith"
    }
]
this.resourceAssignments=[
    {
      "id": 1,
      "taskId": 1,
      "resourceId": 1
    },
    {
      "id": 2,
      "taskId": 2,
      "resourceId": 1
    },
    {
      "id": 3,
      "taskId": 2,
      "resourceId": 2
    },
    {
      "id": 4,
      "taskId": 3,
      "resourceId": 3
    },
    {
      "id": 5,
      "taskId": 3,
      "resourceId": 4
    },
    {
      "id": 6,
      "taskId": 3,
      "resourceId": 1
    }
]
}
isms(){
  this.tasks=[{
      "id": 1,
      "parentId": 0,
      "title": "Meeting with the vendors to understand the scope of their services",
      "start": "2025-04-08T15:00:00.000Z",
      "end": "2025-04-08T16:00:00.000Z",
      "progress": 100,
      "color": "#2ca02c",
      "resources": "Jayanth, Deepan, Veeresh, Bhanumathi",
      "predecessors": null
    },
    {
      "id": 2,
      "parentId": 0,
      "title": "Meeting with the ISMS & SOC2 Implementation team to understand the scope & Roadmap of the project",
      "start": "2025-05-13T15:00:00.000Z",
      "end": "2025-05-13T16:00:00.000Z",
      "progress": 100,
      "color": "#2ca02c",
      "resources": "Jayanth, Deepan, Veeresh, Bhanumathi",
      "predecessors": null
    },
    {
      "id": 3,
      "parentId": 0,
      "title": "Kickoff meeting of the ISMS & SOC2 project",
      "start": "2025-05-15T11:00:00.000Z",
      "end": "2025-05-15T12:00:00.000Z",
      "progress": 100,
      "color": "#2ca02c",
      "resources": "Bhanumathi, Deepan, Veeresh, Kavya, Vinit",
      "predecessors": null
    },
    {
      "id": 4,
      "parentId": 0,
      "title": "Approval and customization of document templates (Word, Excel, PPT) for all phases",
      "start": "2025-05-20T10:00:00.000Z",
      "end": "2025-05-20T10:00:00.000Z",
      "progress": 100,
      "color": "#2ca02c",
      "resources": "Jayanth & Bhanumathi",
      "predecessors": [3]
    },
    {
      "id": 5,
      "parentId": 0,
      "title": "Define project scope (locations, business functions, IT assets)",
      "start": "2019-02-22T10:00:00.000Z",
      "end": "2019-02-25T09:00:00.000Z",
      "progress": 100,
      "color": "#2ca02c",
      "resources": "Jayanth, Deepan, Veeresh, Vinit Bhanumathi",
      "predecessors": [4]
    },
    {
      "id": 6,
      "parentId": 0,
      "title": "Conduct gap assessment against ISO 27001 & SOC 2 controls across scoped business units",
      "start": "2025-05-26T10:00:00.000Z",
      "end": "2025-05-27T18:00:00.000Z",
      "progress": 100,
      "color": "#2ca02c",
      "resources": "Jayanth, Deepan, Veeresh, Vinit Bhanumathi",
      "predecessors": [5]
    },
    {
      "id": 7,
      "parentId": 0,
      "title": "Collect and review current documentation and processes from DataLyzer Team",
      "start": "2025-05-28T09:00:00.000Z",
      "end": "2025-05-30T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [6]
    },
    {
      "id": 8,
      "parentId": 0,
      "title": "Prepare final Gap Analysis Report and obtain sign-off",
      "start": "2025-06-02T09:00:00.000Z",
      "end": "2025-06-04T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [7]
    },
    {
      "id": 9,
      "parentId": 0,
      "title": "Develop Risk Assessment methodology and framework based on ISO 27001:2022",
      "start": "2025-06-05T09:00:00.000Z",
      "end": "2025-06-09T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": null
    },
    {
      "id": 10,
      "parentId": 0,
      "title": "Conduct risk assessment training for all scoped business units",
      "start": "2025-06-10T09:00:00.000Z",
      "end": "2025-06-12T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [9]
    },
    {
      "id": 11,
      "parentId": 0,
      "title": "Facilitate risk assessment and risk treatment planning at department level",
      "start": "2025-06-13T09:00:00.000Z",
      "end": "2025-06-18T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [10]
    },
    {
      "id": 12,
      "parentId": 0,
      "title": "Review and validate submitted risk reports for consistency and adequacy",
      "start": "2025-06-19T09:00:00.000Z",
      "end": "2025-06-23T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [11]
    },
    {
      "id": 13,
      "parentId": 0,
      "title": "Define ISMS Policy, Information Security Objectives, Statement of Applicability",
      "start": "2025-06-24T09:00:00.000Z",
      "end": "2025-06-27T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [12]
    },
    {
      "id": 14,
      "parentId": 0,
      "title": "Develop department-specific and domain-specific policies and procedures",
      "start": "2025-06-30T09:00:00.000Z",
      "end": "2025-07-07T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [13]
    },
    {
      "id": 15,
      "parentId": 0,
      "title": "Conduct Awareness Training sessions on ISMS",
      "start": "2025-07-08T09:00:00.000Z",
      "end": "2025-07-11T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [14]
    },
    {
      "id": 16,
      "parentId": 0,
      "title": "Implement controls from ISO 27001:2022 Annex A and SOC 2 Trust Services Criteria across all scoped units",
      "start": "2025-07-14T09:00:00.000Z",
      "end": "2025-08-01T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [15]
    },
    {
      "id": 17,
      "parentId": 0,
      "title": "Conduct dry-run for control effectiveness testing using sample artifacts",
      "start": "2025-08-04T09:00:00.000Z",
      "end": "2025-08-08T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [16]
    },
    {
      "id": 18,
      "parentId": 0,
      "title": "Plan and schedule internal audit based on ISO 27001 and SOC 2 internal monitoring requirements",
      "start": "2025-08-11T09:00:00.000Z",
      "end": "2025-08-15T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [17]
    },
    {
      "id": 19,
      "parentId": 0,
      "title": "Execute internal audit for the scoped business processes",
      "start": "2025-08-18T09:00:00.000Z",
      "end": "2025-08-25T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [18]
    },
    {
      "id": 20,
      "parentId": 0,
      "title": "Support in resolving internal audit NCs and verifying implemented changes",
      "start": "2025-08-26T09:00:00.000Z",
      "end": "2025-09-01T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [19]
    },
    {
      "id": 21,
      "parentId": 0,
      "title": "Facilitate Management Review Meeting (MRM)",
      "start": "2025-09-02T09:00:00.000Z",
      "end": "2025-09-04T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [20]
    },
    {
      "id": 22,
      "parentId": 0,
      "title": "Final readiness check for certification audit with mock audit simulation",
      "start": "2025-09-05T09:00:00.000Z",
      "end": "2025-09-09T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [21]
    },
    {
      "id": 23,
      "parentId": 0,
      "title": "Stage 1 Audit: Documentation and high-level readiness review by Certification Body",
      "start": "2025-09-10T09:00:00.000Z",
      "end": "2025-09-12T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [22]
    },
    {
      "id": 24,
      "parentId": 0,
      "title": "Stage 2 Audit: Implementation effectiveness review of ISO 27001 controls",
      "start": "2025-09-15T09:00:00.000Z",
      "end": "2025-09-19T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [23]
    },
    {
      "id": 25,
      "parentId": 0,
      "title": "Address any findings or observations from the Stage 2 Audit",
      "start": "2025-09-22T09:00:00.000Z",
      "end": "2025-09-26T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [24]
    },
    {
      "id": 26,
      "parentId": 0,
      "title": "Certificate/Attestation Issuance from Certification Body",
      "start": "2025-09-29T09:00:00.000Z",
      "end": "2025-10-03T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [25]
    },
    {
      "id": 27,
      "parentId": 0,
      "title": "CPA will share audit schedule and as per the controls the sample will be collected and demonstrated to the auditor",
      "start": "2025-10-06T09:00:00.000Z",
      "end": "2025-10-10T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [26]
    },
    {
      "id": 28,
      "parentId": 0,
      "title": "Conduct post-certification review of pending audit findings (if any)",
      "start": "2025-10-13T09:00:00.000Z",
      "end": "2025-10-17T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [27]
    },
    {
      "id": 29,
      "parentId": 0,
      "title": "Implement action items and recommendations based on auditor feedback",
      "start": "2025-10-20T09:00:00.000Z",
      "end": "2025-10-24T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [28]
    },
    {
      "id": 30,
      "parentId": 0,
      "title": "Validate corrective actions and conduct a final effectiveness check",
      "start": "2025-10-27T09:00:00.000Z",
      "end": "2025-10-31T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [29]
    },
    {
      "id": 31,
      "parentId": 0,
      "title": "Submit handover documentation and close-out report to the DataLyzer Team",
      "start": "2025-11-03T09:00:00.000Z",
      "end": "2025-11-07T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [30]
    },
    {
      "id": 32,
      "parentId": 0,
      "title": "Provide support for post-certification on AMC mode with a new contract based on the requirements",
      "start": "2025-11-10T09:00:00.000Z",
      "end": "2025-12-31T17:00:00.000Z",
      "progress": 0,
      "color": "#ff7f0e",
      "resources": "TBD",
      "predecessors": [31]
    }]
  this.dependencies=[
     {
      "id": 1,
      "predecessorId": 3,
      "successorId": 4,
      "type": 0
    },
    {
      "id": 2,
      "predecessorId": 4,
      "successorId": 5,
      "type": 0
    },
    {
      "id": 3,
      "predecessorId": 5,
      "successorId": 6,
      "type": 0
    },
    {
      "id": 4,
      "predecessorId": 6,
      "successorId": 7,
      "type": 0
    },
    {
      "id": 5,
      "predecessorId": 7,
      "successorId": 8,
      "type": 0
    },
    {
      "id": 6,
      "predecessorId": 9,
      "successorId": 10,
      "type": 0
    },
    {
      "id": 7,
      "predecessorId": 10,
      "successorId": 11,
      "type": 0
    },
    {
      "id": 8,
      "predecessorId": 11,
      "successorId": 12,
      "type": 0
    },
    {
      "id": 9,
      "predecessorId": 12,
      "successorId": 13,
      "type": 0
    },
    {
      "id": 10,
      "predecessorId": 13,
      "successorId": 14,
      "type": 0
    },
    {
      "id": 11,
      "predecessorId": 14,
      "successorId": 15,
      "type": 0
    },
    {
      "id": 12,
      "predecessorId": 15,
      "successorId": 16,
      "type": 0
    },
    {
      "id": 13,
      "predecessorId": 16,
      "successorId": 17,
      "type": 0
    },
    {
      "id": 14,
      "predecessorId": 17,
      "successorId": 18,
      "type": 0
    },
    {
      "id": 15,
      "predecessorId": 18,
      "successorId": 19,
      "type": 0
    },
    {
      "id": 16,
      "predecessorId": 19,
      "successorId": 20,
      "type": 0
    },
    {
      "id": 17,
      "predecessorId": 20,
      "successorId": 21,
      "type": 0
    },
    {
      "id": 18,
      "predecessorId": 21,
      "successorId": 22,
      "type": 0
    },
    {
      "id": 19,
      "predecessorId": 22,
      "successorId": 23,
      "type": 0
    },
    {
      "id": 20,
      "predecessorId": 23,
      "successorId": 24,
      "type": 0
    },
    {
      "id": 21,
      "predecessorId": 24,
      "successorId": 25,
      "type": 0
    },
    {
      "id": 22,
      "predecessorId": 25,
      "successorId": 26,
      "type": 0
    },
    {
      "id": 23,
      "predecessorId": 26,
      "successorId": 27,
      "type": 0
    },
    {
      "id": 24,
      "predecessorId": 27,
      "successorId": 28,
      "type": 0
    },
    {
      "id": 25,
      "predecessorId": 28,
      "successorId": 29,
      "type": 0
    },
    {
      "id": 26,
      "predecessorId": 29,
      "successorId": 30,
      "type": 0
    },
    {
      "id": 27,
      "predecessorId": 30,
      "successorId": 31,
      "type": 0
    },
    {
      "id": 28,
      "predecessorId": 31,
      "successorId": 32,
      "type": 0
    }
  ]
  this.resources=[
     {
      "id": 1,
      "text": "Jayanth"
    },
    {
      "id": 2,
      "text": "Deepan"
    },
    {
      "id": 3,
      "text": "Veeresh"
    },
    {
      "id": 4,
      "text": "Bhanumathi"
    },
    {
      "id": 5,
      "text": "Kavya"
    },
    {
      "id": 6,
      "text": "Vinit"
    }
  ]
  this.resourceAssignments=[]
}

}

