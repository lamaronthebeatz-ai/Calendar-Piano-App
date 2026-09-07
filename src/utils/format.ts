export function formatCurrency(amount: number, currency: string): string {
  if (currency === 'VND') {
    return `${new Intl.NumberFormat('en-US').format(Math.round(amount))}₫`
  }
  try {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency, maximumFractionDigits: 0 }).format(amount)
  } catch {
    return `${amount} ${currency}`
  }
}

export function initials(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 0) return ''
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export function percent(value: number, total: number): number {
  if (total <= 0) return 0
  return Math.round((value / total) * 100)
}
