# 1)შექმენით სია რომელშიც იქნება 5 სახელი შემდეგ, ამოიღეთ სიიდან პირველი და ბოლო ელემენტი


# 2)კომეტარებით ახსენით რას აკეთებს თითოეული ფუნქცია:
# .insert()
# .append()
# .pop()
# .len()


# 3) შექმენით სია რომელიც შედგება 5 სახელისგან შემდეგ insert მეთოდით დაამატეთ ახალი სახელი სიის მეორე ინდექსზე


# 4)კომენტარის მეშვეობით ახსენით .lower() / .upper() / .capitalize() / .find() ფუნქციების დანიშნულება


# 5)მომხმარებელს შემოატანინეთ მისი გვარი და შეამოწმეთ, თუ გვარის პირველი ასო არის დიდი ასო, მაშინ დაუბეჭდეთ "Hello", თუ არ არის მაშინ დაუბეჭდეთ "Bye"


# 6)მომხმარებელს შემოატანინეთ სახელი, შემდეგ შემოატანინეთ ასო და თუ ამ სახელში ეს ასო არიქნება, მაშინ გამოუტანეთ "Can't find character", თუ იქნება მაშინ გამოუტანეთ "found it" და გვერდზე მიუწერეთ ამ ასოს ინდექსი


# 7)მომხმარებელს შემოატანინეთ მისი გვარი, შემდეგ შეეკითხეთ როგორ უნდა რო შეიცვალოს მისი გვარის ასოები, თუ გიპასუხებთ "upper" გადაიყვანეთ მთლიანი გვარი დიდ ასოებად, თუ გიპასუხებთ "lower" გადაიყვანეთ მთლიანი გვარი პატარა ასოებად და თუ გიპასუხებთ "capitalize" გადაიყვანეთ გვარის მხოლოდ პირველი ასო დიდ ასოდ.


# 8)შექმენით სია შემდგარი 10 ელემენტისგან, და გამოიტანეთ მხოლოდ კენტ ინდექსზე მდგომი ელემენტი


# 9)შექმენით სია რომელიც შედგება 5 რიცხვისგან, გადაუარეთ ამ სიას for ციკლით და შეაჯამეთ თითოეული რიცხვი, ბოლოს გამოიტანეთ ამ რიცხვების ჯამი (დაგჭირდებათ ერთი დამატებითი დამთვლელი ცვლადი (ჯამის ცვლადი, რომელსაც თითოეული რიცხვი დაემატება ყოველ იტერაციაზე))


# 10)შექმენით სია შემდგარი 10 რიცხვისგან, გადაურეთ for ციკლით, შეამოწმეთ კენტია თუ ლუწი, თუ ლუწია დაბეჭდეთ i, "luwia", თუ კენტია i, "kentia"


# 1)შექმენით ფუნქცია სახელად sum, რომელსაც გადაეცემა რიცხვების სია და თქვენი დავალებაა დაბეჭდოთ ამ სიაში მყოფი ყველა რიცხვის ჯამი



# დვ 1
name = ["giorgi", "daviti", "levani", "gio", "luka"]
name.pop(0)
name.pop(-1)

print(name)

# dv 2
# .insert() konkretul indexze vamatebt raime elementi
# .append() siis boloshi amatebs  elements
# .pop() vshlis elements siidan konkretul index ze myof
# .len() abrunebs str an siis  sigrdzes

# dv 3
name = ["giorgi", "daviti", "giga", "nika", "aleqsi"]
name.insert(2, "vani")

# dv 4
# .lower() gadayavs mtliani str patara asoebad 
#  / .upper() gadayavs mtliani str didi asoebad
#  / .capitalize()  adidebs str shi mxolod pirvel asos da danarchens apataravebs
# / .find() str shi ezebs ragac konkretul sumbolos da abrunebs mis index s

# dv 5
surname = input("enter your surname: ")
if surname.capitalize:
    print("Helo")
else:
    print("Bye")



# dv 6
name = input("enter your name: ")
simbol = input("sheiyvane aso")
final = name.find(simbol)

if final == -1:
    print("Can't find character")
else:
    print("found it")


# dv 7
surname = input("entery your surname")
type = input("enter if you want upper lower or capitalize")
if type == "upper":
    print(surname.upper())
elif type == "lower":
    print(surname.lower())
elif type == "capitalize":
    print(surname.capitalize())
else:
    print(surname)


# dv 10

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


for i in numbers:

    if i % 2 == 0:
        print(i, "luwia") 
    else:
        print(i, "kentia") 