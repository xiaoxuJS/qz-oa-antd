import { createGlobalStyle } from "styled-components";

export const StyleCommon = createGlobalStyle`
/*清除元素默认的内外边距  */
* {
    margin: 0;
    padding: 0
}
/*让所有斜体 不倾斜*/
em,
i {
    font-style: normal;
}
/*去掉列表前面的小点*/
li {
    list-style: none;
}
/*图片没有边框   去掉图片底侧的空白缝隙*/
img {
    border: 0;  /*ie6*/
    vertical-align: middle;
}
/*让button 按钮 变成小手*/
button {
    cursor: pointer;
}
/*取消链接的下划线且修改字体颜色*/
a {
    color: #666;
    text-decoration: none;
}

button,
input {
    font-family: 'Microsoft YaHei', 'Heiti SC', tahoma, arial, 'Hiragino Sans GB', \\5B8B\4F53, sans-serif;
}

body {
    background-color: #fff;
    font: 12px/1.5 'Microsoft YaHei', 'Heiti SC', tahoma, arial, 'Hiragino Sans GB', \\5B8B\4F53, sans-serif;
    color: #666
}
/*隐藏元素*/
.hide,
.none {
    display: none;
}
/*清除浮动*/
.clearfix:after {
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
}
.clearfix {
    *zoom: 1
}
/* 日期 */
.ant-picker {
        width: 100%;
    }

`;
