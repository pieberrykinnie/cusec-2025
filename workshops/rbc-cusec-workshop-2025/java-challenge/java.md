# Java Challenge (2-15 minutes)

In this challenge, you will be creating a simple application that will read in a csv file of stocks from a **two year period** and performing simple tasks, **only** using **GitHub Co-Pilot**.

# RULES

You may **ONLY** use GitHub Co-Pilot to generate and fix code. You cannot manually create or fix code. If the response of GitHub Co-Pilot is not what you want, use prompts to correct your code.

All the functions you create can be called in the main java function. The object should be different file but feel free to put the functions in the main java file (no need to create services).

**SHOW YOUR PROMPTS**: We'll be checking your prompts to see if they match up with your program. You can copy and paste the responses to your prompts in any place within your program, but everything has to be done through co-pilot. For example, you can split the tasks into smaller steps and put it all together at the end.

## Task 1
Create a Stock class that matches the headers of the csv file provided with the Java challenge folder. (You're welcomed to use external packages and libraries if you can tell co-pilot to set everything up...)

## Task 2
Create a function that reads in the csv file into a collection of the recently created Stock class as you see fit.
Within that function, print the following output in the console:

```
Number of stocks in list: 189
```

## Task 3
Create a function that calculates the **performance** of stocks (if you don't know the formula... honestly... Co-Pilot will do it for you).
Create another function that determines the **Top 5** most performing stock within that collection and print it in the console. Here's an example of what it should look like:

```
Top 5 Performing Stocks:
1.	Name: WDC		Performance: +2.50%
2.	Name: EL		Performance: +2.69%
3.	Name: LVS		Performance: +2.76%
4.	Name: BIDU		Performance: +2.99%
5.	Name: BABA		Performance: +3.82%
```

If you want you can also print out the 5 most underperforming stocks within the collection as well!

```
Worst 5 Performing Stocks:
1.	Name: TSLA		Performance: -7.15%
2.	Name: NVDA		Performance: -6.32%
3.	Name: NVDA		Performance: -6.32%
4.	Name: COIN		Performance: -5.36%
5.	Name: NFLX		Performance: -3.08%
```

This task is flexible in the sense that you are free to determine the top 5/worst 5 however you like, as long as you **ONLY** use GitHub co-pilot!

Final Output should look like this:

```
Number of stocks in list: 189
Top 5 Performing Stocks:
1.	Name: WDC		Performance: +2.50%
2.	Name: EL		Performance: +2.69%
3.	Name: LVS		Performance: +2.76%
4.	Name: BIDU		Performance: +2.99%
5.	Name: BABA		Performance: +3.82%

Worst 5 Performing Stocks:
1.	Name: TSLA		Performance: -7.15%
2.	Name: NVDA		Performance: -6.32%
3.	Name: NVDA		Performance: -6.32%
4.	Name: COIN		Performance: -5.36%
5.	Name: NFLX		Performance: -3.08%
```
