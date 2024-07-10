export const AboutModal = () => {
  return (
    <>
      <p><span>what should we watch?</span> scrapes the letterboxd watchlists of the users provided and returns the movies present in at least 50% and up to 100% of the lists.</p>
      <p>there is a minimum of 2 users entered required for this app and a maximum of 10.</p>
      <p>to avoid repeated scraping, <span>user watchlist data is cached for one hour after first retrieval.</span> if you run your username through the app then make a change, it will not be reflected until you delete your username from our cache. see "cache" tab to do this.</p>
    </>
  )
}