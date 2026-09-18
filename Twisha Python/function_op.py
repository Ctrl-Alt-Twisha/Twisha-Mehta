#function contains the blocks of code 
#functions is denoted by def keyword 

#function without parameter 
# def main():
#   print("Hello world")

# main()

#function with parameter 
# def main(a,b):
#   return a+b

# print(main(10,20))

#function with string 
# def main(name,age):
#   print("The employee name is",name)
#   print("The employee age is",age)
  
# main("Rahul",45)

#function with input 
# def main(name,age,salary,profile):
#   print("The employee name is",name)
#   print("The employee age",age)
#   print("The employee salary is",salary)
#   print("The employee profile is",profile)
  
# name = str(input("Enter the name "))
# age= int(input("Please enter an age: "))
# salary=int(input("Please enter a salary:"))
# profile=str(input("Please enter your profile: "))


# main(name,age,salary,profile)


#function with argument * = list of values 
# def show(*args):
#   return args

# print(show(1,2,3,4,5,6,7,8,9,10))

#kwargs = can accept keys and values types data 
def show(**kwargs):
  return kwargs

print(show(key1="value1",key2="value2"))