import React, {  } from "react";
import { useHistory, useParams } from "react-router-dom";

let Detail = function Detail(props) {

    let { id } = useParams(); // :id <- 이 값이 저장이 된다. 리액트 훅 중 하나
    let history = useHistory(); //리액트 훅 중 하나
    let item = props.shoes.find((shoes)=>{
        // if(shoes.id == id){
        //     return shoes
        // }
        return shoes.id == id
    })

    return (
        <div>
            <div>Detail Page</div>
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt=""/>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{item.title}</h4>
                    <p>{item.content}</p>
                    <p>{item.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                    <button className="btn btn-danger" onClick={()=>{ 
                        // history.goBack();
                        history.push("/")
                     }}>뒤로가기</button>
                </div>
                </div>
            </div> 
        </div>
    )
}

export default Detail