import unittest
from ..distance_calculation import distance


class TestDistanceCalculation(unittest.TestCase):
    def test_calculates_distance(self):
        buenos_aires = [-34.6120439, -58.4104192]
        salvador = [-12.9768177, -38.4569869]
        km = 3134.310335004333

        self.assertEqual( distance(*buenos_aires, *salvador), km)
