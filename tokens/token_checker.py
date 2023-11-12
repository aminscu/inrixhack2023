import requests
import token_update

f1 = open("cur_token.txt", "r")
token = f1.read()

url = "https://api.iq.inrix.com/findRoute?wp_1=37.770581%2C-122.442550&wp_2=37.765297%2C-122.442527&format=json"

payload = {}
headers = {
  'Authorization': 'Bearer ' + token
}

def check():

    response = requests.request("GET", url, headers=headers, data=payload)


    if "errors" in response.json():
        token = token_update.write_token()
        print("updated to new token: " + token)
    elif "statusText" in response.json():
        print("token already valid")
