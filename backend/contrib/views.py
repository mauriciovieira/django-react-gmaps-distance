from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

import json
from .distance_calculation import calculate


@csrf_exempt
def markers(request):
    markers = json.loads(request.body)

    return JsonResponse({"distance": calculate(markers)})