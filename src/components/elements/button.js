export function Button({ children, type, onClick }) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type ?? 'button'}
      onClick={onClick}
      className="bg-bluey-500 min-h-[48px] min-w-[200px] rounded-full px-6 py-3 font-inter text-base font-semibold text-white shadow-[0_12px_24px_0_rgba(46,103,236,0.32)]"
    >
      {children}
    </button>
  )
}

export default Button
