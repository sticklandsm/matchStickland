/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  onClose?: () => void
  content: JSX.Element
}

export default function Modal(props: Props) {
  const { isOpen, content, setIsOpen, onClose } = props

  return (
    <>
      <div className="modal-container">
        <div
          className={isOpen ? ' hidden' : 'modal'}
          style={{ backdropFilter: 'blur(5px)' }}
          onClick={() => {
            if (onClose) onClose()
            setIsOpen(false)
          }}
        >
          <div onClick={(evt) => evt.stopPropagation()}>{content}</div>
        </div>
      </div>
    </>
  )
}
