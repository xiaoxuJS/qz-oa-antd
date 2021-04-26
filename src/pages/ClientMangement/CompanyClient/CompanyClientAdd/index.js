import React from 'react';
import {
    useHistory
} from 'react-router-dom'
import {
    CompanyClientAddAll
} from './style';
import {
    PageHeader
} from 'antd'

const CompanyClientAdd = () => {
    const history = useHistory();
    return <CompanyClientAddAll>
            <PageHeader
                className="site-page-header"
                title="客户管理-添加客户"
                onBack={() => history.go(-1)}
            ></PageHeader>
    </CompanyClientAddAll>
}

export default CompanyClientAdd;