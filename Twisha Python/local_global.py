#local function  acesses only inside the function 
#global function access outside the function 

#local 
# def main():
#   num1 = 10
#   print(num1)
# main()

#global 
num = 10 
def main():
  return num 
main()
print(num)