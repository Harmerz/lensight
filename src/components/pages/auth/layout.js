import { Card, Flex, Steps } from 'antd'

export function LayoutAuth({ children }) {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#323232]">
      <Flex gap="middle" horizontal="true" justify="space-between">
        <Flex vertical align="center" justify="center" style={{ padding: 32 }} className="w-2/3">
          <Flex vertical className="h-4/5">
            {/* <p>Regristration Steps</p>
            <Steps
              direction="vertical"
              className="h-full"
              current={1}
              items={[
                {
                  title: 'Personal Information',
                },
                {
                  title: 'Education and Occupation Information',
                },
                {
                  title: 'Business and Financial Information',
                },
                {
                  title: 'Photo and Financial Report Documents',
                },
                {
                  title: 'Summary and Submission',
                },
              ]}
            /> */}
          </Flex>
        </Flex>
        <Card className="flex h-[100vh] w-1/3 items-center justify-center">{children}</Card>
      </Flex>
    </div>
  )
}

export default LayoutAuth
