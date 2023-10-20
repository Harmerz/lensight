import { Button, Checkbox, Flex, Form, Input, Space, Typography } from 'antd'
import Link from 'next/link'

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

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remeber Me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            shape="round"
            size="large"
            htmlType="submit"
            style={{
              width: '200px',
              height: '48px',
            }}
          >
            Log In
          </Button>
        </Form.Item>
      </Form>
      <Space direction="horizontal">
        <Typography.Text>Don’t have an Account?</Typography.Text>
        <Link href="/signup">
          <Typography.Text strong>Register</Typography.Text>
        </Link>
      </Space>
    </Flex>
  )
}

export default RegisterForm
