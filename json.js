var feed = new google.feeds.Feed("https://news.ycombinator.com/rss",{
        api_key : '0000000000000000000000000000000000000000',
        count : 5,
        order_by : 'title',
        order_dir : 'asc'
});