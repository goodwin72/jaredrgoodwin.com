---
layout: post
title: Yelp Database Design Project (School)
description: 
image: work__yelp-project.jpg
image-description: Yelp Database Design Project Visual Example
categories: Software
end-date: 2018-05-01

time-period: Spring 2018

---

For the semester-long group project in my Cpts 451 (Introduction to Database Systems) course at Washington State University, I designed a relational database and a native search application for the dataset released by Yelp in their 2013 Dataset Challenge.

Across 3 milestones, our team of 3:
- modelled the data relationships using an Entity-Relationship diagram
- used the ER diagram to build a database using PostgreSQL data definition language (DDL) statements
- parsed the JSON data using a Python script, and inserted it into our database
- created triggers in the database to enforce several constraints (e.g. automatically updating review counts and ratings as reviews are added to the reviews table)
- created a GUI application using C# and Windows Presentation Foundation (WPF) that connects to the database and fulfills several project-defined use cases, including:
    - searching for a user and displaying their data 
    - allowing a user to remove a friend from their friends list
    - searching for businesses in a particular state, city, and/or zipcode, and allowing for the results to be narrowed by any combination of several attributes (e.g. whether they are wheelchair accessible)
    - showing the number of checkins for a given business per day of the week, displayed as a bar graph
    - showing all of the reviews for a business, including counts of user reactions such as 'useful' and 'funny'

Like all of the other projects completed for my upper-division computer science courses, we managed the project using a Git repository. The project is currently hosted on GitHub by one of my group partners here:

[ER diagram]
[several CREATE TABLE statements]
[Screenshot of user page]
[Screenshot of business page]
[Screenshot of business checkins bar graph]