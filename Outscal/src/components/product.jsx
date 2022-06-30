 export const Product = ({ data }) => {
    const style = {
        borderRadius: "15px 15px 0px 0px"
    }
    return (
        <div>
            <div style={{ m: 1, width: "250px", height: "300px", borderRadius: 5, boxShadow: 5, background: "black", color: "white" }}>

                <img style={style} src={data.image} alt="" width="130px" />
                <div sx={{ textAlign: "left", pl: 3 }}>
                    <p sx={{ fontWeight: "bolder" }}>{data.title}</p>
                    <p sx={{ fontWeight: "bolder" }}>Price:- {data.price}/-</p>
                </div>
                <div >
                    <button style={{ color: "black", background: "orange", m: 1, borderRadius: 4, width: "40%" }}>Buy</button>
                    <button style={{ color: "black", background: "orange", m: 1, borderRadius: 4, width: "40%" }}>Cart</button>
                </div>

            </div>
        </div>

    )
}
