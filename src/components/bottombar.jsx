import styled from "styled-components";

const BottomBar = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Footer>
      <Inner>
        <TopRow>
          <LogoWrap>
            <img src="/icons/logo_buttom.svg" alt="LIKELION EWHA" />
          </LogoWrap>

          <BackToTopButton type="button" onClick={handleBackToTop}>
            <BackToTopText>Back to top</BackToTopText>
            <BackToTopIcon src="/icons/back_to_top.svg" alt="" />
          </BackToTopButton>
        </TopRow>

        <LeftStack>
          <EmailBlock>
            <EmailLabel>Email</EmailLabel>
            <EmailValue>ewha@likelion.org</EmailValue>
          </EmailBlock>

          <SocialRow>
            <SocialLink href="https://www.instagram.com/likelion_ewha/">
              <img src="/icons/instagram.svg" alt="Instagram" />
            </SocialLink>

            <SocialLink href="https://github.com/EWHA-LIKELION">
              <img src="/icons/github.svg" alt="GitHub" />
            </SocialLink>

            <SocialLink href="https://pf.kakao.com/_htxexfd">
              <img src="/icons/kakaotalk.svg" alt="KakaoTalk" />
            </SocialLink>

            <SocialLink href="https://linktr.ee/likelion.ewha">
              <img src="/icons/linktree.svg" alt="Linktree" />
            </SocialLink>
          </SocialRow>
        </LeftStack>

        <Divider />

        <Copyright>
          Copyright © LIKELION EWHA | All Rights Reserved
        </Copyright>
      </Inner>
    </Footer>
  );
};

export default BottomBar;


const Footer = styled.footer`
  display: flex;
  justify-content: center;
  background: var(--neutral-15, #1c1c1c);
`;

const Inner = styled.div`
  width: 100%;
  max-width: 970px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  /* PC */
  @media (min-width: 800px) {
    padding: 40px 0;
  }

  /* MO */
  @media (max-width: 799px) {
    width: 393px;
    padding: 24px 20px 40px 20px;
    gap: 17px;
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const LogoWrap = styled.div`
  display: inline-flex;
  align-items: center;

  img {
    display: block;
    width: auto;
    height: auto;
  }
`;

const BackToTopButton = styled.button`
  display: flex;
  padding: 28px 0;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;

  background: transparent;
  border: 0;
  cursor: pointer;
`;

const BackToTopText = styled.span`
  color: var(--neutral-95, #dcdcdc);
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

const BackToTopIcon = styled.img`
  display: block;
  width: auto;
  height: auto;
`;

const LeftStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const EmailBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const EmailLabel = styled.div`
  color: var(--neutral-70, #9b9b9b);
  font-family: Pretendard, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
`;

const EmailValue = styled.div`
  color: var(--neutral-95, #dcdcdc);
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

const SocialRow = styled.div`
  display: flex;
  width: 225.882px;
  justify-content: flex-end;
  align-items: center;
  gap: 18.824px;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;

  img {
    display: block;
    width: auto;
    height: auto;
  }
`;

const Divider = styled.div`
  width: 970px;
  height: 0;
  border-top: 1px solid var(--line-strong, #70737c85);

  @media (max-width: 799px) {
    width: 100%;
  }
`;

const Copyright = styled.div`
  margin-top: 32px;
  color: var(--neutral-50, #737373);
  text-align: center;
  font-family: Pretendard, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`;
