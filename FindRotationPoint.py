import math

# Find Rotation Point
# You went and bought a copy of Webster's English dictionary on April Fool's Day and received the joke edition of the dictionary.
# You open it up and see that the first entry in the dictionary starts somewhere in the middle. Once the end of the alphabet is reached,
# it circles around and starts over at the 'A' section and goes all the way through until it reaches the beginning. Otherwise, though,
# everything else seems to be in order.

# For example, a rotated list of words might look something like this:

# const words = [
#   'ptolemaic',
#   'retrograde',
#   'supplant',
#   'undulate',
#   'xenoepist',
#   'asymptote',    // <-- rotation happens here
#   'babka',
#   'banoffee',
#   'engender',
#   'karpatka',
#   'othellolagkage',
# ]
# Write a function findRotationPoint that receives an array of words and calculates the index of the point where the rotation occurs.
# With the above list of words, your function would return 5.

# Analyze the time and space complexity of your solution. Can we write a solution that performs better than linear time?


# pick a word in our list
# when checking, it's either going to be the 1st (A word) or its going to come after
# As the while loop check each word its needs to discard the words checked in the same order it received them?
# once we get to the the "startWord" then the dictionary would be in perfect abcd order.
# checked words may have to go into a new list after passing through the function.

def findRotationPoint(words):
    startWord = words[]  # put 0 if it doesnt default

    while topIndex >= bottomIndex:
        # try word
        try =  # somthing  more operations follow

        if words[try] > startWord
        # file that word back into a list in the same order that it pulled from the "words" list so that in the end they are in order

        else:
          # if the try word is not greater than the startWord than we have our goodlen egg. Mission Complete
          # break loop

            # return out New list in ABC order


const words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',    // <-- rotation happens here
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
]
