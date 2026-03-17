import { Card, Col, Row, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';
import SiteLayout from '../layouts/SiteLayout';

const { Title, Paragraph, Text } = Typography;

const profileModules = [
  {
    title: '我的资料',
    detail: '账号身份、企业信息、角色权限与偏好设置。',
  },
  {
    title: '我的项目',
    detail: '后续可查看项目沟通记录、资料申请与合作进度。',
  },
  {
    title: '我的内容',
    detail: '后续可收藏知识库条目、产品资料与行业方案模板。',
  },
];

const activityItems = [
  '最近查看：ARC ENGINE 页面',
  '最近查看：知识库 / 系统能力解析',
  '最近入口：客户与合作',
];

const profileStats = [
  { label: '账号状态', value: '已激活' },
  { label: '角色身份', value: '合作伙伴 / 客户账号' },
  { label: '可访问模块', value: '知识库 / 产品资料 / 合作入口' },
];

const profileNavItems = ['总览', '账号资料', '项目记录', '知识收藏', '合作入口'];

export default function ProfilePage() {
  return (
    <SiteLayout
      title="个人中心 | Navlyn 航链科技"
      description="查看 Navlyn 官网静态个人中心原型，后续可扩展账号资料、项目入口与内容收藏。"
    >
      <section className="page-section" id="profile-overview">
        <div className="section-heading">
          <Text className="news-page-kicker">Overview</Text>
          <Title level={2}>个人中心结构预览</Title>
          <Paragraph>把账号资料、项目进度和内容入口整合在同一界面，方便后续扩展为真实用户中心。</Paragraph>
        </div>

        <Row gutter={[20, 20]}>
          {profileModules.map((item) => (
            <Col xs={24} md={8} key={item.title}>
              <Card className="feature-card" bordered={false}>
                <Tag color="blue">Module</Tag>
                <Title level={3}>{item.title}</Title>
                <Paragraph>{item.detail}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section className="page-section">
        <div className="profile-center-grid">
          <Card className="feature-card profile-sidebar" bordered={false}>
            <div className="profile-sidebar-head">
              <div className="profile-avatar">N</div>
              <div className="profile-sidebar-copy">
                <strong>Navlyn Demo User</strong>
                <span>合作伙伴 / 客户账号</span>
              </div>
            </div>
            <div className="profile-nav-list">
              {profileNavItems.map((item, index) => (
                <div key={item} className={`profile-nav-item${index === 0 ? ' is-active' : ''}`}>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="profile-sidebar-foot">
              <Text className="news-page-kicker">Access</Text>
              <Paragraph>当前为静态原型，后续可接入真实权限控制、企业认证和账号设置。</Paragraph>
            </div>
          </Card>

          <div className="profile-center-main">
            <Card className="feature-card account-form-card" bordered={false}>
              <Text className="news-page-kicker">Account Snapshot</Text>
              <Title level={2}>静态账号信息卡</Title>
              <div className="account-meta-grid">
                {profileStats.map((item) => (
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
                  <Text>Profile Prototype</Text>
                </div>
                <div className="account-form-preview">
                  <div className="account-field account-field-input">
                    <span>账号名称</span>
                    <strong>Navlyn Demo User</strong>
                  </div>
                  <div className="account-field account-field-input">
                    <span>身份类型</span>
                    <strong>合作伙伴 / 客户账号</strong>
                  </div>
                  <div className="account-field account-field-input">
                    <span>权限状态</span>
                    <strong>知识库、产品资料、合作入口已开通</strong>
                  </div>
                  <div className="account-field account-field-input">
                    <span>偏好语言</span>
                    <strong>中文 / English / Français / Español</strong>
                  </div>
                </div>
              </div>
            </Card>

            <div className="account-side-stack">
              <Card className="timeline-card" bordered={false}>
                <Tag color="blue">Recent Activity</Tag>
                <Title level={3}>最近访问</Title>
                <div className="about-milestone-list">
                  {activityItems.map((item) => (
                    <div key={item} className="about-milestone-item">
                      <span />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="feature-card" bordered={false}>
                <Tag color="blue">Next Version</Tag>
                <Title level={3}>后续可扩展的个人中心能力</Title>
                <Paragraph>下一步可以继续补齐账号资料编辑、项目收藏、下载记录、合作申请进度和团队成员协作视图。</Paragraph>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
