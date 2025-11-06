"use client"

import { Form, Input, Button } from "@heroui/react";
import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });
  const [submitting, setSubmitting] = useState(false);

  const validateEmail = (v: string) => /^\S+@\S+\.\S+$/.test(v);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      console.log("Form submitted:", formData);
      setFormData({ email: "", password: "", confirmPassword: "" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form className="max-w-md w-full space-y-4 bg-gradient-to-br from-blue-50/80 to-green-100/60" onSubmit={handleSubmit}>
      
      <Input
        aria-label="Email"
        isRequired
        name="email"
        placeholder="Put email"
        type="email"
        value={formData.email}
        classNames={{ inputWrapper: "bg-default-100", input: "text-sm" }}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        validate={(v) => !v ? "Email is required" : validateEmail(v) ? null : "Wrong email"}
      />
      
      <Input
        isRequired
        name="password"
        placeholder="Put password"
        type="password"
        value={formData.password}
        classNames={{ inputWrapper: "bg-default-100", input: "text-sm" }}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        validate={(v) => !v ? "Password is required" : v.length < 6 ? "6 symbols at least" : null}
      />
      <Input
        isRequired
        name="confirmPassword"
        placeholder="Confirm password"
        type="password"
        value={formData.confirmPassword}
        classNames={{ inputWrapper: "bg-default-100", input: "text-sm" }}
        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        validate={(v) => !v ? "Confirm password is required" : v !== formData.password ? "Passwords mismatched" : null}
      />
      <div className="flex gap-3 justify-end pt-4">
        <Button variant="flat" onPress={() => setFormData({ email: "", password: "", confirmPassword: "" })}>
          Clear
        </Button>
        <Button color="primary" type="submit" isLoading={submitting}>
          Sign up
        </Button>
      </div>
    </Form>
  );
}