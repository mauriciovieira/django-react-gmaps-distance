from rest_framework.test import APITestCase


class TestMarkers(APITestCase):
    def test_POST_AnonymousUserPostingTwoGeoPoints_Return200(self):
        # Act
        payload = [
            {
                "lat": -34.58819281394148,
                "lng": -58.40732661300582,
                "time": "2020-09-17T09:58:35.417Z",
            },
            {
                "lat": -34.64357209868975,
                "lng": -58.54087916427535,
                "time": "2020-09-17T09:58:36.249Z",
            },
        ]
        request = self.client.post("/markers", payload, format="json")

        # Assert
        self.assertEqual(request.status_code, 200)
        self.assertIn('{"distance": "13.69 km"}', str(request.content))
