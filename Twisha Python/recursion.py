#factorial number 

n = 5 
def fact(n):
  if(n==1):
    return n
  else:
    return n * fact(n-1)
  
print(fact(n))