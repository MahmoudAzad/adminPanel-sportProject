import { DesktopOutlined, MessageOutlined, PieChartOutlined, PlusCircleOutlined, SearchOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Input, Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

const Sidebar = () => {
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            style={{ height: "100vh" }}
            width={250}
        >
            <div className="logo" />
            <Menu
                mode="inline"
                theme='dark'
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
            >
                <div className="avatar-container p-1">

                    <Badge dot={true} color="green" offset={[48, 0]}>
                        <Avatar
                            shape="square"
                            size="large"
                            src={<img src="/images\adminProfile.jpg" alt="avatar" />}
                            className='ml-2'
                        />
                    </Badge>

                    <div className='caption'>
                        <h6>میلاد آزاد</h6>
                        <p>آنلاین</p>
                    </div>

                </div>

                <Input prefix={<SearchOutlined />} placeholder="جستجو" />

                {/* <div className='mt-3 p-1 text-center' style={{ backgroundColor: "rgb(108, 107, 107)" }}>
                <p className='pt-2 '>منو</p>
            </div> */}



                <Menu.Item className="sidebar-item" key="1" icon={<PieChartOutlined />} >
                    <Link to="/">
                        داشبورد
                    </Link>
                </Menu.Item>


                <Menu.SubMenu
                    key="sub2"
                    icon={<DesktopOutlined />}
                    title="همه محصولات سایت"
                >
                    <Menu.SubMenu key="sub3" title="لباس ورزشی مردانه">
                        <Menu.Item className="sidebar-item" key="5">
                            <Link to={"/show-products/" + "ring-sleeves"}>
                                رکابی بدنسازی مردانه
                            </Link>
                        </Menu.Item>

                        <Menu.Item className="sidebar-item" key="6">
                            <Link to={"/show-products/" + "tshirts"} >
                                تیشرت ورزشی مردانه
                            </Link>
                        </Menu.Item>


                        <Menu.Item className="sidebar-item" key="7">
                            <Link to={"/show-products/" + "sweatshirts"} >
                                هودی و سوییشرت مردانه
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="sidebar-item" key="8">
                            <Link to={"/show-products/" + "mens-socks"} >
                                جوراب ورزشی مردانه
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="sidebar-item" key="9">
                            <Link to={"/show-products/" + "mens-legs"} >
                                لگ ورزشی مردانه
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="sidebar-item" key="10">
                            <Link to={"/show-products/" + "mens-sport-shorts"} >
                                شلوارک ورزشی مردانه
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="sidebar-item" key="11">
                            <Link to={"/show-products/" + "mens-pants"} >
                                شلوار ورزشی مردانه
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="sidebar-item" key="12">
                            <Link to={"/show-products/" + "mens-set-sports"} >
                                ست ورزشی مردانه
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="sidebar-item" key="13">
                            <Link to={"/show-products/" + "mens-slippers"} >
                                دمپایی اسپرت مردانه
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="sidebar-item" key="14">
                            <Link to={"/show-products/" + "mens-shoes"} >
                                کفش ورزشی مردانه
                            </Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="sub4" title="لباس ورزشی زنانه">
                        <Menu.Item className="sidebar-item" key="15">
                            <Link to={"/show-products/" + "women-busts"} >
                                نیم تنه ورزشی زنانه
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="sidebar-item" key="16">
                            <Link to={"/show-products/" + "tshirts"} >
                                تیشرت ورزشی زنانه
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="sidebar-item" key="17">
                            <Link to={"/show-products/" + "sweatshirts"} >
                                هودی و سوییشرت زنانه
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="sidebar-item" key="18">
                            <Link to={"/show-products/" + "women-shorts"} >
                                شلوارک ورزشی زنانه
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="sidebar-item" key="19">
                            <Link to={"/show-products/" + "mens-pants"} >
                                شلوار ورزشی زنانه
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="sidebar-item" key="20">
                            <Link to={"/show-products/" + "women-skirts"} >
                                دامن ورزشی زنانه
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="sidebar-item" key="21">
                            <Link to={"/show-products/" + "women-set-sports"} >
                                ست ورزشی زنانه
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="sidebar-item" key="22">
                            <Link to={"/show-products/" + "mens-socks"} >
                                جوراب ورزشی زنانه
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="sidebar-item" key="23">
                            <Link to={"/show-products/" + "mens-legs"} >
                                لگ ورزشی زنانه
                            </Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="sub5" title="لوازم ورزشی">
                        <Menu.Item className="sidebar-item" key="24">
                            <Link to={"/show-products/" + "fitness-elastic-exercisebands"} >
                                کش بدنسازی
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="sidebar-item" key="25">
                            <Link to={"/show-products/" + "bodybuilding-gloves"} >
                                دستکش بدنسازی
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="sidebar-item" key="26">
                            <Link to={"/show-products/" + "massagers"} >
                                ماساژور
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="sidebar-item" key="27">
                            <Link to={"/show-products/" + "fitness-knee-straps"} >
                                زانوبند بدنسازی
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="sidebar-item" key="28">
                            <Link to={"/show-products/" + "bodybuilding-belts"} >
                                کمربند بدنسازی
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="sidebar-item" key="29">
                            <Link to={"/show-products/" + "sport-bags"} >
                                کیف و ساک ورزشی
                            </Link>
                        </Menu.Item>

                    </Menu.SubMenu>


                </Menu.SubMenu>

                <Menu.SubMenu
                    key="sub6"
                    icon={<PlusCircleOutlined />}
                    title="اضافه کردن محصول جدید"
                >
                    <Menu.SubMenu key="sub7" title="لباس ورزشی مردانه" >
                        <Menu.Item className="sidebar-item" key="33">رکابی بدنسازی مردانه</Menu.Item>
                        <Menu.Item className="sidebar-item" key="34">تیشرت ورزشی مردانه</Menu.Item>
                        <Menu.Item className="sidebar-item" key="35">هودی و سوییشرت مردانه</Menu.Item>
                        <Menu.Item className="sidebar-item" key="36">جوراب ورزشی مردانه</Menu.Item>
                        <Menu.Item className="sidebar-item" key="37">لگ ورزشی مردانه</Menu.Item>
                        <Menu.Item className="sidebar-item" key="38">شلوارک ورزشی مردانه</Menu.Item>
                        <Menu.Item className="sidebar-item" key="39">شلوار ورزشی مردانه</Menu.Item>
                        <Menu.Item className="sidebar-item" key="40">ست ورزشی مردانه</Menu.Item>
                        <Menu.Item className="sidebar-item" key="41">دمپایی اسپرت مردانه</Menu.Item>
                        <Menu.Item className="sidebar-item" key="42">کفش ورزشی مردانه</Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="sub8" title="لباس ورزشی زنانه">
                        <Menu.Item className="sidebar-item" key="43">نیم تنه ورزشی زنانه</Menu.Item>
                        <Menu.Item className="sidebar-item" key="44">تیشرت ورزشی زنانه</Menu.Item>
                        <Menu.Item className="sidebar-item" key="45">هودی و سوییشرت زنانه</Menu.Item>
                        <Menu.Item className="sidebar-item" key="46">شلوارک ورزشی زنانه</Menu.Item>
                        <Menu.Item className="sidebar-item" key="47">شلوار ورزشی زنانه</Menu.Item>
                        <Menu.Item className="sidebar-item" key="48">دامن ورزشی زنانه</Menu.Item>
                        <Menu.Item className="sidebar-item" key="49">ست ورزشی زنانه</Menu.Item>
                        <Menu.Item className="sidebar-item" key="50">جوراب ورزشی زنانه</Menu.Item>
                        <Menu.Item className="sidebar-item" key="51">لگ ورزشی زنانه</Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="sub9" title="لوازم ورزشی">
                        <Menu.Item className="sidebar-item" key="52">کش بدنسازی</Menu.Item>
                        <Menu.Item className="sidebar-item" key="53">دستکش بدنسازی</Menu.Item>
                        <Menu.Item className="sidebar-item" key="54">ماساژور</Menu.Item>
                        <Menu.Item className="sidebar-item" key="55">زانوبند بدنسازی</Menu.Item>
                        <Menu.Item className="sidebar-item" key="56">کمربند بدنسازی</Menu.Item>
                        <Menu.Item className="sidebar-item" key="57">کیف و ساک ورزشی</Menu.Item>
                        <Menu.Item className="sidebar-item" key="58">ست ورزشی زنانه</Menu.Item>
                        <Menu.Item className="sidebar-item" key="59">جوراب ورزشی زنانه</Menu.Item>
                        <Menu.Item className="sidebar-item" key="60">لگ ورزشی زنانه</Menu.Item>
                    </Menu.SubMenu>


                </Menu.SubMenu>

                <Menu.Item className="sidebar-item" key="61" icon={<UnorderedListOutlined />}    >لیست کارها</Menu.Item>
                <Menu.Item className="sidebar-item" key="62" icon={<MessageOutlined />}    >پیام های کاربران</Menu.Item>
                <Menu.Item className="sidebar-item" key="63" icon={<UserOutlined />}    >مشاهده کاربران سایت</Menu.Item>

            </Menu>
        </Sider >
    );
}

export default Sidebar;