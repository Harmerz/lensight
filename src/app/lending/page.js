'use client'

import { useEffect, useState } from 'react'
import { IoLockClosed, IoSend } from 'react-icons/io5'

import { Steps } from '@/components/elements'
import AnswerCard from '@/components/elements/answerCard'
import QuestionCard from '@/components/elements/questionCard'
import { useGetQuestions, useQuestions } from '@/hooks/question'
import { Question, QuestionDetail, Result } from '@/utils/const'

export function LendingPage() {
  const { data, refetch } = useGetQuestions()
  const { mutate: Questions, isSuccess } = useQuestions()
  // eslint-disable-next-line no-unsafe-optional-chaining
  const [currentQuestions, setCurrentQuestion] = useState(data?.questions?.length ?? 0)
  useEffect(() => {
    setCurrentQuestion(data?.questions?.length ?? 0)
  }, [data])
  const [answerUser, setAnswerUser] = useState('')
  const [question3, setQuestion3] = useState('')
  const [question4, setQuestion4] = useState('')

  const handleAnswer = () => {
    Questions({
      number: currentQuestions,
      question: QuestionDetail[currentQuestions].question,
      answer: answerUser,
    })
    if (isSuccess) setCurrentQuestion(currentQuestions + 1)
    refetch()
  }
  return (
    <div className="flex h-screen w-full flex-col font-inter">
      <div className="fixed flex h-[88px] w-full items-center justify-around border-b border-black bg-neutral-900 py-6 shadow-lg">
        <h2>Brand Name</h2>
        <div className="grid grid-cols-3 gap-1 rounded-lg bg-neutral-10 bg-opacity-50 p-1 text-base font-bold">
          <button type="button" className="rounded bg-neutral-700 px-4 py-2">
            Lending
          </button>
          <button
            type="button"
            className="flex cursor-not-allowed flex-row items-center gap-2 rounded bg-transparent px-4 py-2 text-neutral-700"
          >
            Investment <IoLockClosed />
          </button>
          <button
            type="button"
            className="flex cursor-not-allowed flex-row items-center gap-2 rounded bg-transparent  px-4 py-2 text-neutral-700"
          >
            Credit Card <IoLockClosed />
          </button>
        </div>
        <div>Rafly Zaki</div>
      </div>
      <div className="flex h-screen w-full items-center justify-center gap-12 bg-neutral-900 pt-11">
        <div className="flex h-4/5 w-4/5 justify-center gap-12">
          <div className="w-[30%] overflow-y-scroll rounded-[20px] bg-neutral-10 bg-opacity-50 px-5 py-6 scrollbar-hide">
            <p className="my-4 text-base font-bold text-neutral-500">Question to fills</p>
            <Steps current={currentQuestions} items={Question} />
            <p className="my-4 text-base font-bold text-neutral-500">Suggestion outcome</p>
            <Steps current={1} items={Result} />
          </div>
          <div className="relative flex w-[70%] flex-col gap-3 pb-[60px]">
            <div className="flex h-full w-full flex-col gap-3 overflow-y-scroll pb-10 pr-2">
              {QuestionDetail.map((item, index) => {
                if (index <= currentQuestions) {
                  return (
                    <div key={item.question} className="flex w-full flex-col gap-3">
                      <QuestionCard
                        title={item.title}
                        description={item.description}
                        question={item.question}
                      />
                      {index === 3 && question3 === '' && (
                        <div className="flex flex-row justify-between py-6">
                          <div className="flex flex-col items-center justify-center">
                            <p className="text-sm font-semibold text-white">
                              Please answer by clicking the button
                            </p>
                            {/* <p className="text-xs text-neutral-500">(PDF, max 5MB)</p> */}
                          </div>
                          <div className="flex flex-row gap-5 text-sm font-semibold">
                            <button
                              type="button"
                              className="h-9 w-40 rounded-full border border-white bg-transparent px-6 py-2 text-neutral-500"
                              onClick={() => setQuestion3('no')}
                            >
                              No, I don&apos;t know
                            </button>
                            <button
                              type="button"
                              className="h-9 w-40 rounded-full border bg-blue-500 px-6 py-2 text-white"
                              onClick={() => setQuestion3('yes')}
                            >
                              Yes, I know
                            </button>
                          </div>
                        </div>
                      )}
                      {index === 3 && question3 !== '' && (
                        <>
                          <AnswerCard
                            answer={
                              question3 === 'yes'
                                ? 'Yes, I know my Credit Score'
                                : 'No, I don’t know my Credit Score'
                            }
                          />
                          {question3 === 'yes' ? (
                            <QuestionCard
                              description={item.childern.yes.description}
                              question={item.childern.yes.question}
                            />
                          ) : (
                            <QuestionCard
                              description={item.childern.no.description}
                              question={item.childern.no.question}
                            />
                          )}
                        </>
                      )}
                      {/* index 4 */}

                      {index === 4 && question4 === '' && (
                        <div className="flex flex-row justify-between py-6">
                          <div className="flex flex-col justify-center">
                            <p className="text-sm font-semibold text-white">
                              Upload your Income Statement or any Financial Report
                            </p>
                            <p className="text-xs text-neutral-500">(PDF, max 5MB)</p>
                          </div>
                          <div className="flex flex-row gap-5 text-sm font-semibold">
                            <button
                              type="button"
                              className="h-9 w-40 rounded-full border border-white bg-transparent px-6 py-2 text-neutral-500"
                              onClick={() => [
                                setQuestion4('no'),
                                setAnswerUser('No, I don’t Have it'),
                                handleAnswer(),
                              ]}
                            >
                              No, I don&apos;t have
                            </button>
                            <button
                              type="button"
                              className="h-9 w-40 rounded-full border bg-blue-500 px-6 py-2 text-white"
                              onClick={() => setQuestion4('yes')}
                            >
                              Add a file
                            </button>
                          </div>
                        </div>
                      )}
                      {index === 4 && question4 !== '' && (
                        <AnswerCard
                          answer={
                            question4 === 'yes'
                              ? 'Yes, I know my Credit Score'
                              : 'No, I don’t Have it'
                          }
                        />
                      )}

                      {data?.questions?.[index]?.answer && (
                        <AnswerCard answer={data?.questions?.[index]?.answer} />
                      )}
                    </div>
                  )
                }
                return null
              })}
            </div>
            <div className="absolute bottom-0 flex h-[60px] w-full flex-row gap-5">
              <div className="relative h-[60px] w-full  rounded-2xl border border-eneutral-300 bg-eneutral-200">
                <textarea
                  rows="1"
                  type="text"
                  placeholder="Your Answer"
                  className="flex h-[60px] w-full grow items-center justify-center rounded-2xl bg-transparent px-5 py-4 pr-8 text-base"
                  onChange={(e) => setAnswerUser(e.target.value)}
                />
                <button type="button" onClick={() => handleAnswer()}>
                  <IoSend className="absolute right-2.5 top-1/2 h-6 w-6 -translate-y-1/2 text-neutral-100" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LendingPage
