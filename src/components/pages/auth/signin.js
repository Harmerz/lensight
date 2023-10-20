import { Button, Checkbox, Flex, Form, Input, Space, Typography } from 'antd'
import Link from 'next/link'

export function LoginForm() {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const [form] = Form.useForm()
  return (
    <Flex vertical justify="center">
      <Typography.Title className=" font-dmsans">Log In to Your Account</Typography.Title>
      <Typography.Text className="font-inter" type="secondary">
        Welcome back! Enter your credentials to access your personalized experience.
      </Typography.Text>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        requiredMark={false}
      >
        <Form.Item
          className="font-inter"
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className="font-inter"
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox className="font-inter">Remeber Me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            className="font-inter"
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
        <Typography.Text className="font-inter">Don’t have an Account?</Typography.Text>
        <Link href="/signup">
          <Typography.Text className="font-inter" strong>
            Register
          </Typography.Text>
        </Link>
      </Space>
    </Flex>
  )
}

export default LoginForm
