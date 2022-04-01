import math

def areaOfCircle(r):
    area = math.pi*pow(r,2)
    return area

def areaOfSphere(r):
    area = 4*math.pi*pow(r,2)
    return area

def areaOfTriangle(b, h):
    area = 1/2 * (b*h)
    return area