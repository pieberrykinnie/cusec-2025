# Data Analytics Challenge

 

## Objective

In this challenge, you will be using Co-Pilot to write a program that will perform tasks to analyze 1. transaction data, and 2. chat (text) data. Co-Pilot doesn't do deep analytics, however it can help you generate code in the language you wish to do the analytics for you!

 

## RULES

 

You may **ONLY** use GitHub Co-Pilot to generate and fix code. You cannot manually create or fix code. If the response of GitHub Co-Pilot is not what you want, use prompts to correct your code.

 

For this challenge, we suggest using Python for its ease of use. However, as long as the output is correct, feel free to do this in any language you like since Co-Pilot will just generate the code for you to do the analytics.

 

## Challenges

 

There are two challenges for Data Analytics.

The first one will handle detecting fraudulent transactions, while the second is to leverage text parsing to find the most frequently used words.

 

### Challenge 1: Fraud Detection

 

Using this CSV `Reduced_Simple_RBC_Transactions_Without_Fraudulent.csv`, please ask Co-Pilot to write code that will mark all fraudulent transactions.

 

Since we want consistent results, ask Co-Pilot to set the random seed to 42.

 

Your program should consider the following to detect fraudulent activity:

1. High Transaction Amount

   - Transactions with amounts greater than $3000 were marked as fraudulent.

 

2. Transaction Type

   - Out of the following transaction types: `"Purchase,Payment,Withdrawal,Transfer"`. Transfer is considered the most risky transaction type.

   - Let's say 50% of `Transfer` transaction types are fraudulent.

 

3. Merchant Name

   - Transactions involving merchants with `"Ltd"` in their name are riskier

   - Let;s say 30% of merchants with `Ltd` in their name is fraudlent.

 

For the result, I want the number of potential fraudulent transactions. Ask the prompt to print the list and the count of the potential fraudulent transactions.

Example how it should look like:
```
Number of fraudulent transactions: XX
List of fraudulent transactions:
   Transaction_ID      Account_Number  Transaction_Amount Transaction_Type  \
0        TXN00001  DTXC92839887952182             9999.99         Purchase   
1        TXN00018  DTXC92839887952182             9999.99         Purchase   
9        TXN00021  DTXC92839887952182             9999.99         Transfer   
11       TXN00032  DTXC92839887952182             9999.99       Withdrawal   
12       TXN00015  DTXC92839887952182             9999.99          Payment   
13       TXN00019  DTXC92839887952182             9999.99         Purchase   
17       TXN00030  DTXC92839887952182             9999.99       Withdrawal   
19       TXN00061  DTXC92839887952182             9999.99         Purchase   
```

### Challenge 2: Text parsing most frequently used words

Using this CSV `chat_logs.csv`, identify the most frequently used keywords in the chat messages.

 

Print the following:

1. The top 10 most used words

2. The longest word in the log

Example how it should look like
```
Top 10 common keywords:
a: 9
b: 7
c: 5
d: 2
e: 2
......

Longest keyword:
XXXXXX (6 characters)
```

# RESOURCES

- https://python-fiddle.com/

   * NOTE: When you upload a file the path is ./FILENAME.EXT
