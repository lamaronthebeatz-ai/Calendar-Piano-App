import { useState } from 'react'
import { Dialog } from '../../components/Dialog'
import { CheckIcon, CopyIcon } from '../../components/icons'
import qr from '../../assets/donate-qr.webp'
import { closeDonate, openDonate, useDonateOpen } from './store'
import './donate.css'

const ACCOUNT = '99914031996'
const LINES = [
  'Mỗi ly cà phê là thêm vài trang sách được dịch, thêm một bảng tính được làm, và thêm một Lamar tỉnh táo lúc 2 giờ sáng.',
  'Không ủng hộ cũng chẳng sao — cứ học tiếp, đàn tiếp là Lamar vui rồi.',
]

/** The support card: the owner's bank QR, the account number to copy, and a light word of thanks. */
export function DonateDialog() {
  const open = useDonateOpen()
  const [copied, setCopied] = useState(false)
  const copy = () => {
    void navigator.clipboard?.writeText(ACCOUNT)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }
  return (
    <Dialog open={open} onClose={closeDonate} title="Mời Lamar một ly cà phê" subtitle="Ứng dụng miễn phí, không quảng cáo — chạy bằng âm nhạc và cà phê" width="sm">
      <div className="donate">
        <div className="donate-card">
          <span aria-hidden className="donate-cup">
            <span className="donate-steam">
              <i />
              <i />
              <i />
            </span>
            ☕
          </span>
          <div className="donate-qr">
            <img src={qr} alt="Mã QR chuyển khoản TPBank — TRAN LAM" width={640} height={640} />
          </div>
          <div className="donate-bank">
            <div className="min-w-0">
              <p className="donate-name">TRAN LAM</p>
              <p className="donate-meta">TPBank · VietQR · Napas 247</p>
            </div>
            <button onClick={copy} className="donate-copy" aria-label="Sao chép số tài khoản">
              <span className="font-mono tabular-nums tracking-wide">{ACCOUNT}</span>
              {copied ? <CheckIcon width={14} height={14} /> : <CopyIcon width={14} height={14} />}
            </button>
          </div>
          {copied && <p className="donate-toast">Đã chép số tài khoản</p>}
        </div>
        <p className="donate-hint">Mở app ngân hàng bất kỳ, quét mã — số tiền tuỳ tâm.</p>
        <div className="space-y-2">
          {LINES.map((l, i) => (
            <p key={i} className="donate-line" style={{ animationDelay: `${180 + i * 120}ms` }}>
              {l}
            </p>
          ))}
        </div>
        <p className="donate-sign">Cảm ơn bạn đã ở đây · ♪ Lamar</p>
      </div>
    </Dialog>
  )
}

/** A quiet text button that opens the card; placed beside the copyright line. */
export function DonateLink({ className = '' }: { className?: string }) {
  return (
    <button onClick={openDonate} className={`donate-link ${className}`}>
      <span aria-hidden>☕</span> Ủng hộ Lamar
    </button>
  )
}
