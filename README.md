# Zortex Launchpad

ZORTEX SOLUTIONS — MASTER WEBSITE BUILD PROMPT

Build a modern, premium, responsive website for Zortex Solutions, a professional training + externship company focused on helping students develop practical technical skills, work on real-world projects, and become career-ready.

The website should feel like a modern EdTech + technology company, NOT like a generic coaching institute website.

1. CORE DESIGN DIRECTION

Create a visually impressive, clean and premium website with:

Modern light-first UI

White / off-white backgrounds

Professional blue/purple/indigo accent palette

Subtle gradients

Soft glassmorphism where appropriate

Smooth animations

Micro-interactions

Rounded cards

Excellent typography

Strong visual hierarchy

Generous whitespace

Subtle background patterns/grid

Modern icons

Responsive design across desktop, tablet and mobile

The design should feel:

Professional + Innovative + Trustworthy + Student-focused + Technology-driven

Avoid:

Excessive gradients

Overly dark interfaces

Excessive animations

Cluttered layouts

Generic stock-photo-heavy designs

Huge amounts of text

Use animations only where they improve the experience.

2. TECHNOLOGY

Build using:

React

Vite

TypeScript

Tailwind CSS

shadcn/ui

Lucide icons

Use a clean, scalable component architecture.

The website must be fully responsive.

Use reusable components for:

Navbar

Footer

Buttons

Cards

Course cards

Program cards

FAQ

Forms

Testimonials

Section headers

Modals

Breadcrumbs

3. NAVIGATION

Create a sticky responsive navbar.

Navigation:

Home
Programs
Courses
Resources
About
Contact

Navbar should also contain a prominent:

Chat with Us

button.

On mobile, use a clean animated hamburger menu.

4. HOME PAGE

Create a high-conversion landing page.

Hero Section

Headline should communicate the core value of Zortex.

Suggested direction:

“Learn. Build. Experience. Get Career Ready.”

Supporting text explaining that Zortex provides technical training, practical projects and externship opportunities.

Primary CTA:

Explore Programs

Secondary CTA:

Talk to Us

Add an attractive visual on the right representing:

Coding

Learning

Technology

Career growth

Real-world projects

Do NOT overload the hero with text.

Trust / Statistics Section

Create a visually clean statistics section.

Possible placeholders:

Students Trained

Programs

Courses

Projects

Industry Opportunities

Use placeholder values until actual numbers are provided.

Make these values easy to update later.

5. WHY ZORTEX

Create a section explaining why students should choose Zortex.

Use cards such as:

Practical Learning

Focus on practical technical knowledge rather than only theoretical concepts.

Industry-Oriented Skills

Learn technologies and skills relevant to real-world development.

Real-Time Projects

Give students opportunities to work on practical projects.

Career Preparation

Help students understand career paths and prepare for interviews.

Mentorship

Provide guidance throughout the learning journey.

Externship Opportunities

Give students exposure to real-world project environments.

6. PROGRAMS

Create a dedicated /programs page.

Display three major programs:

Zortex Edge

Offline training programme focused on curriculum-based technical learning.

Zortex Elite

Online training programme focused on structured technical learning.

Zortex Externship

Externship programme where students are assigned a real-time project and receive support aimed at helping them get placed in a real company.

IMPORTANT:

DO NOT mention any timings, duration, class hours, or schedules for Edge, Elite or Externship anywhere on the website.

These details will be added later.

Each program should have:

Program overview

Benefits

Learning approach

Who it's for

What students can expect

CTA

Enquiry button

CTA:

Explore Program

7. PROGRAM DETAIL PAGES

Create dynamic program detail pages.

Routes:

/programs/edge

/programs/elite

/programs/externship

Each page should contain:

Hero

Program overview

Key benefits

Learning methodology

Skills/experience gained

Project exposure

Career relevance

FAQ

CTA

For Externship specifically highlight:

Real-Time Project Experience

