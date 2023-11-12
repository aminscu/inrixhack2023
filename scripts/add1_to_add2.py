import requests
import inrix_route
import token_checker

def wp1_to_wp2(add1, add2):

    url = "https://maps.googleapis.com/maps/api/geocode/json"

    payload = {
        
        "address": add1,
        "key": "AIzaSyCSTk81W_0RaNyxBHF4GS65EbdveW7aCBU"
        
        }

    response = requests.request("GET", url, params=payload)

    add1_geo = response.json()["results"][0]["geometry"]["location"]

    payload = {
        
        "address": add2,
        "key": "AIzaSyCSTk81W_0RaNyxBHF4GS65EbdveW7aCBU"
        
        }

    response = requests.request("GET", url, params=payload)
    add2_geo = response.json()["results"][0]["geometry"]["location"]

    api_call([str(add1_geo['lat']) + ", " + str(add1_geo['lng']), str(add2_geo['lat']) + ", " + str(add2_geo['lng'])])


def api_call(obj):
    result = inrix_route.call_inrix(obj[0], obj[1])
    print(result.json())


if __name__ == "__main__":
    # wp1_to_wp2("34248 Ethan Terrace Fremont CA", "33919 Half Hitch Street Fremont CA")
    wp1_to_wp2("900 North Point St F301, San Francisco, CA", "Presidio of San Francisco, San Francisco, CA")
