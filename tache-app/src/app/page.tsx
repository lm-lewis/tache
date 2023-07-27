'use client';
import { Breadcrumb, Layout, Menu, theme , Button, Tooltip, Table, Form, Input, Space, message, Popconfirm  } from 'antd';
import React, { useState } from 'react';
import {
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  LoadingOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

type LayoutType = Parameters<typeof Form>[0]['layout'];

const { Column, ColumnGroup } = Table;

const confirm = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e);
  message.success('La tâche est supprimée avec succès');
};

const cancel = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e);
  message.error('Opération annuler');
};

interface DataType {
  key: React.Key;
  title: string;
  description: string;
  status: string;
}

const data: DataType[] = [
  {
    key: '1',
    title: 'Project 1',
    description: 'New York No. 1 Lake Park',
    status: 'En cours',
  },
  {
    key: '2',
    title: 'Project 2',
    description: 'London No. 1 Lake Park',
    status: 'En cours',
  },
  {
    key: '3',
    title: 'Project 3',
    description: 'Sydney No. 1 Lake Park',
    status: 'En cours',
  },
  {
    key: '4',
    title: 'Project 4',
    description: 'Finh Sydney No. 1 Lake Park',
    status: 'Finished',
  },
];

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} est obligatoire!',
};
/* eslint-enable no-template-curly-in-string */


export default function Home() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('vertical');

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(2).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        />
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Tache</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, minHeight: 380, background: colorBgContainer }}>
          Content
        <div>
          <Form
            form={form}
            layout={formLayout}
            initialValues={{ layout: formLayout }}
          >       
          <Form.Item name={['le titre']} label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          
          <Form.Item name={['la description']} label="Description" rules={[{ required: true }]}>
            < Input.TextArea />
          </Form.Item>
          
          <Form.Item name={['le status']} label="Status" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        
          <Form.Item>
            <Space size="middle">
            <Tooltip title="Enregistrer">
              <Button htmlType="submit">
                Enregistrer
              </Button>
              </Tooltip>
              <Button htmlType="reset">
                  Annuler
              </Button>
            </Space>
          </Form.Item>
        </Form>    
        </div>
        <br/>
        <div>
            <Table dataSource={data}>
              <Column title="ID" dataIndex="key" key="key" />
              <Column title="Titre" dataIndex="title" key="title" />
              <Column title="Description" dataIndex="description" key="description" />
              <Column title="Status" dataIndex="status" key="status" />
              <Column title="Action" key="action"
                render={(_: any, record: DataType) => (
                  <Space size="middle">
                    {/* <Popconfirm
                      title="Modifier la tâche"
                      description="Êtes-vous sûr de vouloir modifier cette tâche ?"
                      onConfirm={confirm}
                      onCancel={cancel}
                      okText="Oui"
                      cancelText="Non"
                    >
                      <Button icon={<EditOutlined />}>Modifier</Button>
                    </Popconfirm> */}
                    <Button icon={<EditOutlined />}>Modifier</Button>
                    <Popconfirm
                      title="Supprimer la tâche"
                      description="Êtes-vous sûr de vouloir supprimer cette tâche ?"
                      icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                      onConfirm={confirm}
                      onCancel={cancel}
                      okText="Oui"
                      cancelText="Non"
                    >
                      <Button danger icon={<DeleteOutlined />}>Supprimer</Button>
                    </Popconfirm>
                  </Space>
                )}
              />
            </Table>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2023</Footer>      
    </Layout>
  )
}
