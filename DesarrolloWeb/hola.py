#get the maximum common divisor

def maximocomundivisor(a,b):
    if a > b:
        a,b = b,a
    while a != 0:
        a,b = b%a,a
    return b

def minimocomundivisor(a,b):
    return a*b/maximocomundivisor(a,b)