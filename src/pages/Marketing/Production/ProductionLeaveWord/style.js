import styled from 'styled-components';

export const ProductionLeaveWordAll = styled.div`
    .ant-page-header{
        border-bottom: 1px solid #DCE0E0;
    }
    .ant-form{
        padding: 30px 30px 0px;
        border-bottom: 1px solid #DCE0E0;
    }
    .ant-card-body{
        height: 156px;
        overflow: auto;
        font-size: 16px;
        .card-name{
            font-weight: 600;
            color: #1890FF;
            
        }
        .card-time{
            font-size: 10px;
            margin-left: 10px;
            color: #ccc;
        }
    }
`

export const ProductionLeaveWordList = styled.div`
    margin: 20px;
    border: 1px solid #ccc;
    .ant-typography{
        border-bottom: 1px solid #ccc;
        padding: 20px;
    }
    .list-item{
        padding: 20px;
        height: 156px;
        overflow: auto;
        font-size: 16px;
        .card-name{
            font-weight: 600;
            color: #1890FF;
            
        }
        .card-time{
            font-size: 10px;
            margin-left: 10px;
            color: #ccc;
        }
    }
`