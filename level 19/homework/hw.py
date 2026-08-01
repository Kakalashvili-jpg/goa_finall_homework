# 1) კომენტარით ახსენით როგორ მუშაობს ინდექსინგი.

# 2) შექმენით სია 10 ელემენტით და გამოიტანეთ ბოლო და ბოლოსწინა ელემენტები.

# 3) მომხმარებელს შემოატანინეთ რიცხვი 0დან 10მდე, შემდეგ შექმენით სია 11 ელემენტით, თუ შემოტანილი რიცხვი ამ დიაპაზონში იქნება მაშინ, გამოიყენეთ ეს რიცხვი როგორც ინდექსი, და ამ ინდექსზე მყოფი ელემენტი დააupdateთ რაიმე სხვა მონაცემით.

# 4) შექმენით სია 5 ელემენტით, შემდეგ მას გადაუარეთ for loopით და გამოიტანეთ ყველა სიაში მყოფი ელემენტი (როგორც გაკვეთილზე გავაკეთეთ).

# 5) შექმენით სია 8 ელემენტით და მე3 და მე7 ელემენტები შეცვალეთ სიის გარედან, (upadte-ით)

# dv 1
# listshi shi shegvilia shevitanot sxvadasxva mnishvnelobebi mag str int float da ase shemdeg da tu gvinda gamovidzaxot romelime elementi indexsit print(listis saxeli[0,1,2,3,] da ase shemdeg da tu gvinda bolo monacemi gamovidzaxot magram ar vicit romelia vweret ese)print(listis saxeli[-1])

# dv 2
numbers = [10, 20, 30, 40, 50, 60 ,70, 80, 90, 100]
print(numbers[8])
print(numbers[9])

# dv 3
num = int(input("შეიტანე რიცხვი 0 დან 10 მდე: "))
numbers = [100, 200, 300, 400, 500, 600 ,700, 800, 900, 1000, 10000]
if num > 0 and num < 10:
    numbers[num]
    print(numbers)




#  dv 4
ages = [10, 20, 18, 21, 9,]
for i in ages:
    print(i)


# dv 5
my_list = [10, 290, 348, 409, 890, 765, 875, 204]
my_list = [2] = 500
my_list = [6] = 900