import random

# These values determine test sample
SAMPLE_SIZE = 1000000
DECK_SIZE = 40
WANTED_CARDS = 4
HAND_SIZE = 5

# Starting values to be calculated
deck = []
a_did_appear = 0
a_didnt_appear = 0
exactly_2_a = 0
more_than_2_a = 0

for i in range(DECK_SIZE):
    deck.append(i)

for i in range(WANTED_CARDS):
    deck.pop()
    deck.insert(i, 'A')

print(f"filled deck:\n{deck}")

for _ in range(SAMPLE_SIZE):
    hand = random.sample(deck, HAND_SIZE)
    a_count = hand.count('A')
    if a_count > 0:
        a_did_appear += 1
    else:
        a_didnt_appear += 1
    if a_count == 2:
        exactly_2_a += 1
    if a_count > 2:
        more_than_2_a += 1

print("--------------------------------------------------")
print(f"OUT OF {SAMPLE_SIZE} times...")
print(f"'A' did appear: {a_did_appear} times")
print(f"'A' didn't appear: {a_didnt_appear} times")
print(f"Exactly 2 'A's: {exactly_2_a} times")
print(f"More than 2 'A's: {more_than_2_a} times")
print("--------------------------------------------------")


probability_1 = a_did_appear / SAMPLE_SIZE * 100
probability_2 = exactly_2_a / SAMPLE_SIZE * 100
probability_3 = more_than_2_a / SAMPLE_SIZE * 100

print("--------------------------------------------------")
print(f"Probability of 'A' appearing at least once: {probability_1}")
print(f"Probability of 'A' appearing exactly 2 times: {probability_2}")
print(f"Probability of 'A' appearing more than 2 times: {probability_3}")
print("--------------------------------------------------")
