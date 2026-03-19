# AWS Data Engineering Academy

> An interactive, gamified eBook for mastering AWS Data Engineering concepts and preparing for the **AWS Certified Data Engineer Associate** exam.

**Live Site:** [aman-0402.github.io/AWS](https://aman-0402.github.io/AWS)

---

## Overview

AWS Data Engineering Academy is a free, browser-based learning platform built with pure HTML, CSS, and JavaScript. It features 14 structured modules, 40+ topics, interactive quizzes with audio feedback, and a futuristic HUD-style UI — all without any frameworks or build tools.

---

## Features

- **14 Learning Modules** covering core AWS Data Engineering concepts
- **Interactive Quiz Engine** with single-answer and multi-select questions
- **Audio Feedback** — sound effects for correct/incorrect answers
- **Scroll Animations** — section reveal effects via IntersectionObserver
- **Particles.js Background** — interactive animated particle system
- **Progress Scoring** — live score bar with performance messages
- **Fully Responsive** — works on mobile, tablet, and desktop
- **100% Free** — no login, no paywall

---

## Modules

| # | Module |
|---|--------|
| 1 | Introduction to AWS |
| 2 | Introduction to Data Engineering |
| 3 | Data-Driven Organizations |
| 4 | Data Types & Formats |
| 5 | Pipeline Design |
| 6 | Security & Scaling |
| 7 | Data Ingestion |
| 8 | Batch & Streaming |
| 9 | Data Storage |
| 10 | Big Data on AWS |
| + | Notes & Certification Prep |

**AWS Services Covered:** EC2, S3, IAM, Lambda, RDS, CloudWatch, Glue, Step Functions, EventBridge, Athena, QuickSight, SageMaker, EMR, and more.

---

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Grid, Flexbox, CSS Variables, animations
- **Vanilla JavaScript** — No frameworks
- **particles.js** — Interactive background (CDN)
- **Google Fonts** — Rajdhani, IBM Plex Mono, Nunito

---

## Project Structure

```
AWS/
├── index.html          # Landing page
├── content.html        # Module grid / content hub
├── script.js           # Landing page scripts
├── style.css           # Landing page styles
├── assets/
│   ├── css/
│   │   └── template.css    # Shared topic page styles
│   ├── js/
│   │   ├── template.js     # Quiz engine & animations
│   │   └── final.js        # Enhanced JS with sound effects
│   └── images/             # AWS logos & icons
├── topics/                 # Individual topic HTML pages
└── Sound/                  # Audio files for quiz feedback
```

---

## Getting Started

No installation required. Clone the repo and open `index.html` in a browser:

```bash
git clone https://github.com/aman-0402/AWS.git
cd AWS
# Open index.html in your browser
```

Or visit the live site: [aman-0402.github.io/AWS](https://aman-0402.github.io/AWS)

---

## License

Free to use for personal learning and educational purposes.
