import { Flex, Form, Input, message, Space, Typography } from 'antd'
import Link from 'next/link'

import { Button } from '@/components/elements'
import { useSignUp } from '@/hooks/user'

export function RegisterForm() {
  const [messageApi, contextHolder] = message.useMessage()
  const { mutate: SignUp, data, isError } = useSignUp()

  const success = (succ) => {
    messageApi.open({
      type: 'success',
      content: succ,
    })
  }

  const error = (err) => {
    messageApi.open({
      type: 'success',
      content: `Error ${err}`,
    })
  }

  localStorage.removeItem('values')
  localStorage.removeItem('date')

  const onFinish = (values) => {
    SignUp(values)
    success(data)
    const date = new Date()
    localStorage.setItem('values', values)
    localStorage.setItem('date', date)

    if (isError) error(data)
  }

  const onFinishFailed = (errorInfo) => {
    error(errorInfo)
  }
  const [form] = Form.useForm()
  return (
    <>
      {contextHolder}
      <Flex vertical justify="center">
        <Typography.Title>Create an Account</Typography.Title>
        <Typography.Text type="secondary">
          Start your journey with us. Register now to explore a world of possibilities.
        </Typography.Text>
        x
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
            <Typography.Text className="font-inter text-bluey-500" strong>
              Log In
            </Typography.Text>
          </Link>
        </Space>
      </Flex>
    </>
  )
}

export default RegisterForm
