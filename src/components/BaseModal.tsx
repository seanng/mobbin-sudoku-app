import { Dialog, Transition } from '@headlessui/react';
import type { ReactNode } from 'react';
import { Fragment } from 'react';

const TransitionChild = ({ children }: { children: ReactNode }) => (
  <Transition.Child
    as={Fragment}
    enter="ease-out duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    {children}
  </Transition.Child>
);

interface BaseModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

const BaseModal = ({ isOpen, onClose, children }: BaseModalProps) => (
  <Transition.Root show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-20" onClose={onClose}>
      <TransitionChild>
        <div className="fixed inset-0 backdrop-blur-3xl transition-opacity" />
      </TransitionChild>
      <div className="fixed inset-0 z-20 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 sm:p-0">
          <TransitionChild>
            <Dialog.Panel className="relative flex flex-col items-center px-8 transition-all">
              {children}
            </Dialog.Panel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
);

export { BaseModal };
export type { BaseModalProps };
