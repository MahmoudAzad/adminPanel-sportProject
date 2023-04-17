import {  Layout} from 'antd';
import React from 'react';
const { Footer } = Layout;
const PanelFooter = () => {
    return (
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            Ant Design ©2023 Created by Ant UED
        </Footer>
    );
}

export default PanelFooter;