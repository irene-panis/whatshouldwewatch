from letterboxdpy import user
from collections import defaultdict
import redis
import json

cache = redis.Redis(host='localhost', port=6379)

def get_wl_from_letterboxd(username):
  try:
    user_instance = user.User(username)
    user_wl = user.user_watchlist(user_instance)
    cache.set(username, json.dumps(user_wl), ex=3600)
    return user_wl
  except Exception as e:
    return {
      "error": True,
      "message": f"User {username} not found."
    }

def get_wl_from_cache(username):
  cached_wl = cache.get(username)
  return json.loads(cached_wl)

def find_overlap(usernames):
  movie_counts = defaultdict(int)
  movie_details = {}

  for username in usernames:
    if not cache.get(username):
      user_wl = get_wl_from_letterboxd(username)
    else:
      user_wl = get_wl_from_cache(username)
    
    if user_wl.get('error'):
      return user_wl
    
    if not user_wl['data'].keys():
      return {
        "error": True,
        "message": f"Watchlist for user {username} is empty."
      }

    for key, movie in user_wl['data'].items():
      movie_counts[key] += 1
      movie_details[key] = {
        'title': movie['name'],
        'link': movie['url']
      }
      

  threshold = len(usernames) / 2
  overlap_groups = defaultdict(list)
  for key, count in movie_counts.items():
    if count > threshold:
      overlap_groups[count].append(movie_details[key])

  return {
    "error": False,
    "overlap_groups": overlap_groups
  }

def find_user(input_user):
  user1 = user.User(input_user)
  return user.user_watchlist(user1)['data'].keys()
