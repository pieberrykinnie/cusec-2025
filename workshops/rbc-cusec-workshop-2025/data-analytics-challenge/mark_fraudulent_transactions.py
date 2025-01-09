import pandas as pd
import numpy as np

# Set the random seed
np.random.seed(42)

# Load the CSV file
file_path = '/home/pieberrykinnie/cusec-2025/workshops/rbc-cusec-workshop-2025/data-analytics-challenge/Reduced_Simple_RBC_Transactions_Without_Fraudulent.csv'
df = pd.read_csv(file_path)

# Mark fraudulent transactions based on the criteria
df['Is_Fraudulent'] = False

# High Transaction Amount
df.loc[df['Transaction_Amount'] > 3000, 'Is_Fraudulent'] = True

# Transaction Type
transfer_indices = df[df['Transaction_Type'] == 'Transfer'].index
fraudulent_transfer_indices = np.random.choice(transfer_indices, size=int(0.5 * len(transfer_indices)), replace=False)
df.loc[fraudulent_transfer_indices, 'Is_Fraudulent'] = True

# Merchant Name
ltd_indices = df[df['Merchant_Name'].str.contains('Ltd')].index
fraudulent_ltd_indices = np.random.choice(ltd_indices, size=int(0.3 * len(ltd_indices)), replace=False)
df.loc[fraudulent_ltd_indices, 'Is_Fraudulent'] = True

# Filter fraudulent transactions
fraudulent_transactions = df[df['Is_Fraudulent']]

# Print the result
print(f"Number of fraudulent transactions: {len(fraudulent_transactions)}")
print("List of fraudulent transactions:")
print(fraudulent_transactions[['Transaction_ID', 'Account_Number', 'Transaction_Amount', 'Transaction_Type']])