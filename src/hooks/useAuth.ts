import { login, resetPassword, resetRequest, signup } from "@/api/auth.api";
import { LoginProps } from "@/pages/Login";
import { useAuthStore } from "@/store/authStore";
import { useAlert } from "./useAlert";
import { useNavigate } from "react-router-dom";
import { SignupProps } from "@/pages/Signup";
import { useState } from "react";

export const useAuth = () => {
  const { storeLogin, storeLogout, isLoggedIn } = useAuthStore();
  const { showAlert } = useAlert();
  const navigate = useNavigate();

  const [resetRequested, setResetRequested] = useState(false);

  const userLogin = (data: LoginProps) => {
    login(data)
      .then((res) => {
        // 상태 변환
        storeLogin(res.token);

        showAlert("로그인 성공");
        navigate("/");
      })
      .catch((e) => {
        // todo: 에러 처리
        showAlert("로그인 실패했습니다.");
      });
  };

  const userSignup = (data: SignupProps) => {
    signup(data)
      .then((res) => {
        showAlert("성공");
        navigate("/login");
      })
      .catch((e) => {
        if (e.response.status === 409) {
          showAlert("이미 가입된 계정입니다.");
        }
      });
  };

  const userResetRequest = (data: SignupProps) => {
    resetRequest(data).then(() => {
      setResetRequested(true);
    });
  };

  const userResetPassowrd = (data: SignupProps) => {
    resetPassword(data)
      .then(() => {
        showAlert("비밀번호가 초기화 되었습니다.");
        navigate("/login");
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  };

  return {
    userLogin,
    userSignup,
    userResetRequest,
    userResetPassowrd,
    resetRequested,
  };
};
