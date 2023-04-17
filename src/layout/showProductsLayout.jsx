import { Button, Modal, Space, Table, Tag } from 'antd';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
const { Column, ColumnGroup } = Table;


const ShowProductsLayout = () => {

    const [products, setProducts] = useState("");
    const { endPath } = useParams();
    const navigate = useNavigate();

    console.log("end path = > ", endPath);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Request-Headers", "*");
    myHeaders.append("Access-Control-Request-Method", "*");
    myHeaders.append("accept", "*/*");
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const fetchData = () => {
        fetch(`http://localhost:1337/${endPath}`, requestOptions)
            .then((response) => response.json())
            .then(result => { setProducts(result) });
    }

    useEffect(() => {
        fetchData();
    }, [endPath])


    console.log("products => ", products);


    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 6, // تعداد محصولات در هر صفحه
        },
    });

    const handleTableChange = (pagination) => {
        setTableParams({ pagination });
    };


    // const handleEditClick = () =>{}


    function handleShowDetailProduct(id) {
        navigate("/show-detail-product", {
            state: {
                endPath,
                id
            },
        });
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOk = (id) => {
        console.log("id ok??? => ", id);
        axios.delete(`http://localhost:1337/${endPath}/${id}`)
            .then(response => {
                if (response.status === 200) {
                    console.log("Response => ", response);
                    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
                    setIsModalOpen(false);
                } else {
                    console.log("حذف نمیشه");
                }

            }).catch(
                console.log("حذف catch")
            );

    };


    const [proId, setProId] = useState("");
    console.log("proId => ", proId);
    const showModal = (id) => {
        console.log("id ===> ", id);
        setProId(id);
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <Table
            dataSource={products}
            pagination={tableParams.pagination}
            onChange={handleTableChange}
            eventkey="id"
        >
            <Column
                title="نام محصول"
                dataIndex="title"
                key="firstName"
                className='pointer-cursor'

                onCell={(record, rowIndex) => {
                    return {
                        onClick: () => {
                            handleShowDetailProduct(record.id)
                        },
                    };
                }}
            />

            <Column
                title="قیمت"
                dataIndex="price"
                key="price"
                className='pointer-cursor'

                onCell={(record, rowIndex) => {
                    return {
                        onClick: () => {
                            handleShowDetailProduct(record.id)
                        },
                    };
                }}
            />

            <Column
                className='text-center pointer-cursor'
                title="تصویر"
                dataIndex="images"
                key="image"

                render={(images) => (
                    <Tag>
                        <img src={`http://localhost:1337${images[0].url}`} style={{ width: "40px" }} />
                    </Tag>
                )}

                onCell={(record, rowIndex) => {
                    return {
                        onClick: () => {
                            handleShowDetailProduct(record.id)
                        },
                    };
                }}
            />
            <Column
                className='text-center'
                // dataIndex="id"
                title="حذف / ویرایش"
                key="action"
                render={(record) => (
                    <Space size="middle">
                        <Button type="primary" onClick={() => showModal(record.id)}>
                            حذف
                        </Button>
                        <Modal
                            title=""
                            open={isModalOpen}
                            // onOk={handleOk}
                            onCancel={handleCancel}
                            className="text-right"
                            footer={[

                                <Button key="submit" type="primary" onClick={() => handleOk("1")}>
                                    اره
                                </Button>,
                                <Button
                                    type="primary"
                                    onClick={handleCancel}
                                >
                                    نه بیخیال
                                </Button>,
                            ]}

                        >
                            <p>مطمینی میخوای حذفش کنی ؟</p>

                        </Modal>

                        <Button type="primary" onClick={() => handleShowDetailProduct(record.id)} >
                            ویرایش
                        </Button>
                    </Space>
                )}
            />
        </Table>
    );
};

export default ShowProductsLayout;