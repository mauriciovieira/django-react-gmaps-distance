from math import cos, asin, sqrt, pi


class GeoPoint:
    def __init__(self, lat, lng):
        self.lat = lat
        self.lng = lng

    def __sub__(self, other):
        """https://en.wikipedia.org/wiki/Haversine_formula"""

        p_rad = pi / 180
        angle = (
            0.5
            - cos((other.lat - self.lat) * p_rad) / 2
            + cos(self.lat * p_rad)
            * cos(other.lat * p_rad)
            * (1 - cos((other.lng - self.lng) * p_rad))
            / 2
        )
        earth_diameter = 12742

        return earth_diameter * asin(sqrt(angle))


def distance(lat1, lng1, lat2, lng2):
    first_point = GeoPoint(lat1, lng1)
    second_point = GeoPoint(lat2, lng2)

    return first_point - second_point


def calculate(markers):
    lat1 = markers[0]["lat"]
    lat2 = markers[1]["lat"]
    lng1 = markers[0]["lng"]
    lng2 = markers[1]["lng"]

    return f"{distance(lat1, lng1, lat2, lng2):02.2f} km"
