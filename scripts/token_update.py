import requests

appId = "aiybx7znu5"
hashToken = "YWl5Yng3em51NXxBVEViTDhBV05FN3JtWHh3Yjh0Uk85WWdxMDhjWkRuRjJCYVJUbnBs"

url = "https://api.iq.inrix.com/auth/v1/appToken"

payload = {"appId": appId, "hashToken": hashToken}

response = requests.request("GET", url, params=payload)


def write_token():
    with open("cur_token.txt", "w") as f1:
        f1.write(response.json()["result"]["token"])
        return response.json()["result"]["token"]

