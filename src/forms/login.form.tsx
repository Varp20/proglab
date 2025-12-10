import { Form, Input, Button } from "@heroui/react"
import { useState } from "react"

interface IProps {
  onClose: () => void;
}

const LoginForm = ({ onClose }: IProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("set formdata: ", formData);
    onClose();
  };

  return (
    <Form className="w-full" onSubmit={handleSubmit}>
      <Input
        aria-label="Email"
        isRequired
        name="email"
        placeholder="Enter email"
        type="email"
        value={formData.email}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none"
        }}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        validate={(value) => {
          if (!value) return "Email is mandatory";
          if (!validateEmail(value)) return "Nah, wrong";
          return null;
        }}
      />

      <Input
        isRequired
        name="password"
        placeholder="Enter password"
        type="password"
        value={formData.password}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none "
        }}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        validate={(value) => {
          if (!value) return "Password is a must have";
          if (value.length < 6) return "Man, 6 or 7 symbols, no less";
          return null;
        }}
      />
      <div className="flex w-[100%] gap-4 items-center pt-8 justify-end">
        <Button variant="light" onPress={onClose}>
          Cancel
        </Button>
        <Button color="primary" type="submit">
          Authorize
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;