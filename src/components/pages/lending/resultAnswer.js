import Image from 'next/image'
import { useState } from 'react'

import QuestionCard from '@/components/elements/questionCard'
import { useGetResults } from '@/hooks/result'

export function ResultAnswer1() {
  const { data } = useGetResults(localStorage.getItem('questionId'))
  const [result, setResult] = useState()

  const handleRetry = () => {
    // setCurrentQuestion(0)
    localStorage.removeItem('AnswerUserList')
    localStorage.removeItem('know')
    localStorage.removeItem('have')
    localStorage.removeItem('Proses')
    localStorage.removeItem('questionId')
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
        <>
          <div className=" z-10 flex h-fit flex-row gap-5 rounded-2xl bg-neutral-1000 bg-opacity-50 p-5 text-start">
            <div className="flex h-6 w-6 rounded">
              <Image src="/assets/logo.png" alt="Logo" width={24} height={24} />
            </div>
            <div className="flex w-fit grow flex-col gap-2">
              <h2 className=" font-dmsans text-2xl font-bold text-neutral-50">
                {result.bank_name}
              </h2>
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
              >
                Yes, Continue
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ResultAnswer1
