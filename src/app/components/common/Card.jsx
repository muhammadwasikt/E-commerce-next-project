

const Card = ({ item, badge }) => {

    const { title, price, image, description, rating, greate, name } = item;
    return (
        <div className="card bg-base-100 w-full shadow-xl hover:scale-105 hover:shadow-2xl cursor-pointer">
            {image ? <>
                <figure>
                    <img
                        src={image} className="h-[200px]" />
                </figure>
                <div className="card-body px-5">
                    <h2 className="card-title">
                        {title?.slice(0, 10)}
                        {badge && <div className="badge badge-secondary">NEW</div>}
                    </h2>
                    <p className="text-left">{description?.slice(0, 50)}...</p>
                    <p className="text-left font-bold">${price}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline w-full hover:bg-secondary cursor-pointer">Add To Cart</div>
                    </div>
                </div>
            </> :
                <div className="card bg-base-100 w-full shadow-xl">
                    <div className="card-body h-[200px] text-left px-4">
                        <h2>{rating}</h2>
                        <h2 className="card-title">{name}
                            <div className="badge ml-[-5px]">{greate}</div>
                        </h2>
                        <p>{description}</p>
                    </div>
                </div>}
        </div>
    )
}

export default Card
