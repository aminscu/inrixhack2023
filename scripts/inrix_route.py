import token_checker
import requests


def call_inrix(wp_1, wp_2):
  tok = token_checker.check()
  url = "https://api.iq.inrix.com/findRoute"
  headers = {
    'Authorization': 'Bearer ' + tok
  }

  payload = {
      "wp_1":wp_1,
      "wp_2":wp_2,
      "format":"json"
  }

  response = requests.request("GET", url, headers=headers, params=payload)
  return response



