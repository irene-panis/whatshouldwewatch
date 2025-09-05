# What Should We Watch?

**What Should We Watch?** is a web application designed to help friends decide on movies to watch together by finding the overlap between their Letterboxd watchlists. Instead of manually comparing lists, the app automates the process by retrieving and analyzing each user’s saved films.

Overlap can be found for up to 10 users at once. Movies that appear in at least 50% of the inputted users' watchlists will be listed upon submit.

The application is built with a React frontend and a Python Flask backend, where the backend handles fetching and parsing watchlist data using the **Letterboxdpy** library (a Python-based web scraper). To improve performance and efficiency, Redis caching is used to store results, reducing repeated API calls and speeding up comparisons.

## Features
- Compare multiple Letterboxd watchlists to find shared movies
- Fetch watchlist data using the Letterboxdpy web scraper
- Cache results in Redis for faster retrieval and minimal API calls
- React frontend with Flask backend API handling

## Preview
<img width="1185" height="577" alt="image" src="https://github.com/user-attachments/assets/48d6c54e-07b8-41bf-b9b6-a00db7721a12" />
<img width="1085" height="610" alt="image" src="https://github.com/user-attachments/assets/ff934eb7-f1a4-4774-a34e-1948c4a10f09" />


## Deployment
Currently, the project is set up for local development. Deployment is planned for both frontend and backend to allow public access.

## Technologies
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![image](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![image](https://img.shields.io/badge/Redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white)

## Future Improvements
- **Deployment:** Host frontend (Vercel) and backend (Heroku) for public access
- **UI Enhancements:** Improve design and responsiveness for mobile devices
- **Hover for Details:** Provide information on which users watchlisted which movies
- **Display Movie Information:** Allow users to view movie synopsis and/or navigate to movie on Letterboxd on hover/click
