import { Flex, Typography } from 'antd'
import Link from 'next/link'
import { IoArrowBack } from 'react-icons/io5'

export function VerifyForm() {
  return (
    <Flex vertical justify="center">
      <Typography.Title className=" font-dmsans">Verify your email</Typography.Title>
      <Typography.Text className="font-inter" type="secondary">
        We&apos;ve just sent an email to &quot;User email address&quot; to verify the authenticity
        of your account. Kindly check your email inbox.
      </Typography.Text>
      <div className="flex flex-row">
        <p className="text-base font-bold text-neutral-700">Didn&apos;t receive the email? </p>
        <button type="button" className="text-bluey-500 text-base font-bold">
          Resend Email Verification
        </button>
      </div>
      <Link
        href="/signup"
        className="mt-20 flex flex-row gap-2 text-base font-bold text-neutral-700"
      >
        <IoArrowBack className="h-5 w-5" />
        Back To Register
      </Link>
    </Flex>
  )
}

export default VerifyForm
