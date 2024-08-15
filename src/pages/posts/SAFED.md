---
layout: ../../layouts/MarkdownPostLayout.astro
title: SAFED Retrospective
author: pretzelogic
description: "A retrospective on the S.A.F.E.D. project at Atlas"
image:
    url: "/img/projects/SAFED.png"
    alt: "SAFED Logo"
pubDate: 2024-08-15
tags: ["project", "SAFED", "Database"]
---

<h2 class="text-2xl my-4">S.A.F.E.D. Retrospective</h2>
<p class="my-4">
It's been a long time coming and It's finally here. I am at the end of my time at Atlas. Over that time I have meet so many smart and helpful people that I have worked with over the last 20 months!
</p>
<p class="my-4">
For our final project we created the State and Federal Entity Database or S.A.F.E.D. I worked in a team of 5 including Evan Richardson as our main scraping lead, Dustin Davis as our fullstack/scraping, Cameron Rosencutter as our graphics designer, Nick French as our project lead and me as Fullstack/DB manager!
</p>

❓ What is it? ❓

<p class="my-4">
S.A.F.E.D. is a website that contains profiles on organizations and people that fall under the State and Federal Entity umbrella. The main page shows you the latest popular news articles linked with related people. It also shows the most popular profiles based on views. There is also a search function that allows you to search for either people or organizations in the database.
</p>

🖥 Technologies 🖥

<p class="my-4">
For our server we used python with a full stack web framework called Django that includes a database ORM, admin dashboard, templates and more! We used the ORM and a scraping library called BeautifulSoup2 to scrape data from webpages and insert them into the database. To deliver dynamic content to the user we used a library called HTMX that fetches HTML from the server and can be written directly in the template instead of using JavaScript.
</p>

🥊 Challenges 🥊

<p class="my-4">
The main challenge was gathering the data and the quality of the data available. We initially had a larger vision for a system where we could measure politicians words versus their actions. We ended up axing this aspect as much of the data we found was either too sketchy or too biased.
</p>

🍎 Learned Lessons 🍎

<p class="my-4">
The technologies that were new to me were Django and HTMX which I picked up fairly easily. The main lesson I learned here is controlling scope. We only had two weeks to do this project and the scope was initially much larger. However most of these features involved gathering even more data than we already were and ultimately we decided to focus more on hard information like website, names, phone number etc... If I could go back and do it again I might focus on creating user accounts so that you can add favorites and work on making the website look better on mobile.
</p>

🏁 Conclusion 🏁

<p class="my-4">
Overall I still like the idea and now that I am graduating that gives me time to work on it as a side project with the original team! We would love to set up a nonprofit organization to run it one day. But for now you can check it out at the github here: https://github.com/pretzelogical/PAD. Thank you for taking the time to read this and have a great day!
</p>
