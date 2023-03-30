import type { BaseModalProps } from '@/components/BaseModal';
import { BaseModal } from '@/components/BaseModal';

interface Props extends Omit<BaseModalProps, 'children'> {
  message: string;
}

const SuccessModal = ({ message, ...props }: Props) => (
  <BaseModal {...props}>
    <div className="card max-w-max shadow-deep">
      <h1 className="text-center font-mono text-base sm:text-lg md:text-2xl">
        {message}
      </h1>
    </div>
  </BaseModal>
);

export { SuccessModal };
