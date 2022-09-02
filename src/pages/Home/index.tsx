import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Col, Divider, Row, Statistic } from 'antd';
import { TodoList } from './_subComponent/TodoList';
import { Tools } from './_subComponent/Tools';
import { useModel } from '@umijs/max'

const HomePage: React.FC = () => {
  const { initialState } = useModel('@@initialState')
  return (
    <PageContainer
      title={'Hi，' + initialState?.userInfo?.nickName || initialState?.userInfo?.username}
      ghost
    // extra={<Tools />}
    >
      <Row>
        <Col xs={24} sm={24} md={24} lg={15} xl={15}>
          <TodoList title="Todo" />
        </Col>
        <Col xs={0} sm={0} md={0} lg={9} xl={9}>
          <div style={{ paddingLeft: 24 }}>
            <ProCard title={'公告'} style={{ marginBottom: 16 }}>
              Crazy Thursday V ME 50
            </ProCard>
            <ProCard title={'分析'}>
              11
            </ProCard>
          </div>
        </Col>
      </Row>
    </PageContainer >
  );
};

export default HomePage;
