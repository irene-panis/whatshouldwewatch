export const AboutModal = () => {
  return (
    <>
      <p><span>what should we watch?</span> scrapes the letterboxd watchlists of the users provided and returns the movies present in at least 50% and up to 100% of the lists.</p>
      <p>a minimum of 2 users must be entered to scrape the lists, with a maximum of 10 users.</p>
      <p>to avoid repeated scraping, <span>user watchlist data is cached for one hour after first retrieval.</span> this makes the app faster if you're sending multiple requests for the same watchlist. if a username is ran through the app and a change is made to the watchlist afterwards, it will not be reflected until the username is manually deleted from our cache or it expires after 1 hour. see "cache" tab to clear the cache.</p>
    </>
  )
}