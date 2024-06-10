import styled from "styled-components";
import Button from "../common/Button";
import { useEffect } from "react";

interface Props {
  onCompleted: (address: string) => void;
}

const SCRIPT_URL =
  "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

const FindAddressButton = ({ onCompleted }: Props) => {
  //  스크립트 로드

  // 핸들러

  // 입력

  const handleOpen = () => {
    new window.daum.Postcode({
      oncomplete: function (data: any) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
        // 예제를 참고하여 다양한 활용법을 확인해 보세요.
        onCompleted(data.address);
      },
    }).open();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = SCRIPT_URL;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <FindAddressButtonStyle>
      <Button size="medium" schema="normal" onClick={handleOpen} type="button">
        주소 찾기
      </Button>
    </FindAddressButtonStyle>
  );
};

const FindAddressButtonStyle = styled.div``;
export default FindAddressButton;
