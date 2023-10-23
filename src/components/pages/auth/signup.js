import { Flex, Form, Input, Space, Typography } from 'antd'
import Link from 'next/link'

import { Button } from '@/components/elements'

export function RegisterForm() {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const [form] = Form.useForm()
  return (
    <Flex vertical justify="center">
      <Typography.Title>Create an Account</Typography.Title>
      <Typography.Text type="secondary">
        Start your journey with us. Register now to explore a world of possibilities.
      </Typography.Text>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        requiredMark={false}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="submit">Register</Button>
        </Form.Item>
      </Form>
      <Space direction="horizontal">
        <Typography.Text>Don’t have an Account?</Typography.Text>
        <Link href="/signin">
          <Typography.Text className="text-bluey-500 font-inter" strong>
            Log In
          </Typography.Text>
        </Link>
      </Space>
    </Flex>
  )
}

export default RegisterForm
