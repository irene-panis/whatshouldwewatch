from letterboxdpy import user
from collections import defaultdict

class UserNotFoundException(Exception):
  pass

def find_overlap(usernames):
  movie_counts = defaultdict(int)
  movie_details = {}

  for username in usernames:
    try:
      user_instance = user.User(username)
      user_wl = user.user_watchlist(user_instance)
          
      if not user_wl['data'].keys():
        # Return a specific response for an empty watchlist
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
      
    except Exception as e:
      return {
        "error": True,
        "message": f"User {username} not found."
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
