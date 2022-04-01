def listcon(tup):
    tup = list(tup)
    return tup
def listcount(tup):
    count = 0
    for i in tup:
        if i % 2 == 0:
            count += 1
    return count
def greater(tup):
    l = []
    for i in tup:
        if i > 20:
            l.append(i)
    return l