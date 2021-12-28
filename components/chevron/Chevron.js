export default function Chevron({ direction = 'right' }) {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{
        transform: `${direction === 'left' ? 'rotate(0deg)' : 'rotate(180deg)'} scale(0.5) ${
          direction === 'left' ? 'translateY(2em)' : 'translateY(-2em)'
        }`,
        margin: '0 -0.5em',
      }}>
      <path
        d='M19.9999 5.33325L9.33325 15.9999L19.9999 26.6666'
        stroke='currentColor'
        strokeWidth='2.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
