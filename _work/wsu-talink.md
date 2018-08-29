---
layout: post
title: WSU TALink (School)
description: 
image: work__wsutalink.jpg
image-description: WSU TALink Site Visual Example
categories: Web
end-date: 2017-12-08

time-period: Fall 2017

---

**WSU TALink** is a web application that streamlines the process of choosing a teacher's assistant for a course. The site was built in a team of 3 for the semester-long project in Cpts 322 (Software Engineering Principles 1) at Washington State University.

The site features accounts for students and instructors, and functions as follows: 
1. Instructors add their course to the system
2. Students sign up to be a TA for the course, supplying relevant information such as the semester they took the course and what grade they received
3. Instructors choose from their TA applications which student they want to be their TA

Here's a basic demonstration video, narrated by one of my team partners:

<iframe class="video-embed" width="721" height="450" src="https://www.youtube-nocookie.com/embed/-QUQfQp4edU?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Creating a design document
Before we began writing code, we wrote a design document and a project requirements document. 

The design document described, in fairly granular detail, most of the aspects of our project. This included:
- The design architecture of the site
- The individual systems and subsystems of the site (e.g. user account creation, logging into an account, etc.)
- The design of the database
- The user interface (including UI mockups)
- A testing plan for the API routes

The project requirements document detailed:
- A description of who the users, customers, and stakeholders of the app would be
- User stories, which explain most of the site's anticipated use cases through examples
- Non-functional requirements, such as usability considerations

**Some of the UI mockups:**
<figcaption></figcaption>
{%- include image-custom.html use-thumbnail=true  img="/assets/img/work__wsutalink__ui__1.jpg" alt-text="WSU TALink UI Mockup 1" -%}

{%- include image-custom.html height="375px" img="/assets/img/work__wsutalink__ui__2.jpg" alt-text="WSU TALink UI Mockup 2" -%}

{%- include image-custom.html use-thumbnail=true height="375px" img="/assets/img/work__wsutalink__ui__3.jpg" alt-text="WSU TALink UI Mockup 3" -%}


### Architecture
We developed the site using:
- **Flask** - a Python web framework
- **SQLAlchemy** - an [object-relational mapping](https://stackoverflow.com/questions/1279613/what-is-an-orm-and-where-can-i-learn-more-about-it/1279678#1279678) library for Python (in short, this allowed us to manage a database without writing SQL)
- **Bootstrap** - a CSS framework that gave us a well-tested responsive grid-based layout, and included a lot of page elements that we found useful
- **jQuery** - a JavaScript library that made writing backend queries and updating what the user sees (more technically: DOM manipulation) significantly easier
- HTML and some vanilla CSS

We also used the **Model-View-Controller (MVC)** design pattern to decouple what the user sees on the page (the view) from the database (the model) through the use of an intermediary that passes information between them (the controller). This means that the implementations of the page layout and the database don't directly depend on each other, and can be reused in other projects that don't handle the other in the same way.

In our case, the *model* is the SQL database, the *view* is the HTML and CSS rendering the page and the jQuery that updates it, and the *controller* is the Flask backend, which interacts with the database through SQLAlchemy and the page through AJAX calls made from jQuery.

### Development using Agile methodology sprints
Our development process followed the Agile method. This is a project management approach in software development that splits the development cycle into consistent sections of time called 'sprints' with the intention that at the end of each sprint, the software will have added a set of features determined at the beginning of each sprint and be in a functional state.

We developed the project in three sprints, each lasting approximately four weeks (adjustments to the class schedule resulted in some slight variation in sprint length).

*Iteration 1*: Allow users to create an account and login

*Iteration 2*: Return basic user data from the database and display it on the page when a user logs in; allow instructors to add courses; structure and style the pages using Bootstrap

*Iteration 3*: Allow students to search for courses, add relevant data to their application, and apply; allow professors to choose a TA, and inform the student they have been chosen; allow users to change their personal information

We learned the hard way that sprints are *fixed* in length, and prioritize functioning software: we recognized that instructors adding courses was not going to be completely finished for Iteration 2, and instead prioritized having the other goals working as intended for the deadline, completing that feature in (a very busy) Iteration 3.

After development was complete, we deployed the app to Heroku, allowing it to be used by the web at-large.

### Results
We completed all of the project requirements, and passed almost all of the edge cases presented to us during our demonstration to the professor and TA. While using the site, we were told that our project was one of the better projects of the class - as the frontend and UX were my primary focus, I was proud of that!
