/**
 * input 생성 (productName, price, stock)
 * 확인 버튼누르면 table에 생성
 */

import { useState } from "react";

function InputState4() {

    const aa = {
        productName: "",
        price: "",
        stock: "",
    }
   
    const [ product, setProduct ] = useState([]);
    const [ inputValue, setInputValue ] = useState(aa)

    const handleOnChange = e => {
        const { name, value } = e.target;
        setInputValue(prev => ({...prev, [name]: value}))
    }
    const handleOnClick = () => {
        // setProduct((prev) => {
        //     const newArray = prev;
        //     newArray.push(inputValue);
        //     return newArray
        // })
        setProduct((prev) => [...prev, inputValue])
        setInputValue(aa);
    }

    return <div>
        
        <div>
            <label htmlFor="">상품명</label>
            <input type="text" name="productName" value={inputValue.productName} onChange={handleOnChange} />
        </div>
        <div>
            <label htmlFor="">가격</label>
            <input type="text" name="price" value={inputValue.price} onChange={handleOnChange} />
        </div>
        <div>
            <label htmlFor="">수량</label>
            <input type="text" name="stock" value={inputValue.stock} onChange={handleOnChange} />
        </div>
        <div>
            <button onClick={handleOnClick}>확인</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>상품명</th>
                    <th>가격</th>
                    <th>수량</th>
                </tr>
            </thead>
            <tbody>
                {
                    product.map((product, index) => (<tr> key={index}
                        <td>{product.productName}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                    </tr>))
                }
            </tbody>
        </table>
    </div>
}

export default InputState4;