and

Placement-Oriented Guidance

Do not make unrealistic guarantees such as guaranteed placement.

8. COURSES

Create /courses.

Courses:

C

Java

Python

Java Full Stack

Python Full Stack

Display them using premium course cards.

Each card should contain:

Course name

Short description

Technology icon

Skill level placeholder

Explore Course button

9. COURSE DETAIL PAGES

Create individual dynamic course pages.

Routes:

/courses/c

/courses/java

/courses/python

/courses/java-full-stack

/courses/python-full-stack

Every course page must contain:

Course Overview

Explain the course clearly.

What You Will Learn

Use structured learning-outcome cards.

Course Structure

Break the curriculum into modules/sections.

Use placeholder module content where exact syllabus details haven't been provided.

Make this easy to edit later.

Projects

Show projects students can build using the course.

Technologies Covered

Display technologies/tools as badges.

Career Opportunities

Show relevant roles students can pursue.

Fee

Create a prominent fee section.

Use:

Fee: To be updated

until actual pricing is provided.

Request a Callback

Include a lead-generation form.

Fields:

Name

Phone

Email

Course

Message

CTA:

Request a Callback

10. RESOURCES

Create /resources.

Resources should include:

Syllabuses

Students can select a course from a dropdown and view the corresponding syllabus.

Project Ideas

Provide project ideas categorized by course.

Career Paths

Explain possible career options after learning a particular course.

Interview Questions

Create a searchable interview-question resource containing approximately 100–120 frequently asked interview questions.

The exact questions/content can be added later.

11. SYLLABUS PAGE

Create:

/resources/syllabuses

Include:

Select Course

Dropdown:

C

Java

Python

Java Full Stack

Python Full Stack

After selecting a course:

Display its syllabus dynamically.

Include:

View Syllabus

and

Download Syllabus

buttons.

Make the syllabus content easy for an admin to update later.

12. PROJECT IDEAS

Create:

/resources/project-ideas

Features:

Course filter

Difficulty filter

Search

Project cards

Each project card:

Project name

Description

Course

Difficulty

Technologies

View Project button

Projects should vary depending on the selected course.

13. CAREER PATHS

Create:

/resources/career-paths

Allow students to select a course and see:

Course → Skills → Roles → Career Direction

Example structure:

Java
↓
Core Java + OOP + SQL + Development
↓
Java Developer / Backend Developer / Full Stack Developer

Keep this visual and easy to understand.

14. INTERVIEW QUESTIONS

Create:

/resources/interview-questions

Build a searchable question bank.

Features:

Search

Course/category filter

Difficulty filter

Expand/collapse answers

Question numbering

Clean reading experience

Target approximately:

100–120 frequently asked interview questions

Use placeholder questions initially if actual content isn't provided.

15. ABOUT PAGE

Create /about.

Sections:

About Zortex

Company introduction.

Mission

Explain the company's focus on practical and career-oriented learning.

Vision

Explain the long-term goal of helping students become industry-ready.

Why We Exist

Short storytelling section.

Our Team

Create modern team profile cards.

Each card:

Photo

Name

Role

Short description

LinkedIn/social links if provided later

Use placeholder team data initially.

16. CONTACT PAGE

Create /contact.

Include:

Contact Information

Phone

Email

Address

Social links

Use placeholders until actual details are provided.

Lead Form

Fields:

Full Name

Phone Number

Email

Interested Program

Interested Course

Message

CTA:

Send Enquiry

Show a success state after submission.

17. CHAT WITH US

Add a floating Chat with Us button across the entire website.

When clicked, provide a WhatsApp/contact interaction with a pre-filled message:

“Hi, I'm interested in learning more about the Programs offered by Zortex Solutions.”

The button should be visible but not intrusive.

Make the WhatsApp/contact number configurable from one central configuration file.

18. CALLBACK / LEAD SYSTEM

All callback and enquiry forms should follow a common structure.

