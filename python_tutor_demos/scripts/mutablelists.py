a = [1, 2, 3]
b = a
a[1] = 'foo'
print(b)

a = [1, 2, 3]
b = [1, 2, 3]
a[1] = 'foo'
print(b)
