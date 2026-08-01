# # 1) 
# შექმენი რამდენიმე ცვლადი შენი სურვილით, ისე რომ თითო იყოს განსხვავებული ტიპის (მაგ. str, int, float, boolean).
# დაბეჭდე ისინი და მიუწერე რა ტიპის მონაცემია თითო.
# # 2) 
# მომხმარებელს ჰკითხე მისი სახელი, ასაკი და რამდენი ძმა ან და ჰყავს.
# დაბეჭდე მიღებული პასუხები და მიუწერე თითოეულს მონაცემთა ტიპი.
# შემდეგ ასაკი და და-ძმების რაოდენობა გადააქციე რიცხვებად და დაბეჭდე მათი ჯამი.

# # 3) 
# შექმენი დიაპაზონი რიცხვებით 3-დან 30-მდე.
# თითო რიცხვზე მიუწერე, არის თუ არა ეს რიცხვი სამის ჯერადი და მიუწერე მისი ტიპი.

# # 4) 
# კომენტარის სახით ახსენი, რატომ ვიყენებთ ფუნქციებს პროგრამაში.
# ჩამოწერე 3–4 შენთვის ცნობილი ფუნქცია და მიუწერე რა საქმეს ასრულებს თითო მათგანი.

# # 5) 
# კომენტარის სახით აღწერე, რას ეწოდება არგუმენტი და როგორ გამოიყენება ის ფუნქციაში. დაწერე მაგალითიც


# dv 1
name = "daviti"
age = 13 
height = 1.70
boo = True

print(name, type(name))
print(age, type(age))
print(height, type(height))
print(boo, type(boo))


# dv 2
name = input("enter your name; ")
age = int(input("enter your age; "))
family = int(input("how many sister or brother do you have; "))

print(name, type(name))
print(age, type(age))
print(family, type(family))

print(age + family)


# dv 3
for i in range(3, 31):
    if i % 3:
        print(i, type(i))
    else:
        print(i, type(i))


# dv 4
#magalitad prints viyenebt teqstis an sxva raimes ekranze gamosatanad
# int viyenebt brჭyalebshi moqceuli ricxvis   tmel ricxvad gadasayvanad
# float s viyenebt mteli ricxvis wilad ricxvad gadasayvanat


# dv 5
# arguments aris monacemi romalsac funqcias frchxilebshi gadavcemt misi gamodzaxebis dros
print("hello World")