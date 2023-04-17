import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined, TwitterOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { EffectFade, Navigation, Pagination } from "swiper";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router";
import { Select } from 'antd';
const { Option } = Select;

const ShowDetailProductLayout = () => {

    const params = useLocation();

    console.log("product in detail => ", params.state.product);

    return (
        <>
            <div className="row m-5 border-bottom">

                <div className="col-6 ml-5">
                    <Swiper
                        spaceBetween={30}
                        effect={"fade"}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[EffectFade, Navigation, Pagination]}
                        className="mySwiper "
                    >

                        {params.state.product.img && (
                            <SwiperSlide>
                                <img src={`http://localhost:1337${params.state.product.img.url}`} alt="جزییات محصول انتخابی" />
                            </SwiperSlide>
                        )}

                        {params.state.product.orgImg && (
                            <SwiperSlide>
                                <img src={`http://localhost:1337${params.state.product.orgImg.url}`} alt="جزییات محصول انتخابی" />
                            </SwiperSlide>
                        )}

                        {params.state.product.images && (
                            params.state.product.images.map((img) => (
                                <SwiperSlide key={img.id}>
                                    <img src={`http://localhost:1337${img.url}`} alt="جزییات محصول انتخابی" />
                                </SwiperSlide>
                            ))
                        )}

                    </Swiper>
                </div>

                <div >
                    <div className="text-right font-weight-bold border-bottom">
                        <h5 className="mt-5 mr-3 ">
                            {params.state.product.title}
                        </h5>

                        <h4 className="font-weight-bold mt-3 mr-3" style={{ color: "rgb(254, 116, 11)" }}>
                            {params.state.product.price || params.state.product.orginalPrice}
                        </h4>

                        <ReactMarkdown className="font-weight-bold mt-3">{params.state.product.attr}</ReactMarkdown>

                        <h6 className="font-weight-bold mr-3">
                            سایز لباس :
                            <Select
                                className="mr-3"
                                defaultValue="یک گزینه را انتخاب کنید"
                                style={{
                                    width: 200,
                                }}
                            >

                                <Option value="jack" className="text-right">یک گزینه را انتخاب کنید</Option>
                                <Option value="2xl" className="text-right">۲XL</Option>
                                <Option value="2xl" className="text-right">۲XL</Option>
                                <Option value="2xl" className="text-right">۲XL</Option>

                            </Select>


                        </h6>
                        {/* <Button
                            type="primary"
                            size="large"
                            className="mt-3 mr-3 bg-success"
                            onClick={() => addToCartHandler(params.state.product)}
                            loading={loadings}
                        >
                            افزودن به سبد خرید
                        </Button> */}

                        {/* <Link to="/wish-list">علاقه مند یها</Link> */}

                        {/* <p className="m-3" style={{ cursor: "pointer" }} onClick={() => dispatch(addedToWishList(params.state.product))}> <HeartOutlined /> افزودن به علاقه مندی</p> */}
                    </div>
                    <div className="text-right font-weight-bold mt-3 mr-3">
                        <p >شناسه محصول :‌ {params.state.product.id}</p>
                        <div className="d-flex mt-3 mb-5" style={{ cursor: "pointer" }}>
                            <p>اشتراک گذاری :  </p>
                            <FacebookOutlined className="mr-1" />
                            <TwitterOutlined className="mr-1" />
                            <MailOutlined className="mr-1" />
                            <LinkedinOutlined className="mr-1" />
                            <WhatsAppOutlined className="mr-1" />
                            <InstagramOutlined className="mr-1" />
                        </div>

                    </div>
                </div>


            </div>
        </>
    );
}

export default ShowDetailProductLayout;