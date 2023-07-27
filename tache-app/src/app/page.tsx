'use client';
import { Breadcrumb, Layout, Menu, theme , Button, Tooltip, Table, Form, Input, Space, message, Popconfirm  } from 'antd';
import React, { useState } from 'react';
// import "../Styles/styles.css";
import Filter from "../components/Filter/TacheFilter";
import List from "../components/List/TacheList";
// import Form from "../components/Form/TacheForm";
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
  // types: {
  //   email: '${label} is not a valid email!',
  //   number: '${label} is not a valid number!',
  // },
  // number: {
  //   range: '${label} must be between ${min} and ${max}',
  // },
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
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//       <table>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Titre</th>
//             <th>Description</th>
//             <th>Status</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//             <tr>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td>
//                 <Button type="primary" icon={<PlusOutlined />}>
//                   Add Item
//                 </Button>
//                 <Button icon={<SearchOutlined />}>Search</Button>
//                 <Button icon={<EditOutlined />}>Edit</Button>
//                 <Button danger icon={<DeleteOutlined />}>
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//         </tbody>
//       </table>
//         {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">src/app/page.tsx</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div> */}
//       </div>
// {/* 
//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div> */}
// {/* 
//       <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Explore the Next.js 13 playground.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div> */}
//     </main>
  )
}
