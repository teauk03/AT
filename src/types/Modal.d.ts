/* [Components - Modal] Close Modal */
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAbort?: () => void;
    children: React.ReactNode;
}