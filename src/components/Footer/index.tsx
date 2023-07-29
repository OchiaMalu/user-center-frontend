import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-components';
import React from "react";

const Footer: React.FC = () => {
  const defaultMessage = 'Made with ❤ by\nOchiaMalu';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'UserCenter Frontend',
          title: 'UserCenter Frontend',
          href: 'https://github.com/OchiaMalu/user-center-frontend',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined/>,
          href: 'https://github.com/OchiaMalu/user-center-frontend',
          blankTarget: true,
        },
        {
          key: 'UserCenter Backend',
          title: 'UserCenter Backend',
          href: 'https://github.com/OchiaMalu/user-center-backend',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
