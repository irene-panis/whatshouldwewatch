from letterboxdpy import user

# grab user watchlists
irene = user.User("irenesucks")
other = user.User("nmcassa")
irene_wl = user.user_watchlist(irene)
other_wl = user.user_watchlist(other)

# make sets out of data props then find intersection
keys_dict1 = set(irene_wl['data'].keys())
keys_dict2 = set(other_wl['data'].keys())
common_keys = keys_dict1.intersection(keys_dict2)

# given array of overlapping movies, for each movie grab name and link
names = []
for key in common_keys:
  names.append({
    'title': irene_wl['data'][key]['name'],
    'link': irene_wl['data'][key]['url']
  })

print(common_keys)
print("Common Keys:", names)