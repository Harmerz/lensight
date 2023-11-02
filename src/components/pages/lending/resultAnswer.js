import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { IoDocumentText } from 'react-icons/io5'

import QuestionCard from '@/components/elements/questionCard'
import { useGetResults } from '@/hooks/result'

export function ResultAnswer1({ setCurrentResult, setCurrentQuestion }) {
  const { data } = useGetResults(localStorage.getItem('questionId'))
  const [result, setResult] = useState(JSON.parse(localStorage.getItem('result')) ?? '')

  useEffect(() => {
    if (localStorage.getItem('result')) setCurrentResult(1)
  }, [setCurrentResult])

  const handleRetry = () => {
    setCurrentResult(0)
    setCurrentQuestion(0)
    localStorage.removeItem('AnswerUserList')
    localStorage.removeItem('know')
    localStorage.removeItem('have')
    localStorage.removeItem('Proses')
    localStorage.removeItem('questionId')
    localStorage.removeItem('result')
  }

  return (
    <div className="flex flex-col gap-3">
      <QuestionCard
        title="Result 1"
        question="Choose the best lending option that aligns with your preferences:"
      />
      <div className="flex flex-row gap-6">
        {data?.recommendation?.map((item) => (
          <button
            type="button"
            className="flex flex-col rounded-2xl border-2 border-eneutral-300 bg-eneutral-200 px-4 py-5 text-start font-inter"
            key={item.bank_name}
            onClick={() => setResult(item)}
          >
            <p className="mb-3 text-base text-neutral-50">{item.bank_name}</p>
            <p className="text-xs font-semibold text-neutral-700">Lending Type:</p>
            <p className="font-sm mb-4 text-neutral-50">{item.product_name}</p>
            <p className="text-xs font-semibold text-neutral-700">Location:</p>
            <p className="font-sm mb-4 text-neutral-50">{item.location.address}</p>
            <p className="text-xs font-semibold text-neutral-700">Interest rate:</p>
            <p className="font-sm mb-4 text-neutral-50">{item.interest_rate}</p>
            <p className="text-xs font-semibold text-neutral-700">Maturity date:</p>
            <p className="font-sm text-neutral-50">{item.max_time_period}</p>
          </button>
        ))}
      </div>
      {result && (
        <div className=" z-10 flex h-fit flex-row gap-5 rounded-2xl bg-neutral-1000 bg-opacity-50 p-5 text-start">
          <div className="flex h-6 w-6 rounded">
            <Image src="/assets/logo.png" alt="Logo" width={24} height={24} />
          </div>
          <div className="flex w-fit grow flex-col gap-2">
            <h2 className=" font-dmsans text-2xl font-bold text-neutral-50">{result.bank_name}</h2>
            <div className="flex flex-row gap-2 text-sm">
              <div className="flex min-w-[120px] flex-col gap-4 text-neutral-700">
                <p>Lending Type :</p> <p>Loan Value Limit :</p> <p>Interest Rate :</p>
                <p>Max Time Period :</p> <p>Location Name :</p> <p> Full Address :</p>
              </div>
              <div className="flex flex-col gap-4">
                <p>{result.product_name ?? ''}</p>
                <p>{result.loan_value_limit ?? ''}</p>
                <p>{result.interest_rate ?? ''}</p>
                <p>{result.max_time_period ?? ''}</p>
                <p>{result.location.name ?? ''}</p>
                <p>{result.location.address ?? ''}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {!localStorage.getItem('result') && (
        <div className="flex flex-row justify-between py-6">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-semibold text-white">Ready to see the next suggestion?</p>
            <p className="text-xs text-neutral-500">(Next up, Result 2: Place Requirement)</p>
          </div>
          <div className="flex flex-row gap-5 text-sm font-semibold">
            <button
              type="button"
              className="h-9 w-40 rounded-full border border-white bg-transparent px-6 py-2 text-neutral-500"
              onClick={() => handleRetry()}
            >
              No, Start Over
            </button>
            <button
              type="button"
              className="h-9 w-40 rounded-full border bg-blue-500 px-6 py-2 text-white"
              onClick={() => [
                setCurrentResult(1),
                localStorage.setItem('result', JSON.stringify(result)),
              ]}
            >
              Yes, Continue
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export function ResultAnswer2({ setCurrentResult }) {
  const result = JSON.parse(localStorage.getItem('result'))
  const [cont, setCont] = useState(false)
  const handleContinue = () => {
    setCont(true)
    setTimeout(() => {
      setCont(false)
      localStorage.setItem('fill', true)
      setCurrentResult(3)
    }, 3000)
  }

  useEffect(() => {
    if (localStorage.getItem('fill')) setCurrentResult(3)
  }, [setCurrentResult])

  return (
    <div className="flex flex-col gap-3">
      <QuestionCard title="Result 2" question="Documents Required for Your Lending Application" />
      {result && (
        <>
          <div className=" z-10 flex h-fit flex-row gap-5 rounded-2xl bg-neutral-1000 bg-opacity-50 p-5 text-start">
            <div className="flex h-6 w-6 rounded">
              <Image src="/assets/logo.png" alt="Logo" width={24} height={24} />
            </div>
            <div className="flex w-fit grow flex-col gap-2">
              <h2 className=" font-dmsans text-2xl font-bold text-neutral-50">
                The Documents you need to prepared are:
              </h2>
              <div className="grid grid-cols-2 gap-8 text-sm">
                {result.required_documents.map((item) => (
                  <div className="flex flex-row gap-3 rounded-xl bg-eneutral-200 p-4" key={item}>
                    <div>
                      <IoDocumentText className="h-6 w-6 text-neutral-700" />
                    </div>{' '}
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {!localStorage.getItem('fill') && !cont && (
            <div className="flex flex-row justify-between py-6">
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm font-semibold text-white">
                  Do you want us to fill your application template?
                </p>
                <p className="text-xs text-neutral-500">
                  (Next up, Result 3: Your application template)
                </p>
              </div>
              <div className="flex flex-row gap-5 text-sm font-semibold">
                <button
                  type="button"
                  className="h-9 w-40 rounded-full border border-white bg-transparent px-6 py-2 text-neutral-500"
                  onClick={() => [setCurrentResult(3), localStorage.setItem('fill', false)]}
                >
                  No, Thanks
                </button>
                <button
                  type="button"
                  className="h-9 w-40 rounded-full border bg-blue-500 px-6 py-2 text-white"
                  onClick={() => handleContinue()}
                >
                  Yes, Continue
                </button>
              </div>
            </div>
          )}
          {cont && (
            <div className="flex flex-row justify-between py-6">
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm font-semibold text-white">
                  Please wait a moment, the template is being filled
                </p>
                <p className="text-xs text-neutral-500">
                  (Next up, Result 3: Your application template)
                </p>
              </div>
              <div className="flex flex-row gap-5 text-sm font-semibold">
                <AiOutlineLoading3Quarters className="h-8 w-8 animate-spin text-bluex-400" />
              </div>
            </div>
          )}
          {localStorage.getItem('fill') && (
            <QuestionCard
              title="Result 3"
              question="Dear users, feature currently not working"
              description={
                <>
                  Apologies, our lending application template feature is under maintenance. Please
                  use the manual template option from the selected bank or contact support.
                  We&apos;ll be back soon.
                  <br />
                  Thank you.
                </>
              }
            />
          )}
        </>
      )}
    </div>
  )
}

export function ResultAnswer4() {
  const result = JSON.parse(localStorage.getItem('result'))

  return (
    <div className=" z-10 flex h-fit flex-row gap-5 rounded-2xl bg-neutral-1000 bg-opacity-50 p-5 text-start">
      <div className="flex h-6 w-6 rounded">
        <Image src="/assets/logo.png" alt="Logo" width={24} height={24} />
      </div>
      <div className="flex w-fit grow flex-col gap-2">
        <h3 className="font-dmsans text-base text-neutral-700">Result 4</h3>
        <h2 className=" font-dmsans text-2xl font-bold text-neutral-50">
          Final step, it is time to go to {result.bank_name}
        </h2>
        <p className="text-sm text-neutral-500">
          To complete your lending application, visit {result.bank_name} located at{' '}
          {result.location.address}. LenSights will help you locate the place using the map below.
        </p>
        <div className="h-[240px] w-full">
          <iframe
            className="h-[240px] w-full"
            title={result.bank_name}
            loading="lazy"
            allowfullscreen
            referrerPolicy="no-referrer-when-downgrade"
            src={result.location.location_url}
          />
        </div>
        <a
          type="button"
          href={result.location.location_url}
          target="_blank"
          rel="noreferrer"
          className="text-base text-bluex-400"
        >
          Link Location
        </a>
      </div>
    </div>
  )
}

export default ResultAnswer1
