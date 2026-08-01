 
# 1) for loop-ის გამოყენებით გამოიტანეთ ყველა ლუწი რიცხი 20-დან 200-მდე.

# 2) while loop-ის გამოყენებით გამოიტანეთ ყველა რიცხვი 90-დან 30-მდე

# 3) მომხმარებელს შემოატანინეთ ასაკი, თუ ასაკი ნაკლებია 12-ზე დაპრინტეთ "you are a kid!", თუ მეტია 12ზე და ნაკლებია 18ზე დაპრინტეთ "you are teen!", დანარჩენ შემთხვევებში დაპრინტეთ "you are adult!"
 
# 4) მომხმარებელს შემოატანინეთ რიცხვი და for loop-ის გამოყენებით დაითვალეთ 1დან ამ რიცხვამდე რიცხვების ჯამი, მაგალითად: თუ შემოიტანეს 4, უნდა გამოიანგარიშოთ: 1+2+3+4=10


#  dv 1
for i in range( 20, 200, 2):
  print(i)

#  dv 2
num = 90
while num != 30:
    print(num)
    num -= 1

# d 3
age = int(input("enter your age: "))

if age < 12:
   print("you are a kid!")
elif age < 18:
   print("you are teen!")
else:
   print("you are adult!")

# dv 4
num = int(input("enter your number: "))
total = 0
for i in range(1, num, +1):
    total += 1
print(total)
