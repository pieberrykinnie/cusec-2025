import pandas as pd
from collections import Counter
import re

# Load the CSV file
file_path = '/home/pieberrykinnie/cusec-2025/workshops/rbc-cusec-workshop-2025/data-analytics-challenge/chat_logs.csv'
df = pd.read_csv(file_path)

# Combine all chat messages into a single string
all_messages = ' '.join(df['chat_message'])

# Remove punctuation and convert to lowercase
all_messages = re.sub(r'[^\w\s]', '', all_messages).lower()

# Split the string into words
words = all_messages.split()

# Count the frequency of each word
word_counts = Counter(words)

# Get the top 10 most common words
top_10_words = word_counts.most_common(10)

# Find the longest word
longest_word = max(words, key=len)

# Print the results
print("Top 10 common keywords:")
for word, count in top_10_words:
    print(f"{word}: {count}")

print("\nLongest keyword:")
print(f"{longest_word} ({len(longest_word)} characters)")