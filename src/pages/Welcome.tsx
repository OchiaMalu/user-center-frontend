import {PageContainer} from '@ant-design/pro-components';
import {Alert, Card, Typography} from 'antd';
import React from 'react';
import styles from './Welcome.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);
const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <Alert
          message={'欢迎来到用户中心'}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          <a>
            已经接入的站点
          </a>
        </Typography.Text>
        <CodePreview>
          <a href="https://ochiamalu.xyz">用户匹配系统-速配SUPER</a>
        </CodePreview>
      </Card>
    </PageContainer>
  );
};
export default Welcome;
