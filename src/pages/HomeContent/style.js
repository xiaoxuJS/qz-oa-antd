import styled from 'styled-components';

export const HomeContentAll = styled.div`
    min-height: ${props => props.Height};
    background-color: #fff;
    padding: 0 50px;
`
export const HomeContentTop = styled.div`
    height: 120px;
    border: 1px solid #000;
    padding: 10px 20px;
    .left{
        float: left;
        margin-left: 20px;
    }
    .centre{
        float: left;
        font-size: 16px;
        font-weight: 900;
        margin-left: 50px;
        line-height: 40px;
        div{
            .ant-upload-list-text{
                display: none;
            }
        }
    }
    .right{
        float:right;
        height: 100%;
        align-content: center;
    }
`