

function NewsItems(props){
    return (
        <div className="card my-3">
            <img src={!props.imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdcEUl9bmsbuBSjiHAkDUdFu2DCdV105BIw&usqp=CAU":props.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.newsUrl} className="btn btn-primary">Read More</a>       
            </div>
        </div>
    );
}

export default NewsItems;