class Customer:
    def __init__(self):
        self.name = ""
        self.address = ""
        self.room_number = 0

    def input_data1(self):
        print("________________________________________________________________")
        print("\t\t Room Booking Portal                           ")
        print("________________________________________________________________")
        self.name = input("Enter your Name                       \t :")
        self.address = input("Enter your Address                    \t :")
        self.room_number = int(input("Enter any Room Number   \t :"))


class Room:
    ROOM_TYPES = {
        1: {"name": "AC, Large", "rate": 6000},
        2: {"name": "AC, Small", "rate": 5000},
        3: {"name": "Non-AC, Large", "rate": 4000},
        4: {"name": "Non-AC, Small", "rate": 3000},
    }

    def __init__(self):
        self.room_type = 0
        self.days = 0

    def input_data2(self):
        print("\n\t\t Available Room types                     ")
        print("\n\t1. Type : A/C; Size : large; Rate : 6000. ")
        print("\t2. Type : A/C; Size : Small; Rate : 5000.")
        print("\t3. Type : Non A/C; Size : Large; Rate : 4000.")
        print("\t4. Type : Non A/C; Size : Small; Rate : 3000.\n")
        self.room_type = int(input(" Enter Your Room Type  \t:"))
        self.days = int(input("For how many days will you stay? "))

    def calculate_rent(self):
        if self.room_type in Room.ROOM_TYPES:
            room_info = Room.ROOM_TYPES[self.room_type]
            room_rent = room_info["rate"] * self.days
            return room_rent
        else:
            return 0


class Restaurant:
    MENU = {
        1: {"item": "Water", "price": 20},
        2: {"item": "Tea", "price": 10},
        3: {"item": "Breakfast Combo", "price": 90},
        4: {"item": "Lunch", "price": 110},
        5: {"item": "Dinner", "price": 150},
    }

    def __init__(self):
        self.food_bill = 0
    def order_food(self):
        self.food_bill = 0
        print("================================================")
        print("\n\t\tRestaurent Menu     ")
        print("\n\t1: Item: Water, Price: 20.")
        print("\t2: Item: Tea, Price: 10.")
        print("\t3: Item: Breakfast , Price :90.")
        print("\t4: Item: Lunch, Price : 110.")
        print("\t5: Item: Dinner, Price : 150.")
        print("================================================")
                
        while True:
            choice = int(input("Enter your choice (1-5, 6 to exit): "))
            if choice == 6:
                break
            elif choice in Restaurant.MENU:
                quantity = int(input("Enter the quantity: "))
                item_info = Restaurant.MENU[choice]
                self.food_bill += item_info["price"] * quantity
                
            else:
                print("Invalid option")

    def calculate_bill(self):
        print("\tTotal Food Cost = Rs", self.food_bill)


class TotalBill(Customer, Room, Restaurant):
    def __init__(self):
        super().__init__()
        self.totalbill = 0
        self.extracharges = 500

    def calculate_total(self):
        room_rent = self.calculate_rent()
        self.calculate_bill()  
        self.totalbill = room_rent + self.food_bill + self.extracharges
        print("\tExtra Charges ",self.extracharges)
        print("\tTotal Bill = Rs", self.totalbill)

def main():
    customers = []
    booked_rooms = set()

    while True:
        print("==================================================")

        print("\t\tWelcome To Hotel Management Sytem")
        
        print("==================================================")
        print("\t\t1. Book A Room                                  ")
        print("\t\t2. Calculate Room Rent                    ")
        print("\t\t3. Order Food                                     ")
        print("\t\t4. Calculate Restaurent Bill             ")
        print("\t\t5. Show Total Cost                            ")
        print("\t\t6. Rooms Booked                              ")
        print("\t\t7. Exit                                                 ")
        print("________________________________________________________________") 

        choice = int(input("Enter Your Choice                                 :"))

        if choice == 1:
            total = TotalBill()
            total.input_data1()
            total.input_data2()
            if total.room_number not in booked_rooms:
                customers.append(total)
                booked_rooms.add(total.room_number)
                print(f"\n\tRoom No {total.room_number} booked successfully.")
            else:
                print(f"\tRoom No {total.room_number} is already booked. Choose another room.")

        elif choice == 2:
            try:
                total = customers[-1]  
                room_rent = total.calculate_rent()
                print(f"\tCalculated Room Rent : Rs {room_rent}")
            except IndexError:
                print("Please enter customer data first.")

        elif choice == 3:
            try:
                total = customers[-1]  
                total.order_food()
                print("\n\tFood Ordered Successfully !")
            except IndexError:
                print("Please enter customer data first.")
        
        elif choice == 4:
            try:
                total = customers[-1]  
                total.calculate_bill()
            except IndexError:
                print("Please enter customer data first.")

                
        elif choice == 5:
            if not customers:
                print("\tPlease enter customer data first.")
            else:
                total = customers[-1]  
                room_rent = total.calculate_rent()
                print("\t\t RECIPT ")
                print("==============================")
                print(f"\tCalculated Room Rent : Rs {room_rent}")
                total.calculate_total()
                

        elif choice == 6:
            print("\t Booked Rooms :", booked_rooms) if booked_rooms else print("No rooms booked yet.")

        elif choice == 7:
            print("\tExiting the program.")
            print("***************************************************************************")
            print("\t\tThankyou for using this Software ")
            print("***************************************************************************")
            break

        else:
            print("Invalid choice. Please enter a valid option.")

main()
