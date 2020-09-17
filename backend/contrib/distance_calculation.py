from math import cos, asin, sqrt, pi


def distance(lat1, lng1, lat2, lng2):
    """https://en.wikipedia.org/wiki/Haversine_formula"""

    p = pi/180
    a = 0.5 - cos((lat2-lat1)*p)/2 + cos(lat1*p) * cos(lat2*p) * (1-cos((lng2-lng1)*p))/2
    return 12742 * asin(sqrt(a)) #2*R*asin...


def calculate(markers):
    lat1 = markers[0]['lat']
    lat2 = markers[1]['lat']
    lng1 = markers[0]['lng']
    lng2 = markers[1]['lng']

    return f'{distance(lat1, lng1, lat2, lng2):02.2f} km'