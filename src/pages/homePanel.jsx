import { BarChartOutlined, PieChartOutlined, ShoppingOutlined, UserAddOutlined } from '@ant-design/icons';
import React from 'react';

const HomePanel = () => {
    return (
        <div className="HomePanel-container">
            <div className='box-container row text-center'>
                <div className='box-item col ' style={{ backgroundColor: "rgb(137, 188, 255)" }}>
                    <div className='captions'>
                        <h2>۱۵۰</h2>
                        <h6>سفارش جدید</h6>
                    </div>
                    <div className='icon'>
                        <ShoppingOutlined style={{ fontSize: "60px", color: "gray" }} />
                    </div>
                </div>

                <div className='box-item col' style={{ backgroundColor: "rgb(91, 219, 0)" }}>
                    <div className='captions'>
                        <h2>۵۳٪</h2>
                        <h6>افزایش امتیاز</h6>
                    </div>
                    <div className='icon'>
                        <BarChartOutlined style={{ fontSize: "60px", color: "gray" }} />
                    </div>
                </div>

                <div className='box-item col ' style={{ backgroundColor: "rgb(252, 171, 41)" }}>
                    <div className='captions'>
                        <h2>۴۴</h2>
                        <h6>کاربران ثبت شده</h6>
                    </div>
                    <div className='icon'>
                        <UserAddOutlined style={{ fontSize: "60px", color: "gray" }} />
                    </div>

                </div>

                <div className='box-item col' style={{backgroundColor:"rgb(243, 103, 39)"}}>
                    <div className='captions'>
                        <h2>۶۵</h2>
                        <h6>بازدید جدید</h6>
                    </div>
                    <div className='icon'>
                        <PieChartOutlined style={{ fontSize: "60px", color: "gray" }} />
                    </div>
                </div>


            </div>
        </div>
    );
}

export default HomePanel;