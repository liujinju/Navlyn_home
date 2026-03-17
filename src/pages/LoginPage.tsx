import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import SiteLayout from '../layouts/SiteLayout';

const { Title, Paragraph, Text } = Typography;

const loginStates = [
  { label: '登录状态', value: '静态展示' },
  { label: '支持方式', value: '密码 / 短信 / 单点' },
  { label: '扩展方向', value: '角色权限与会话管理' },
];

const loginFields = [
  { label: '邮箱 / 手机号', value: '请输入你的登录账号' },
  { label: '密码', value: '当前不接入真实校验逻辑' },
  { label: '验证方式', value: '密码登录 / 短信登录 / 单点登录' },
  { label: '辅助能力', value: '后续可扩展记住我、双因素认证与异常设备提醒' },
];

export default function LoginPage() {
  return (
    <SiteLayout
      title="登录 | Navlyn 航链科技"
      description="查看 Navlyn 官网静态登录页原型，后续可接入真实账号验证与角色权限。"
    >
      <section className="page-section" id="login-panel">
        <div className="account-panel-grid is-simple">
          <Card className="feature-card account-form-card is-simple" bordered={false}>
            <Text className="news-page-kicker">Login Preview</Text>
            <Title level={2}>登录</Title>
            <div className="account-meta-grid">
              {loginStates.map((item) => (
                <div key={item.label} className="account-meta-chip">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
            <div className="account-form-shell">
              <div className="account-form-shell-top">
                <div className="account-form-shell-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <Text>Login Prototype</Text>
              </div>
              <div className="account-form-preview">
                {loginFields.map((field) => (
                  <div className="account-field account-field-input" key={field.label}>
                    <span>{field.label}</span>
                    <strong>{field.value}</strong>
                  </div>
                ))}
              </div>
              <div className="account-form-note">
                <strong>静态提示</strong>
                <span>未来这里可以接入验证码、密码错误反馈、异常登录提醒和单点登录按钮。</span>
              </div>
            </div>
            <div className="account-form-actions">
              <span className="product-entry-link">登录</span>
              <Link className="product-entry-link product-system-cta-secondary" to="/profile">
                前往个人中心
              </Link>
            </div>
            <Paragraph className="account-inline-note">当前页面仅做静态展示，不进行真实校验或登录请求。</Paragraph>
          </Card>
        </div>
      </section>
    </SiteLayout>
  );
}
