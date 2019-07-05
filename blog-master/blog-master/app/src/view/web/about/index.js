import React, { Component } from 'react';
import { Divider, Icon, Rate } from 'antd'
import './index.scss';

class About extends Component {
    render() {
        return (
            <div className='about-container'>
                <Divider orientation="left">博客简述</Divider>
                <p>本博客使用的技术为 react16.8.6 + antd + koa2 + mysql</p>

                <Divider orientation="left">关于我</Divider>
                <ul className="about-list">
                    <li>姓名：邓天</li>
                    <li>外号：金融界的黑寡妇</li>
                    <li>学历专业：大专<Divider type="vertical" />计算机应用技术</li>
                    <li>
                        联系方式：
                        {/* <Icon type="wechat" style={{ color: '#57bb64' }} /> LXS-JAY */}
                        {/* <Divider type="vertical" /> */}
                        <Icon type="mail" style={{ color: '#57bb64', marginRight: 4 }} />
                        <a href="mailto:2119215629@qq.com">2119215629@qq.com</a>
                    </li>
                    <li>坐标：中山市</li>
                    <li>
                        技能
                        <ul>
                            <li>
                                HTML、CSS、Javascript：能熟练开发符合 W3C 标准的页面！
                                <Rate defaultValue={4} disabled />
                            </li>
                            <li>
                                react vue 框架：熟练使用！
                                <Rate defaultValue={5} disabled />
                            </li>
                            <li>
                                es6：日常开发必备，以及掌握基本面向对象编程实现！
                                <Rate defaultValue={3} disabled />
                            </li>
                            <li>
                                webpack: 熟练级别，可以对脚手架进行针对性的配置！
                                <Rate defaultValue={3} disabled />
                            </li>
                            <li>
                                node mysql：针对需求可以做到简单的数据库设计、接口的开发与设计！
                                <Rate defaultValue={2} disabled />
                            </li>
                        </ul>
                    </li>
                    <li>
                        其他
                        <ul>
                            <li>常用开发工具： vscode、git、webstorm</li>
                            <li>熟悉的 UI 工具： antd、element-ui</li>
                            <li>良好的代码习惯： 略微代码洁癖、注释规范 jsdoc</li>
                        </ul>
                    </li>
                    <li>
                        个人
                        <ul>
                            <li>喜欢玩摄影，旅行，打羽毛球，还有刷抖音和头条</li>
                            <li>慢热型、平常比较好说话。联系方式在上面，欢迎交流！</li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default About