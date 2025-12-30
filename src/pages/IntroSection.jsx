import React, { useState } from "react";
import styled from "styled-components";
import orangePattern from "../../public/icons/orange.svg";
import greenPattern from "../../public/icons/green.svg";
import mainlogo from "../../public/icons/logo.svg";
import {
  RecruitAlarmButton,
  RecruitInfoButton,
} from "../components/buttons/MainButtons_pc";

import {
  RecruitAlarmButtonMobile,
  RecruitInfoButtonMobile,
} from "../components/buttons/MainButtons_mo";
import { Modal } from "../components/Modal";

const IntroSection = () => {
  // --------------------------------------------------------
  // 1. 상태 관리
  // --------------------------------------------------------
  const isRecruiting = false; //  false(마감/알림) / true(모집중)

  const [isAlarmModalOpen, setIsAlarmModalOpen] = useState(false); // 알림 모달
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false); // 코드 입력 모달
  const [codeValue, setCodeValue] = useState(""); // 입력된 코드 값

  // [A] 모집 중일 때 -> 지원 페이지 이동
  const goRecruitPage = () => {
    window.open("https://apply.likelion.org", "_blank");
  };

  // [B] 지원서 열람하기 클릭 -> 코드 모달 열기
  const openCodeModal = (e) => {
    e.preventDefault(); // a 태그 이동 방지
    setCodeValue(""); // 코드 초기화
    setIsCodeModalOpen(true);
  };

  // [C] 모집 마감일 때 -> 알림 모달 열기
  const openAlarmModal = () => {
    setIsAlarmModalOpen(true);
  };

  // [D] 코드 확인 로직 (나중에 API 연결)
  const handleCheckCode = () => {
    if (codeValue.trim() === "") return;
    alert(`입력한 코드: ${codeValue}\n확인되었습니다! (API 연결 추후에 필요)`);
    setIsCodeModalOpen(false);
  };

  // [E] 카카오톡 문의하기 이동
  const goKakaoChannel = () => {
    window.open("https://pf.kakao.com/_htxexfd", "_blank");
  };

  return (
    <>
      <Section>
        <PatternTop src={orangePattern} alt="" aria-hidden="true" />
        <PatternBottom src={greenPattern} alt="" aria-hidden="true" />

        <Content>
          <SubText>
            국내 최대 규모의 연합 IT 동아리 멋쟁이사자처럼 X 이화여자대학교
          </SubText>

          <LogoImg src={mainlogo} alt="LIKELION EWHA" />

          {/* =======================================================
              [버튼 영역]
          ======================================================== */}

          {/* PC 버튼 */}
          <PcButtonArea>
            {isRecruiting ? (
              <RecruitInfoButton onClick={goRecruitPage} />
            ) : (
              <RecruitAlarmButton onClick={openAlarmModal} />
            )}
          </PcButtonArea>

          {/* Mobile 버튼 */}
          <MobileButtonArea>
            {isRecruiting ? (
              <RecruitInfoButtonMobile onClick={goRecruitPage} />
            ) : (
              <RecruitAlarmButtonMobile onClick={openAlarmModal} />
            )}
          </MobileButtonArea>
          {isRecruiting ? (
            <SubLink href="#" onClick={openCodeModal}>
              지원서를 제출하셨나요? <u>지원서 열람하기</u>
            </SubLink>
          ) : (
            <EndText>13기 모집이 종료되었습니다.</EndText>
          )}
        </Content>
      </Section>

      {/* =======================================================
           [모달 1] 알림 신청 모달 (isRecruiting = false 일 때)
      ======================================================== */}
      <Modal
        open={isAlarmModalOpen}
        onClose={() => setIsAlarmModalOpen(false)}
        type="info"
        title="14기 모집 사전 알림 등록"
        description={
          "이화여대 멋쟁이사자처럼 카카오톡 채널을 통해\n모집이 시작되면 가장 먼저 알려드릴게요."
        }
        align="center"
        actions={[
          {
            label: "카카오톡 바로가기",
            variant: "primary",
            fullWidth: true,
            onClick: goKakaoChannel,
          },
        ]}
      />

      {/* =======================================================
            [모달 2] 지원 코드 입력 모달
      ======================================================== */}
      <Modal
        open={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
        type="form" // 폼 타입
        title="지원 코드 입력"
        description={
          "지원서를 열람하기 위해서\n지원서 작성시에 발급받은 지원 코드가 필요해요."
        }
        align="left"
        input={{
          value: codeValue,
          onChange: (e) => setCodeValue(e.target.value),
          placeholder: "코드를 입력해주세요.",
        }}
        // 하단 버튼 설정
        actions={[
          {
            label: "확인",
            variant: "primary",
            fullWidth: true,
            disabled: codeValue.length === 0,
            onClick: handleCheckCode,
          },
        ]}
        helper={{
          text: "지원 코드를 잊어버리셨나요? ",
          actionText: "카카오톡 문의하기",
          onAction: goKakaoChannel,
        }}
      />
    </>
  );
};

export default IntroSection;

const Section = styled.section`
  position: relative;
  width: 100%;
  background: #fff;
  overflow: hidden;
  display: flex;
  justify-content: center;

  align-items: center;
  min-height: 39.1875rem;
  padding: 5rem 18.5625rem;

  @media (max-width: 768px) {
    min-height: unset !important;
    height: auto !important;
    padding: 4.5rem 1rem 4rem 1rem;
    align-items: flex-start;
    min-width: 0;
  }
`;

const PatternTop = styled.img`
  position: absolute;
  z-index: 0;
  display: block;
  width: 10.00025rem;
  height: 10.00025rem;
  left: 7.89888rem;
  top: -3.38275rem;

  @media (max-width: 768px) {
    width: 3.75rem;
    height: 3.75rem;
    left: 2.375rem;
    top: -1.5rem;
  }
`;

const PatternBottom = styled.img`
  position: absolute;
  z-index: 0;
  display: block;
  width: 14rem;
  right: 0;
  top: 20.1875rem;

  @media (max-width: 768px) {
    width: 5.25rem;
    top: 13.25rem;
    right: 0;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`;

const LogoImg = styled.img`
  width: 52.875rem;
  max-width: 90%;
  height: auto;
  margin-bottom: 0;

  @media (max-width: 600px) {
    width: 17.25rem;
  }
`;

const SubText = styled.p`
  color: var(--Atomic-Cool-Neutral-70, #989ba2);
  text-align: center;
  font-family: "Cafe24 PRO Slim";
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.25rem;
  margin-bottom: 0.5rem;
  word-break: keep-all;

  @media (max-width: 600px) {
    font-size: 0.625rem;
    margin-bottom: 12px;
    line-height: normal;
  }
`;

const PcButtonArea = styled.div`
  display: block;
  margin-top: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    display: none !important;
  }
`;

const MobileButtonArea = styled.div`
  display: none;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex !important;
  }
`;

const SubLink = styled.a`
  color: #888888;
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
  u {
    margin-left: 6px;
    color: #555;
    font-weight: 600;
    text-underline-offset: 3px;
  }
  &:hover u {
    color: #000;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const EndText = styled.p`
  color: #888888;
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 0.25rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
