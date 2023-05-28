import {useState} from 'react';
import LoginForm from "../../components/login/LoginForm";
import RegisterForm from '../../components/login/RegisterForm';

export default function Login() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="">
      <div className="bg-secondary h-[100vh]">
        <LoginForm />
        {/* {visible && <RegisterForm setVisible={setVisible} />} */}
        <RegisterForm />
      </div>
    </div>
  )
}