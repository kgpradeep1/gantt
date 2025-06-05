import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DxGanttModule } from 'devextreme-angular';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DxGanttModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gantt';

  tasks= [
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
  dependencies= [
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
  resources= [
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
  resourceAssignments = [
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

