import requests
import token_update

def check():
    
    f1 = open("cur_token.txt", "r")
    token = f1.read()

    url = "https://api.iq.inrix.com/findRoute?wp_1=37.770581%2C-122.442550&wp_2=37.765297%2C-122.442527&format=json"

    payload = {}
    headers = {
      'Authorization': 'Bearer ' + token
    }

    response = requests.request("GET", url, headers=headers, data=payload)

    if "errors" in response.json():
        token = token_update.write_token()
    

    print("token ok")
    return token

if __name__ == "__main__":
    check()