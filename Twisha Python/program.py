#Find the repeated element
a=10
b=[]
count=0

for i in range(a):
  c= int(input("Enter an element: "))
  b.append(c)
  
s=int(input("Please enter the number that you think is repeated. "))
for m in b:
  if m==s:
    count+=1

print("The number", s, "is repeated:",count,"times.")

  


