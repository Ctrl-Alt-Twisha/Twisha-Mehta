#loop is use to iterate the code again and again 
#forloop => to iterate the finite numbers 
#while loop => to iterate the infinite number 

#forloop  with list 
# a = [1,2,3,4,5,6,7,8,9,10]
# for i in a:
#   print(i)

#forloop with range function 
# a = 5 
# b = []

# for i in range(a):
#   c = int(input("Enter the element "))
#   b.append(c)
  
# print(b)

#forloop with condition 

size = 10
list_1 = []
even_count = 0
odd_count = 0
even = []
odd = []
for i in range(1,size+1):
  num = int(input("Enter the number "))
  list_1.append(i)
for j in list_1:
  if j%2==0:
    even.append(j)
    even_count=even_count + 1

  else:
    odd.append(j)
    odd_count = odd_count + 1 

print("The Event Count",even_count)
print("The Odd count",odd_count)
print("The even elements",even)
print("The odd elements",odd)
