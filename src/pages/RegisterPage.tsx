import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import SiteLayout from '../layouts/SiteLayout';

const { Title, Paragraph, Text } = Typography;

const registerTips = [
  { label: '开放状态', value: '静态原型阶段' },
  { label: '接入方式', value: '暂不提交数据' },
  { label: '后续扩展', value: '企业认证 / 角色权限' },
];

const registerFields = [
  { label: '姓名 / 企业名称', value: '请输入你的姓名或企业名称' },
  { label: '邮箱', value: '用于接收系统通知与后续验证' },
  { label: '密码', value: '当前为静态展示，不接真实提交' },
  { label: '账号类型', value: '客户 / 合作伙伴 / 研发协作 / 渠道伙伴' },
  { label: '协议确认', value: '后续可接入服务协议、隐私声明与企业认证条款' },
];

export default function RegisterPage() {
  return (
    <SiteLayout
      title="注册 | Navlyn 航链科技"
      description="查看 Navlyn 官网静态注册页原型，后续可扩展真实账号体系与企业认证流程。"
    >
      <section className="page-section" id="register-form">
        <div className="account-panel-grid is-simple">
          <Card className="feature-card account-form-card is-simple" bordered={false}>
            <Text className="news-page-kicker">Form Preview</Text>
            <Title level={2}>注册</Title>
            <div className="account-meta-grid">
              {registerTips.map((item) => (
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
                <Text>Register Prototype</Text>
              </div>
              <div className="account-form-preview">
                {registerFields.map((field) => (
                  <div className="account-field account-field-input" key={field.label}>
                    <span>{field.label}</span>
                    <strong>{field.value}</strong>
                  </div>
                ))}
              </div>
              <div className="account-form-note">
                <strong>静态提示</strong>
                <span>这是一套视觉原型，后续可直接替换成真实输入框、校验状态和提交流程。</span>
              </div>
            </div>
            <div className="account-form-actions">
              <span className="product-entry-link">创建账号</span>
              <Link className="product-entry-link product-system-cta-secondary" to="/login">
                已有账号？去登录
              </Link>
            </div>
            <Paragraph className="account-inline-note">当前页面仅做静态展示，不会提交任何数据。</Paragraph>
          </Card>
        </div>
      </section>
    </SiteLayout>
  );
}
