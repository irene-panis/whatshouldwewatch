from letterboxdpy import user

def find_overlap(usernames):
  # grab user watchlists
  user1 = user.User(usernames[0])
  user2 = user.User(usernames[1])
  user1_wl = user.user_watchlist(user1)
  user2_wl = user.user_watchlist(user2)
  # make sets out of data props then find intersection
  keys_dict1 = set(user1_wl['data'].keys())
  keys_dict2 = set(user2_wl['data'].keys())
  common_keys = keys_dict1.intersection(keys_dict2)
  # given array of overlapping movies, for each movie grab name and link
  names = []
  for key in common_keys:
    names.append({
      'title': user1_wl['data'][key]['name'],
      'link': user1_wl['data'][key]['url']
    })
  return names