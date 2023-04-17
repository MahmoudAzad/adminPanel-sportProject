import { Layout, theme } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import PanelFooter from '../components/footer.jsx';
import PanelMenu from '../components/menu.jsx';
import Sidebar from '../components/sidebar.jsx';
const { Content } = Layout;

const MainLayout = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();


    return (
        <Layout>
            <Sidebar />
            <Layout>
                <PanelMenu />
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 500,
                            background: colorBgContainer,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <PanelFooter />
            </Layout>
        </Layout>
    );
}

export default MainLayout;