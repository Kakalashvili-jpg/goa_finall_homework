# 1) გადახედეთ ჩანაწერს აუცილებლად და გაიმეორეთ განვლილი მასალა

# 2)შექმენით 5 ელემენტიანი Tuple და unpacking ის გამოყენებით თითოეულ ელემენტს მიანიჭეთ შესაბამისი ცვლადი

names = ("giorgi", 12, 1.80, "apple", "doritos" )
(name, age, height, fruit, snak) = names

# 3)ახსენით კომენტარებით რა არის tuple და რით განსხვავდება ის list ისგან
# tuple სიისგან განსხვავდება იმით რომ იქმნება მომრგვალებული ფრჩხილებით და არის უცვლადი

# 4)შექმენით 6 ელემენტიანი tuple და გამოიყენეთ .index() და .count() მეთოდები
names = ("giorgi", 12, 1.80, "apple", "doritos", "giorgi" )
print(names.count(12))
print(names.index(12))

# 5) კომენტარებით ახსენით რა არის *rest
# *rest nishnavs sxva danarchens anu  tu gvaq 7 elementiani tuple da unpacking  dros vwert marto 3 cvladis saxels da boloshi vuwer *rest es nishnavs ro darchenili 4  elementi sheinaxeba 1 cvladshi