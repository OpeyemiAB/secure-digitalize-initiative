# The Secure Digitization Initiative (SDI)

[![Millennium Fellowship](https://img.shields.io/badge/Millennium%20Fellowship-Class%20of%202026-0D9488?style=for-the-badge&logo=target)](https://www.millenniumfellows.org/)
[![UN SDG 9](https://img.shields.io/badge/UN%20SDG%209-Industry%2C%20Innovation%20%26%20Infrastructure-FD6925?style=for-the-badge)](https://sdgs.un.org/goals/goal9)
[![UN SDG 4](https://img.shields.io/badge/UN%20SDG%204-Quality%20Education-C5192D?style=for-the-badge)](https://sdgs.un.org/goals/goal4)
[![Node.js](https://img.shields.io/badge/Node.js-v20%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

> **Official Social Impact Initiative | Millennium Campus Network (MCN) & United Nations Academic Impact (UNAI)**  
> **Fellow:** Opeyemi Abraham Benjamin  
> **Fellowship ID:** `MF263425`  
> **Institution:** Lagos State University of Education (LASUED) / Lagos State University (LASU)  
> **Discipline:** Department of Computer Science (300L)  
> **SDG Alignment:** Goal 9 (Industry, Innovation & Infrastructure), Goal 4 (Quality Education), Goal 8 (Decent Work)  

---

## 🌟 Executive Summary & Problem Statement

Across many tertiary institutions and local administrative directorates, vital student records, industrial placement clearance files, and daily training entries remain trapped in fragile, paper-bound **"Inward Books"** and physical file cabinets. This manual paperwork causes severe administrative bottlenecks:

- **Record Loss & Wear:** Crucial placement letters and student clearance forms are easily damaged, misfiled, or lost during multi-office transit.
- **Vulnerability to Tampering:** Physical logbooks are prone to retrospective backfilling and unverified signatures.
- **Front-Desk Congestion:** Students must wait hours in physical queues for routine receipt checks, letter dispatch, and supervisor assignments.
- **Uneven Administrative Burdens:** Manual supervisor allocation creates severe disparities where some faculty members are overburdened while others receive zero trainees.

**The Secure Digitization Initiative (SDI)** solves these systemic challenges by deploying a secure, responsive, and verifiable digital platform that transitions manual paper workflows into an auditable digital ledger.

---

## 🚀 Live Pilot Deployment Milestone (~21.3% of Institutional Goal)

As part of the phased institutional rollout, SDI has achieved active pilot testing with authentic undergraduate cohorts from the **College of Humanities and Education (COHED)** at LASUED:

- **160 Active Undergraduates Enrolled:** Successfully onboarded real student cohorts across 8 academic departments (Christian Religious Studies, Fine Arts, History, History Education, Music, Theatre Arts, and Computer Science).
- **21.3% of Cohort Milestone:** Exceeds the target 20% pilot milestone of the 750-student institutional cohort goal.
- **Dual-Supervision Compliance:** Adheres strictly to the Industrial Training Fund (ITF) and National Universities Commission (NUC) mandate by managing both Institutional Academic Supervisors and Workplace Industry Mentors.

---

## 🔑 Core Features & Modules

### 1. Authentic 24-Week Cryptographic Digital Logbook
- Real-time weekly logging structured from **Week 1 through Week 24** (Monday through Saturday).
- Integrated SHA-256 cryptographic proof ensuring tamper-proof ledger immutability.
- Dual-role sign-off workflows: Student self-logging, Faculty Supervisor audit, and Super Admin clearance authorization.

### 2. Institutional Administration & Verification Hub
- **Live Roster Analytics:** Real-time visibility into total registered students, verified placements, unassigned students, and departmental cohorts.
- **Smart Balanced Auto-Distribution Engine:** Algorithmic one-click allocation that automatically balances unassigned students evenly across certified faculty supervisors, eliminating workload bottlenecks.
- **Physical Walk-In Student Registration:** Instant intake modal for desk officers to register and accredit walk-in students visiting the SIWES Directorate in person.
- **Supervisor Audit Ledger:** Interactive audit drawer allowing faculty supervisors to review daily tasks, endorse entries, unlock weeks for revision, or append formal evaluation remarks.

### 3. Public QR Verification Subsystem
- Dynamic QR code generation tied to unique student matriculation tokens and cryptographic hashes.
- Instant, zero-authentication public verification portal (`verifier.html`) for external auditors, employers, and accreditation bodies to verify record authenticity in real time.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Backend & API** | Node.js runtime, Express.js REST API framework |
| **Frontend** | Semantic HTML5, CSS3 Custom Properties (Design System), Vanilla JavaScript (ES6+), Lucide Icons |
| **Security & Cryptography** | SHA-256 Hashing, Role-Based Access Control (RBAC), Clearance Gates, Helmet HTTP Security Headers |
| **Database Architecture** | Normalized Relational Schema (`schema.sql`), LocalStorage Persistence Layer |

---

## 📂 Repository Structure

```text
SecureDigitalize_Millennium/
├── backend/
│   ├── routes/              # Modular Express API route controllers
│   └── server.js            # Express application server and static file server
├── database/
│   └── schema.sql           # Normalized relational SQL schema (students, placements, supervisors)
├── frontend/
│   ├── assets/              # Institutional logos, graphics, and static media
│   ├── css/                 # Global styles, typography, and responsive layout tokens
│   ├── js/
│   │   └── app.js           # Core state store, 160-student roster, and 24-week logbook engine
│   ├── admin-auth.html      # Administrative login & accreditation gateway
│   ├── admin-portal.html    # Coordinator dashboard, roster matrix, audit ledger & walk-in modal
│   ├── index.html           # Initiative landing page, public tracker & project overview
│   ├── student-auth.html    # Student authentication & onboarding portal
│   ├── student-portal.html  # Student 24-week logbook workspace & placement timeline
│   └── verifier.html        # Public QR code & cryptographic hash verification portal
├── .gitignore               # Clean git exclusions (node_modules, logs, environments)
├── package.json             # Project metadata, dependencies, and execution scripts
└── README.md                # Initiative documentation and technical specification
```

---

## ⚡ Quickstart Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18.x or later)
- [npm](https://www.npmjs.com/) (Version 9.x or later)

### Installation & Launch

1. **Clone the repository:**
   ```bash
   git clone https://github.com/OpeyemiAB/secure-digitalize-initiative.git
   cd secure-digitalize-initiative
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local application server:**
   ```bash
   npm start
   ```

4. **Access the application:**
   - Landing Page & Public Verifier: `http://localhost:3000/`
   - Student Logbook Workspace: `http://localhost:3000/student-portal.html`
   - Coordinator Administrative Hub: `http://localhost:3000/admin-portal.html`

---

## 👤 Author & Acknowledgements

- **Lead Developer & Fellow:** Opeyemi Abraham Benjamin
- **Fellowship Organization:** [Millennium Campus Network (MCN)](https://www.mcnpartners.org/) & [United Nations Academic Impact (UNAI)](https://www.un.org/en/academicimpact)
- **Host Institution:** Lagos State University of Education (LASUED), Oto/Ijanikin
- **Faculty:** Faculty of Computing and Information Technology, Department of Computer Science

*This project is submitted in fulfillment of the Millennium Fellowship Class of 2026 Social Impact Showcase.*
