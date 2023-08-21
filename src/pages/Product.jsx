import { Col } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"

import img1 from "../json/product1.json"
import img7 from "../json/product7.json"
import img13 from "../json/product13.json"
import img19 from "../json/product19.json"
import { useLocation } from 'react-router-dom';

export function Product() {

    const location = useLocation();
    let productId = (location.state.updateId)
    let img = img1

    if (productId == 7) { img = img7 } else
        if (productId == 13) { img = img13 } else
            if (productId == 19) { img = img19 }

    return (
        <div>
            {img.filter(item => item.id == productId).map(item => (
                <Col key={item.id}><StoreItem {...item} /></Col>
            ))
            }
        </div>
    )
}