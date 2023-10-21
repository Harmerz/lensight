'use client'

import { IoLockClosed, IoSend } from 'react-icons/io5'

import { Steps } from '@/components/elements'
import { Question, Result, QuestionDetail } from '@/utils/const'

export function LendingPage() {
  return (
    <div className="flex h-screen w-full flex-col font-inter">
      <div className="fixed flex h-[88px] w-full items-center justify-around border-b border-black bg-neutral-900 py-6 shadow-lg">
        <h2>Brand Name</h2>
        <div className="bg-neutral-10 grid grid-cols-3 gap-1 rounded-lg bg-opacity-50 p-1 text-base font-bold">
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
          <div className="bg-neutral-10 scrollbar-hide w-[30%] overflow-y-scroll rounded-[20px] bg-opacity-50 px-5 py-6">
            <p className="my-4 text-base font-bold text-neutral-500">Question to fills</p>
            <Steps current={1} items={Question} />
            <p className="my-4 text-base font-bold text-neutral-500">Suggestion outcome</p>
            <Steps current={1} items={Result} />
          </div>
          <div className="relative w-[70%]">
            <div className="absolute bottom-0 flex h-[60px] w-full flex-row gap-5">
              <div className="bg-eneutral-200 border-eneutral-300 relative h-[60px] w-full rounded-2xl border">
                <textarea
                  rows="1"
                  type="text"
                  placeholder="Your Answer"
                  className="flex h-[60px] w-full grow items-center justify-center rounded-2xl bg-transparent px-5 py-4 pr-8 text-base"
                />
                <button type="button">
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