Forms should capture:

Name

Phone

Email

Program

Course

Message

Add:

Loading state

Validation

Error state

Success confirmation

Structure the application so that a backend/database can be connected later.

Do NOT hardcode form behavior in a way that makes future backend integration difficult.

19. FAQ

Add FAQ sections throughout relevant pages.

Examples:

What programs does Zortex offer?

What courses are available?

Who can join Zortex?

Are programs online or offline?

What is the Externship program?

Will I work on real-world projects?

How can I request a callback?

How can I contact Zortex?

Make FAQ content editable.

20. FOOTER

Create a premium footer containing:

Zortex Solutions

Short company description.

Quick Links

Home

Programs

Courses

Resources

About

Contact

Programs

Zortex Edge

Zortex Elite

Zortex Externship

Courses

C

Java

Python

Java Full Stack

Python Full Stack

Resources

Syllabuses

Project Ideas

Career Paths

Interview Questions

Contact

Phone / Email / Address placeholders.

Social Media

Instagram
LinkedIn
YouTube
Other platforms if provided later.

Include copyright.

21. RESPONSIVENESS

The website must work perfectly on:

Desktop

Laptop

Tablet

Mobile

Pay special attention to:

Navbar

Hero

Cards

Tables

Forms

Dropdowns

Syllabus content

Interview questions

Footer

No horizontal scrolling.

22. SEO

Implement basic SEO.

Every page should have:

Unique title

Meta description

Proper H1/H2/H3 hierarchy

Open Graph metadata

Clean URLs

Semantic HTML

Suggested homepage title:

Zortex Solutions | Training, Projects & Externship Programs

23. PERFORMANCE

Prioritize:

Fast page loading

Lazy loading images

Optimized assets

Minimal unnecessary dependencies

Reusable components

Clean code

Good Lighthouse performance

24. ACCESSIBILITY

Follow accessibility best practices:

Proper contrast

Keyboard navigation

Semantic HTML

Accessible forms

Proper labels

Alt text

Focus states

ARIA attributes where necessary

25. CONTENT / DATA ARCHITECTURE

IMPORTANT:

Do not scatter course/program/resource information throughout components.

Create structured data/configuration for:

Programs

Courses

Syllabuses

Project ideas

Career paths

Interview questions

FAQs

Team members

Contact information

This should make future content updates extremely easy.

26. FUTURE ADMIN DASHBOARD

Architect the application so an admin dashboard can be added later.

The future admin should be able to manage:

Programs

Courses

Fees

Syllabuses

Projects

Career paths

Interview questions

FAQs

Testimonials

Team members

Leads

Callback requests

For now, focus on building the public-facing website cleanly, but keep the architecture ready for this expansion.

27. IMPORTANT BUSINESS RULES

Follow these rules strictly:

The company name is Zortex Solutions.

Programs are:

Zortex Edge

Zortex Elite

Zortex Externship

Courses are:

C

Java

Python

Java Full Stack

Python Full Stack

Resources are:

Syllabuses

Project Ideas

Career Paths

Interview Questions

DO NOT mention program timings anywhere.

DO NOT invent program timings.

DO NOT invent fees.

Use editable placeholders where information has not yet been provided.

Do not make guaranteed-placement claims.

Keep all important content easy to update later.

28. FINAL UI/UX GOAL

The final website should look like a real technology-driven EdTech company, not a college project.

The experience should communicate:

Learn → Build → Experience → Become Career Ready

Make the design premium enough that a student visiting Zortex for the first time immediately understands:

What Zortex does

What programs are available

What courses are available

What they will learn

What projects they can build

What career paths are possible

How to contact/enquire

Build the complete responsive frontend with polished interactions, realistic placeholder content where required, reusable components, clean architecture and production-quality UI.

Use the attached logo for the company's logo

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://zortextechsolutions.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/017b3b9e-7796-4b61-b0bc-795a253836f0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
