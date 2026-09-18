#4.	Remove all occurrences of a specific character in a string 
# a=str(input("Enter a string: "))
# b=str(input("Enter a letter you would like to remove from this string."))
# print(a.replace(b,""))

#5.	Print words with even length from a string 
a=str(input("Enter a string: "))
b=a.split()
c=0
for c in range(len(b)):
  if c%2==0:
    print(b)
