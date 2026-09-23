import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const isMismatch =
    form.passwordConfirm && form.password !== form.passwordConfirm;
  const canSubmit = Object.values(form).every(Boolean) && !isMismatch;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${form.name}님, 가입을 환영합니다!`);
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-slate-100 p-8">
      <form onSubmit={handleSubmit} className="flex w-full max-w-80 flex-col gap-4">
        <h1 className="title-sm text-neutral-900">회원가입</h1>

        <Input
          label="이름"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="이름을 입력하세요"
        />
        <Input
          label="이메일"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="example@email.com"
        />
        <Input
          label="비밀번호"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="비밀번호"
        />
        <Input
          label="비밀번호 확인"
          name="passwordConfirm"
          type="password"
          value={form.passwordConfirm}
          onChange={handleChange}
          placeholder="비밀번호 확인"
        />
        {isMismatch && (
          <p className="caption text-red-500">비밀번호가 일치하지 않습니다.</p>
        )}

        <Button type="submit" text="회원가입" disabled={!canSubmit} />
      </form>
    </main>
  );
}