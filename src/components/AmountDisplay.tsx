import { formatCurrency } from "../helpers"

type AmountDisplayProps = {
    label?: string
    amount: number
}

export default function AmountDisplay({label, amount} : AmountDisplayProps) {
  return (
    <p className="text-2xl font-bold" style={{ color: 'rgb(154, 3, 30)' }}>
        {label && `${label}: `}
      <span className="font-black" style={{ color: 'rgb(95, 15, 64)' }}>{formatCurrency(amount)}</span>
    </p>
  )
}
