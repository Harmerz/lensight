export function AnswerCard({ answer }) {
  return (
    <div className="flex flex-row gap-5 rounded-2xl bg-eneutral-200 p-4">
      <div className="flex h-6 w-6 rounded bg-neutral-700">a</div>
      <p className="text-sm text-neutral-500">{answer}</p>
    </div>
  )
}

export default AnswerCard
