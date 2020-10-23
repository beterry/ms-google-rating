# Dynamic Google rating for Mail Shark

I challenged myself to create a header which reads rating data from Google's Places API

[Full blog post](https://benterry.dev/blog/ms-google-rating/)

## About this exploration

At Mail Shark, we create custom landing pages for each company we target with custom advertisements. This technique is extremely effective but results in hundreds of landing pages existing from over 10 years of marketing. 

A few weeks ago, we were fortunate to have our average Google rating increase to 4.8. Because user reviews are a powerful trust indicator, we display this number on all of our landing pages. Updating the rating image on dozens of landing page templates was time-consuming.

To improve this process, I wanted to explore the option of having these ratings be dynamic, reading directly from Google. In this blog post, I’ll explain my exploration into using the Google Places API to read and render this data.
