import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const ProductSwiper = ({ images }) => {
    console.log(images);
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleImageUpload = info => {
        console.log("info => " , info.file.status);
        const uploadedImageURL = info.file.response.url;
            setUploadedImage(uploadedImageURL);
    }

    const allImages = [...images];
    if (uploadedImage) {
        allImages.push({ url: uploadedImage });
        console.log("allimages => " , allImages);
    }




    return (
        <Swiper
            style={{
                '--swiper-navigation-color': 'black',
                '--swiper-pagination-color': 'black',
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper col-6"
        >


            {allImages.map((item, index) => (
                <SwiperSlide key={index} className='text-center'>
                    <Upload onChange={handleImageUpload}>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                    <img src={`http://localhost:1337${item.url}`} alt="carousel image" width="300px" />
                </SwiperSlide>
            ))}
            {/* {images.map((item) => (
                <SwiperSlide className='text-center'>
                    <Upload >
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                    <img key={item.id} src={`http://localhost:1337${item.url}`} alt="carousel image" width="300px" />
                    <img key={item.id} src={`http://localhost:1337${item.url}`} alt="carousel image" width="300px" />

                </SwiperSlide>
            ))} */}

        </Swiper>
    );
}

export default ProductSwiper;