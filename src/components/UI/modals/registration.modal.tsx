"use client";
import CustomModal from "@/components/common/modals";
import RegistrationForm from "@/forms/registration.form";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal = ({ isOpen, onClose }: IProps) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title="Create an account">
      <RegistrationForm onClose={onClose} />
    </CustomModal>
  );
};

export default RegistrationModal;