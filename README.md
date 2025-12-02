# 🎯 URGENT 2KAY - A Directed Bill Payment System

## 📋 Table of Contents
- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Solution](#solution)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [User Flow](#user-flow)
- [Contributing](#contributing)

## 🎯 Overview

**URGENT 2KAY** is a fintech platform that transforms how people request and provide financial assistance for bills and expenses. It replaces awkward cash requests with transparent, directed payments to service providers.

## ⚡ Problem Statement

### Current Pain Points:

• **Fragmented Requests:** Multiple separate asks create relationship strain  
• **Lack of Transparency:** Sponsors can't verify how funds are actually used  
• **Financial Awkwardness:** Uncomfortable conversations around money assistance  
• **Inefficient Processes:** Manual bill payments and reimbursement cycles  
• **No Accountability:** No way to ensure money is used for intended purposes

## 💡 Solution

URGENT 2KAY introduces a **"Directed Bill Payment System"** where:

Traditional: "Can I have $500 for bills?" → Cash sent → Unknown usage

URGENT 2KAY: "Here are my actual bills" → Sponsor pays directly → Complete transparency

### Real-World Example:
**Student to Parent:**
1. Student creates bundle: [$200 tuition, $100 electricity, $150 rent]
2. Parent reviews bundle items
3. Parent clicks "Pay"
4. Money goes DIRECTLY to university, utility company, landlord
5. Both see payment confirmations

## 🚀 Features

### ✅ Core Features

**Smart Request Bundling:** Combine multiple bills into one simple request

**Direct Provider Payments:** Money goes straight to service providers, not personal accounts

**Relationship Management:** Pre-defined templates (parent-child, partners, friends, roommates)

**Transparency Tools:** Visual breakdown of fund allocation with spending analytics

**Real-time Tracking:** Live payment status updates and instant confirmations

### ✅ For Requesters (Bill Owners)

- Create bundles with multiple bill types (electricity, shopping, education, etc.)
- Set priority levels (urgent/important/routine) and add context notes
- Track request status in real-time from pending to completed
- Manage relationships with sponsors with custom rules and limits
- View comprehensive payment history and spending analytics

### ✅ For Sponsors (Bill Payers)

- Review detailed bundle breakdowns before authorizing payments
- Pay directly to verified service providers with one-click approval
- Set spending limits and approval rules per relationship type
- Receive instant payment confirmations and digital receipts
- Track support history across all relationships with insights

### ✅ Service Providers

- Guaranteed direct payments with reduced processing times
- Reduced payment chasing and administrative overhead
- Automated digital receipt generation and delivery
- API integration for real-time payment status and reconciliation

## 🛠 Tech Stack

### **Frontend**

```yaml
Framework: React 18
Styling: Tailwind CSS v4 
State Management: React Context + Custom Hooks
Routing: React Router DOM v6
Form Handling: React Hook Form
Icons: Lucide React, React Icons
Build Tool: Vite
```

# 📦 Installation

## Prerequisites
- Node.js 16+ and npm/yarn
- Git

## Quick Start

```bash
# Clone the repository
git clone https://github.com/Na8aN-web/URGENT-2KAY-GROUP-PROJECT.git
cd URGENT-2KAY-GROUP-PROJECT

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

## 📁 Project Structure

src/
├── components/           # Reusable UI components
├── pages/               # Page components
│   ├── auth/            # Authentication pages
│   ├── partners/        # Partner management pages
│   ├── generate-request/ # Bundle creation flow
│   ├── sponsor-request/ # Sponsor-facing pages
│   ├── relationship/    # Relationship management
│   ├── schedule/        # Bill scheduling pages
│   └── user-dashboard/  # User dashboard pages
├── contexts/            # React Context providers
│   ├── UserContext.jsx
│   └── UserProvider.jsx
├── hooks/               # Custom React hooks
│   └── useUser.js
├── utils/               # Utility functions
│   └── validation.js
├── assets/              # Static assets
│   ├── images/         # Image files
│   └── fonts/          # Font files
└── App.jsx              # Main App component

## 🔄 User Flow
1. Bundle Creation Flow
   
Dashboard → Create Bundle → Add Services → Review → Name → Success → Send to Sponsor

2. Bill Types Supported
✅ Currently Available
. Electricity Bills: IKEDC, EKEDC, etc.

. Shopping: Jumia, Temu, SHEIN, Konga

🔄 Coming Soon: School Fees, Rent, Airtime, Data, Food

3. Sponsor Flow

Receive Notification → Review Bundle → Approve/Decline → Payment → Confirmation

## 🤝 Contributing

We welcome contributions! Here's how:

1. **Fork the repository**

2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   
3. **Commit your changes**
    ```bash
    git commit -m "Add AmazingFeature"

4. **Push to the branch**
    ```bash
   git push origin feature/AmazingFeature

5. **Open a pull request**
   
