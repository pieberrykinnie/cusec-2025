# Getting Started with Responsible AI

By Rue Sriharsha

## Introduction

- Trustworthy AI Consultant @ Deloitte
- University of Toronto (2024)
- Major: Computational Cognitive Science
- Minors: Computer Science, Statistics and Business
- Researched Ethical AI at Year 4

## Terminology Checkpoint

- Artificial Intelligence (AI)
- Machine Learning (ML)
- Generative AI (Gen AI)
- Large Language Models (LLMs)
- Responsible/Trustworthy AI - set of principles that help guide the design, development, deployment and use of AI in a manner that fosters trust, considers the ethical and social impact of AI
- Misinformation - false information that is *not intended* to cause harm
- Disinformation - false information that is *intended to manipulate*, cause damage and guide people/organizations in the wrong direction

## Why do we need Responsible AI?

Here are some real life examples that have taken place over the last two years

- Air Canada: A Canaddian Tribunal ruled in favor of a Vancouver man who filed bereavement fare discount on based on advice given by Air Canada's website chatbot. The chatbot said that these discounts are given yet it is against the airlines policy to provide these discounts.
- A US lawyer used ChatGPT to research precedents in a lawsuit against a Colombian airline. 6 of the cases submitted in the legal document didn't exist
- Samsung: Two different programmers at Samsung put sensitive proprietary source code into ChatGPT to check and debug it.
- UWaterloo: 29 vending machines removed after facial recognition software was detected
- Microsoft: Twitter bot "Tay" turned into an AI monster after people began tweeting her misogynistic, racist and homophobic remarks.
- Character.ai: The chatbot began convincing him it was human and encouraged suicidal ideation.
- Misinformation * disinformation during the election season, poses on unprecedented threat to democracy.
- Hany Farid, a professor at UC Berkley built a repository of deepfakes that came out during the 2024 US Presidential Election. He documented 24 deepfakes and included analysis on why the videos/images were deepfakes. Voters received calls of President Biden telling them not to vote in the primary

## Legal

Lawmakers around the world are introducing AI legislation to prevent misuse and harm. Here are some of the laws around AI/Gen AI:

- Canada: Bill C-27, BIll 164, Quebec's Law 25, *Proposed AIDA act*
- United States
- European Union
- China
- India
- Singapore
- Australia
- United Kingdom
- Chile

## What actually is Responsible AI?

Learn the building blocks that make up Responsible AI

- Hallucinations: Company didn't ensure data is grounded (e.g.: Retrieval Augmented Generation (RAG))
- AI Transparency: AI users / customers should understand the basics of how AI or any algorithms work
- Data Security & Intellectual Property Risk: AI users / customers should understand how their data is stored and used, along with when it's deleted
- User Consent: Companies need to obtain customer consent before using their data

## Deloitte's Trustworthy AI Framework

Deloitte created the Trustworthy AI Framework in 2022 by building on the collective experience of lawyers, developers, data scientists, risk specialists and machine learning engineers.

Trustworthy AI is composed of 6 principles:

- Fair / Impartial: AI applications include internal and external checks to help enable equitable application across all consumers
- Transparent / Explainable: Customers need to know how data is stored and how your software works
- Responsible / Accountable: Policies are in place to determine who in the company has to be responsible for the decisions AI made
- Robust / Reliable: AI systems have the ability to learn from humans and other sytems and produce consistent and reliable outputs
- Privacy: Consumer privacy is respected and customer data is not used beyond its intended use; consumers are able to opt in/ out of sharing their data
- Safe / Secure: AI systems can be protected from risks that may cause physical and/or digital harm

## How can you apply the Responsible AI framework?

1. Learn about Responsible AI. Keep an eye out on industry trends by following organizations like IAPP or experts in the field
1. When dealing with data sets for machine learning models or statistical analysis
  - Think of the Trustworthy AI framework
  - For example, when cleaning data, monitor the distribution of the population
1. Monitor mode/algorithmic outputs for fairness/bias and implement tests to catch bias
1. Advocate for Responsible AI in all AI/ML conversations
1. Be aware of AI laws and regulations, including how they are created and when they go into effect
1. Be aware of leading industry standards like NIST

## Case Study

### Case Study #1

**Case Statement**: You are interning at your university's software services team. They are tackling the problem of lecture scheduling for CS department. Given a set of N schedules of lectures for a single day at a university, how do you select the maximum list of lectures to be held out during the day so that no lecture overlaps with another.

You give your greedy algorithm to ChatGPT and ask it to optimize the algorithm.

The problem: privacy and explainable risks

- If the prompt isn't anonymized, ChatGPt will now have information about the university's software services
- If your boss asks you how the code work, can you explain it?
