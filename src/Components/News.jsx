import { useEffect, useState } from "react";
import NewsItems from "./NewsItems"
import Button from 'react-bootstrap/Button';



function News(props) {

    const [newsItem, setNewsItem] = useState([])
    // const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0);

    const fetchData = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8ac9d63a145a403b883b0c3120a8d53c&pageSize=${props.pageSize}&page=${page}`;
        
        const data = await fetch(url);
        props.setProgress(30);
        const parsedData = await data.json()
        console.log(parsedData)
        props.setProgress(70);
        setNewsItem(parsedData.articles)
        console.log(newsItem.length)
        setTotalResults(parsedData.totalResults)
        // console.log(parsedData.TotalResults)
        
        props.setProgress(100);
        // console.log(newsItem.length)
    }

    useEffect(() => {
        fetchData();
    }, [])   // eslint-disable-line react-hooks/exhaustive-deps

    const handlePrevClick = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8ac9d63a145a403b883b0c3120a8d53c&pageSize=${props.pageSize}&page=${page-1}`;
        
        const data = await fetch(url);
        props.setProgress(30);
        const parsedData = await data.json()
        props.setProgress(70);
        setNewsItem(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        // console.log(parsedData.TotalResults)
        
        props.setProgress(100);
        setPage(page-1)
       
    }

    const handleNextClick = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8ac9d63a145a403b883b0c3120a8d53c&pageSize=${props.pageSize}&page=${page+1}`;
        
        const data = await fetch(url);
        props.setProgress(30);
        const parsedData = await data.json()
        props.setProgress(70);
        setNewsItem(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        // console.log(parsedData.TotalResults)
        
        props.setProgress(100);
        setPage(page+1)
    }

    return (
        <>
            <h1>Today's News HeadLines</h1>
                <div className="conatiner my-3">
                    <div className="row">
                        {newsItem.map((e) => {
                            return (<div className="col-md-4" >
                                <NewsItems  key={e.url} title={e.title ? e.title.slice(0, 45) : ""}
                                    description={e.description ? e.description.slice(0, 88) : ""} imageUrl={e.urlToImage}
                                    newsUrl={e.url} />
                            </div>
                            )
                        })}
                    </div>
                    <Button variant="secondary" onClick={handlePrevClick}>Prev</Button>{' '}
                    <Button variant="secondary" onClick={handleNextClick}>Next</Button>{' '}
                </div> 
                

        </>
    );
}

export default News;