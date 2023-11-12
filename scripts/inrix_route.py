import requests
import token_update

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

    return([str(add1_geo['lat']) + ", " + str(add1_geo['lng']), str(add2_geo['lat']) + ", " + str(add2_geo['lng'])])

def call_inrix(wp_1, wp_2):
  tok = token_update.check()
  url = "https://api.iq.inrix.com/findRoute"
  headers = {
    'Authorization': 'Bearer ' + tok
  }

  payload = {
      "wp_1":wp_1,
      "wp_2":wp_2,
      "format":"json",
      "routeOutputFields": "P",
      "maxAlternates": 2
  }

  response = requests.request("GET", url, headers=headers, params=payload)
  return response

def main(address1, address2):
   result = wp1_to_wp2(address1, address2)
   response = call_inrix(result[0], result[1])
   print(response.json())
   
  


if __name__ == "__main__":
   main("900 North Point St F301, San Francisco, CA", "Presidio of San Francisco, San Francisco, CA")
   

