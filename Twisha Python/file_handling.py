#It is use to handle the file related operations 
#create file => "w"
#read any file => "r"
#add data in existing file => append method => a 
#os module => delete any file 

#create the file 
# file = open("data.txt","w")
# file.write("The Write method")
# file.close()
# print("File Created")

# read the file (r)
# file = open("data.txt","r")
# print(file.read())
# print("Data fetched")

#append method to data in existing file 
# file = open("data.txt","a")
# file.write("\tAppend method")
# file.close()
# print("Data added")

#delete the file 
import os

if os.path.exists("data.txt"):
  os.remove("data.txt")
else:
  print("File does not exist")