import { LeftOutlined } from '@ant-design/icons';
import { ArrowLeftOutlined, ArrowRightOutlined, RightOutlined } from '@ant-design/icons/lib/icons';
import { Button, Carousel, Input, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductSwiper from '../components/swiper';



const Test = () => {
    const [product, setProduct] = useState()
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [attr, setAttr] = useState('');
    const [detail, setDetail] = useState('');
    const [images, setImages] = useState('');

    const params = useLocation();
    const endPath = params.state.endPath;
    const id = params.state.id;

    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:1337/${endPath}/${id}`);
            setProduct(response.data);
            setTitle(response.data.title);
            setPrice(response.data.price);
            setAttr(response.data.attr);
            setDetail(response.data.detail);
            setImages(response.data.images);
        }
        fetchData();
    }, [endPath, id])

    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchData = async () => {
            const response = await axios.put(`http://localhost:1337/${endPath}/${id}`, { title, price, attr, detail });
            setProduct(response.data);
        }
        fetchData();
    }


    if (!product) {
        return <p>please wait ...</p>
    }

    console.log("images => ", images);
    return (
        <div className="test-container">

            <h4 className="text-center">{product.title}</h4>

            <div className=' row mt-5' >
                <div className="text-right col-6">
                    <label className="text-right">نام محصول</label><br />
                    <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="text-right col-6">
                    <label className="text-right">قیمت محصول</label><br />
                    <Input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div className="text-right col-6 mt-4">
                    <label className="text-right">مشخصات محصول</label><br />

                    <TextArea
                        maxLength={100}
                        style={{
                            height: 200,
                            marginBottom: 24,
                        }}
                        onChange={(e) => setAttr(e.target.value)}
                        value={attr}
                    />
                </div>

                <div className="text-right col-6 mt-4">
                    <label className="text-right">توضیحات محصول</label><br />

                    <TextArea
                        style={{
                            height: 200,
                            marginBottom: 24,
                        }}
                        onChange={(e) => setDetail(e.target.value)}
                        value={detail}
                    />
                </div>


                {/* <ProductSwiper images={images} /> */}


            </div>

            <div className='row mt-4'>
                <Button
                    type="primary"
                    onClick={(e) => handleSubmit(e)}
                    className="text-center col-5  m-auto"
                >
                    ذخیره تغییرات
                </Button>
            </div>


        </div>
    );
}

export default Test;










// import axios from 'axios';

// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const Test = () => {
//     const [product, setProduct] = useState()
//     const [title, setTitle] = useState();
//     const [price, setPrice] = useState();

//     const params = useLocation();
//     const endPath = params.state.endPath;
//     const id = params.state.id;

//     useEffect(() => {
//         const fetchData = async () => {
//             await axios.get(`http://localhost:1337/${endPath}/${id}`).then(response => setProduct(response.data));
//         }
//         fetchData();
//     }, [product])


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const fetchData = async () => {
//             await axios.put(`http://localhost:1337/${endPath}/${id}` , {title,price} ).then(response => setProduct(response.data));
//         }
//         fetchData();
//     }


//     if (!product) {
//         return <p>please wait ...</p>
//     }
//     return (
//         <div className="test-container">
//             <form >
//                 <label>{product.price}</label>
//                 <input type="text" className="" value={product.price} onChange={(e) => setPrice(e.target.value)} />
//                 <br />
//                 <label>{product.title}</label>
//                 <input type="text" className="" value={product.title} onChange={(e) => setTitle(e.target.value)} />
//                 <br />
//                 <button onClick={(e) => handleSubmit(e)} >
//                     تغییرات
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default Test;



    // get single product by params =>
    // const params = useLocation();
    // const product = params.state.product;

    // const [price, setPrice] = useState(product.price)
    // const [title, setTitle] = useState(product.title)


    // get single product by api => 