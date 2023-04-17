import { BellOutlined, MailOutlined, ProfileOutlined } from '@ant-design/icons';
import { Avatar, Badge,Menu } from 'antd';
import React from 'react';
const PanelMenu = () => {
    return (
        <Menu
            mode="horizontal"
            className="menu "
        >
            <div className='ml-3'>
                <Badge
                    count={4}
                    size="small"
                    color={"orange"}
                >

                    <BellOutlined style={{ fontSize: "large", color: "white" }} />
                </Badge>
            </div>

            <div className='ml-3'>
                <Badge
                    count={5}
                    size="small"
                    color={"green"}
                >
                    <MailOutlined style={{ fontSize: "large", color: "white" }} />
                </Badge>
            </div>

            <div className='ml-5'>
                <Badge
                    count={2}
                    size="small"
                >
                    <ProfileOutlined style={{ fontSize: "large", color: "white" }} />
                </Badge>
            </div>

            <Avatar
                src={<img src="/images\adminProfile.jpg" alt="avatar" />}
                className='ml-1 mb-3'
            />



            <p className="text-white ml-5" >میلاد آزاد</p>

        </Menu>
    );
}

export default PanelMenu;