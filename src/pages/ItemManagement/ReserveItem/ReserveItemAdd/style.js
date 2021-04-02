import styled from 'styled-components'


export const ReserveItemAddAll = styled.div`
    .dynamic-delete-button {
        position: relative;
        top: 4px;
        margin: 0 8px;
        color: #999;
        font-size: 24px;
        cursor: pointer;
        transition: all 0.3s;
    }
    .dynamic-delete-button:hover {
        color: #777;
    }
    .dynamic-delete-button[disabled] {
        cursor: not-allowed;
        opacity: 0.5;
    }
    .ant-typography{
        padding-left: 50px;
    }

`