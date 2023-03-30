import type { BaseModalProps } from '@/components/BaseModal';
import { BaseModal } from '@/components/BaseModal';

interface Props extends Omit<BaseModalProps, 'children'> {}

const SpinnerModal = (props: Props) => (
  // prohibit user from closing the modal
  <BaseModal {...props} onClose={() => {}}>
    <svg
      className="-ml-1 mr-3 h-28 w-28 animate-spin text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  </BaseModal>
);

export { SpinnerModal };
