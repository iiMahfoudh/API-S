document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '58444b9a70bf44af83ddd5cae7756204';
    const apiUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=58444b9a70bf44af83ddd5cae7756204`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.status === 'ok') {
                const newsFeed = document.getElementById('news-feed');
                
                data.articles.forEach(article => {
                    const newsItem = document.createElement('div');
                    newsItem.classList.add('news-item');
                    
                    const title = document.createElement('h2');
                    title.textContent = article.title || 'No title available';
                    
                    const description = document.createElement('p');
                    description.textContent = article.description || 'No description available';
                    
                    const link = document.createElement('a');
                    link.href = article.url;
                    link.textContent = 'Read more';
                    
                    newsItem.appendChild(title);
                    newsItem.appendChild(description);
                    newsItem.appendChild(link);
                    
                    newsFeed.appendChild(newsItem);
                });
            } else {
                throw new Error(data.message || 'Unknown error');
            }
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });
});
